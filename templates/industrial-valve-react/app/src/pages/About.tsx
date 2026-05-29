import CTABanner from '../components/CTABanner';
import { CTAButton, PageHero, SectionHeading } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';
import { WORLD_LAND_PATH } from '../data/worldLandPath';

/* ─── Milestones ─── */
const milestones = [
  { year: '2012', title: 'Founded', desc: 'Haiyue Valve Industrial is established in Zhejiang.' },
  { year: '2014', title: 'Product Expansion', desc: 'Expanded product line to include gate, globe, and butterfly valves.' },
  { year: '2016', title: 'Machining & Testing Upgrade', desc: 'Invested in CNC machining and in-house pressure testing.' },
  { year: '2018', title: 'Export Order Growth', desc: 'Began regular exports to Asia and Middle East markets.' },
  { year: '2020', title: 'OEM Support Strengthened', desc: 'Added Y-strainers and check valves for OEM and project needs.' },
  { year: '2022', title: 'Inspection & Packaging Improvement', desc: 'Upgraded inspection process and export packaging standards.' },
  { year: '2024+', title: 'Faster Response & Better Support', desc: 'Continuing to improve lead times and export support service.' },
];

/* ─── People cards ─── */
const people = [
  { image: '/images/factory-assembly.jpg', title: 'Production Support', desc: 'Focus on stable production and smooth delivery.' },
  { image: '/images/about-quality.jpg', title: 'Quality Check', desc: 'Strict inspection and testing to ensure reliable performance.' },
  { image: '/images/about-meeting.jpg', title: 'Export Communication', desc: 'Clear communication and dedicated support for overseas customers.' },
];

/* ─── Export features ─── */
const exportFeatures = [
  { icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
  ), text: 'English quotation support' },
  { icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  ), text: 'Export documentation' },
  { icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
  ), text: 'OEM / neutral packaging' },
  { icon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
  ), text: 'Shipment coordination' },
];

/* ─── Refined World Map SVG ─── */
function WorldMap() {
  return (
    <svg
      viewBox="0 0 900 440"
      className="block w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="export-map-title export-map-desc"
    >
      <title id="export-map-title">Haiyue Valve export reach map</title>
      <desc id="export-map-desc">A world map showing connection lines from Asia Pacific to Europe, Middle East, Africa, South America, and Australia.</desc>
      {/* Natural Earth world land outline */}
      <g fill="#E6E8EC" stroke="#D1D5DB" strokeWidth="0.8" strokeLinejoin="round">
        <path d={WORLD_LAND_PATH} />
      </g>
      {/* Dashed connection lines from Asia Pacific hub */}
      <g stroke="#C8102E" strokeWidth="1.2" strokeDasharray="5 5" opacity="0.42" fill="none">
        <path d="M730 170 C655 145 575 120 490 100" />
        <path d="M730 170 C665 172 600 169 530 165" />
        <path d="M730 170 C645 188 560 218 480 245" />
        <path d="M730 170 C575 195 415 238 260 285" />
        <path d="M730 170 C748 215 775 260 800 310" />
      </g>

      {/* Region pins */}
      <g>
        {/* Europe */}
        <circle cx="490" cy="100" r="11" fill="#C8102E" opacity="0.15" />
        <circle cx="490" cy="100" r="5.5" fill="#C8102E" />
        <circle cx="490" cy="100" r="10" fill="none" stroke="#C8102E" strokeWidth="1" opacity="0.3" />
        <text x="505" y="104" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Europe</text>
        {/* Middle East */}
        <circle cx="530" cy="165" r="11" fill="#C8102E" opacity="0.15" />
        <circle cx="530" cy="165" r="5.5" fill="#C8102E" />
        <circle cx="530" cy="165" r="10" fill="none" stroke="#C8102E" strokeWidth="1" opacity="0.3" />
        <text x="545" y="169" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Middle East</text>
        {/* Africa */}
        <circle cx="480" cy="245" r="11" fill="#C8102E" opacity="0.15" />
        <circle cx="480" cy="245" r="5.5" fill="#C8102E" />
        <circle cx="480" cy="245" r="10" fill="none" stroke="#C8102E" strokeWidth="1" opacity="0.3" />
        <text x="495" y="249" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Africa</text>
        {/* Asia Pacific (hub - larger) */}
        <circle cx="730" cy="170" r="16" fill="#C8102E" opacity="0.16" />
        <circle cx="730" cy="170" r="7" fill="#C8102E" />
        <circle cx="730" cy="170" r="13" fill="none" stroke="#C8102E" strokeWidth="1.5" opacity="0.35" />
        <text x="748" y="174" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Asia Pacific</text>
        {/* South America */}
        <circle cx="260" cy="285" r="11" fill="#C8102E" opacity="0.15" />
        <circle cx="260" cy="285" r="5.5" fill="#C8102E" />
        <circle cx="260" cy="285" r="10" fill="none" stroke="#C8102E" strokeWidth="1" opacity="0.3" />
        <text x="200" y="289" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">South America</text>
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <div className="pt-[80px]">

      <PageHero
        {...pageHeroes.about}
        ctas={(
          <>
            <CTAButton to="/request-quote">Request for Quote</CTAButton>
            <CTAButton to="/factory" variant="ghost">View Factory Capabilities</CTAButton>
          </>
        )}
      />

      {/* ═══════ COMPANY SNAPSHOT ═══════ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="lg:w-[40%]">
              <SectionHeading
                title="Company Snapshot"
                description="Haiyue Valve Industrial is a Zhejiang-based valve manufacturer supplying ball valves, gate valves, globe valves, butterfly valves, check valves, and strainers for water treatment, chemical processing, HVAC, and general industrial pipeline applications."
                className="mb-10"
              />
              {/* Proof Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-200 bg-white p-4 text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <circle cx="12" cy="12" r="3"/><path d="M12 2V5"/><path d="M12 19V22"/><path d="M2 12H5"/><path d="M19 12H22"/><path d="M4.93 4.93L7.05 7.05"/><path d="M16.95 16.95L19.07 19.07"/><path d="M4.93 19.07L7.05 16.95"/><path d="M16.95 7.05L19.07 4.93"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Main Valve<br/>Products</div>
                </div>
                <div className="border border-gray-200 bg-white p-4 text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Export Order<br/>Support</div>
                </div>
                <div className="border border-gray-200 bg-white p-4 text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Quality<br/>Focus</div>
                </div>
              </div>
            </div>

            {/* Right: Image Collage */}
            <div className="lg:w-[60%]">
              <div className="flex h-56 gap-3 sm:h-80">
                <div className="w-[55%] overflow-hidden rounded-sm">
                  <img src="/images/factory-cnc.jpg" alt="Workshop" className="w-full h-full object-cover" />
                </div>
                <div className="w-[45%] flex flex-col gap-3">
                  <div className="flex-1 overflow-hidden rounded-sm">
                    <img src="/images/about-meeting.jpg" alt="Meeting" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 overflow-hidden rounded-sm">
                    <img src="/images/about-export.jpg" alt="Export" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ OUR JOURNEY ═══════ */}
      <section className="bg-gray-50 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-[1.4rem] font-bold text-text-primary tracking-tight text-center mb-12">
            Our Journey
          </h2>
          <div className="relative hidden sm:block">
            {/* Horizontal line */}
            <div className="hidden lg:block absolute top-[6px] left-[3%] right-[3%] h-px bg-gray-300" />
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 gap-x-4">
              {milestones.map((m) => (
                <div key={m.year} className="relative text-center">
                  {/* Red circle on line */}
                  <div className="hidden lg:block absolute -top-[1px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-brand-red border-2 border-gray-50 z-10" />
                  <div className="pt-0 lg:pt-7">
                    <div className="text-brand-red font-bold text-sm mb-1.5">{m.year}</div>
                    <div className="text-xs font-semibold text-text-primary mb-1.5 leading-tight">{m.title}</div>
                    <p className="text-[11px] text-text-muted leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="-mx-4 overflow-x-auto px-4 pb-3 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="relative flex w-max items-start gap-4 pr-10">
              <div className="pointer-events-none absolute left-6 right-8 top-4 h-px bg-gray-300" />
              <div className="pointer-events-none absolute right-4 top-[8px] h-3 w-3 rotate-45 border-r border-t border-gray-300" />
              {milestones.map((m) => (
                <div key={m.year} className="relative w-[31vw] min-w-[168px] max-w-[196px] flex-shrink-0 snap-start pt-10">
                  <div className="absolute left-6 top-[8px] z-10 h-4 w-4 rounded-full border-[3px] border-white bg-brand-red shadow-sm" />
                  <div className="absolute left-[31px] top-[24px] h-10 border-l border-dashed border-gray-300" />
                  <div className="flex min-h-[268px] flex-col border border-gray-200 bg-white px-4 py-5 shadow-sm">
                    <div className="mb-3 text-[1.35rem] font-bold leading-none text-brand-red">{m.year}</div>
                    <div className="mb-4 text-[0.95rem] font-semibold leading-snug text-text-primary">{m.title}</div>
                    <p className="text-[13px] leading-7 text-text-muted">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ PEOPLE BEHIND HAIYUE ═══════ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-[1.4rem] font-bold text-text-primary tracking-tight mb-10">
            People Behind Haiyue
          </h2>
          <div className="overflow-x-auto pb-1 sm:hidden [scrollbar-width:none] [-ms-overflow-style:none] [touch-action:pan-x]">
            <div className="flex w-max gap-4 pr-4">
              {people.map((p) => (
                <div key={p.title} className="w-[82vw] min-w-[296px] max-w-[360px] overflow-hidden rounded-sm border border-gray-200 bg-white">
                  <div className="relative aspect-[4/3]">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h4 className="mb-2 text-xs font-bold tracking-wider text-brand-red uppercase">{p.title}</h4>
                    <p className="text-sm leading-relaxed text-text-secondary">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden gap-5 sm:grid sm:grid-cols-3">
            {people.map((p) => (
              <div key={p.title} className="rounded-sm overflow-hidden">
                {/* Image */}
                <div className="relative" style={{ aspectRatio: '4/3' }}>
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                {/* Text area */}
                <div className="p-5">
                  <h4 className="text-brand-red text-xs font-bold tracking-wider uppercase mb-2">{p.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ EXPORT REACH ═══════ */}
      <section className="bg-gray-50 py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="lg:w-[38%]">
              <h2 className="text-xl lg:text-[1.4rem] font-bold text-text-primary tracking-tight mb-4">
                Export Reach
              </h2>
              <p className="text-sm text-text-secondary leading-[1.7] mb-8">
                Haiyue valves are exported to customers in over 40 countries across 5 continents. We continue to grow with global partners.
              </p>
              <ul className="space-y-0">
                {exportFeatures.map((f, i) => (
                  <li key={f.text} className={`flex items-center gap-3 py-3.5 ${i < exportFeatures.length - 1 ? 'border-b border-gray-200' : ''}`}>
                    <div className="flex-shrink-0">{f.icon}</div>
                    <span className="text-sm text-text-primary">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: World Map */}
            <div className="lg:w-[62%]">
              <div className="w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px] flex items-center">
                <WorldMap />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
