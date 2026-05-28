import { industries } from './index';

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
      { id: 'wafer-butterfly-valve', name: 'Butterfly Valve', desc: 'On/off and flow regulation for large-diameter pipelines.', image: '/images/prod-wafer-butterfly.png' },
      { id: 'cast-steel-gate-valve', name: 'Gate Valve', desc: 'Isolation solution for large-diameter water lines.', image: '/images/prod-cast-gate.png' },
      { id: 'swing-check-valve', name: 'Check Valve', desc: 'Prevent reverse flow and protect pumps.', image: '/images/prod-swing-check.png' },
      { id: 'y-strainer', name: 'Y Strainer', desc: 'Remove solids and protect equipment from blockage.', image: '/images/prod-y-strainer.png' },
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

const productRecommendations: Record<string, { id: string; name: string; desc: string; image: string }> = {
  'Ball Valve': { id: 'flanged-ball-valve', name: 'Ball Valve', desc: 'Reliable isolation for process, utility, and pipeline duties.', image: '/images/prod-flanged-ball.png' },
  'Gate Valve': { id: 'cast-steel-gate-valve', name: 'Gate Valve', desc: 'Full-bore shut-off for main lines and isolation points.', image: '/images/prod-cast-gate.png' },
  'Globe Valve': { id: 'stainless-steel-globe-valve', name: 'Globe Valve', desc: 'Flow control and throttling for process and utility systems.', image: '/images/prod-globe-ss.png' },
  'Butterfly Valve': { id: 'wafer-butterfly-valve', name: 'Butterfly Valve', desc: 'Compact isolation and regulation for larger pipelines.', image: '/images/prod-wafer-butterfly.png' },
  'Check Valve': { id: 'swing-check-valve', name: 'Check Valve', desc: 'Backflow prevention for pump discharge and process lines.', image: '/images/prod-swing-check.png' },
  'Y Strainer': { id: 'y-strainer', name: 'Y Strainer', desc: 'Pipeline filtration to protect valves, pumps, and instruments.', image: '/images/prod-y-strainer.png' },
};

const relatedCaseByIndustry: Record<string, string> = {
  'water-treatment': '/cases/municipal-water-supply-infrastructure',
  'chemical-processing': '/cases/chemical-processing-pipeline-upgrade',
  'oil-gas': '/cases/oil-gas-valve-supply-project',
  hvac: '/cases/municipal-water-supply-infrastructure',
  'power-energy': '/cases/oil-gas-valve-supply-project',
  'general-pipeline': '/cases/chemical-processing-pipeline-upgrade',
};

function buildIndustryDetail(id: string): IndustryDetailData | undefined {
  const industry = industries.find((item) => item.id === id);
  if (!industry) return undefined;

  return {
    id: industry.id,
    name: industry.name,
    heroTitle: industry.name,
    heroSubtitle: industry.description,
    heroImage: industry.image,
    snapshotText: `${industry.name} projects require valves selected for medium compatibility, pressure rating, temperature, installation constraints, and reliable maintenance access.`,
    snapshotPoints: [
      { icon: 'valve', title: 'Flow Control', desc: 'Select valve types for isolation, regulation, and bypass service.' },
      { icon: 'check', title: 'System Protection', desc: 'Prevent backflow, debris, and unnecessary equipment wear.' },
      { icon: 'shield', title: 'Safety Margin', desc: 'Confirm pressure, temperature, and material compatibility.' },
      { icon: 'filter', title: 'Maintenance Access', desc: 'Support inspection, cleaning, and planned shutdown work.' },
    ],
    applications: [
      { title: `${industry.name} Main Lines`, desc: 'Isolation and control valves for primary process and utility pipelines.', image: industry.image },
      { title: 'Pump & Equipment Protection', desc: 'Check valves and strainers to protect pumps, meters, and downstream equipment.', image: industry.image },
      { title: 'Process Isolation Points', desc: 'Reliable shut-off for maintenance, commissioning, and safety boundaries.', image: industry.image },
      { title: 'Project Documentation', desc: 'Material, testing, packaging, and export documentation prepared per order.', image: industry.image },
    ],
    recommendedProducts: industry.keyProducts
      .map((name) => productRecommendations[name])
      .filter((item): item is { id: string; name: string; desc: string; image: string } => Boolean(item)),
    materialCompliance: [
      { label: 'Body Material', value: 'WCB, CF8, CF8M, ductile iron and project-specific alloys' },
      { label: 'Seat / Seal Material', value: 'PTFE, EPDM, NBR, Viton or metal seated options' },
      { label: 'Pressure Testing', value: 'Shell test and seat test before shipment' },
      { label: 'Standards', value: 'API, ASME, EN, DIN, JIS and project-specific standards reviewed on request' },
      { label: 'Documentation', value: 'Inspection records, test reports and export documents available per order' },
      { label: 'Packaging', value: 'Export plywood case, pallet or project-specific packaging' },
    ],
    relatedCase: {
      title: `${industry.name} Valve Supply Reference`,
      description: `Sample supply scenario showing how Haiyue Valve supports ${industry.name.toLowerCase()} buyers with practical valve selection, testing, and delivery coordination.`,
      image: industry.image,
      industry: industry.name,
      location: 'China / Export Project',
      application: industry.shortDesc,
      productsSupplied: industry.keyProducts,
      link: relatedCaseByIndustry[industry.id] || '/cases',
    },
    ctaText: `Planning a ${industry.name.toLowerCase()} project?`,
    ctaSubtext: 'Share your operating conditions and our team will help confirm suitable valve options.',
  };
}

export function getIndustryDetail(id: string): IndustryDetailData | undefined {
  return industryDetailsMap[id] || buildIndustryDetail(id);
}
