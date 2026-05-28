import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Shield, TrendingUp, Clock, Route } from 'lucide-react';
import { getCaseById } from '../data/cases';
import CTABanner from '../components/CTABanner';
import { PageHero, SectionHeading } from '../components/common';

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield className="w-8 h-8 text-brand-red" />,
  trending: <TrendingUp className="w-8 h-8 text-brand-red" />,
  clock: <Clock className="w-8 h-8 text-brand-red" />,
  route: <Route className="w-8 h-8 text-brand-red" />,
};

export default function CaseDetail() {
  const { id } = useParams<{ id: string }>();
  const cs = id ? getCaseById(id) : undefined;

  if (!cs) {
    return (
      <div className="pt-[80px]">
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-2xl font-bold text-text-primary mb-4">Case Study Not Found</h1>
            <Link to="/cases" className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors">
              Browse All Cases
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
            <Link to="/cases" className="hover:text-brand-red transition-colors">Case Studies</Link>
            <span className="mx-2 text-gray-300">&gt;</span>
            <span className="text-text-primary font-medium">{cs.title}</span>
          </nav>
        </div>
      </div>

      <PageHero
        title={cs.title}
        eyebrow="Case"
        description={`${cs.subtitle}. ${cs.description}`}
        image={cs.heroImage}
      />

      {/* ═══════ PROJECT SNAPSHOT ROW ═══════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div>
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Industry
              </div>
              <div className="text-sm font-semibold text-text-primary">{cs.industry}</div>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Location
              </div>
              <div className="text-sm font-semibold text-text-primary">{cs.location}</div>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Application
              </div>
              <div className="text-sm font-semibold text-text-primary">{cs.application}</div>
            </div>
            <div>
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Products Supplied
              </div>
              <div className="text-sm font-semibold text-text-primary">{cs.productsSupplied.join(', ')}</div>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="text-[11px] text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Service
              </div>
              <div className="text-sm font-semibold text-text-primary">{cs.service}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT BACKGROUND ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <SectionHeading title="Project Background" />
              <p className="text-text-secondary text-sm sm:text-[15px] mt-4 leading-[1.7]">{cs.backgroundText}</p>
            </div>
            <div className="overflow-hidden">
              <img src={cs.backgroundImage} alt={cs.title} className="w-full h-64 lg:h-72 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PROJECT CHALLENGES ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Project Challenges" />
          <div className="grid sm:grid-cols-3 gap-5 mt-6">
            {cs.challenges.map((ch, i) => (
              <div key={ch.title} className="bg-white border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 bg-brand-red text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold text-text-primary text-[15px]">{ch.title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ VALVE SOLUTION ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Valve Solution" />
          <div className="grid lg:grid-cols-2 gap-8 mt-6">
            <p className="text-text-secondary text-sm sm:text-[15px] leading-[1.7]">{cs.solutionText}</p>
            <div className="space-y-4">
              {cs.solutionPoints.map((sp) => (
                <div key={sp.title} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-semibold text-text-primary text-sm">{sp.title}:</span>
                    <span className="text-text-secondary text-sm ml-1">{sp.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCTS USED ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <SectionHeading title="Products Used" />
            <Link to="/products" className="text-brand-red text-sm font-semibold hover:underline inline-flex items-center gap-1">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {cs.productsUsed.map((pu) => (
              <div key={pu.id} className="bg-white border border-gray-200 p-5 hover:border-brand-red/30 transition-colors">
                <div className="h-32 bg-gray-50 flex items-center justify-center p-4 mb-4">
                  <img src={pu.image} alt={pu.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h4 className="font-semibold text-text-primary text-[15px]">{pu.name}</h4>
                <p className="text-xs text-text-muted mt-1">{pu.series}</p>
                <p className="text-xs text-text-muted">{pu.size}</p>
                <p className="text-xs text-text-muted">{pu.pressure}</p>
                <Link
                  to={`/products/${pu.id}`}
                  className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold mt-3 hover:underline"
                >
                  View Product <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RESULT / OUTCOME ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Result / Outcome" />
          <div className="grid sm:grid-cols-3 gap-5 mt-6">
            {cs.results.map((r) => (
              <div key={r.label} className="bg-white border border-gray-200 p-6">
                <div className="mb-3">{iconMap[r.icon]}</div>
                {r.value && (
                  <div className="text-2xl font-bold text-text-primary">{r.value}</div>
                )}
                <div className="font-semibold text-text-primary text-[15px] mt-1">{r.label}</div>
                <p className="text-sm text-text-secondary mt-1 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RELATED INDUSTRY ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <SectionHeading title="Related Industry" />
            <Link to="/industries" className="text-brand-red text-sm font-semibold hover:underline inline-flex items-center gap-1">
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {cs.relatedIndustries.map((ri) => (
              <Link
                key={ri.slug}
                to={`/industries/${ri.slug}`}
                className="group relative overflow-hidden h-44"
              >
                <img src={ri.image} alt={ri.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-white font-semibold text-sm">{ri.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 text-white/90 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="text-white font-semibold text-lg">Request a Similar Solution</h3>
                <p className="text-white/80 text-sm">Our engineering team can help you find the right valve solution for your project.</p>
              </div>
            </div>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-white text-brand-red text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
