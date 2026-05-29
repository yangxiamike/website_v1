import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Factory, MapPin, FileText } from 'lucide-react';
import { getIndustryDetail } from '../data/industryDetails';
import CTABanner from '../components/CTABanner';
import { CTAButton, PageHero, SectionHeading } from '../components/common';

function SnapshotIcon({ type }: { type: string }) {
  if (type === 'valve') {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <circle cx="12" cy="12" r="3" /><path d="M12 2V5" /><path d="M12 19V22" /><path d="M2 12H5" /><path d="M19 12H22" /><path d="M4.93 4.93L7.05 7.05" /><path d="M16.95 16.95L19.07 19.07" /><path d="M4.93 19.07L7.05 16.95" /><path d="M16.95 7.05L19.07 4.93" />
      </svg>
    );
  }
  if (type === 'check') {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M9 11L12 14L22 4" /><path d="M21 12V19C21 19.53 20.79 20.04 20.41 20.41C20.04 20.79 19.53 21 19 21H5C4.47 21 3.96 20.79 3.59 20.41C3.21 20.04 3 19.53 3 19V5C3 4.47 3.21 3.96 3.59 3.59C3.96 3.21 4.47 3 5 3H16" />
      </svg>
    );
  }
  if (type === 'shield') {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" />
    </svg>
  );
}

export default function IndustryDetail() {
  const { id } = useParams<{ id: string }>();
  const ind = id ? getIndustryDetail(id) : undefined;

  if (!ind) {
    return (
      <div className="pt-[80px]">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Industry Not Found</h1>
            <Link to="/industries" className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors">
              Browse All Industries
            </Link>
          </div>
        </section>
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
            <span className="mx-2 text-gray-300">&gt;</span>
            <Link to="/industries" className="hover:text-brand-red transition-colors">Industries</Link>
            <span className="mx-2 text-gray-300">&gt;</span>
            <span className="text-text-primary font-medium">{ind.name}</span>
          </nav>
        </div>
      </div>

      <PageHero
        title={ind.name}
        eyebrow="Industry"
        description={ind.heroSubtitle}
        image={ind.heroImage}
        ctas={(
          <>
            <CTAButton to="/request-quote">Request for Quote</CTAButton>
            <CTAButton to="/products" variant="ghost">View Recommended Valves</CTAButton>
          </>
        )}
      />

      {/* ═══════ INDUSTRY SNAPSHOT ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Industry Snapshot" className="mb-6" />
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-[45%]">
              <p className="text-text-secondary text-sm sm:text-[15px] leading-[1.7]">{ind.snapshotText}</p>
            </div>
            <div className="overflow-x-auto pb-1 lg:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
              <div className="flex w-max gap-4 pr-4">
                {ind.snapshotPoints.map((pt) => (
                  <div key={pt.title} className="flex w-[78vw] min-w-[268px] max-w-[320px] items-start gap-3 border border-gray-200 bg-white p-4">
                    <SnapshotIcon type={ind.snapshotPoints.indexOf(pt) === 0 ? 'valve' : ind.snapshotPoints.indexOf(pt) === 1 ? 'check' : ind.snapshotPoints.indexOf(pt) === 2 ? 'shield' : 'filter'} />
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm">{pt.title}</h4>
                      <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:w-[55%] lg:grid lg:grid-cols-2 lg:gap-4">
              {ind.snapshotPoints.map((pt) => (
                <div key={pt.title} className="flex items-start gap-3">
                  <SnapshotIcon type={ind.snapshotPoints.indexOf(pt) === 0 ? 'valve' : ind.snapshotPoints.indexOf(pt) === 1 ? 'check' : ind.snapshotPoints.indexOf(pt) === 2 ? 'shield' : 'filter'} />
                  <div>
                    <h4 className="font-semibold text-text-primary text-sm">{pt.title}</h4>
                    <p className="text-xs text-text-secondary mt-0.5 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ APPLICATION AREAS ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Application Areas" className="mb-6" />
          <div className="overflow-x-auto pb-1 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {ind.applications.map((app) => (
                <div key={app.title} className="flex w-[86vw] min-w-[304px] max-w-[360px] border border-gray-200 bg-white overflow-hidden">
                  <div className="w-[42%] flex-shrink-0">
                    <img src={app.image} alt={app.title} className="h-full min-h-[180px] w-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <h4 className="font-semibold text-text-primary text-[15px] mb-2">{app.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{app.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden gap-6 sm:grid sm:grid-cols-2">
            {ind.applications.map((app, i) => (
              <div key={app.title} className={`flex gap-0 border border-gray-200 bg-white overflow-hidden ${i >= 2 ? '' : ''}`}>
                <div className="w-[45%] flex-shrink-0">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover min-h-[180px]" />
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h4 className="font-semibold text-text-primary text-[15px] mb-2">{app.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{app.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RECOMMENDED VALVE SOLUTIONS ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Recommended Valve Solutions" className="mb-6" />
          <div className="overflow-x-auto pb-1 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {ind.recommendedProducts.map((rp) => (
                <div key={rp.id} className="w-[74vw] min-w-[248px] max-w-[288px] border border-gray-200 p-5 hover:border-brand-red/30 transition-colors bg-white">
                  <div className="h-32 bg-gray-50 flex items-center justify-center p-3 mb-4">
                    <img src={rp.image} alt={rp.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <h4 className="font-semibold text-text-primary text-[15px] mb-1">{rp.name}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed">{rp.desc}</p>
                  <Link
                    to={`/products/${rp.id}`}
                    className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold mt-3 hover:underline"
                  >
                    View Product <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden gap-5 sm:grid sm:grid-cols-4">
            {ind.recommendedProducts.map((rp) => (
              <div key={rp.id} className="border border-gray-200 p-5 hover:border-brand-red/30 transition-colors">
                <div className="h-32 bg-gray-50 flex items-center justify-center p-3 mb-4">
                  <img src={rp.image} alt={rp.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="font-semibold text-text-primary text-[15px] mb-1">{rp.name}</h4>
                <p className="text-xs text-text-secondary leading-relaxed">{rp.desc}</p>
                <Link
                  to={`/products/${rp.id}`}
                  className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold mt-3 hover:underline"
                >
                  View Product <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ MATERIAL, TESTING & COMPLIANCE ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Material, Testing & Compliance" className="mb-6" />
          <div className="bg-white border border-gray-200 overflow-hidden max-w-3xl">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-5 py-3 text-text-muted font-medium text-xs uppercase tracking-wider w-1/3">Requirement</th>
                  <th className="text-left px-5 py-3 text-text-muted font-medium text-xs uppercase tracking-wider">Typical Options</th>
                </tr>
              </thead>
              <tbody>
                {ind.materialCompliance.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/40'}>
                    <td className="px-5 py-3 text-text-primary font-medium text-sm">{row.label}</td>
                    <td className="px-5 py-3 text-text-secondary text-sm">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════ RELATED CASE STUDY ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Related Case Study" className="mb-6" />
          <div className="border border-gray-200">
            <div className="aspect-[16/10] overflow-hidden sm:aspect-[21/9]">
              <img src={ind.relatedCase.image} alt={ind.relatedCase.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-text-primary text-lg mb-2">{ind.relatedCase.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">{ind.relatedCase.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
                <div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <Factory className="w-3.5 h-3.5 text-brand-red" /> Industry
                  </div>
                  <div className="text-xs text-text-primary font-medium">{ind.relatedCase.industry}</div>
                </div>
                <div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" /> Location
                  </div>
                  <div className="text-xs text-text-primary font-medium">{ind.relatedCase.location}</div>
                </div>
                <div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-brand-red" /> Application
                  </div>
                  <div className="text-xs text-text-primary font-medium">{ind.relatedCase.application}</div>
                </div>
                <div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> Products Supplied
                  </div>
                  <div className="text-xs text-text-primary font-medium">{ind.relatedCase.productsSupplied.join(', ')}</div>
                </div>
              </div>
              <Link
                to={ind.relatedCase.link}
                className="inline-flex items-center gap-2 h-[40px] px-5 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
              >
                View Case Study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4 text-left">
              <svg className="w-10 h-10 text-white/90 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-white font-semibold text-lg">{ind.ctaText}</h3>
                <p className="text-white/80 text-sm">{ind.ctaSubtext}</p>
              </div>
            </div>
            <Link
              to="/request-quote"
              className="inline-flex h-[48px] w-full items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-brand-red transition-colors hover:bg-gray-100 sm:w-auto sm:flex-shrink-0"
            >
              Request for Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
