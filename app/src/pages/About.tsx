import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CTABanner from '../components/CTABanner';

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
    <svg viewBox="0 0 900 440" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      {/* Detailed continental outlines */}
      <g fill="#E8EAED" stroke="#D1D5DB" strokeWidth="0.5">
        {/* North America */}
        <path d="M55,35 L120,28 L175,32 L220,48 L255,70 L270,95 L260,125 L245,140 L230,155 L210,168 L185,172 L160,168 L130,158 L100,145 L75,120 L55,90 L42,60 Z" />
        {/* Alaska */}
        <path d="M25,30 L55,28 L60,42 L45,48 L30,45 Z" />
        {/* Greenland */}
        <path d="M280,22 L320,18 L340,35 L330,52 L300,48 L285,38 Z" />
        {/* South America */}
        <path d="M185,215 L235,208 L265,225 L280,255 L275,290 L260,330 L245,355 L225,365 L205,350 L190,310 L180,270 L178,240 Z" />
        {/* Europe */}
        <path d="M410,55 L445,48 L480,55 L505,72 L515,95 L510,118 L495,132 L470,130 L445,120 L425,105 L412,85 Z" />
        {/* UK */}
        <path d="M390,68 L405,65 L410,78 L400,85 L392,78 Z" />
        {/* Scandinavia */}
        <path d="M460,30 L480,28 L490,45 L485,62 L470,58 L458,45 Z" />
        {/* Africa */}
        <path d="M420,145 L465,138 L505,155 L525,180 L535,210 L530,250 L515,290 L495,315 L470,320 L445,305 L425,270 L415,230 L412,190 Z" />
        {/* Madagascar */}
        <path d="M540,270 L550,268 L555,285 L548,295 L540,285 Z" />
        {/* Russia / North Asia */}
        <path d="M520,28 L620,18 L720,28 L780,48 L820,72 L840,95 L835,120 L810,140 L770,155 L720,160 L670,155 L620,140 L575,115 L540,85 L525,58 Z" />
        {/* Middle East */}
        <path d="M505,130 L535,125 L555,140 L560,158 L545,170 L520,165 L508,150 Z" />
        {/* India */}
        <path d="M620,140 L660,135 L680,155 L685,180 L675,205 L655,215 L635,200 L622,175 Z" />
        {/* Southeast Asia */}
        <path d="M680,165 L710,158 L730,170 L740,190 L725,205 L700,198 L685,185 Z" />
        {/* China */}
        <path d="M640,95 L690,88 L735,95 L758,115 L755,140 L735,155 L700,152 L665,140 L642,120 Z" />
        {/* Korea */}
        <path d="M738,108 L752,105 L758,118 L748,125 L740,118 Z" />
        {/* Japan */}
        <path d="M768,85 L785,82 L792,100 L785,115 L775,108 Z" />
        {/* Indonesia / islands */}
        <path d="M680,225 L720,220 L745,230 L740,245 L710,240 L685,235 Z" />
        <path d="M750,240 L775,235 L785,248 L775,258 L755,252 Z" />
        {/* Philippines */}
        <path d="M745,175 L758,172 L762,188 L752,198 L744,188 Z" />
        {/* Australia */}
        <path d="M720,280 L780,272 L810,280 L825,300 L820,325 L800,340 L765,345 L735,335 L718,310 Z" />
        {/* New Zealand */}
        <path d="M840,320 L855,318 L860,335 L850,345 L838,335 Z" />
        {/* Papua New Guinea */}
        <path d="M780,255 L810,250 L818,265 L805,275 L785,268 Z" />
      </g>

      {/* Dashed connection lines from Asia Pacific hub */}
      <g stroke="#DC2626" strokeWidth="1.2" strokeDasharray="5 4" opacity="0.45" fill="none">
        <line x1="730" y1="170" x2="490" y2="100" />
        <line x1="730" y1="170" x2="530" y2="165" />
        <line x1="730" y1="170" x2="480" y2="245" />
        <line x1="730" y1="170" x2="260" y2="285" />
        <line x1="730" y1="170" x2="800" y2="310" />
      </g>

      {/* Region pins */}
      <g>
        {/* Europe */}
        <circle cx="490" cy="100" r="5.5" fill="#DC2626" />
        <circle cx="490" cy="100" r="10" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="505" y="104" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Europe</text>
        {/* Middle East */}
        <circle cx="530" cy="165" r="5.5" fill="#DC2626" />
        <circle cx="530" cy="165" r="10" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="545" y="169" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Middle East</text>
        {/* Africa */}
        <circle cx="480" cy="245" r="5.5" fill="#DC2626" />
        <circle cx="480" cy="245" r="10" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="495" y="249" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Africa</text>
        {/* Asia Pacific (hub - larger) */}
        <circle cx="730" cy="170" r="7" fill="#DC2626" />
        <circle cx="730" cy="170" r="13" fill="none" stroke="#DC2626" strokeWidth="1.5" opacity="0.35" />
        <text x="748" y="174" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">Asia Pacific</text>
        {/* South America */}
        <circle cx="260" cy="285" r="5.5" fill="#DC2626" />
        <circle cx="260" cy="285" r="10" fill="none" stroke="#DC2626" strokeWidth="1" opacity="0.3" />
        <text x="200" y="289" fontSize="12" fill="#374151" fontWeight="500" fontFamily="system-ui">South America</text>
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <div className="pt-[72px]">

      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 420, maxHeight: 500 }}>
        <div className="absolute inset-0">
          <img src="/images/about-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-1 mb-4">
            <span className="text-red-400 text-lg font-light">[</span>
            <span className="text-brand-red text-[11px] font-semibold tracking-[0.12em] uppercase">
              About Haiyue Valve Industrial
            </span>
          </div>
          <h1 className="text-3xl lg:text-[2.5rem] font-bold text-white leading-[1.1] tracking-tight max-w-lg">
            About Haiyue Valve Industrial
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
            Reliable valve manufacturing partner for overseas buyers, distributors, and project suppliers.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 h-[44px] px-6 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/factory"
              className="inline-flex items-center gap-2 h-[44px] px-6 border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              View Factory Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ COMPANY SNAPSHOT ═══════ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left */}
            <div className="lg:w-[40%]">
              <h2 className="text-xl lg:text-[1.4rem] font-bold text-text-primary tracking-tight mb-5">
                Company Snapshot
              </h2>
              <p className="text-sm text-text-secondary leading-[1.7] mb-10">
                Haiyue Valve Industrial is a Zhejiang-based valve manufacturer supplying ball valves, gate valves, globe valves, butterfly valves, check valves, and strainers for water treatment, chemical processing, HVAC, and general industrial pipeline applications.
              </p>
              {/* Proof Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <circle cx="12" cy="12" r="3"/><path d="M12 2V5"/><path d="M12 19V22"/><path d="M2 12H5"/><path d="M19 12H22"/><path d="M4.93 4.93L7.05 7.05"/><path d="M16.95 16.95L19.07 19.07"/><path d="M4.93 19.07L7.05 16.95"/><path d="M16.95 7.05L19.07 4.93"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Main Valve<br/>Products</div>
                </div>
                <div className="text-center p-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Export Order<br/>Support</div>
                </div>
                <div className="text-center p-4">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red mx-auto mb-3">
                    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
                  </svg>
                  <div className="text-xs font-semibold text-text-primary leading-tight">Quality<br/>Focus</div>
                </div>
              </div>
            </div>

            {/* Right: Image Collage */}
            <div className="lg:w-[60%]">
              <div className="flex gap-3 h-80">
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
          <div className="relative">
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
        </div>
      </section>

      {/* ═══════ PEOPLE BEHIND HAIYUE ═══════ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-[1.4rem] font-bold text-text-primary tracking-tight mb-10">
            People Behind Haiyue
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
              <WorldMap />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
