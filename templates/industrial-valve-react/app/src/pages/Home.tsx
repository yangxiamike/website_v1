import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldCheck, FileCheck, ClipboardCheck, PackageCheck,
} from 'lucide-react';
import { products, industries, newsArticles } from '../data';
import CTABanner from '../components/CTABanner';
import {
  CardCTA,
  MobileCardShell,
  SectionCTA,
  StatBar,
  StatCard,
  ScrollTrack,
} from '../components/common';

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

/* ═══════════════════════════ HOME ═══════════════════════════ */
export default function Home() {
  const whyCarouselRef = useRef<HTMLDivElement>(null);
  const whyCarouselPauseUntilRef = useRef(0);

  useEffect(() => {
    const el = whyCarouselRef.current;
    if (!el) return;

    let frame = 0;

    const tick = () => {
      if (window.innerWidth < 640) {
        const halfway = el.scrollWidth / 2;

        if (Date.now() >= whyCarouselPauseUntilRef.current) {
          if (el.scrollLeft >= halfway) {
            el.scrollLeft -= halfway;
          } else {
            el.scrollLeft += 0.45;
          }
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  const pauseWhyCarousel = () => {
    whyCarouselPauseUntilRef.current = Date.now() + 1600;
  };

  return (
    <div>

      {/* ═══════ HERO: true full-screen ═══════ */}
      <section className="relative overflow-hidden min-h-[560px] md:min-h-[560px] md:h-[calc(100dvh-80px)]">
        {/* Background */}
        <div className="absolute inset-0">
          <img src="/images/hero-factory.png" alt="Haiyue Valve factory" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex min-h-[560px] flex-col md:h-full">
          <div className="flex flex-1 items-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[58rem] py-10 sm:py-0"
              >
                <h1 className="max-w-[14ch] text-3xl font-bold leading-[1.04] tracking-tight text-white sm:text-[3rem] lg:text-[3.7rem]">
                  Industrial Valve Manufacturer & Export Partner
                </h1>
                <p className="mt-4 max-w-[32rem] text-sm font-semibold leading-relaxed text-white sm:mt-5 sm:text-lg sm:font-normal sm:text-white/75">
                  Ball, gate, globe, butterfly, check valves and strainers for water treatment, chemical, oil & gas, and HVAC applications.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                  <Link to="/request-quote?source=home-hero" className="inline-flex h-[50px] w-full items-center justify-center gap-2 bg-brand-red px-8 text-sm font-semibold text-white transition-colors hover:bg-dark-red sm:w-auto whitespace-nowrap">
                    Request for Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/resources#downloads" className="inline-flex h-[50px] w-full items-center justify-center gap-2 border border-white/40 px-8 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:w-auto whitespace-nowrap">
                    Download Catalog
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="hidden justify-center px-4 pb-6 sm:flex">
            <div className="w-full max-w-6xl bg-white shadow-lg sm:w-[84%]">
              <div className="grid grid-cols-2 sm:flex sm:overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                {heroStats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex-1 ${
                      i < heroStats.length - 1 ? 'sm:border-r sm:border-gray-100' : ''
                    } ${
                      i % 2 === 0 && i < heroStats.length - 1 ? 'border-r border-gray-100' : ''
                    } ${
                      i < heroStats.length - 1 ? 'border-b border-gray-100 sm:border-b-0' : ''
                    } ${
                      i === heroStats.length - 1 ? 'col-span-2 justify-center border-r-0 sm:justify-start' : ''
                    }`}
                  >
                    <StatCard
                      icon={stat.icon}
                      value={stat.value}
                      label={stat.label}
                      description={stat.desc}
                      className={`min-h-[104px] ${
                        i === heroStats.length - 1 ? 'justify-center sm:justify-start' : ''
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-10 pb-6 sm:hidden">
        <div className="w-full overflow-hidden px-4">
          <motion.div
            className="flex w-max gap-3 pb-1 pr-3"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
          >
            {[...heroStats, ...heroStats].map((stat, index) => (
              <StatBar
                key={`${stat.label}-${index}`}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                description={stat.desc}
                className="min-w-[180px]"
              />
            ))}
          </motion.div>
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
          <div className="overflow-x-auto pb-1 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="w-[78vw] min-w-[272px] max-w-[332px]"
                >
                  <MobileCardShell className="group grid grid-cols-1">
                    <Link
                      to={`/products?type=${product.id}`}
                      aria-label={`View ${product.name}`}
                      className="flex min-h-[148px] items-center justify-center overflow-hidden border-b border-gray-100 bg-surface p-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="block h-auto w-auto max-h-[108px] max-w-[92%] object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-col justify-center p-4">
                      <h3 className="text-base font-semibold text-text-primary transition-colors group-hover:text-brand-red">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-text-muted">
                        {product.size} &middot; {product.pressure}
                      </p>
                      <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                        {product.shortDesc}
                      </p>
                      <div className="mt-4">
                        <Link to={`/products?type=${product.id}`} className="inline-block">
                          <CardCTA>View</CardCTA>
                        </Link>
                      </div>
                    </div>
                  </MobileCardShell>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden grid-cols-2 gap-5 md:grid xl:grid-cols-3">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <div className="group grid grid-cols-1 overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:border-brand-red/40 hover:shadow-md md:grid-cols-[44%_1fr] md:min-h-[190px]">
                  <Link
                    to={`/products?type=${product.id}`}
                    aria-label={`View ${product.name}`}
                    className="flex min-h-[120px] items-center justify-center overflow-hidden border-b border-gray-100 bg-surface p-3 md:min-h-0 md:border-b-0 md:border-r md:p-4"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="block h-auto w-auto max-h-[96px] max-w-[92%] object-contain transition-transform duration-500 group-hover:scale-105 md:max-h-[170px] md:max-w-[94%]"
                    />
                  </Link>
                  <div className="flex min-w-0 flex-col justify-center p-3 md:p-4">
                    <h3 className="text-sm font-semibold text-text-primary transition-colors group-hover:text-brand-red md:text-[15px]">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-text-muted md:mt-2 md:text-xs">
                      {product.size} &middot; {product.pressure}
                    </p>
                    <p className="mt-1.5 line-clamp-2 text-[11px] leading-relaxed text-text-secondary md:mt-2 md:text-xs">
                      {product.shortDesc}
                    </p>
                    <div className="mt-3 md:mt-4">
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
            className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
          >
            {/* Left: Text */}
            <div className="order-2 lg:order-1 lg:pr-4">
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
            <div className="order-1 mx-auto h-[220px] w-full max-w-[540px] overflow-hidden sm:h-[280px] lg:order-2 lg:h-[420px] lg:max-w-none">
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

          <div
            ref={whyCarouselRef}
            onTouchStart={pauseWhyCarousel}
            onTouchEnd={pauseWhyCarousel}
            onPointerDown={pauseWhyCarousel}
            onPointerUp={pauseWhyCarousel}
            className="overflow-x-auto pb-1 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]"
          >
            <div className="flex w-max gap-3 pr-4">
              {[...whyCards, ...whyCards].map((card, i) => (
                <motion.div
                  key={`${card.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="flex w-[calc(50vw-22px)] min-w-[170px] max-w-[228px] flex-col border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-brand-red/40"
                >
                  <card.icon className="mb-3 h-6 w-6 text-brand-red" strokeWidth={1.5} />
                  <h3 className="mb-2 text-[14px] font-semibold leading-snug text-text-primary">
                    {card.title}
                  </h3>
                  <p className="flex-1 text-[12px] leading-relaxed text-text-muted">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4">
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

          <div className="overflow-x-auto pb-1 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {caseStudiesData.map((cs, i) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="w-[84vw] min-w-[296px] max-w-[360px]"
                >
                  <Link to={`/cases/${cs.id}`} className="group block h-full">
                    <MobileCardShell className="h-full">
                    <div className="h-[220px] overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-5">
                      <span className="text-brand-red text-[11px] font-semibold tracking-wider uppercase">{cs.industry}</span>
                      <h3 className="mt-1.5 text-[15px] font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-red">
                        {cs.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-muted">
                        {cs.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cs.products.map((p) => (
                          <span key={p} className="bg-surface px-2 py-0.5 text-[11px] text-text-muted">{p}</span>
                        ))}
                      </div>
                      <div className="mt-4 border-t border-gray-100 pt-3">
                        <CardCTA>Read Case Study</CardCTA>
                      </div>
                    </div>
                    </MobileCardShell>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {caseStudiesData.map((cs, i) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link to={`/cases/${cs.id}`} className="group block bg-white border border-gray-200 hover:border-brand-red/40 transition-all duration-300 hover:shadow-md h-full flex flex-col">
                  <div className="h-[240px] overflow-hidden flex-shrink-0">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
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

          <div className="overflow-x-auto pb-1 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {newsArticles.map((article, i) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="group w-[84vw] min-w-[296px] max-w-[360px]"
                >
                  <Link to="/resources" className="block h-full">
                    <MobileCardShell className="h-full hover:-translate-y-1">
                    <div className="h-[220px] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col p-5">
                      <span className="text-brand-red text-[11px] font-semibold tracking-wider uppercase">{article.category}</span>
                      <h4 className="mt-1.5 line-clamp-2 text-[15px] font-semibold leading-snug text-text-primary transition-colors group-hover:text-brand-red">
                        {article.title}
                      </h4>
                      <p className="mt-2 text-xs text-text-muted">{article.date}</p>
                      <div className="mt-4">
                        <CardCTA>Read More</CardCTA>
                      </div>
                    </div>
                    </MobileCardShell>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-3">
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
