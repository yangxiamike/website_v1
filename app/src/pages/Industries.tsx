import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { industries, products } from '../data';
import CTABanner from '../components/CTABanner';

/* Industry icons using simple SVGs */
function WaterIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

function ChemicalIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M9 3L7 17H17L15 3H9Z" />
      <path d="M6 17H18V19C18 20.1 17.1 21 16 21H8C6.9 21 6 20.1 6 19V17Z" />
      <path d="M12 7V13" />
      <path d="M9 10H15" />
    </svg>
  );
}

function OilGasIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M4 22V9L12 2L20 9V22H4Z" />
      <path d="M12 2V9" />
      <path d="M9 13H15" />
    </svg>
  );
}

function HvacIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2V5" />
      <path d="M12 19V22" />
      <path d="M2 12H5" />
      <path d="M19 12H22" />
      <path d="M4.93 4.93L7.05 7.05" />
      <path d="M16.95 16.95L19.07 19.07" />
      <path d="M4.93 19.07L7.05 16.95" />
      <path d="M16.95 7.05L19.07 4.93" />
    </svg>
  );
}

function PowerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  );
}

function PipelineIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
      <path d="M4 22V2" />
      <path d="M20 22V2" />
      <path d="M4 8H20" />
      <path d="M4 16H20" />
    </svg>
  );
}

const industryIcons: Record<string, React.FC> = {
  'water-treatment': WaterIcon,
  'chemical-processing': ChemicalIcon,
  'oil-gas': OilGasIcon,
  'hvac': HvacIcon,
  'power-energy': PowerIcon,
  'general-pipeline': PipelineIcon,
};

const supportItems = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M14 2H6C5.47 2 4.96 2.21 4.59 2.59C4.21 2.96 4 3.47 4 4V20C4 20.53 4.21 21.04 4.59 21.41C4.96 21.79 5.47 22 6 22H18C18.53 22 19.04 21.79 19.41 21.41C19.79 21.04 20 20.53 20 20V8L14 2Z" />
        <path d="M14 2V8H20" />
        <path d="M12 18V12" />
        <path d="M9 15L12 12L15 15" />
      </svg>
    ),
    title: 'Product Selection Support',
    desc: 'We help you choose the right valve type, material, and configuration for your working conditions.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" />
        <path d="M2 12L12 17L22 12" />
      </svg>
    ),
    title: 'Material & Pressure Configuration',
    desc: 'Wide range of material and pressure ratings to match your project requirements.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M9 11L12 14L22 4" />
        <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" />
      </svg>
    ),
    title: 'Testing & Quality Control',
    desc: 'Strict testing procedures ensure reliable performance and long-term durability.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V4C16 3.47 15.79 2.96 15.41 2.59C15.04 2.21 14.53 2 14 2H10C9.47 2 8.96 2.21 8.59 2.59C8.21 2.96 8 3.47 8 4V7" />
        <path d="M12 12V12.01" />
        <path d="M8 12V12.01" />
        <path d="M16 12V12.01" />
      </svg>
    ),
    title: 'Export Packaging & Documentation',
    desc: 'Professional packaging and complete export documentation for global delivery.',
  },
];

export default function Industries() {
  return (
    <div className="pt-[72px]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 360 }}>
        <div className="absolute inset-0">
          <img src="/images/case-oil-gas.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
          <div className="text-brand-red text-xs font-semibold tracking-wider uppercase mb-3">INDUSTRIES</div>
          <h1 className="text-3xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-4 max-w-md leading-relaxed">
            Reliable valve solutions for the industries that keep the world moving.
          </p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="inline-flex items-center gap-2 h-[48px] px-7 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">
              View Recommended Valves <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══════ INDUSTRY CARDS ═══════ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => {
              const IconComp = industryIcons[ind.id];
              return (
                <Link
                  key={ind.id}
                  to={ind.route || `/industries/${ind.id}`}
                  className="group block border border-gray-200 hover:border-brand-red/40 transition-all duration-300 hover:shadow-lg hover:shadow-gray-200/40"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={ind.image}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      {IconComp && <IconComp />}
                      <h3 className="font-bold text-text-primary text-base group-hover:text-brand-red transition-colors">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{ind.shortDesc}</p>
                    <div className="mt-3 text-brand-red">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ HOW HAIYUE SUPPORTS ═══════ */}
      <section className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-8">
            How Haiyue Supports Industrial Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportItems.map((item) => (
              <div key={item.title}>
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-semibold text-text-primary text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RECOMMENDED PRODUCT GROUPS ═══════ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight mb-8">
            Recommended Product Groups
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {products.map((prod) => (
              <Link
                key={prod.id}
                to={`/products?type=${prod.category}`}
                className="group flex flex-col items-center text-center p-4 border border-gray-200 hover:border-brand-red/40 transition-all duration-300"
              >
                <div className="w-full aspect-square bg-gray-50 flex items-center justify-center p-3 mb-3">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-semibold text-text-primary text-sm group-hover:text-brand-red transition-colors">
                  {prod.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-red mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="text-white font-semibold text-lg">Need valves for your industry project?</h3>
                <p className="text-white/80 text-sm">Our team will help recommend the right valve configuration for your working conditions.</p>
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
