import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-brand-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-white font-semibold text-xl tracking-tight">Need a Valve Quotation?</h3>
          <p className="text-white/75 text-sm mt-1">
            Send us your specifications. Our team typically replies within one working day.
          </p>
        </div>
        <Link
          to="/request-quote"
          className="inline-flex h-[48px] w-full items-center justify-center gap-2 border-2 border-white px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-white hover:text-brand-red sm:w-auto whitespace-nowrap flex-shrink-0"
        >
          Request for Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
