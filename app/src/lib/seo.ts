import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { company } from '../data';

type SeoEntry = {
  title: string;
  description: string;
};

const siteName = company.brand;
const defaultDescription =
  'Haiyue Valve supplies industrial ball, gate, globe, butterfly, check valves and strainers for global B2B projects.';

const routeSeo: Array<{ pattern: string; seo: SeoEntry }> = [
  { pattern: '/', seo: { title: 'Industrial Valve Manufacturer & Export Partner', description: defaultDescription } },
  { pattern: '/products', seo: { title: 'Industrial Valve Product Catalog', description: 'Browse Haiyue Valve product ranges for water treatment, chemical processing, oil and gas, HVAC, and general pipelines.' } },
  { pattern: '/products/:id', seo: { title: 'Industrial Valve Product Details', description: 'Review valve specifications, applications, materials, documents, and related products from Haiyue Valve.' } },
  { pattern: '/industries', seo: { title: 'Industrial Valve Applications', description: 'Explore industrial valve solutions for water treatment, chemical processing, oil and gas, HVAC, power, and pipelines.' } },
  { pattern: '/industries/:id', seo: { title: 'Industry Valve Solutions', description: 'Valve recommendations and application guidance for industrial projects and working conditions.' } },
  { pattern: '/cases', seo: { title: 'Sample Valve Project Scenarios', description: 'Sample valve supply scenarios showing product selection references across industrial applications.' } },
  { pattern: '/cases/:id', seo: { title: 'Valve Project Scenario Details', description: 'Detailed sample project scenario for valve selection, products used, and application requirements.' } },
  { pattern: '/factory', seo: { title: 'Valve Factory Capabilities', description: 'Learn about Haiyue Valve manufacturing, CNC machining, assembly, testing, inspection, and export support.' } },
  { pattern: '/resources', seo: { title: 'Valve Resources & Technical Downloads', description: 'Find valve catalogs, datasheets, technical articles, installation guides, and frequently asked questions.' } },
  { pattern: '/about', seo: { title: 'About Haiyue Valve', description: 'Company profile, export support, quality practices, and service approach for global industrial buyers.' } },
  { pattern: '/contact', seo: { title: 'Contact Haiyue Valve', description: 'Contact Haiyue Valve for sales inquiries, technical support, factory visits, and general questions.' } },
  { pattern: '/request-quote', seo: { title: 'Request a Valve Quotation', description: 'Submit valve requirements, drawings, and project specifications for a quotation from Haiyue Valve.' } },
  { pattern: '/thank-you', seo: { title: 'Thank You', description: 'Your request has been received by Haiyue Valve.' } },
];

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function useRouteSeo() {
  const location = useLocation();

  useEffect(() => {
    const matched = routeSeo.find((entry) => matchPath({ path: entry.pattern, end: true }, location.pathname));
    const seo = matched?.seo ?? { title: 'Page Not Found', description: defaultDescription };
    const fullTitle = `${seo.title} | ${siteName}`;
    const canonical = `${window.location.origin}${location.pathname}`;

    document.title = fullTitle;
    setMeta('description', seo.description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', seo.description, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:url', canonical, 'property');
    setMeta('og:site_name', siteName, 'property');

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', canonical);
  }, [location.pathname]);
}
