import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Clock, Check } from 'lucide-react';

/* ─── Shared SVG icons ─── */
const icons = {
  products: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M2 7l10-5 10 5-10 5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
  ),
  resources: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
  ),
  contact: (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
  ),
};

/* ─── RFQ variant config ─── */
const rfqConfig = {
  bgImage: '/images/factory-cnc.jpg',
  title: 'Thank You \u2014 Your RFQ Has Been Received',
  description: 'We have received your request for quotation. Our engineering team will review your valve specifications and get back to you within',
  highlight: ' 1 working day.',
  responseTime: 'Typical response time: within 1 working day',
  primaryCta: { label: 'View Products', href: '/products' },
  secondaryCta: { label: 'Back to Home', href: '/' },
  steps: [
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
    ), title: 'Request Received', desc: "We've successfully received your RFQ and all details." },
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="M10 15v2"/><path d="M14 15v-1a2 2 0 00-2-2"/><path d="M16 17h2"/></svg>
    ), title: 'Technical Review', desc: 'Our engineers will review your specifications and requirements.' },
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ), title: 'Quotation Reply', desc: 'We will send you a tailored quotation within 1 working day.' },
  ],
  helpfulLinks: [
    { icon: icons.products, title: 'Products', desc: 'Explore our range of industrial valves.', href: '/products' },
    { icon: icons.resources, title: 'Resources', desc: 'Browse catalogs, datasheets and technical articles.', href: '/resources' },
    { icon: icons.contact, title: 'Contact Us', desc: 'Have questions? Our team is here to help.', href: '/contact' },
  ],
};

/* ─── Contact variant config ─── */
const contactConfig = {
  bgImage: null,
  title: 'Thank You \u2014 Your Message Has Been Sent',
  description: 'We have received your message and appreciate you reaching out to Haiyue Valve. Our team will review your information and get back to you as soon as possible.',
  highlight: null,
  responseTime: 'Typical response time: within 1 business day',
  primaryCta: { label: 'Back to Contact', href: '/contact' },
  secondaryCta: { label: 'Request a Quote', href: '/request-quote' },
  steps: [
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ), title: 'Message Received', desc: "We've received your message successfully." },
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
    ), title: 'Assigned to the Right Team', desc: 'Your inquiry will be reviewed by our specialists.' },
    { icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ), title: 'Reply by Email', desc: "We'll respond to you as soon as possible." },
  ],
  helpfulLinks: [
    { icon: icons.products, title: 'Products', desc: 'Explore our industrial valve solutions.', href: '/products' },
    { icon: icons.resources, title: 'Resources', desc: 'Catalogs, datasheets, certificates & more.', href: '/resources' },
    { icon: icons.contact, title: 'Contact', desc: 'Need to reach us again?\nWe\'re here to help.', href: '/contact' },
  ],
};

export default function ThankYou() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type') || 'rfq';
  const config = type === 'contact' ? contactConfig : rfqConfig;

  return (
    <div className="pt-[80px]">
      {/* ═══════ HERO SECTION ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 420 }}>
        {/* Background */}
        {config.bgImage ? (
          <>
            <div className="absolute inset-0">
              <img src={config.bgImage} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-white/80" />
            </div>
            {/* Blur edges */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gray-50" />
        )}

        {/* Content */}
        <div className={`relative z-20 flex flex-col items-center justify-center text-center px-4 py-14 lg:py-20 ${config.bgImage ? '' : 'bg-gray-50'}`}>
          {/* Green check icon */}
          <div className="w-16 h-16 rounded-full border-2 border-green-500 flex items-center justify-center mb-6">
            <Check className="w-8 h-8 text-green-500" strokeWidth={2.5} />
          </div>

          {/* Title */}
          <h1 className="text-2xl lg:text-[2.25rem] font-bold text-text-primary leading-[1.15] tracking-tight max-w-xl">
            {config.title}
          </h1>

          {/* Description */}
          <p className="text-sm text-text-secondary mt-4 max-w-lg leading-relaxed">
            {config.description}
            {config.highlight && <span className="text-brand-red font-medium">{config.highlight}</span>}
          </p>

          {/* Response time */}
          <div className="flex items-center gap-2 mt-5 text-sm text-text-muted">
            <Clock className="w-4 h-4" />
            <span>{config.responseTime}</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mt-7 justify-center">
            <Link
              to={config.secondaryCta.href}
              className="inline-flex items-center gap-2 h-[48px] px-7 border border-gray-300 text-text-primary text-sm font-semibold hover:border-brand-red hover:text-brand-red transition-colors bg-white whitespace-nowrap"
            >
              {config.secondaryCta.label} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={config.primaryCta.href}
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors whitespace-nowrap"
            >
              {config.primaryCta.label} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ NEXT STEPS ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-text-primary tracking-tight text-center mb-8">Next Steps</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-0">
            {config.steps.map((step, i) => (
              <div key={step.title} className="text-center px-4 lg:px-8 relative">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-semibold text-text-primary text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                {/* Arrow separator */}
                {i < config.steps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
                    <ArrowRight className="w-4 h-4 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ HELPFUL LINKS ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-text-primary tracking-tight text-center mb-8">Helpful Links</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.helpfulLinks.map((link) => (
              <Link
                key={link.title}
                to={link.href}
                className="bg-white border border-gray-200 p-5 hover:border-brand-red/30 transition-all group flex items-start gap-4"
              >
                <div className="flex-shrink-0 mt-0.5">{link.icon}</div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-text-primary text-sm mb-1">{link.title}</h4>
                  <p className="text-xs text-text-secondary leading-relaxed whitespace-pre-line">{link.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-brand-red flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
