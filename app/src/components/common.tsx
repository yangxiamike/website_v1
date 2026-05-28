import { Link } from 'react-router-dom';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import type { Product } from '../data/productsCatalog';

type CTAButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light' | 'ghost';
  size?: 'sm' | 'md';
  className?: string;
};

export function CTAButton({
  to,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const styles = {
    primary: 'bg-brand-red text-white hover:bg-dark-red border border-brand-red',
    secondary: 'border border-gray-300 text-text-primary hover:border-brand-red hover:text-brand-red bg-white',
    light: 'bg-white text-brand-red hover:bg-gray-100 border border-white',
    ghost: 'border border-white/35 text-white hover:bg-white/10',
  };
  const sizes = {
    sm: 'h-10 px-5 text-sm',
    md: 'h-12 px-7 text-sm',
  };

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-colors whitespace-nowrap flex-shrink-0 ${sizes[size]} ${styles[variant]} ${className}`}
    >
      {children} <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description: string;
  image: string;
  ctas?: React.ReactNode;
  className?: string;
};

export function PageHero({ title, eyebrow, description, image, ctas, className = '' }: PageHeroProps) {
  return (
    <section className={`relative h-[420px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/78 via-black/48 to-black/18" />
        <div className="absolute inset-y-0 left-0 w-full bg-black/12 backdrop-blur-[2px] sm:w-[68%] lg:w-[58%]" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/32 via-black/16 to-transparent sm:w-[72%]" />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center ds-container py-12">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="text-brand-red text-xs font-semibold tracking-[0.12em] uppercase mb-4">
              {eyebrow}
            </div>
          )}
          <h1 className="ds-page-title text-white max-w-2xl">{title}</h1>
          <p className="text-white/86 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">{description}</p>
          {ctas && <div className="flex flex-wrap gap-3 mt-7">{ctas}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = 'left',
  className = '',
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-semibold text-brand-red uppercase tracking-wider mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="w-6 h-px bg-brand-red" />
          {eyebrow}
        </div>
      )}
      <h2 className="ds-section-title">{title}</h2>
      {description && (
        <p className={`text-sm text-text-secondary mt-2 leading-relaxed ${align === 'center' ? 'max-w-2xl mx-auto' : 'max-w-lg'}`}>
          {description}
        </p>
      )}
    </div>
  );
}

export function IconFrame({ icon: Icon, size = 'md' }: { icon: LucideIcon; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };
  return <Icon className={`ds-icon ${sizes[size]}`} strokeWidth={1.6} />;
}

export function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-text-primary mb-1.5">
      {children}
      {required && <span className="text-brand-red ml-0.5">*</span>}
    </label>
  );
}

export function TextInput({
  name,
  placeholder,
  required,
  type = 'text',
  defaultValue,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
  type?: string;
  defaultValue?: string;
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      defaultValue={defaultValue}
      className="ds-input h-10 px-3"
    />
  );
}

export function SelectInput({
  name,
  placeholder,
  options,
  required,
  defaultValue = '',
}: {
  name: string;
  placeholder: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div className="relative">
      <select name={name} required={required} defaultValue={defaultValue} className="ds-input h-10 px-3 appearance-none cursor-pointer text-text-secondary">
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export function TextareaField({
  name,
  placeholder,
  required,
  rows = 4,
  defaultValue,
}: {
  name: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
  defaultValue?: string;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      placeholder={placeholder}
      required={required}
      defaultValue={defaultValue}
      className="ds-input px-3 py-2 resize-none"
    />
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex min-h-[300px] flex-col items-center rounded-[8px] border border-transparent bg-white px-3 py-3 text-center transition-all duration-300 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-200/40">
      <Link
        to={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
        className="flex h-[170px] w-full items-center justify-center p-3"
      >
        <img
          src={product.image}
          alt={product.name}
          className="block h-auto w-auto max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex w-full flex-1 flex-col items-center px-1">
        <Link to={`/products/${product.id}`} className="hover:text-brand-red transition-colors">
          <h3 className="min-h-[2.5rem] text-[15px] font-medium leading-snug text-text-primary sm:text-base">{product.name}</h3>
        </Link>
        <p className="mt-0.5 min-h-[1.35rem] text-[13px] font-semibold leading-snug text-brand-red sm:text-[14px]">{product.series}</p>
        <div className="mt-3 flex h-10 items-center justify-center gap-2 opacity-0 translate-y-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
          <Link
            to={`/request-quote?product=${product.id}`}
            className="inline-flex h-9 items-center justify-center bg-brand-red px-4 text-xs font-semibold text-white transition-colors hover:bg-dark-red sm:text-sm"
          >
            Request Quote
          </Link>
          <Link
            to={`/products/${product.id}`}
            className="inline-flex h-9 items-center justify-center border border-brand-red px-4 text-xs font-semibold text-brand-red transition-colors hover:bg-brand-red hover:text-white sm:text-sm"
          >
            Details <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function ResourceCard({
  title,
  meta,
  image,
  to,
  badge,
}: {
  title: string;
  meta: string;
  image: string;
  to: string;
  badge?: React.ReactNode;
}) {
  return (
    <Link to={to} className="w-full sm:flex-shrink-0 sm:w-[300px] ds-card ds-card-hover cursor-pointer group">
      <div className="aspect-[16/10] overflow-hidden bg-gray-50">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-4">
        {badge}
        <h4 className="font-semibold text-text-primary text-sm leading-snug mb-2 group-hover:text-brand-red transition-colors">{title}</h4>
        <p className="text-xs text-text-muted">{meta}</p>
      </div>
    </Link>
  );
}

export function IndustryCard({
  to,
  image,
  title,
  description,
  icon,
}: {
  to: string;
  image: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link to={to} className="group block ds-card ds-card-hover">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-3 mb-2">
          {icon}
          <h3 className="font-bold text-text-primary text-base group-hover:text-brand-red transition-colors">{title}</h3>
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        <div className="mt-3 text-brand-red">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
