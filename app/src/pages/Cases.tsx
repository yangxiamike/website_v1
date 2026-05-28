import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Factory, Search } from 'lucide-react';
import { caseStudies, filterCategories } from '../data/cases';

export default function Cases() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get('category') || 'all';

  const filtered = useMemo(() => {
    if (activeFilter === 'all') return caseStudies;
    return caseStudies.filter((c) => c.industrySlug === activeFilter);
  }, [activeFilter]);

  const setFilter = (id: string) => {
    if (id === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: id });
    }
  };

  return (
    <div className="pt-[80px]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 320 }}>
        <div className="absolute inset-0">
          <img src="/images/cases-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <h1 className="text-3xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Case Studies
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
            Sample valve supply scenarios across water treatment, chemical processing, oil & gas, HVAC, and industrial pipelines.
          </p>
        </div>
      </section>

      {/* ═══════ FILTER BAR ═══════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 text-sm font-medium border transition-colors ${
                  activeFilter === cat.id
                    ? 'bg-brand-red text-white border-brand-red'
                    : 'bg-white text-text-secondary border-gray-200 hover:border-brand-red hover:text-brand-red'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CASE CARDS ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {filtered.map((cs) => (
              <div
                key={cs.id}
                className="flex flex-col lg:flex-row gap-0 border border-gray-200 hover:border-brand-red/30 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/40 group"
              >
                {/* Image */}
                <div className="lg:w-[50%] flex-shrink-0 overflow-hidden">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="lg:w-[50%] p-6 lg:p-8 flex flex-col justify-center">
                  <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="text-xl lg:text-[1.4rem] font-bold text-text-primary mt-2 leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-text-muted mt-1 font-medium">{cs.subtitle}</p>
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed line-clamp-3">
                    {cs.description}
                  </p>

                  {/* Meta Row */}
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mt-5">
                    <div className="flex items-center gap-2">
                      <Factory className="w-4 h-4 text-brand-red" />
                      <div>
                        <div className="text-[11px] text-text-muted uppercase tracking-wider">Industry</div>
                        <div className="text-xs text-text-primary font-medium">{cs.industry}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="text-[11px] text-text-muted uppercase tracking-wider">Location</div>
                        <div className="text-xs text-text-primary font-medium">{cs.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div>
                        <div className="text-[11px] text-text-muted uppercase tracking-wider">Application</div>
                        <div className="text-xs text-text-primary font-medium">{cs.application}</div>
                      </div>
                    </div>
                  </div>

                  {/* Products Supplied */}
                  <div className="mt-4">
                    <div className="text-[11px] text-text-muted uppercase tracking-wider mb-2">Products Supplied</div>
                    <div className="flex flex-wrap gap-2">
                      {cs.productsSupplied.map((p) => (
                        <span key={p} className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs text-text-secondary">{p}</span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-5">
                    <Link
                      to={`/cases/${cs.id}`}
                      className="inline-flex items-center gap-2 h-[40px] px-5 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
                    >
                      Read Case Study <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 text-center text-sm text-text-muted">
            Showing {filtered.length} sample project scenario{filtered.length === 1 ? '' : 's'}.
          </div>
        </div>
      </section>

      {/* ═══════ EXPLORE SOLUTIONS ═══════ */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight">
                Explore Solutions for Your Industry
              </h2>
              <p className="text-text-secondary text-sm mt-2 max-w-md">
                Discover how Haiyue Valve products are engineered for reliability and performance across a wide range of industries.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/industries"
                className="inline-flex items-center gap-2 h-[48px] px-6 border border-gray-300 text-text-primary text-sm font-medium hover:border-brand-red hover:text-brand-red transition-colors bg-white"
              >
                <Factory className="w-4 h-4" /> Browse by Industry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 h-[48px] px-6 border border-gray-300 text-text-primary text-sm font-medium hover:border-brand-red hover:text-brand-red transition-colors bg-white"
              >
                <Search className="w-4 h-4" /> Explore Our Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
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
                <h3 className="text-white font-semibold text-lg">Have a similar project?</h3>
                <p className="text-white/80 text-sm">Our engineering team can help you find the right valve solution.</p>
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
    </div>
  );
}
