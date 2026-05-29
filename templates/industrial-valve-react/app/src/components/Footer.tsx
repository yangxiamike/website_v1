import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, FileText, Globe, MessageCircle } from 'lucide-react';
import { siteData } from '../generated/siteData';

const fallbackQuickLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Industries', href: '/industries' },
  { label: 'Factory', href: '/factory' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const fallbackProductLinks = [
  { label: 'Ball Valve', href: '/products?type=ball-valve' },
  { label: 'Gate Valve', href: '/products?type=gate-valve' },
  { label: 'Globe Valve', href: '/products?type=globe-valve' },
  { label: 'Butterfly Valve', href: '/products?type=butterfly-valve' },
  { label: 'Check Valve', href: '/products?type=check-valve' },
  { label: 'Y Strainer', href: '/products?type=strainer' },
  { label: 'View All Products', href: '/products' },
];

const fallbackResourceLinks = [
  { label: 'Catalogs & Datasheets', href: '/resources#downloads' },
  { label: 'Technical Articles', href: '/resources#articles' },
  { label: 'Installation Guides', href: '/resources#downloads' },
  { label: 'FAQs', href: '/resources#faqs' },
];

export default function Footer() {
  const company = siteData.company;
  const quickLinks = siteData.nav?.footerQuick?.length ? siteData.nav.footerQuick : fallbackQuickLinks;
  const productLinks = siteData.nav?.footerProducts?.length ? siteData.nav.footerProducts : fallbackProductLinks;
  const resourceLinks = siteData.nav?.footerResources?.length ? siteData.nav.footerResources : fallbackResourceLinks;
  const resourceHubHref = siteData.pages?.resources?.href || '/resources';
  const copyrightStart = company.since ? `${company.since}-` : '';

  return (
    <footer className="bg-surface-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="md:block">
              <div className="min-w-0">
                <Link to="/" className="mb-3 inline-flex md:justify-start">
                  <img
                    src={company.logo || '/images/logo-haiyue-lockup.png'}
                    alt={company.logoAlt || company.brand}
                    className="h-16 w-auto brightness-[1.18] saturate-[1.12] contrast-125 drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] sm:h-20 md:brightness-100 md:saturate-100 md:contrast-100 md:drop-shadow-none"
                  />
                </Link>
                <p className="max-w-[16rem] text-sm leading-relaxed text-gray-400 md:max-w-sm">
                  {company.summary || `${company.brand} supplies industrial valve solutions for global buyers.`}
                </p>
              </div>
              <div className="mt-5 inline-grid grid-cols-2 gap-2.5 md:flex md:flex-wrap md:items-center md:justify-start md:gap-3">
                <a href={`mailto:${company.email}`} aria-label={`Email ${company.brand}`} className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red">
                  <Mail className="h-4 w-4" />
                </a>
                <Link to={`${resourceHubHref}#downloads`} aria-label="View technical resources" className="flex h-10 w-10 items-center justify-center border border-white/20 transition-colors hover:border-brand-red hover:bg-brand-red">
                  <FileText className="h-4 w-4" />
                </Link>
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center border border-dashed border-white/15 text-gray-500">
                  <Globe className="h-4 w-4" />
                </span>
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center border border-dashed border-white/15 text-gray-500">
                  <MessageCircle className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide">PRODUCTS</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h4 className="mb-4 text-sm font-semibold tracking-wide">RESOURCES</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-gray-400 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-4 text-sm font-semibold tracking-wide">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{company.phone || '-'}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-all">{company.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm break-words">{company.address || company.location || '-'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col items-start justify-between gap-3 px-4 py-4 sm:flex-row sm:items-center sm:px-6">
          <p className="text-gray-500 text-xs leading-relaxed">
            &copy; {copyrightStart}{new Date().getFullYear()} {company.nameEn}. Sample website content for valve selection reference.
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 sm:gap-3">
            <Link to="/contact?topic=Privacy%20Policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact?topic=Terms%20of%20Use" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
