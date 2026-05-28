import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-flex mb-4">
              <img
                src={company.logo || '/images/logo-haiyue-lockup.png'}
                alt={company.logoAlt || company.brand}
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {company.summary || `${company.brand} supplies industrial valve solutions for global buyers.`}
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={`mailto:${company.email}`} aria-label={`Email ${company.brand}`} className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-brand-red hover:bg-brand-red transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <Link to={`${resourceHubHref}#downloads`} aria-label="View technical resources" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-brand-red hover:bg-brand-red transition-colors">
                <FileText className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">QUICK LINKS</h4>
            <ul className="space-y-3">
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
            <h4 className="font-semibold text-sm mb-5 tracking-wide">PRODUCTS</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">RESOURCES</h4>
            <ul className="space-y-3">
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
          <div>
            <h4 className="font-semibold text-sm mb-5 tracking-wide">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{company.phone || '-'}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{company.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{company.address || company.location || '-'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {copyrightStart}{new Date().getFullYear()} {company.nameEn}. Sample website content for valve selection reference.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link to="/contact?topic=Privacy%20Policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link to="/contact?topic=Terms%20of%20Use" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
