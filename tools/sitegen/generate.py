#!/usr/bin/env python3
"""Generate a customer React site from a template and company YAML."""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from pathlib import Path
from typing import Any


ROOT = Path(__file__).resolve().parents[2]
IMAGE_KEYS = {"logo", "image", "heroImage", "backgroundImage", "icon"}
REQUIRED_FIELDS = [
    "company.id",
    "company.brand",
    "company.nameEn",
    "company.logo",
    "company.email",
    "home.hero.title",
    "home.hero.description",
    "home.hero.image",
]


def parse_scalar(value: str) -> Any:
    value = value.strip()
    if value == "":
        return ""
    if value in {"true", "True"}:
        return True
    if value in {"false", "False"}:
        return False
    if value in {"null", "Null", "~"}:
        return None
    if (value.startswith('"') and value.endswith('"')) or (
        value.startswith("'") and value.endswith("'")
    ):
        return value[1:-1]
    if value.startswith("[") and value.endswith("]"):
        inner = value[1:-1].strip()
        if not inner:
            return []
        return [parse_scalar(part.strip()) for part in inner.split(",")]
    if re.fullmatch(r"-?(0|[1-9]\d*)", value):
        return value if value.startswith("0") and len(value) > 1 else int(value)
    return value


def yaml_lines(text: str) -> list[tuple[int, str]]:
    lines: list[tuple[int, str]] = []
    for raw in text.splitlines():
        if not raw.strip() or raw.lstrip().startswith("#"):
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        lines.append((indent, raw.strip()))
    return lines


def split_key_value(text: str) -> tuple[str, Any]:
    if ":" not in text:
        raise ValueError(f"Expected key/value pair: {text}")
    key, value = text.split(":", 1)
    return key.strip(), parse_scalar(value)


def parse_block(lines: list[tuple[int, str]], index: int, indent: int) -> tuple[Any, int]:
    if index >= len(lines):
        return {}, index

    is_list = lines[index][0] == indent and lines[index][1].startswith("- ")
    if is_list:
        items: list[Any] = []
        while index < len(lines):
            current_indent, text = lines[index]
            if current_indent < indent:
                break
            if current_indent != indent or not text.startswith("- "):
                break

            rest = text[2:].strip()
            index += 1
            if rest == "":
                child, index = parse_block(lines, index, indent + 2)
                items.append(child)
            elif ":" in rest:
                key, value = split_key_value(rest)
                item: dict[str, Any] = {key: value}
                if index < len(lines) and lines[index][0] > indent:
                    child, index = parse_block(lines, index, indent + 2)
                    if isinstance(child, dict):
                        item.update(child)
                items.append(item)
            else:
                items.append(parse_scalar(rest))
        return items, index

    data: dict[str, Any] = {}
    while index < len(lines):
        current_indent, text = lines[index]
        if current_indent < indent:
            break
        if current_indent != indent:
            raise ValueError(f"Unexpected indentation at: {text}")
        if text.startswith("- "):
            break

        key, value = split_key_value(text)
        index += 1
        if value == "" and index < len(lines) and lines[index][0] > indent:
            value, index = parse_block(lines, index, lines[index][0])
        data[key] = value
    return data, index


def load_yaml(path: Path) -> dict[str, Any]:
    parsed, index = parse_block(yaml_lines(path.read_text(encoding="utf-8")), 0, 0)
    if index != len(yaml_lines(path.read_text(encoding="utf-8"))):
        raise ValueError(f"Could not parse all YAML content in {path}")
    if not isinstance(parsed, dict):
        raise ValueError(f"Expected mapping at YAML root in {path}")
    return parsed


def get_path(data: dict[str, Any], dotted: str) -> Any:
    current: Any = data
    for part in dotted.split("."):
        if not isinstance(current, dict) or part not in current:
            return None
        current = current[part]
    return current


def validate_company(data: dict[str, Any]) -> list[str]:
    errors = [field for field in REQUIRED_FIELDS if get_path(data, field) in (None, "")]
    products = data.get("products")
    if not isinstance(products, list) or not products:
        errors.append("products")
    else:
        for index, product in enumerate(products):
            for field in ("id", "name", "image"):
                if not isinstance(product, dict) or product.get(field) in (None, ""):
                    errors.append(f"products[{index}].{field}")
    return errors


def copy_template(template_app: Path, output_app: Path) -> None:
    output_app.mkdir(parents=True, exist_ok=True)
    for item in template_app.iterdir():
        if item.name in {"node_modules", "dist"}:
            continue
        target = output_app / item.name
        if target.exists():
            continue
        if item.is_dir():
            shutil.copytree(item, target, ignore=shutil.ignore_patterns("node_modules", "dist"))
        else:
            shutil.copy2(item, target)


def asset_url(company_id: str, rel: str) -> str:
    return f"/generated/{company_id}/{rel.as_posix()}" if isinstance(rel, Path) else f"/generated/{company_id}/{rel}"


def rewrite_assets(value: Any, company_id: str, asset_root: Path, public_root: Path, report: dict[str, Any], key: str = "") -> Any:
    if isinstance(value, list):
        return [rewrite_assets(item, company_id, asset_root, public_root, report, key) for item in value]
    if isinstance(value, dict):
        return {
            child_key: rewrite_assets(child_value, company_id, asset_root, public_root, report, child_key)
            for child_key, child_value in value.items()
        }
    if key in IMAGE_KEYS and isinstance(value, str):
        if value.startswith(("/", "http://", "https://")):
            return value
        src = asset_root / value
        dest = public_root / value
        if src.exists():
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)
            report["assetsCopied"].append(value)
            return asset_url(company_id, value)
        report["missingAssets"].append(value)
    return value


def page_enabled(data: dict[str, Any], page: str, collection: str | None = None) -> bool:
    pages = data.get("pages") if isinstance(data.get("pages"), dict) else {}
    if page in pages:
        return bool(pages[page])
    if collection:
        values = data.get(collection)
        return isinstance(values, list) and bool(values)
    return True


def build_site_data(data: dict[str, Any]) -> dict[str, Any]:
    company = data["company"]
    products = data.get("products", [])
    resources = data.get("resources") if isinstance(data.get("resources"), dict) else {}
    factory = data.get("factory") if isinstance(data.get("factory"), dict) else {}
    about = data.get("about") if isinstance(data.get("about"), dict) else {}

    page_flags = {
        "home": True,
        "products": True,
        "productDetail": True,
        "industries": page_enabled(data, "industries", "industries"),
        "cases": page_enabled(data, "cases", "cases"),
        "factory": page_enabled(data, "factory") and bool(factory),
        "about": True,
        "resources": page_enabled(data, "resources") and bool(resources),
        "contact": True,
        "requestQuote": True,
        "thankYou": True,
    }
    pages = {
        "home": {"label": "Home", "href": "/", "enabled": page_flags["home"]},
        "products": {"label": "Products", "href": "/products", "enabled": page_flags["products"]},
        "productDetail": {"label": "Product Detail", "href": "/products/:id", "enabled": page_flags["productDetail"]},
        "industries": {"label": "Industries", "href": "/industries", "enabled": page_flags["industries"]},
        "cases": {"label": "Cases", "href": "/cases", "enabled": page_flags["cases"]},
        "factory": {"label": "Factory", "href": "/factory", "enabled": page_flags["factory"]},
        "about": {"label": "About", "href": "/about", "enabled": page_flags["about"]},
        "resources": {"label": "Resources", "href": "/resources", "enabled": page_flags["resources"]},
        "contact": {"label": "Contact", "href": "/contact", "enabled": page_flags["contact"]},
        "requestQuote": {"label": "Request a Quote", "href": "/request-quote", "enabled": page_flags["requestQuote"]},
        "thankYou": {"label": "Thank You", "href": "/thank-you", "enabled": page_flags["thankYou"]},
    }

    product_links = [
        {"label": product["name"], "href": f"/products?type={product.get('category') or product['id']}"}
        for product in products[:6]
    ]
    header = [
        {"label": "Products", "href": "/products", "enabled": True, "children": product_links},
        {"label": "Industries", "href": "/industries", "enabled": page_flags["industries"]},
        {"label": "Cases", "href": "/cases", "enabled": page_flags["cases"]},
        {"label": "Factory", "href": "/factory", "enabled": page_flags["factory"]},
        {"label": "Resources", "href": "/resources", "enabled": page_flags["resources"], "children": [
            {"label": "Catalogs & Datasheets", "href": "/resources#downloads"},
            {"label": "Technical Articles", "href": "/resources#articles"},
            {"label": "FAQs", "href": "/resources#faqs"},
        ]},
        {"label": "About", "href": "/about", "enabled": True},
        {"label": "Contact", "href": "/contact", "enabled": True},
    ]
    seo = data.get("seo", {})
    default_title = seo.get("defaultTitle") or data.get("home", {}).get("hero", {}).get("title") or company["brand"]
    default_description = (
        seo.get("defaultDescription")
        or data.get("home", {}).get("hero", {}).get("description")
        or f"{company['brand']} supplies industrial valve products for global buyers."
    )

    site_data = {
        "company": company,
        "nav": {
            "primary": [{key: value for key, value in item.items() if key != "enabled"} for item in header if item["enabled"]],
            "footerQuick": [
                {key: value for key, value in item.items() if key not in {"enabled", "children"}}
                for item in header
                if item["enabled"]
            ],
            "footerProducts": product_links + [{"label": "View All Products", "href": "/products"}],
            "footerResources": [
                {"label": "Catalogs & Datasheets", "href": "/resources#downloads"},
                {"label": "Technical Articles", "href": "/resources#articles"},
                {"label": "FAQs", "href": "/resources#faqs"},
            ],
        },
        "pages": pages,
        "seo": {
            "default": {
                "siteName": company["brand"],
                "title": default_title,
                "description": default_description,
                "notFoundTitle": "Page Not Found",
            },
            "routes": [
                {"pattern": "/", "title": default_title, "description": default_description},
                {"pattern": "/products", "title": "Industrial Valve Product Catalog", "description": f"Browse {company['brand']} product ranges and specifications."},
                {"pattern": "/products/:id", "title": "Industrial Valve Product Details", "description": f"Review valve specifications, applications, materials, and related products from {company['brand']}."},
                {"pattern": "/industries", "title": "Industrial Valve Applications", "description": "Explore industrial valve solutions for common working conditions and project requirements."},
                {"pattern": "/industries/:id", "title": "Industry Valve Solutions", "description": "Valve recommendations and application guidance for industrial projects."},
                {"pattern": "/cases", "title": "Sample Valve Project Scenarios", "description": "Sample valve supply scenarios showing product selection references across industrial applications."},
                {"pattern": "/cases/:id", "title": "Valve Project Scenario Details", "description": "Detailed sample project scenario for valve selection and application requirements."},
                {"pattern": "/factory", "title": "Valve Factory Capabilities", "description": f"Learn about {company['brand']} manufacturing, assembly, testing, inspection, and export support."},
                {"pattern": "/resources", "title": "Valve Resources & Technical Downloads", "description": "Find valve catalogs, technical articles, and frequently asked questions."},
                {"pattern": "/about", "title": f"About {company['brand']}", "description": "Company profile, export support, quality practices, and service approach."},
                {"pattern": "/contact", "title": f"Contact {company['brand']}", "description": "Contact the sales team for inquiries, technical support, and factory visits."},
                {"pattern": "/request-quote", "title": "Request a Valve Quotation", "description": f"Submit valve requirements and project specifications for a quotation from {company['brand']}."},
                {"pattern": "/thank-you", "title": "Thank You", "description": f"Your request has been received by {company['brand']}."},
            ],
        },
        "products": products,
        "industries": data.get("industries", []),
        "caseStudies": data.get("cases", []),
        "newsArticles": resources.get("news", []),
        "faqs": resources.get("faqs", []),
        "factoryCapabilities": factory.get("capabilities", []),
        "processSteps": factory.get("processSteps", []),
        "certifications": factory.get("certifications", []),
        "milestones": about.get("milestones", []),
        "leadership": about.get("leadership", []),
        "kpis": data.get("home", {}).get("stats", []),
        "contactFaqs": resources.get("faqs", [])[:4],
    }
    return site_data


def write_site_data(output_app: Path, site_data: dict[str, Any]) -> None:
    generated_dir = output_app / "src" / "generated"
    generated_dir.mkdir(parents=True, exist_ok=True)
    text = json.dumps(site_data, ensure_ascii=False, indent=2)
    (generated_dir / "siteData.ts").write_text(
        "// This file is generated by tools/sitegen/generate.py. Do not edit by hand.\n"
        "import type { SiteData } from '../data/siteSchema';\n\n"
        f"export const siteData: SiteData = {text};\n",
        encoding="utf-8",
    )
    with (generated_dir / "siteData.ts").open("a", encoding="utf-8") as handle:
        handle.write(
            "\nexport const {\n"
            "  company,\n"
            "  products,\n"
            "  industries,\n"
            "  caseStudies,\n"
            "  newsArticles,\n"
            "  faqs,\n"
            "  milestones,\n"
            "  leadership,\n"
            "  certifications,\n"
            "  factoryCapabilities,\n"
            "  processSteps,\n"
            "  kpis,\n"
            "  contactFaqs,\n"
            "} = siteData;\n"
        )


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--template", required=True)
    parser.add_argument("--company", required=True)
    args = parser.parse_args()

    company_path = (ROOT / args.company).resolve()
    template_dir = ROOT / "templates" / args.template
    template_app = template_dir / "app"
    if not company_path.exists():
        print(f"Company data not found: {company_path}", file=sys.stderr)
        return 1
    if not template_app.exists():
        print(f"Template app not found: {template_app}", file=sys.stderr)
        return 1

    data = load_yaml(company_path)
    errors = validate_company(data)
    if errors:
        print("Required data check failed:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1

    company_id = data["company"]["id"]
    output_app = ROOT / "sites" / company_id / "app"
    asset_root = ROOT / "assets" / "companies" / company_id
    public_root = output_app / "public" / "generated" / company_id
    report: dict[str, Any] = {"assetsCopied": [], "missingAssets": []}

    copy_template(template_app, output_app)
    if public_root.exists():
        shutil.rmtree(public_root)
    public_root.mkdir(parents=True, exist_ok=True)

    site_data = build_site_data(data)
    site_data = rewrite_assets(site_data, company_id, asset_root, public_root, report)
    write_site_data(output_app, site_data)

    enabled = [page for page, config in site_data["pages"].items() if config["enabled"]]
    hidden = [page for page, config in site_data["pages"].items() if not config["enabled"]]
    print(f"Generated site: sites/{company_id}/app")
    print("Required data: ok")
    print(f"Enabled pages: {', '.join(enabled)}")
    print(f"Hidden pages: {', '.join(hidden) if hidden else 'none'}")
    print(f"Assets copied: {len(report['assetsCopied'])}")
    if report["missingAssets"]:
        print("Missing assets:")
        for asset in report["missingAssets"]:
            print(f"  - {asset}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
