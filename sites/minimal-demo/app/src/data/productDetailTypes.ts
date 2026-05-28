export interface ProductDetailData {
  id: string;
  title: string;
  heroImage: string;
  description: string;
  tags: string[];
  benefits: string[];
  overview: string;
  features: { icon: string; title: string; description: string }[];
  applications: { icon: string; title: string; description: string }[];
  materials: { category: string; values: string }[];
  specs: { param: string; value: string }[];
  quality: { icon: string; title: string; description: string }[];
  documents: { title: string; type: string; size: string }[];
  relatedProducts: { id: string; title: string; description: string; image: string }[];
}
