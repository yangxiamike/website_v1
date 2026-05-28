import CTABanner from '../components/CTABanner';
import { CTAButton, PageHero, SectionHeading } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';

const stats = [
  { value: '50,000', unit: 'm\u00B2', label: 'Workshop Area' },
  { value: '120,000+', unit: '', label: 'Annual Capacity' },
  { value: '36', unit: '', label: 'Quality Checkpoints' },
  { value: 'ISO 9001', unit: '', label: 'Quality System' },
];

const certificates = [
  { image: '/images/cert-iso9001.jpg', label: 'ISO 9001' },
  { image: '/images/cert-ce.jpg', label: 'CE Certificate' },
  { image: '/images/cert-testreport.jpg', label: 'Test Report' },
];

const processSteps = [
  { num: '01', title: 'Material Check', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>
  )},
  { num: '02', title: 'Machining', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
  )},
  { num: '03', title: 'Assembly', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/><path d="M8 16l4-4"/><path d="M16 8l-2 2"/></svg>
  )},
  { num: '04', title: 'Pressure Testing', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M12 22c4.97 0 9-4.03 9-9-4.5 0-9-9-9-9s-4.5 9-9 9c0 4.97 4.03 9 9 9z"/></svg>
  )},
  { num: '05', title: 'Packing & Documentation', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  )},
];

const capabilities = [
  {
    image: '/images/factory-cnc.jpg',
    title: 'CNC Machining',
    desc: 'High-precision machining for valve bodies, stems and critical components.',
    bullets: ['Advanced CNC equipment', 'Tight tolerance control'],
  },
  {
    image: '/images/factory-assembly.jpg',
    title: 'Assembly Line',
    desc: 'Standardized assembly for ball, gate, globe, check and butterfly valves.',
    bullets: ['Skilled assembly team', 'Process consistency'],
  },
  {
    image: '/images/factory-testing.jpg',
    title: 'Testing & Inspection',
    desc: 'Comprehensive testing to ensure performance, safety and reliability.',
    bullets: ['Pressure & leakage testing', 'Dimensional inspection'],
  },
  {
    image: '/images/factory-warehouse.jpg',
    title: 'Warehouse & Export Packing',
    desc: 'Secure storage and export-ready packing for global delivery.',
    bullets: ['Export-standard packing', 'Safe and timely delivery'],
  },
];

export default function Factory() {
  return (
    <div className="pt-[80px]">
      <PageHero
        {...pageHeroes.factory}
        ctas={(
          <>
            <CTAButton to="/request-quote">Request a Quote</CTAButton>
          </>
        )}
      />

      {/* ═══════ STATS BAR ═══════ */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white shadow-lg grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center py-6 px-4 border-r border-gray-100 last:border-r-0">
                <div className="text-xl lg:text-[1.6rem] font-bold text-text-primary tracking-tight">
                  {s.value}
                  {s.unit && <span className="text-sm font-normal text-text-muted ml-0.5">{s.unit}</span>}
                </div>
                <div className="text-xs text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CERTIFICATES & STANDARDS ═══════ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Text */}
            <div className="lg:w-[35%] flex-shrink-0">
              <SectionHeading title="Certificates & Standards" description="Our quality management system and products are certified by international authorities, ensuring consistent performance, safety and compliance in every delivery." />
            </div>
            {/* Right: Certificate Images */}
            <div className="lg:w-[65%] flex-shrink-0">
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {certificates.map((cert) => (
                  <div key={cert.label} className="text-center">
                    <div className="border border-gray-200 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.label}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    </div>
                    <p className="text-xs text-text-muted mt-2 font-medium">{cert.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ INTEGRATED WORKSHOP OVERVIEW ═══════ */}
      <section id="capabilities" className="bg-gray-50 py-12 lg:py-16 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left: Text */}
            <div className="lg:w-[35%] flex-shrink-0 py-2">
              <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-4">
                Integrated Workshop Overview
              </h2>
              <p className="text-sm text-text-secondary leading-[1.7] mb-6">
                Our integrated manufacturing facility brings together advanced machining, assembly and testing under one roof to ensure efficiency, precision and consistent quality.
              </p>
              <CTAButton to="/factory#capabilities">
                View Factory Tour
              </CTAButton>
            </div>
            {/* Right: Image Grid */}
            <div className="lg:w-[65%] flex-shrink-0">
              <div className="flex flex-col gap-3 sm:h-80 sm:flex-row">
                {/* Large image */}
                <div className="overflow-hidden sm:w-[60%] sm:flex-shrink-0">
                  <img
                    src="/images/factory-cnc.jpg"
                    alt="CNC Machining Workshop"
                    className="h-56 w-full object-cover sm:h-full"
                  />
                  <div className="bg-text-primary px-3 py-1.5">
                    <span className="text-white text-xs font-medium">CNC Machining Workshop</span>
                  </div>
                </div>
                {/* Two small images stacked */}
                <div className="flex flex-col gap-3 sm:w-[40%]">
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/images/factory-assembly.jpg"
                      alt="Assembly Line"
                      className="h-40 w-full object-cover sm:h-full"
                    />
                    <div className="bg-text-primary px-3 py-1">
                      <span className="text-white text-[11px] font-medium">Assembly Line</span>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <img
                      src="/images/factory-testing.jpg"
                      alt="Testing Area"
                      className="h-40 w-full object-cover sm:h-full"
                    />
                    <div className="bg-text-primary px-3 py-1">
                      <span className="text-white text-[11px] font-medium">Testing Area</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PRODUCTION PROCESS ═══════ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Production Process" align="center" className="mb-8" />
          <div className="grid grid-cols-1 gap-0 border border-gray-200 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`text-center py-6 px-3 ${i < processSteps.length - 1 ? 'border-b border-gray-200 sm:border-r lg:border-b-0' : ''} ${i === 1 || i === 3 ? 'sm:border-r-0 lg:border-r' : ''}`}
              >
                <div className="flex justify-center mb-3">{step.icon}</div>
                <div className="text-brand-red text-xs font-bold mb-1">{step.num}</div>
                <div className="text-sm font-semibold text-text-primary">{step.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CORE FACTORY CAPABILITIES ═══════ */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading title="Core Factory Capabilities" className="mb-8" />
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex flex-col gap-0 border border-gray-200 bg-white overflow-hidden sm:flex-row">
                {/* Image */}
                <div className="sm:w-[40%] sm:flex-shrink-0">
                  <img src={cap.image} alt={cap.title} className="h-44 w-full object-cover sm:h-full sm:min-h-[200px]" />
                </div>
                {/* Content */}
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="font-bold text-text-primary text-[15px] mb-2">{cap.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{cap.desc}</p>
                  <ul className="space-y-1.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="text-sm text-text-secondary flex items-center gap-2">
                        <svg className="w-3.5 h-3.5 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                <h3 className="text-white font-semibold text-lg">Send Us Your Valve Specifications</h3>
                <p className="text-white/80 text-sm">Our engineers will review and provide the best solution for your application.</p>
              </div>
            </div>
            <CTAButton to="/request-quote" variant="light">
              Request a Quote
            </CTAButton>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
