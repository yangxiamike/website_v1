import CTABanner from '../components/CTABanner';
import { CTAButton, MobileMarquee, MobileRail, MobileCardShell, PageHero, SectionHeading, StatBar } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';
import { Factory as FactoryIcon, PackageCheck, ClipboardCheck, ShieldCheck } from 'lucide-react';

const stats = [
  { icon: FactoryIcon, value: '50,000', unit: 'm\u00B2', label: 'Workshop Area', desc: 'Integrated facility' },
  { icon: PackageCheck, value: '120,000+', unit: '', label: 'Annual Capacity', desc: 'Valve output volume' },
  { icon: ClipboardCheck, value: '36', unit: '', label: 'Quality Checkpoints', desc: 'Inspection workflow' },
  { icon: ShieldCheck, value: 'ISO 9001', unit: '', label: 'Quality System', desc: 'Certified process' },
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
    <div className="overflow-x-hidden pt-[80px]">
      <PageHero
        {...pageHeroes.factory}
        ctas={(
          <>
            <CTAButton to="/request-quote">Request for Quote</CTAButton>
          </>
        )}
      />

      {/* ═══════ STATS BAR ═══════ */}
      <section className="relative z-10 -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MobileMarquee
            items={stats}
            getKey={(stat) => stat.label}
            innerClassName="gap-2.5"
            renderItem={(s) => (
              <StatBar
                icon={s.icon}
                value={
                  <>
                    {s.value}
                    {s.unit && <span className="ml-0.5 text-[10px] font-normal text-text-muted">{s.unit}</span>}
                  </>
                }
                label={s.label}
                description={s.desc}
                className="min-w-[158px] px-3 py-3"
              />
            )}
          />
          <div className="hidden bg-white shadow-lg sm:grid sm:grid-cols-2 md:grid-cols-4">
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
          <div className="sm:hidden">
            <SectionHeading title="Certificates & Standards" description="Our quality management system and products are certified by international authorities, ensuring consistent performance, safety and compliance in every delivery." />
            <MobileRail className="mt-8">
              {certificates.map((cert) => (
                <div key={cert.label} className="w-[46vw] min-w-[168px] max-w-[196px] text-center">
                  <div className="overflow-hidden border border-gray-200 bg-white">
                    <img
                      src={cert.image}
                      alt={cert.label}
                      className="aspect-[2/3] w-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-[11px] font-medium text-text-muted">{cert.label}</p>
                </div>
              ))}
            </MobileRail>
          </div>
          <div className="hidden flex-col items-start gap-10 sm:flex lg:flex-row">
            {/* Left: Text */}
            <div className="lg:w-[35%] lg:flex-shrink-0">
              <SectionHeading title="Certificates & Standards" description="Our quality management system and products are certified by international authorities, ensuring consistent performance, safety and compliance in every delivery." />
            </div>
            {/* Right: Certificate Images */}
            <div className="min-w-0 lg:w-[65%] lg:flex-shrink-0">
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
          <div className="sm:hidden">
            <h2 className="text-xl font-bold text-text-primary tracking-tight mb-4">
              Integrated Workshop Overview
            </h2>
            <p className="text-sm text-text-secondary leading-[1.7] mb-6">
              Our integrated manufacturing facility brings together advanced machining, assembly and testing under one roof to ensure efficiency, precision and consistent quality.
            </p>
            <CTAButton to="/factory#capabilities">
              View Factory Tour
            </CTAButton>
            <div className="mt-8 overflow-x-auto pb-1 [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
              <div className="flex w-max gap-4 pr-4">
                <div className="w-[82vw] min-w-[296px] max-w-[360px] overflow-hidden border border-gray-200 bg-white">
                  <img
                    src="/images/factory-cnc.jpg"
                    alt="CNC Machining Workshop"
                    className="h-52 w-full object-cover"
                  />
                  <div className="bg-text-primary px-3 py-2">
                    <span className="text-xs font-medium text-white">CNC Machining Workshop</span>
                  </div>
                </div>
                <div className="w-[82vw] min-w-[296px] max-w-[360px] overflow-hidden border border-gray-200 bg-white">
                  <img
                    src="/images/factory-assembly.jpg"
                    alt="Assembly Line"
                    className="h-52 w-full object-cover"
                  />
                  <div className="bg-text-primary px-3 py-2">
                    <span className="text-xs font-medium text-white">Assembly Line</span>
                  </div>
                </div>
                <div className="w-[82vw] min-w-[296px] max-w-[360px] overflow-hidden border border-gray-200 bg-white">
                  <img
                    src="/images/factory-testing.jpg"
                    alt="Testing Area"
                    className="h-52 w-full object-cover"
                  />
                  <div className="bg-text-primary px-3 py-2">
                    <span className="text-xs font-medium text-white">Testing Area</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden flex-col items-start gap-8 sm:flex lg:flex-row">
            {/* Left: Text */}
            <div className="lg:w-[35%] lg:flex-shrink-0 py-2">
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
            <div className="min-w-0 lg:w-[65%] lg:flex-shrink-0">
              <div className="hidden flex-col gap-3 sm:h-80 sm:flex sm:flex-row">
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
          <MobileRail className="-mx-4 px-4 pb-2 lg:hidden">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="flex w-[64vw] min-w-[210px] max-w-[240px] snap-start flex-col items-center border border-gray-200 bg-white px-4 py-6 text-center"
              >
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <div className="mb-1 text-xs font-bold text-brand-red">{step.num}</div>
                <div className="text-sm font-semibold text-text-primary">{step.title}</div>
              </div>
            ))}
          </MobileRail>
          <div className="hidden grid-cols-1 gap-0 border border-gray-200 lg:grid lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`px-3 py-6 text-center ${i < processSteps.length - 1 ? 'border-r border-gray-200' : ''}`}
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
          <MobileRail>
            {capabilities.map((cap) => (
              <MobileCardShell key={`${cap.title}-mobile`} className="w-[86vw] min-w-[304px] max-w-[360px]">
                <img src={cap.image} alt={cap.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                  <h3 className="mb-2 text-[15px] font-bold text-text-primary">{cap.title}</h3>
                  <p className="mb-3 text-sm leading-relaxed text-text-secondary">{cap.desc}</p>
                  <ul className="space-y-1.5">
                    {cap.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-text-secondary">
                        <svg className="h-3.5 w-3.5 flex-shrink-0 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </MobileCardShell>
            ))}
          </MobileRail>
          <div className="hidden gap-5 sm:grid sm:grid-cols-2">
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

      <CTABanner />
    </div>
  );
}
