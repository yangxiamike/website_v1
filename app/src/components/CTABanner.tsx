import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <h3 className="text-white font-semibold text-xl tracking-tight">Need a Valve Quotation?</h3>
          <p className="text-white/75 text-sm mt-1">
            Send us your specifications. Our team typically replies within one working day.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 h-[48px] px-7 border-2 border-white text-white font-semibold text-sm hover:bg-white hover:text-brand-red transition-all duration-200 whitespace-nowrap flex-shrink-0"
        >
          Request a Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
