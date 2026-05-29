---
name: kimi-b2b-demo-polisher
description: Upgrade Kimi-generated B2B, industrial, supplier, manufacturing, export, or product-catalog website templates into launch-ready demos across many visual styles. Use when Codex needs to audit, refactor, polish, and verify a Kimi B2B presentation prototype so it becomes a credible demo with coherent copy, routing, SEO, responsive layout, truthful interactions, RFQ/contact flows, and optional lightweight backend plumbing.
---

# Kimi B2B Demo Polisher

## Overview

Turn a Kimi-generated B2B or industrial website template from "visually promising" into a launch-ready demo. Preserve the current template's approved style, then remove credibility gaps: broken routes, fake CTAs, inconsistent brand/product language, weak mobile layouts, missing SEO, hardcoded duplication, and unverified forms.

Do not force a previous project's visual system onto new work. This skill supports dark technical, black-gold premium, white minimalist export, green environmental, factory-photo-led, catalog-first, and other B2B styles. Adapt the polish to the current template, brand, product category, and buyer expectations.

For detailed gates, read `references/b2b-launch-demo-checklist.md` when starting an audit or before final handoff.

## First-Pass Audit Workflow

Start by inspecting before editing.

1. Map the app shape:
   - Identify framework, package manager, routing mode, build commands, preview/dev commands, and deployment assumptions.
   - List top-level pages, dynamic routes, data files, shared components, public assets, and any backend or environment files.
2. Verify current health:
   - Run build/lint/typecheck when available.
   - Record failures separately as blocking, demo-visible, or cleanup-only.
3. Click through the customer journey:
   - Header, footer, home CTAs, product cards, industry/case cards, resources/downloads, contact, RFQ, thank-you, and 404.
   - Mark every fake interaction as either implement, relabel, route to RFQ/contact, or intentionally keep as visual-only.
4. Check demo credibility:
   - Confirm brand, company facts, emails, phone numbers, addresses, years, certifications, product names, industry wording, and case claims agree across pages.
   - Replace "real-world" or "real project" claims with "sample scenario" wording unless the user provided real customer proof.
5. Check responsive quality:
   - Inspect at mobile and desktop widths.
   - Look for horizontal overflow, cramped trust badges, card text clipping, oversized logos, hero readability, and controls that resize unpredictably.
6. Check launch basics:
   - Inspect title/meta, favicon, robots, sitemap, canonical/OG tags, direct URL refresh behavior, redirects, and hash-vs-browser routing implications.

## 80-to-100 Upgrade Sequence

Apply changes in this order unless the repo clearly demands another order.

1. Preserve the approved visual direction:
   - Keep the Kimi prototype's strongest style decisions unless they are broken or off-brand.
   - Do not force valve-site styling, red/black palettes, factory-heavy layouts, or any earlier project's visual system onto another Kimi template.
   - Tune the existing style for the specific B2B segment: industrial manufacturing, export supplier, equipment catalog, environmental engineering, high-end components, or another buyer context.
   - Avoid full redesigns when targeted polish can make the demo credible.
2. Normalize the B2B story:
   - Centralize brand/company facts.
   - Align product, industry, case, resource, contact, and RFQ language.
   - Make primary CTAs lead to RFQ and secondary/contact CTAs lead to contact.
3. Make navigation truthful:
   - Fix wrong links, placeholder anchors, dead dropdowns, fake pagination, fake downloads, and cards that route to generic pages when detail routes exist.
   - If an asset or detail page does not exist, route to RFQ/contact with context or label the item as coming soon/sample.
4. Consolidate shared UI only where it reduces risk:
   - Extract repeated PageHero, SectionHeading, CTAButton, ProductCard, CaseCard, ResourceCard, and form field patterns when multiple pages already duplicate them.
   - Move repeated hero/page copy, product data, industries, cases, resources, and company details into data modules.
   - Keep refactors scoped to demo quality; do not chase unrelated architecture purity.
5. Finish forms and backend only to the necessary demo depth:
   - Make contact/RFQ real forms with native validation, loading, success, error, and thank-you behavior.
   - Add a minimal backend path only when the demo requires proof of submission.
   - For Supabase-style demos, include env examples, schema/policies, file-size/type validation, upload rollback, and a verification script only if they are actually used.
6. Finish launch polish:
   - Add route-aware SEO, favicon, robots, sitemap, canonical/OG metadata, direct route handling, and no-surprise 404/thank-you pages.
   - Improve mobile layout, card spacing, logo sizing, hero consistency, and image alt text where it affects comprehension.
   - After any meaningful mobile pass, do one more system pass for design-token consistency, shared-component consolidation, screenshot-matrix QA, and template-vs-generated layer alignment.

## B2B Demo Quality Gates

Use the reference checklist for full details. These gates must pass before handoff:

- A buyer can understand what the company sells, for whom, and how to request a quote within the first page view.
- Every visible CTA either works, is clearly labeled as sample/coming soon, or routes to an appropriate inquiry path with context.
- Contact and RFQ flows validate input and show failure states; they do not silently pretend to submit.
- Case studies and resource downloads do not claim real proof unless the underlying assets are real.
- Product, industry, and company facts are not duplicated inconsistently across pages.
- Mobile pages have no horizontal overflow or clipped important text.
- After mobile fixes, spacing, radius, typography, color, shadows, and interaction states are re-checked against the active design tokens so one-off overrides do not accumulate.
- After mobile fixes, repeated adjustments that now appear across multiple pages are folded back into the appropriate shared component or data pattern instead of staying as page-level patches.
- A screenshot matrix review covers the core routes and critical breakpoints so mobile polish does not introduce regressions on tablet or desktop.
- The template layer and generated-site layer still have clear ownership boundaries: reusable template improvements live in the right shared layer, while site-specific content or mapping stays in the generated project layer.
- SEO and routing behavior match the intended demo deployment.
- Build/typecheck/lint status is known, and any remaining issue is documented with impact.

## Validation and Handoff Rules

Before final response:

- Run the strongest available local checks without modifying unrelated files.
- Preview or inspect key routes when frontend behavior changed.
- If mobile layouts changed, re-check token consistency, shared component opportunities, screenshot coverage, and template-vs-generated boundaries before handoff.
- Test contact/RFQ happy path and failure path when forms changed.
- Verify direct URLs and refresh behavior if routing changed.
- Summarize what became launch-ready, what remains sample/demo-only, and any assets or credentials still needed from the user.
- Avoid claiming production readiness when the result is a launch demo with placeholder assets or sample content.
