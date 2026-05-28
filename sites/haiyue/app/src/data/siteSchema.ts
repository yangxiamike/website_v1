export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export type PageConfig = {
  label: string;
  href: string;
  enabled?: boolean;
};

export type SeoEntry = {
  title: string;
  description: string;
};

export type SeoRouteEntry = SeoEntry & {
  pattern: string;
};

export type CompanyProfile = {
  id?: string;
  nameCn?: string;
  nameEn: string;
  brand: string;
  tagline?: string;
  summary?: string;
  logo?: string;
  logoAlt?: string;
  since?: string | number;
  location?: string;
  address?: string;
  employees?: string;
  email: string;
  whatsapp?: string;
  phone?: string;
  hours?: string;
};

export type ProductSummary = {
  id: string;
  name: string;
  shortDesc: string;
  image: string;
  size?: string;
  pressure?: string;
  material?: string;
  category?: string;
  specs?: {
    sizeRange?: string;
    pressureClass?: string;
    bodyMaterials?: string;
  };
  application?: string;
};

export type IndustrySummary = {
  id: string;
  name: string;
  shortDesc: string;
  description: string;
  image: string;
  keyProducts: string[];
  route?: string;
};

export type CaseStudySummary = {
  id: string;
  title: string;
  description: string;
  image: string;
  industry: string;
  cta?: string;
};

export type NewsArticleSummary = {
  id: string | number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

export type FaqEntry = {
  question: string;
  answer: string;
};

export type MilestoneEntry = {
  year: string | number;
  event: string;
};

export type LeadershipEntry = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

export type CertificationEntry = {
  name: string;
  description: string;
};

export type FactoryCapabilityEntry = {
  title: string;
  description: string;
  image?: string;
  bullets: string[];
};

export type ProcessStepEntry = {
  step: string;
  title: string;
  desc: string;
};

export type KpiEntry = {
  label: string;
  value: string | number;
  desc: string;
};

export type SiteData = {
  company: CompanyProfile;
  nav?: {
    primary?: NavItem[];
    footerQuick?: NavLink[];
    footerProducts?: NavLink[];
    footerResources?: NavLink[];
  };
  pages?: Record<string, PageConfig>;
  seo?: {
    default: SeoEntry & {
      siteName?: string;
      notFoundTitle?: string;
    };
    routes?: SeoRouteEntry[];
  };
  products: ProductSummary[];
  industries: IndustrySummary[];
  caseStudies: CaseStudySummary[];
  newsArticles: NewsArticleSummary[];
  faqs: FaqEntry[];
  milestones: MilestoneEntry[];
  leadership: LeadershipEntry[];
  certifications: CertificationEntry[];
  factoryCapabilities: FactoryCapabilityEntry[];
  processSteps: ProcessStepEntry[];
  kpis: KpiEntry[];
  contactFaqs: FaqEntry[];
};
