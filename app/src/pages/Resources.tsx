import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { faqs } from '../data';

/* ─── Scroll to section helper ─── */
function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 140;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

/* ─── Active section tracking ─── */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handlers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-15% 0px -70% 0px' }
      );
      observer.observe(el);
      return observer;
    });
    return () => handlers.forEach((o) => o?.disconnect());
  }, [ids]);
  return active;
}

/* ─── Data ─── */
const downloads = [
  { title: 'Industrial Valves Product Catalog', type: 'CATALOG', typeColor: 'bg-brand-red text-white', size: 'PDF · 8.7 MB', image: '/images/factory-cnc.jpg' },
  { title: 'Trunnion Mounted Ball Valve Datasheet', type: 'DATASHEET', typeColor: 'bg-gray-100 text-text-secondary', size: 'PDF · 1.2 MB', image: '/images/prod-trunnion-ball.png' },
  { title: 'ISO 9001:2015 Certificate', type: 'CERTIFICATE', typeColor: 'bg-green-50 text-green-700', size: 'PDF · 756 KB', image: '/images/cert-iso9001.jpg' },
  { title: 'Ball Valve Installation Guide', type: 'INSTALLATION GUIDE', typeColor: 'bg-blue-50 text-blue-700', size: 'PDF · 2.3 MB', image: '/images/prod-floating-ball.png' },
  { title: 'Gate Valve Datasheet', type: 'DATASHEET', typeColor: 'bg-gray-100 text-text-secondary', size: 'PDF · 980 KB', image: '/images/prod-cast-gate.png' },
  { title: 'Butterfly Valve Installation Guide', type: 'INSTALLATION GUIDE', typeColor: 'bg-blue-50 text-blue-700', size: 'PDF · 1.8 MB', image: '/images/prod-wafer-butterfly.png' },
];

const articles = [
  { title: 'How to Select the Right Valve for Your Application', date: 'May 9, 2025', readTime: '5 min read', image: '/images/industry-water.jpg' },
  { title: 'Understanding Valve Materials for Corrosive Services', date: 'Apr 18, 2025', readTime: '6 min read', image: '/images/industry-chemical.jpg' },
  { title: 'API 607 vs. ASME B16.34: Key Differences Explained', date: 'Mar 3, 2025', readTime: '4 min read', image: '/images/industry-oil-gas.jpg' },
  { title: 'Reducing Fugitive Emissions with Low-Emission Valves', date: 'Feb 20, 2025', readTime: '7 min read', image: '/images/case-chemical.jpg' },
  { title: 'Valve Pressure Rating Basics', date: 'Jan 15, 2025', readTime: '4 min read', image: '/images/case-general.jpg' },
  { title: 'Choosing Materials for Seawater Applications', date: 'Dec 8, 2024', readTime: '5 min read', image: '/images/case-water-treatment.jpg' },
];

const tabs = [
  { id: 'downloads', label: 'Catalogs & Datasheets', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  )},
  { id: 'articles', label: 'Technical Articles', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>
  )},
  { id: 'faqs', label: 'FAQs', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  )},
];

export default function Resources() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const activeSection = useActiveSection(['downloads', 'articles', 'faqs']);
  const location = useLocation();

  /* Handle URL hash for anchor navigation from dropdown */
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['downloads', 'articles', 'faqs'].includes(hash)) {
      setTimeout(() => scrollToSection(hash), 300);
    }
  }, [location.hash]);

  return (
    <div className="pt-[80px]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
        <div className="absolute inset-0">
          <img src="/images/resources-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-14 lg:py-16">
          <h1 className="text-3xl lg:text-[2.5rem] font-bold text-white leading-[1.1] tracking-tight">
            Resources & Technical Downloads
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Access catalogs, datasheets, technical articles and FAQs to support valve selection, installation and project communication.
          </p>
        </div>
      </section>

      {/* ═══════ ANCHOR TABS ═══════ */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-5 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeSection === tab.id
                    ? 'border-brand-red text-brand-red'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CATALOGS & DATASHEETS ═══════ */}
      <section id="downloads" className="bg-white py-10 lg:py-14 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-2">
            Catalogs & Datasheets
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Product catalogs, technical datasheets, certificates, and installation guides.
          </p>
          {/* Horizontal scroll container */}
          <div className="grid grid-cols-1 sm:flex gap-5 sm:overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }}>
            {downloads.map((dl) => (
              <Link
                key={dl.title}
                to={`/request-quote?source=${encodeURIComponent(dl.title)}`}
                className="w-full sm:flex-shrink-0 sm:w-[260px] border border-gray-200 hover:border-brand-red/30 transition-all cursor-pointer group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                  <img src={dl.image} alt={dl.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <span className={`inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider ${dl.typeColor} mb-2`}>
                    {dl.type}
                  </span>
                  <h4 className="font-semibold text-text-primary text-sm leading-snug mb-3">
                    {dl.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-text-muted">{dl.size}</span>
                    <Download className="w-4 h-4 text-brand-red" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TECHNICAL ARTICLES ═══════ */}
      <section id="articles" className="bg-gray-50 py-10 lg:py-14 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-2">
            Technical Articles
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            Expert insights and practical guidance on valve selection, operation, and maintenance.
          </p>
          <div className="grid grid-cols-1 sm:flex gap-5 sm:overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }}>
            {articles.map((article) => (
              <Link
                key={article.title}
                to={`/contact?topic=${encodeURIComponent(article.title)}`}
                className="w-full sm:flex-shrink-0 sm:w-[320px] bg-white border border-gray-200 hover:border-brand-red/30 transition-all cursor-pointer group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-text-primary text-sm leading-snug mb-2 group-hover:text-brand-red transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-text-muted mb-3">
                    {article.date} · {article.readTime}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand-red text-xs font-semibold">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FAQs ═══════ */}
      <section id="faqs" className="bg-white py-10 lg:py-14 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-2">FAQs</h2>
          <p className="text-sm text-text-secondary mb-6">
            Answers to common questions about our products, services, and processes.
          </p>
          <div className="max-w-3xl space-y-0">
            {faqs.slice(0, 6).map((faq, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left group"
                >
                  <span className="text-sm font-medium text-text-primary pr-4 group-hover:text-brand-red transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-muted flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-4">
                    <p className="text-sm text-text-secondary leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-text-primary text-base">Need help finding the right valve?</h3>
                <p className="text-sm text-text-secondary">Our engineering team is here to help you select the best solution for your application.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0 justify-center sm:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-[40px] px-5 border border-gray-300 text-text-primary text-sm font-medium hover:border-brand-red hover:text-brand-red transition-colors whitespace-nowrap"
              >
                Contact Support <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 h-[40px] px-5 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors whitespace-nowrap"
              >
                Request a Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
