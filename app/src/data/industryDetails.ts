export interface IndustryDetailData {
  id: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  snapshotText: string;
  snapshotPoints: { icon: string; title: string; desc: string }[];
  applications: { title: string; desc: string; image: string }[];
  recommendedProducts: { id: string; name: string; desc: string; image: string }[];
  materialCompliance: { label: string; value: string }[];
  relatedCase: {
    title: string;
    description: string;
    image: string;
    industry: string;
    location: string;
    application: string;
    productsSupplied: string[];
    link: string;
  };
  ctaText: string;
  ctaSubtext: string;
}

export const industryDetailsMap: Record<string, IndustryDetailData> = {
  'water-treatment': {
    id: 'water-treatment',
    name: 'Water Treatment',
    heroTitle: 'Water Treatment',
    heroSubtitle: 'Reliable valve solutions for water supply, wastewater treatment, pump stations, filtration, and pipeline isolation.',
    heroImage: '/images/case-water-treatment.jpg',
    snapshotText: 'Water treatment systems require dependable valve performance to ensure clean water delivery, environmental protection, and continuous operation.',
    snapshotPoints: [
      { icon: 'valve', title: 'Flow Isolation', desc: 'Reliable shut-off for maintenance and safety.' },
      { icon: 'check', title: 'Backflow Prevention', desc: 'Protect water quality and public health.' },
      { icon: 'shield', title: 'Pump Protection', desc: 'Prevent water hammer and pressure surges.' },
      { icon: 'filter', title: 'Filtration Support', desc: 'Remove debris and protect equipment.' },
    ],
    applications: [
      { title: 'Water Supply & Distribution', desc: 'Ensure reliable isolation and steady water delivery across distribution networks.', image: '/images/case-water-treatment.jpg' },
      { title: 'Wastewater Treatment Plants', desc: 'Handle corrosive media and support efficient treatment processes.', image: '/images/case-water-treatment.jpg' },
      { title: 'Pump Stations', desc: 'Protect pumps and pipelines from pressure surges and backflow.', image: '/images/case-water-treatment.jpg' },
      { title: 'Filtration & Pretreatment', desc: 'Remove solids and protect downstream equipment for stable operation.', image: '/images/case-water-treatment.jpg' },
    ],
    recommendedProducts: [
      { id: 'butterfly-valve', name: 'Butterfly Valve', desc: 'On/off and flow regulation for large-diameter pipelines.', image: '/images/prod-wafer-butterfly.png' },
      { id: 'gate-valve', name: 'Gate Valve', desc: 'Isolation solution for large-diameter water lines.', image: '/images/prod-cast-gate.png' },
      { id: 'check-valve', name: 'Check Valve', desc: 'Prevent reverse flow and protect pumps.', image: '/images/prod-swing-check.png' },
      { id: 'strainer', name: 'Y Strainer', desc: 'Remove solids and protect equipment from blockage.', image: '/images/prod-y-strainer.png' },
    ],
    materialCompliance: [
      { label: 'Body Material', value: 'Ductile Iron, WCB, CF8, CF8M' },
      { label: 'Seat Material', value: 'EPDM, NBR, PTFE, Viton' },
      { label: 'Pressure Testing', value: 'Shell test, seat test' },
      { label: 'Leakage Testing', value: 'Seat leakage test' },
      { label: 'Export Packaging', value: 'Plywood case, moisture protection' },
      { label: 'Compliance (Available)', value: 'AWWA, API, EN, ISO' },
    ],
    relatedCase: {
      title: 'Municipal Water Treatment Upgrade Project',
      description: 'Haiyue Valve supplied a complete range of corrosion-resistant gate valves, butterfly valves, and check valves for a municipal water treatment plant expansion project.',
      image: '/images/case-water-treatment.jpg',
      industry: 'Water Treatment',
      location: 'Jiangsu, China',
      application: 'Raw Water Intake & Treatment Lines',
      productsSupplied: ['Butterfly Valve', 'Check Valve', 'Y Strainer'],
      link: '/cases/municipal-water-supply-infrastructure',
    },
    ctaText: 'Planning a water treatment project?',
    ctaSubtext: 'Our engineering team is ready to provide the right valve solutions for your system.',
  },
};

export function getIndustryDetail(id: string): IndustryDetailData | undefined {
  return industryDetailsMap[id];
}
