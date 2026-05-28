import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronRight, ChevronLeft,
  ShieldCheck, FileCheck, ClipboardCheck, PackageCheck,
} from 'lucide-react';
import { products, industries, newsArticles } from '../data';
import CTABanner from '../components/CTABanner';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6 },
};

/* ═══ Hero Stats Data ═══ */
const heroStats = [
  { icon: ShieldCheck,     value: '10+',      label: 'Years Export',      desc: 'Export experience' },
  { icon: FileCheck,       value: '6+',       label: 'Product Types',     desc: 'Valve categories' },
  { icon: ClipboardCheck,  value: '5',        label: 'Test Stations',     desc: 'Pressure & inspection' },
  { icon: ShieldCheck,     value: '24h',      label: 'Response',          desc: 'Quote reply time' },
  { icon: PackageCheck,    value: 'ISO 9001', label: 'Certified',         desc: 'Quality system' },
];

/* ═══ Why Choose Data ═══ */
const whyCards = [
  {
    icon: ClipboardCheck,
    title: 'Quality Control Before Shipment',
    desc: 'Incoming material check, in-process inspection, pressure testing, and final packing verification for every batch.',
  },
  {
    icon: FileCheck,
    title: 'Certification & Compliance Support',
    desc: 'Manufacturing aligned with ANSI/ASME, DIN/EN, API, and JIS standards. Test reports and documentation prepared per order.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Confirmation',
    desc: 'Our engineering team reviews your specifications to confirm valve type, material, pressure rating, and connection suitability.',
  },
  {
    icon: PackageCheck,
    title: 'Export-ready Delivery',
    desc: 'Packing in carton, plywood case, or pallet. Neutral or OEM marking. Export documentation prepared for smooth customs clearance.',
  },
];

/* ═══ Case Studies Data ═══ */
const caseStudiesData = [
  {
    id: 'municipal-water-supply-infrastructure',
    title: 'Municipal Water Supply Infrastructure',
    description: 'Supplied resilient seated gate valves and butterfly valves for a municipal water treatment facility upgrade. Products manufactured to EN standards with pressure test reports.',
    image: '/images/industry-water.jpg',
    industry: 'Water Treatment',
    products: ['Gate Valve', 'Butterfly Valve'],
  },
  {
    id: 'chemical-processing-pipeline-upgrade',
    title: 'Chemical Processing Pipeline Upgrade',
    description: 'Provided stainless steel ball valves and check valves for chemical fluid handling lines. Materials selected per medium compatibility requirements.',
    image: '/images/industry-chemical.jpg',
    industry: 'Chemical Processing',
    products: ['Ball Valve', 'Check Valve'],
  },
  {
    id: 'oil-gas-valve-supply-project',
    title: 'Oil & Gas Valve Supply Project',
    description: 'Delivered a batch of flanged ball valves and globe valves for an oil refinery maintenance project. Coordinated pressure class and end connection requirements.',
    image: '/images/industry-oil-gas.jpg',
    industry: 'Oil & Gas',
    products: ['Ball Valve', 'Globe Valve'],
  },
];

/* ═══ Section CTA Button ═══ */
function SectionCTA({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
    >
      {children} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

/* ═══ Card-level CTA Link ═══ */
function CardCTA({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 text-brand-red text-sm font-semibold">
      {children} <ChevronRight className="w-4 h-4" />
    </span>
  );
}

/* ═══ Industries Scroll Track ═══ */
function ScrollTrack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const update = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft < max - 10);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const frame = window.requestAnimationFrame(update);
    el.addEventListener('scroll', update, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      el.removeEventListener('scroll', update);
    };
  }, []);

  const scroll = (dir: number) => {
    ref.current?.scrollBy({ left: dir * 400, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {showLeft && (
        <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors" aria-label="Scroll left">
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}
      {showRight && (
        <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow border border-gray-200 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors" aria-label="Scroll right">
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
      <div ref={ref} className="flex gap-5 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
        {children}
      </div>
      <div className="h-0.5 bg-gray-200 mt-2">
        <div className="h-full bg-brand-red transition-all duration-300" style={{ width: `${Math.max(8, progress * 100)}%` }} />
      </div>
    </div>
  );
}

/* ═══════════════════════════ HOME ═══════════════════════════ */
export default function Home() {
  return (
    <div>

      {/* ═══════ HERO: true full-screen ═══════ */}
      <section className="relative overflow-hidden" style={{ height: 'calc(100dvh - 80px)', minHeight: 560 }}>
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/images/hero-factory.png" alt="Haiyue Valve factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[58rem]"
              >
                <h1 className="max-w-[14ch] text-3xl font-bold leading-[1.04] tracking-tight text-white sm:text-[3rem] lg:text-[3.7rem]">
                  Industrial Valve Manufacturer & Export Partner
                </h1>
                <p className="text-white/70 text-base sm:text-lg mt-5 max-w-lg leading-relaxed">
                  Ball, gate, globe, butterfly, check valves and strainers for water treatment, chemical, oil & gas, and HVAC applications.
                </p>
                <div className="flex flex-wrap gap-3 mt-7">
                  <Link to="/request-quote?source=home-hero" className="inline-flex items-center gap-2 h-[50px] px-8 bg-brand-red text-white font-semibold text-sm hover:bg-dark-red transition-colors whitespace-nowrap">
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/request-quote?source=home-catalog-download" className="inline-flex items-center gap-2 h-[50px] px-8 border border-white/40 text-white font-medium text-sm hover:bg-white/10 transition-colors whitespace-nowrap">
                    Download Catalog
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ═══════ Info Bar — centered, 84% width, heavy stats ═══════ */}
          <div className="flex justify-center pb-6 px-4">
            <div className="w-full sm:w-[84%] max-w-6xl bg-white shadow-lg">
              <div className="grid grid-cols-2 sm:flex sm:overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1 flex items-center gap-3 px-4 sm:gap-3.5 sm:px-7 ${
                      i < heroStats.length - 1 ? 'sm:border-r sm:border-gray-100' : ''
                    } ${
                      i % 2 === 0 && i < heroStats.length - 1 ? 'border-r border-gray-100' : ''
                    } ${
                      i < heroStats.length - 1 ? 'border-b border-gray-100 sm:border-b-0' : ''
                    } ${
                      i === heroStats.length - 1 ? 'col-span-2 justify-center border-r-0 sm:justify-start' : ''
                    }`}
                    style={{ minHeight: 104 }}
                  >
                    <stat.icon className="w-8 h-8 text-brand-red flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-2xl sm:text-[32px] font-bold text-text-primary leading-none">{stat.value}</div>
                      <div className="text-[13px] font-medium text-text-secondary mt-1 leading-tight">{stat.label}</div>
                      <div className="text-[11px] text-text-muted leading-tight">{stat.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCT RANGE — 3×2 grid, one screen ═══════ */}
      <section className="bg-white py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Title Row */}
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight">Product Range</h2>
              <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-lg">
                Six core valve categories covering common industrial pipeline applications.
              </p>
            </div>
            <div className="hidden sm:block">
              <SectionCTA to="/products">View All Products</SectionCTA>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="group grid grid-cols-[44%_1fr] min-h-[190px] bg-white border border-gray-200 hover:border-brand-red/40 transition-all duration-300 hover:shadow-md overflow-hidden">
                  <Link
                    to={`/products?type=${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="bg-surface flex items-center justify-center p-4 border-r border-gray-100 overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="block h-auto w-auto max-h-[170px] max-w-[94%] object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-4 flex min-w-0 flex-col justify-center">
                    <h3 className="font-semibold text-text-primary text-[15px] group-hover:text-brand-red transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-2 leading-relaxed">
                      {product.size} &middot; {product.pressure}
                    </p>
                    <p className="text-xs text-text-secondary mt-2 leading-relaxed line-clamp-2">
                      {product.shortDesc}
                    </p>
                    <div className="mt-3">
                      <Link to={`/products?type=${product.id}`} className="inline-block">
                        <CardCTA>View</CardCTA>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="sm:hidden mt-6">
            <SectionCTA to="/products">View All Products</SectionCTA>
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRIES SERVED — light gray ═══════ */}
      <section className="bg-surface py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight">Industries Served</h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl leading-relaxed">
              Valve solutions for water treatment, chemical processing, oil & gas, and HVAC systems.
            </p>
            <div className="mt-4">
              <SectionCTA to="/industries">Explore All Industries</SectionCTA>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <ScrollTrack>
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={industry.route || `/industries/${industry.id}`}
                  className="group relative flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333%-14px)] overflow-hidden"
                  style={{ height: 400 }}
                >
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                    <h3 className="text-white font-bold text-xl sm:text-2xl">{industry.name}</h3>
                    <p className="text-white/70 text-sm mt-2 max-w-sm leading-relaxed line-clamp-2">
                      {industry.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-white font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </ScrollTrack>
          </motion.div>
        </div>
      </section>

      {/* ═══════ ABOUT HAIYUE VALVE — white, Bray style, left text right image ═══════ */}
      <section className="bg-white py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            {...fadeInUp}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* Left: Text */}
            <div className="lg:pr-4">
              <span className="text-brand-red text-xs font-semibold tracking-[0.12em] uppercase">About Haiyue Valve</span>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mt-3 leading-snug tracking-tight">
                Zhejiang-based Industrial Valve Manufacturer
              </h2>
              <p className="text-text-secondary text-sm sm:text-[15px] mt-5 leading-[1.7]">
                Zhejiang Haiyue Valve is an industrial valve manufacturer with experience in valve production, export support, and project-based supply for overseas buyers. The company focuses on ball valves, gate valves, globe valves, butterfly valves, check valves, and strainers, serving water treatment, chemical processing, oil & gas, HVAC, and general industrial pipeline applications. With manufacturing support, inspection before shipment, and export documentation coordination, Haiyue helps buyers source reliable valve products for standard and customized requirements.
              </p>
              <div className="mt-7">
                <SectionCTA to="/about">Learn About Haiyue</SectionCTA>
              </div>
            </div>
            {/* Right: Image */}
            <div className="overflow-hidden" style={{ height: 420 }}>
              <img
                src="/images/factory-cnc.jpg"
                alt="Haiyue Valve manufacturing"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHY HAIYUE VALVE — light gray ═══════ */}
      <section className="bg-surface py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight">Why Haiyue Valve</h2>
            <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
              Practical support across the entire procurement process—from specification confirmation to export delivery.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-white p-6 border border-gray-200 hover:border-brand-red/40 transition-all duration-300 flex flex-col"
              >
                <card.icon className="w-7 h-7 text-brand-red mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-text-primary text-[15px] leading-snug mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed flex-1">
                  {card.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <CardCTA>Learn More</CardCTA>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CASE STUDIES — white ═══════ */}
      <section className="bg-white py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight">Case Studies</h2>
              <p className="text-text-secondary text-sm sm:text-base mt-2 max-w-xl">
                Sample project scenarios showing how Haiyue Valve supports different industrial applications.
              </p>
            </div>
            <div className="hidden sm:block">
              <SectionCTA to="/cases">View All Cases</SectionCTA>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {caseStudiesData.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link to={`/cases/${cs.id}`} className="group block bg-white border border-gray-200 hover:border-brand-red/40 transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  {/* Image — fixed height */}
                  <div className="h-[240px] overflow-hidden flex-shrink-0">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-brand-red text-[11px] font-semibold tracking-wider uppercase">{cs.industry}</span>
                    <h3 className="font-semibold text-text-primary text-[15px] mt-1.5 leading-snug group-hover:text-brand-red transition-colors">
                      {cs.title}
                    </h3>
                    <p className="text-sm text-text-muted mt-2 leading-relaxed line-clamp-3 flex-1">
                      {cs.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {cs.products.map((p) => (
                        <span key={p} className="px-2 py-0.5 bg-surface text-text-muted text-[11px]">{p}</span>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <CardCTA>Read Case Study</CardCTA>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <SectionCTA to="/cases">View All Cases</SectionCTA>
          </div>
        </div>
      </section>

      {/* ═══════ LATEST RESOURCES — light gray ═══════ */}
      <section className="bg-surface py-[72px] lg:py-[96px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div {...fadeInUp} className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary tracking-tight">Latest Resources</h2>
              <p className="text-text-secondary text-sm mt-2">Technical guides and industry insights.</p>
            </div>
            <div className="hidden sm:block">
              <SectionCTA to="/resources">View All Resources</SectionCTA>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {newsArticles.map((article, i) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group"
              >
                <Link to="/resources" className="block bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                  <div className="h-[240px] overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <span className="text-brand-red text-[11px] font-semibold tracking-wider uppercase">{article.category}</span>
                    <h4 className="font-semibold text-text-primary text-[15px] leading-snug mt-1.5 group-hover:text-brand-red transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-xs text-text-muted mt-2">{article.date}</p>
                    <div className="mt-auto pt-4">
                      <CardCTA>Read More</CardCTA>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <SectionCTA to="/resources">View All Resources</SectionCTA>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
