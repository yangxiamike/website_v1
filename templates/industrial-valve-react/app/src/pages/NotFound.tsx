import { Link } from 'react-router-dom';
import { ArrowRight, Home, Grid3X3, BookOpen, Mail } from 'lucide-react';

const helpfulLinks = [
  { icon: <Grid3X3 className="w-6 h-6 text-brand-red" />, title: 'Products', desc: 'Explore our valve products.', href: '/products' },
  { icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ), title: 'Industries', desc: 'Solutions for every industry.', href: '/industries' },
  { icon: <BookOpen className="w-6 h-6 text-brand-red" />, title: 'Resources', desc: 'Catalogs, datasheets and more.', href: '/resources' },
  { icon: <Mail className="w-6 h-6 text-brand-red" />, title: 'Contact', desc: 'Get in touch with our team.', href: '/contact' },
];

export default function NotFound() {
  return (
    <div className="pt-[80px]">
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative overflow-hidden bg-gray-50" style={{ minHeight: 420 }}>
        {/* Very subtle valve line-art decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Left valve silhouette */}
          <svg className="absolute -left-10 top-1/2 -translate-y-1/2 w-72 h-96 opacity-[0.04]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse cx="100" cy="150" rx="60" ry="80" />
            <rect x="85" y="30" width="30" height="40" />
            <rect x="75" y="10" width="50" height="25" rx="3" />
            <line x1="40" y1="150" x2="20" y2="150" />
            <line x1="160" y1="150" x2="180" y2="150" />
            <circle cx="100" cy="150" r="25" />
            <line x1="100" y1="230" x2="100" y2="280" />
            <rect x="70" y="275" width="60" height="20" rx="3" />
            <line x1="60" y1="100" x2="80" y2="100" />
            <line x1="120" y1="100" x2="140" y2="100" />
            <line x1="60" y1="200" x2="80" y2="200" />
            <line x1="120" y1="200" x2="140" y2="200" />
          </svg>
          {/* Right valve silhouette */}
          <svg className="absolute -right-10 top-1/2 -translate-y-1/2 w-72 h-96 opacity-[0.04]" viewBox="0 0 200 300" fill="none" stroke="currentColor" strokeWidth="1">
            <ellipse cx="100" cy="150" rx="60" ry="80" />
            <rect x="85" y="30" width="30" height="40" />
            <rect x="75" y="10" width="50" height="25" rx="3" />
            <line x1="40" y1="150" x2="20" y2="150" />
            <line x1="160" y1="150" x2="180" y2="150" />
            <circle cx="100" cy="150" r="25" />
            <line x1="100" y1="230" x2="100" y2="280" />
            <rect x="70" y="275" width="60" height="20" rx="3" />
            <line x1="60" y1="100" x2="80" y2="100" />
            <line x1="120" y1="100" x2="140" y2="100" />
            <line x1="60" y1="200" x2="80" y2="200" />
            <line x1="120" y1="200" x2="140" y2="200" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-14 lg:py-20">
          {/* 404 number */}
          <div className="text-[6rem] lg:text-[8rem] font-bold text-brand-red leading-none tracking-tighter mb-2">
            404
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-3xl font-bold text-text-primary tracking-tight mb-3">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-sm text-text-secondary max-w-md leading-relaxed mb-8">
            The page may have been moved, deleted, or the URL may be incorrect.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 h-[48px] px-6 border border-gray-300 text-text-primary text-sm font-semibold hover:border-brand-red hover:text-brand-red transition-colors bg-white"
            >
              <Home className="w-4 h-4" /> Back to Home
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 h-[48px] px-6 border border-gray-300 text-text-primary text-sm font-semibold hover:border-brand-red hover:text-brand-red transition-colors bg-white"
            >
              <Grid3X3 className="w-4 h-4" /> View Products
            </Link>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              Request for Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ HELPFUL LINKS ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-text-primary tracking-tight text-center mb-8">Helpful Links</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {helpfulLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="bg-white border border-gray-200 p-5 hover:border-brand-red/30 transition-all group"
              >
                <div className="mb-3">{link.icon}</div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">{link.title}</h4>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">{link.desc}</p>
                <ArrowRight className="w-4 h-4 text-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
