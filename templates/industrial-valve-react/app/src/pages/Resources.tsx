import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data';
import { CTAButton, PageHero, ResourceCard, SectionHeading } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';

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
      <PageHero
        {...pageHeroes.resources}
        ctas={(
          <>
            <CTAButton to="/request-quote">Request for Quote</CTAButton>
            <CTAButton to="/contact" variant="ghost">Contact Support</CTAButton>
          </>
        )}
      />

      {/* ═══════ ANCHOR TABS ═══════ */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:flex sm:overflow-x-auto" style={{ scrollbarWidth: 'thin' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`flex items-center justify-center gap-2 px-4 py-4 text-center text-sm font-medium border-b-2 transition-colors sm:flex-shrink-0 sm:px-5 ${
                  activeSection === tab.id
                    ? 'border-brand-red text-brand-red'
                    : 'border-transparent text-text-secondary hover:text-text-primary'
                } ${tab.id === 'downloads' ? 'col-span-2 sm:col-span-1' : ''}`}
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
          <SectionHeading title="Catalogs & Datasheets" description="Product catalogs, technical datasheets, certificates, and installation guides." className="mb-6" />
          <div className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]" style={{ scrollbarWidth: 'thin' }}>
            <div className="flex w-max gap-4 pr-4 sm:gap-5">
              {downloads.map((dl) => (
                <ResourceCard
                  key={dl.title}
                  title={dl.title}
                  meta={dl.size}
                  image={dl.image}
                  to={`/request-quote?source=${encodeURIComponent(dl.title)}`}
                  badge={(
                    <span className={`mb-2 inline-block px-2 py-0.5 text-[10px] font-semibold tracking-wider ${dl.typeColor}`}>
                      {dl.type}
                    </span>
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TECHNICAL ARTICLES ═══════ */}
      <section id="articles" className="bg-gray-50 py-10 lg:py-14 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Technical Articles" description="Expert insights and practical guidance on valve selection, operation, and maintenance." className="mb-6" />
          <div className="overflow-x-auto pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]" style={{ scrollbarWidth: 'thin' }}>
            <div className="flex w-max gap-4 pr-4 sm:gap-5">
              {articles.map((article) => (
                <ResourceCard
                  key={article.title}
                  title={article.title}
                  meta={`${article.date} · ${article.readTime}`}
                  image={article.image}
                  to={`/contact?topic=${encodeURIComponent(article.title)}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ FAQs ═══════ */}
      <section id="faqs" className="bg-white py-10 lg:py-14 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="FAQs" description="Answers to common questions about our products, services, and processes." className="mb-6" />
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
          <div className="flex flex-col items-start gap-4 border border-gray-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 text-left">
              <svg className="w-10 h-10 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-text-primary text-base">Need help finding the right valve?</h3>
                <p className="text-sm text-text-secondary">Our engineering team is here to help you select the best solution for your application.</p>
              </div>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-end">
              <CTAButton to="/contact" variant="secondary" size="sm">Contact Support</CTAButton>
              <CTAButton to="/request-quote" size="sm">Request for Quote</CTAButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
