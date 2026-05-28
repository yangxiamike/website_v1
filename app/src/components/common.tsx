import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function CTAButton({
  to,
  children,
  variant = 'primary',
  className = '',
}: {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  className?: string;
}) {
  const styles = {
    primary: 'bg-brand-red text-white hover:bg-dark-red',
    secondary: 'border border-gray-300 text-text-primary hover:border-brand-red hover:text-brand-red bg-white',
    light: 'bg-white text-brand-red hover:bg-gray-100',
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-2 h-[48px] px-7 text-sm font-semibold transition-colors flex-shrink-0 ${styles[variant]} ${className}`}
    >
      {children} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

export function SectionHeading({ title, eyebrow, description }: { title: string; eyebrow?: string; description?: string }) {
  return (
    <div>
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-brand-red uppercase tracking-wider mb-3">
          <span className="w-6 h-px bg-brand-red" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-xl lg:text-2xl font-bold text-text-primary tracking-tight">{title}</h2>
      {description && <p className="text-sm text-text-secondary mt-2 max-w-lg leading-relaxed">{description}</p>}
    </div>
  );
}
