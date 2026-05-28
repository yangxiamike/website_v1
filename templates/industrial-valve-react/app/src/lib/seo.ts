import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { siteData } from '../generated/siteData';

const defaultSeo = siteData.seo?.default;
const siteName = defaultSeo?.siteName || siteData.company.brand;
const defaultDescription =
  defaultSeo?.description ||
  'Industrial valve products and project support for global B2B buyers.';
const notFoundTitle = defaultSeo?.notFoundTitle || 'Page Not Found';
const routeSeo =
  siteData.seo?.routes?.map((entry) => ({
    pattern: entry.pattern,
    seo: { title: entry.title, description: entry.description },
  })) || [];

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
    const seo = matched?.seo ?? { title: notFoundTitle, description: defaultDescription };
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
