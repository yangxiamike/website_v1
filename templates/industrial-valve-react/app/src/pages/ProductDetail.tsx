import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IconReliableSealing, IconLowTorque, IconVersatileOptions, IconLongServiceLife,
  IconWaterTreatment, IconChemicalProcessing, IconOilGas, IconGeneralPipeline,
  IconPressureTesting, IconLeakageTesting, IconMaterialInspection, IconExportPackaging,
  IconDocument, IconDownload, IconArrowRight, IconCheck,
} from '../components/icons';
import { getProductDetail } from '../data/productDetails';
import CTABanner from '../components/CTABanner';
import { CardCTA, CTAButton, MobileMarquee, MobileRail, SectionHeading } from '../components/common';

const iconMap: Record<string, React.FC<{ className?: string; size?: number; strokeWidth?: number }>> = {
  IconReliableSealing, IconLowTorque, IconVersatileOptions, IconLongServiceLife,
  IconWaterTreatment, IconChemicalProcessing, IconOilGas, IconGeneralPipeline,
  IconPressureTesting, IconLeakageTesting, IconMaterialInspection, IconExportPackaging,
};

const tabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'features', label: 'Features' },
  { id: 'applications', label: 'Applications' },
  { id: 'materials', label: 'Materials' },
  { id: 'quality', label: 'Quality' },
  { id: 'documents', label: 'Documents' },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  const detail = id ? getProductDetail(id) : undefined;

  /* IntersectionObserver to highlight active tab */
  useEffect(() => {
    if (!detail) return;
    const observers: IntersectionObserver[] = [];
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(tab.id);
        },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [detail]);

  /* Reset scroll when product changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 160;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!detail) {
    return (
      <div className="pt-[80px]">
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <nav className="text-[13px] text-text-muted">
              <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
              <span className="mx-2 text-gray-300">/</span>
              <Link to="/products" className="hover:text-brand-red transition-colors">Products</Link>
              <span className="mx-2 text-gray-300">/</span>
              <span className="text-text-primary font-medium">Not Found</span>
            </nav>
          </div>
        </div>
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Product Not Found</h1>
            <p className="text-text-secondary mb-6">The product you are looking for does not exist in our catalog.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        </section>
        <CTABanner />
      </div>
    );
  }

  return (
    <div className="pt-[80px]">
      {/* ═══════ BREADCRUMB ═══════ */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
          <nav className="text-[13px] text-text-muted">
            <Link to="/" className="hover:text-brand-red transition-colors">Home</Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link to="/products" className="hover:text-brand-red transition-colors">Products</Link>
            <span className="mx-2 text-gray-300">/</span>
            <span className="text-text-primary font-medium">{detail.title}</span>
          </nav>
        </div>
      </div>

      {/* ═══════ PRODUCT HERO ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Product Image */}
            <div>
              <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-8 border border-gray-100">
                <img src={detail.heroImage} alt={detail.title} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="flex gap-2 mt-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
                {[1, 2, 3].map((i) => (
                  <button key={i} className="w-16 h-16 flex-shrink-0 bg-gray-50 flex items-center justify-center p-2 border border-gray-200 hover:border-brand-red transition-colors">
                    <img src={detail.heroImage} alt="" className="max-h-full max-w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Info */}
            <div>
              <h1 className="ds-page-title text-text-primary">{detail.title}</h1>
              <p className="text-text-secondary text-sm sm:text-[15px] mt-4 leading-relaxed">{detail.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {detail.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-gray-50 border border-gray-200 text-text-secondary text-xs font-medium">{tag}</span>
                ))}
              </div>

              {/* Benefits */}
              <ul className="mt-6 space-y-2.5">
                {detail.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-text-secondary">
                    <IconCheck size={18} strokeWidth={2} className="text-brand-red flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 mt-8">
                <CTAButton to={`/request-quote?product=${detail.id}`}>Request for Quote</CTAButton>
                <CTAButton to={`/request-quote?source=datasheet&product=${detail.id}`} variant="secondary">Download Datasheet</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ ANCHOR TABS ═══════ */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 px-4 sm:flex sm:overflow-x-auto sm:px-6" style={{ scrollbarWidth: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollTo(tab.id)}
              className={`px-4 py-4 text-center text-sm font-medium border-b-2 transition-colors sm:flex-shrink-0 sm:px-5 ${
                activeTab === tab.id
                  ? 'border-brand-red text-brand-red'
                  : 'border-transparent text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ═══════ MAIN CONTENT + SIDEBAR ═══════ */}
      <div className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="flex-1 min-w-0">

              {/* ── OVERVIEW ── */}
              <section id="overview" className="scroll-mt-40 mb-14">
                <SectionHeading title="Overview" />
                <p className="text-text-secondary text-sm sm:text-[15px] mt-4 leading-[1.7]">{detail.overview}</p>
              </section>

              {/* ── FEATURES ── */}
              <section id="features" className="scroll-mt-40 mb-14">
                <SectionHeading title="Features & Benefits" />
                <MobileMarquee
                  items={detail.features}
                  getKey={(feature) => feature.title}
                  renderItem={(f) => {
                    const IconComp = iconMap[f.icon];
                    return (
                      <div className="w-[80vw] min-w-[276px] max-w-[320px] border border-gray-200 bg-white p-5">
                        {IconComp && <IconComp size={32} strokeWidth={1.75} className="mb-3 text-brand-red" />}
                        <h3 className="mb-1.5 text-[15px] font-semibold text-text-primary">{f.title}</h3>
                        <p className="text-sm leading-relaxed text-text-muted">{f.description}</p>
                      </div>
                    );
                  }}
                />
                <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-2">
                  {detail.features.map((f) => {
                    const IconComp = iconMap[f.icon];
                    return (
                      <div key={f.title} className="bg-white border border-gray-200 p-6 hover:border-brand-red/30 transition-colors">
                        {IconComp && <IconComp size={32} strokeWidth={1.75} className="text-brand-red mb-3" />}
                        <h3 className="font-semibold text-text-primary text-[15px] mb-1.5">{f.title}</h3>
                        <p className="text-sm text-text-muted leading-relaxed">{f.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── APPLICATIONS ── */}
              <section id="applications" className="scroll-mt-40 mb-14">
                <SectionHeading title="Applications" />
                <MobileRail>
                  {detail.applications.map((a) => {
                    const IconComp = iconMap[a.icon];
                    return (
                      <div key={a.title} className="w-[80vw] min-w-[276px] max-w-[320px] border border-gray-200 bg-white p-5">
                        {IconComp && <IconComp size={36} strokeWidth={1.75} className="mb-3 text-brand-red" />}
                        <h3 className="text-[15px] font-semibold text-text-primary">{a.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">{a.description}</p>
                      </div>
                    );
                  })}
                </MobileRail>
                <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-2">
                  {detail.applications.map((a) => {
                    const IconComp = iconMap[a.icon];
                    return (
                      <div key={a.title} className="flex items-start gap-4 border border-gray-200 bg-white p-5">
                        {IconComp && <IconComp size={36} strokeWidth={1.75} className="text-brand-red flex-shrink-0 mt-0.5" />}
                        <div>
                          <h3 className="font-semibold text-text-primary text-[15px]">{a.title}</h3>
                          <p className="text-sm text-text-muted mt-1 leading-relaxed">{a.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── MATERIALS ── */}
              <section id="materials" className="scroll-mt-40 mb-14">
                <SectionHeading title="Materials & Options" />
                <div className="mt-6 border border-gray-200">
                  {detail.materials.map((m, i) => (
                    <div
                      key={m.category}
                      className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 px-5 py-3.5 ${
                        i < detail.materials.length - 1 ? 'border-b border-gray-100' : ''
                      } ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}`}
                    >
                      <span className="sm:w-44 text-sm font-semibold text-text-primary flex-shrink-0">{m.category}</span>
                      <span className="text-sm text-text-secondary">{m.values}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── QUALITY ── */}
              <section id="quality" className="scroll-mt-40 mb-14">
                <SectionHeading title="Quality & Testing" />
                <MobileMarquee
                  items={detail.quality}
                  getKey={(item) => item.title}
                  renderItem={(q) => {
                    const IconComp = iconMap[q.icon];
                    return (
                      <div className="w-[80vw] min-w-[276px] max-w-[320px] border border-gray-200 bg-white p-5">
                        {IconComp && <IconComp size={36} strokeWidth={1.75} className="mb-3 text-brand-red" />}
                        <h3 className="text-[15px] font-semibold text-text-primary">{q.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-muted">{q.description}</p>
                      </div>
                    );
                  }}
                />
                <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-2">
                  {detail.quality.map((q) => {
                    const IconComp = iconMap[q.icon];
                    return (
                      <div key={q.title} className="flex items-start gap-4 border border-gray-200 bg-white p-5">
                        {IconComp && <IconComp size={36} strokeWidth={1.75} className="text-brand-red flex-shrink-0 mt-0.5" />}
                        <div>
                          <h3 className="font-semibold text-text-primary text-[15px]">{q.title}</h3>
                          <p className="text-sm text-text-muted mt-1 leading-relaxed">{q.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── DOCUMENTS ── */}
              <section id="documents" className="scroll-mt-40 mb-14">
                <SectionHeading title="Documents & Downloads" />
                <MobileRail>
                  {detail.documents.map((doc) => (
                    <div key={doc.title} className="w-[72vw] min-w-[236px] max-w-[272px] border border-gray-200 bg-white p-5 transition-colors hover:border-brand-red/30">
                      <div className="flex items-start gap-3">
                        <IconDocument size={32} strokeWidth={1.75} className="flex-shrink-0 text-brand-red" />
                        <div className="min-w-0">
                          <h4 className="text-sm font-semibold leading-snug text-text-primary">{doc.title}</h4>
                          <p className="mt-1 text-xs text-text-muted">{doc.type} &middot; {doc.size}</p>
                        </div>
                      </div>
                      <Link to={`/request-quote?source=${encodeURIComponent(doc.title)}&product=${detail.id}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:underline">
                        <span>Download</span> <IconDownload size={16} strokeWidth={2} />
                      </Link>
                    </div>
                  ))}
                </MobileRail>
                <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                  {detail.documents.map((doc) => (
                    <div key={doc.title} className="bg-white border border-gray-200 p-5 hover:border-brand-red/30 transition-colors">
                      <div className="flex items-start gap-3">
                        <IconDocument size={32} strokeWidth={1.75} className="text-brand-red flex-shrink-0" />
                        <div className="min-w-0">
                          <h4 className="font-semibold text-text-primary text-sm leading-snug">{doc.title}</h4>
                          <p className="text-xs text-text-muted mt-1">{doc.type} &middot; {doc.size}</p>
                        </div>
                      </div>
                      <Link to={`/request-quote?source=${encodeURIComponent(doc.title)}&product=${detail.id}`} className="inline-flex items-center gap-1.5 text-brand-red text-sm font-semibold mt-4 hover:underline">
                        <span>Download</span> <IconDownload size={16} strokeWidth={2} />
                      </Link>
                    </div>
                  ))}
                </div>
              </section>

              {/* ── RELATED PRODUCTS ── */}
              <section className="mb-14">
                <SectionHeading title="Related Products" />
                <MobileRail>
                  {detail.relatedProducts.map((rp) => (
                    <Link
                      key={rp.id}
                      to={`/products/${rp.id}`}
                      className="group flex w-[80vw] min-w-[276px] max-w-[320px] items-start gap-4 border border-gray-200 bg-white p-4 transition-colors hover:border-brand-red/30"
                    >
                      <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-gray-50 p-2">
                        <img src={rp.image} alt={rp.title} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-text-primary transition-colors group-hover:text-brand-red">{rp.title}</h4>
                        <p className="mt-1 line-clamp-2 text-xs text-text-muted">{rp.description}</p>
                        <CardCTA>View Product</CardCTA>
                      </div>
                    </Link>
                  ))}
                </MobileRail>
                <div className="mt-6 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                  {detail.relatedProducts.map((rp) => (
                    <Link
                      key={rp.id}
                      to={`/products/${rp.id}`}
                      className="group flex items-start gap-4 bg-white border border-gray-200 p-4 hover:border-brand-red/30 transition-colors"
                    >
                      <div className="w-20 h-20 bg-gray-50 flex-shrink-0 flex items-center justify-center p-2">
                        <img src={rp.image} alt={rp.title} className="max-h-full max-w-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-semibold text-text-primary text-sm group-hover:text-brand-red transition-colors">{rp.title}</h4>
                        <p className="text-xs text-text-muted mt-1 line-clamp-2">{rp.description}</p>
                        <CardCTA>View Product</CardCTA>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Sidebar */}
            <div className="w-full lg:w-[320px] flex-shrink-0 space-y-6">
              {/* Product Details Card */}
              <div className="bg-white border border-gray-200 p-6">
                <h3 className="font-semibold text-text-primary text-lg mb-4">Product Details</h3>
                <div className="space-y-0">
                  {detail.specs.map((s, i) => (
                    <div key={s.param} className={`flex flex-col py-3 ${i > 0 ? 'border-t border-gray-100' : ''}`}>
                      <span className="text-[12px] text-text-muted font-medium uppercase tracking-wider">{s.param}</span>
                      <span className="text-sm text-text-primary mt-0.5">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RFQ Sidebar Card */}
              <div className="bg-gray-50 border border-gray-200 p-6">
                <h3 className="font-semibold text-text-primary text-lg mb-2">Need a valve for your project?</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Send us your project requirements and our engineers will help confirm the best valve configuration.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    'Fast response within 24 hours',
                    'Technical support from experts',
                    'Competitive factory pricing',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <IconCheck size={16} strokeWidth={2} className="text-brand-red flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <Link
                    to={`/request-quote?product=${detail.id}`}
                    className="flex items-center justify-center gap-2 h-[48px] w-full bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
                  >
                    Request for Quote <IconArrowRight size={18} strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTABanner />
    </div>
  );
}
