# B2B Launch Demo Checklist

Use this checklist when auditing or handing off a Kimi-generated B2B or industrial website template. It captures the failure modes that usually separate a good-looking prototype from a credible launch demo, regardless of whether the template is dark technical, premium, minimalist, environmental, factory-led, or catalog-first.

## 1. Repo and App Baseline

- Identify framework, language, router, package manager, styling system, icon system, animation library, and deployment assumptions.
- Find build, lint, typecheck, preview, and backend verification commands.
- List all routes, dynamic route patterns, 404/thank-you routes, and pages reachable from header/footer.
- Note generated UI libraries or oversized component folders that create lint noise or maintenance risk.
- Check whether public assets are real customer assets, generated demo assets, placeholders, or duplicated variants.

## 2. Routing and Deployment

- Prefer routing that matches the demo's deployment target.
- If using `HashRouter`, confirm the user accepts hash URLs and weaker SEO/direct-link behavior.
- If using `BrowserRouter`, confirm static host rewrites are present, such as `_redirects` or equivalent.
- Test direct entry and refresh for `/products`, dynamic product pages, RFQ, contact, thank-you, and 404.
- Make canonical URLs agree with the router mode.
- Remove unstable hash anchors unless their behavior is verified in the chosen router.

## 3. CTA and Link Truthfulness

- Make all primary quote CTAs route to RFQ, optionally with product/source query parameters.
- Make general consultation CTAs route to contact.
- Make logo, header nav, dropdowns, footer links, card links, product detail links, related products, industry cards, and case cards point to real destinations.
- Replace fake download buttons with real files, RFQ/contact routing, or clearly labeled sample actions.
- Remove or disable fake search, fake pagination, social links, policy links, article cards, and filters unless implemented.
- Avoid `#` links in a launch demo unless they intentionally target an in-page section and are tested.

## 4. Form Semantics and Inquiry Flow

- Use actual `<form>` elements for contact and RFQ.
- Use native validation for required fields and email fields before adding custom validation.
- Show loading, success, and error states.
- Preserve the user's entered data if submission fails where practical.
- Route successful submissions to thank-you with enough query/context to render the right message.
- For file uploads, show selected file name, validate extension and size, and communicate acceptable formats.
- Never allow an empty required form to navigate to thank-you.

## 5. Backend and Environment Verification

- Add backend plumbing only when the demo needs credible submission proof.
- Prefer the smallest backend surface that satisfies the demo: Supabase table insert, simple serverless endpoint, Netlify Forms, Formspree, or equivalent.
- Keep secrets out of the repo; commit only `.env.example` with public variable names.
- Include schema/policy files when setup cannot be inferred from code.
- Add a verification command only when it proves the actual backend contract.
- For upload-plus-submit flows, roll back uploaded files when the later form insert fails.
- Document remaining manual setup such as bucket creation, table policies, email routing, or production credentials.

## 6. SEO and Metadata

- Replace template titles with brand-appropriate page titles.
- Add route-aware title and meta description.
- Add Open Graph title, description, type, URL, and site name.
- Add canonical tags that match the public URL strategy.
- Add favicon, robots.txt, and sitemap.xml for demo deployment.
- Ensure important product/company images have meaningful alt text; decorative hero overlays can use empty alt text.
- Keep sample-only pages from making unsupported factual claims.

## 7. Responsive and Visual Polish

- Check desktop, tablet, and mobile widths for horizontal overflow.
- Pay special attention to RFQ trust points, resource cards, tabs, filters, stats, logo/header sizing, and dense product cards.
- Keep B2B interfaces restrained, scannable, and work-focused.
- Preserve the current template's approved style instead of importing a previous project's palette, layout, or imagery formula.
- Adapt polish to the buyer context: a white export supplier site, dark technical site, premium manufacturing site, green environmental site, or product-catalog site should each retain its own visual logic.
- Standardize hero treatment across subpages when repeated pages feel inconsistent.
- Normalize spacing, card heights, image ratios, hover states, and button sizes.
- Make product images inspectable and not overly cropped, blurred, or purely decorative.
- Do not let animations hide initial hero readability or block quick comprehension.

## 8. B2B Credibility Copy

- Make the first screen answer: company category, products/services, target buyers, and quote path.
- Align brand name, company name, email, phone, address, copyright year, certifications, and export claims.
- Distinguish company/about content from factory/capability content.
- Distinguish products, industries, cases, and resources; avoid saying the same thing on every page.
- Use "sample project scenario" for demo cases unless real client evidence exists.
- Avoid claiming downloadable certificates, catalogs, datasheets, or real case studies unless the asset is present.
- Keep language export-buyer friendly: technical enough for B2B, clear enough for non-native English buyers.

## 9. Data and Component Cleanup

- Centralize repeated company facts, navigation, product catalog, product details, industries, cases, resources, and page hero copy.
- Extract shared components only when at least two pages benefit or when consistency is demo-visible.
- Do not refactor generated UI libraries unless they cause real build/lint/runtime issues.
- Keep page-level code readable: page composition in pages, repeated content in data modules, reusable visual patterns in components.
- Preserve the existing approved palette, imagery direction, and layout concept unless they hurt credibility, usability, or launch-demo readiness.

## 10. Final Acceptance Checklist

- Build and typecheck status is known.
- Lint status is known, with generated-library noise separated from app issues.
- Header, footer, home, products, product details, industries, cases, resources, factory/about, contact, RFQ, thank-you, and 404 are inspected.
- Main buyer journey works from product discovery to RFQ submission.
- Mobile has no important clipped text or horizontal overflow.
- Direct URLs behave correctly for the chosen router and host.
- No fake CTA remains without intentional relabeling.
- SEO basics exist and no template brand remains.
- Remaining demo-only content, placeholder assets, and credential/setup needs are clearly called out in the handoff.
