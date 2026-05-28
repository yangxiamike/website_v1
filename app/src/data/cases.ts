export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  industrySlug: string;
  location: string;
  application: string;
  description: string;
  image: string;
  productsSupplied: string[];
  service: string;
  // Detail page fields
  heroImage: string;
  backgroundText: string;
  backgroundImage: string;
  challenges: { title: string; desc: string }[];
  solutionText: string;
  solutionPoints: { title: string; desc: string }[];
  productsUsed: {
    id: string;
    name: string;
    series: string;
    size: string;
    pressure: string;
    image: string;
  }[];
  results: { value: string; label: string; desc: string; icon: string }[];
  relatedIndustries: { slug: string; name: string; image: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'municipal-water-supply-infrastructure',
    title: 'Municipal Water Supply Infrastructure',
    subtitle: 'Metropolitan Water Treatment Plant Upgrade',
    industry: 'Water Treatment',
    industrySlug: 'water-treatment',
    location: 'Jiangsu, China',
    application: 'Raw Water Intake & Treatment Lines',
    description: 'Haiyue Valve supplied a complete range of corrosion-resistant gate valves, butterfly valves, and check valves for a municipal water treatment plant expansion project, improving operational reliability and flow control.',
    image: '/images/case-water-treatment.jpg',
    productsSupplied: ['Resilient Gate Valve', 'Butterfly Valve', 'Check Valve', 'Y Strainer'],
    service: 'Solution Design, Supply & Technical Support',
    heroImage: '/images/case-water-treatment.jpg',
    backgroundImage: '/images/case-water-treatment.jpg',
    backgroundText: 'The municipal water treatment plant serves a population of over 1.5 million in the region. To meet growing water demand and stricter quality standards, the plant initiated an upgrade of its intake, clarification, filtration, and distribution systems.',
    challenges: [
      { title: 'System Reliability', desc: 'Ensure continuous water supply during construction and after upgrade with minimal downtime.' },
      { title: 'Corrosion & Wear', desc: 'High humidity and chemically treated water require valves with excellent corrosion resistance and long service life.' },
      { title: 'Operational Efficiency', desc: 'Improve flow control and reduce pressure loss to optimize pumping and treatment performance.' },
    ],
    solutionText: 'Haiyue Valve provided a tailored valve solution designed for reliable isolation, non-return protection, and strain filtration across key process lines. Our valves are built with premium materials and advanced manufacturing to ensure long-term performance in demanding water treatment environments.',
    solutionPoints: [
      { title: 'Ball Valves', desc: 'Used for reliable shut-off and isolation in intake, treatment, and distribution pipelines.' },
      { title: 'Check Valves', desc: 'Prevent backflow and protect pumps and critical equipment from water hammer.' },
      { title: 'Y Strainers', desc: 'Remove debris and particles to protect downstream valves and instruments, ensuring stable system operation.' },
    ],
    productsUsed: [
      { id: 'cast-steel-gate-valve', name: 'Ball Valve', series: 'Series: P40 / P41 / P60', size: 'Size: 1/2" – 24"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-floating-ball.png' },
      { id: 'swing-check-valve', name: 'Check Valve', series: 'Series: H44 / H64', size: 'Size: 2" – 24"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-swing-check.png' },
      { id: 'y-strainer', name: 'Y Strainer', series: 'Series: GL41 / GL11', size: 'Size: 1/2" – 24"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-y-strainer.png' },
    ],
    results: [
      { value: '100%', label: 'Reliable Operation', desc: 'System achieved stable, continuous operation with zero leakage.', icon: 'shield' },
      { value: '20%', label: 'Efficiency Improvement', desc: 'Reduced pressure loss and optimized pumping efficiency.', icon: 'trending' },
      { value: '', label: 'Long-term Durability', desc: 'Premium materials and strict testing ensure long service life in corrosive water environments.', icon: 'clock' },
    ],
    relatedIndustries: [
      { slug: 'water-treatment', name: 'Water Treatment', image: '/images/case-water-treatment.jpg' },
      { slug: 'chemical-processing', name: 'Chemical Processing', image: '/images/case-chemical.jpg' },
      { slug: 'oil-gas', name: 'Oil & Gas', image: '/images/case-oil-gas.jpg' },
      { slug: 'general-industrial', name: 'General Industrial', image: '/images/case-general.jpg' },
    ],
  },
  {
    id: 'oil-gas-valve-supply-project',
    title: 'Oil & Gas Valve Supply Project',
    subtitle: 'High-performance valves for upstream and midstream',
    industry: 'Oil & Gas',
    industrySlug: 'oil-gas',
    location: 'Xinjiang, China',
    application: 'Upstream & Midstream Pipelines',
    description: 'Haiyue Valve delivered a full solution of metal-seated gate valves, ball valves, and seal valves for upstream and midstream pipelines to ensure long-term safety in harsh conditions.',
    image: '/images/case-oil-gas.jpg',
    productsSupplied: ['Metal Seated Gate Valve', 'Ball Valve', 'Seal Valve', 'Globe Valve'],
    service: 'Solution Design, Supply & Technical Support',
    heroImage: '/images/case-oil-gas.jpg',
    backgroundImage: '/images/case-oil-gas.jpg',
    backgroundText: 'The upstream and midstream pipeline project required high-integrity valves capable of withstanding extreme temperature variations, high pressure, and corrosive media in remote desert environments. The project covered over 200 km of pipeline infrastructure.',
    challenges: [
      { title: 'Extreme Environment', desc: 'Valves must operate reliably in desert conditions with temperature swings from -30°C to 50°C.' },
      { title: 'High Pressure Integrity', desc: 'Pipeline operating pressure up to Class 600 requires valves with exceptional structural integrity.' },
      { title: 'Long Service Life', desc: 'Remote location makes maintenance difficult; valves must perform reliably for 20+ years.' },
    ],
    solutionText: 'Haiyue Valve supplied a comprehensive range of metal-seated and forged steel valves designed specifically for oil & gas pipeline service. All valves were manufactured to API 6D and API 600 standards with full material traceability and third-party inspection.',
    solutionPoints: [
      { title: 'Trunnion Ball Valves', desc: 'Metal-seated design for reliable shut-off under high pressure and temperature cycling.' },
      { title: 'Forged Gate Valves', desc: 'A105 and F22 forged construction for superior mechanical strength in critical isolation points.' },
      { title: 'Y-Pattern Globe Valves', desc: 'Precise flow control for throttling and bypass applications with minimal pressure loss.' },
    ],
    productsUsed: [
      { id: 'trunnion-mounted-ball-valve', name: 'Trunnion Ball Valve', series: 'Series: Q347F / Q347H', size: 'Size: 2" – 24"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-trunnion-ball.png' },
      { id: 'cast-steel-gate-valve', name: 'Gate Valve', series: 'Series: Z41H / Z41Y', size: 'Size: 2" – 24"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-cast-gate.png' },
      { id: 'y-globe-valve', name: 'Globe Valve', series: 'Series: J45H / J45Y', size: 'Size: 2" – 12"', pressure: 'Pressure: Class 150 – 600', image: '/images/prod-globe-ss.png' },
    ],
    results: [
      { value: '200km+', label: 'Pipeline Covered', desc: 'Comprehensive valve coverage across the entire pipeline network.', icon: 'route' },
      { value: '0', label: 'Field Failures', desc: 'Zero valve-related incidents since commissioning in 2021.', icon: 'shield' },
      { value: '25yr', label: 'Design Life', desc: 'Designed and tested for 25-year service life in harsh conditions.', icon: 'clock' },
    ],
    relatedIndustries: [
      { slug: 'oil-gas', name: 'Oil & Gas', image: '/images/case-oil-gas.jpg' },
      { slug: 'chemical-processing', name: 'Chemical Processing', image: '/images/case-chemical.jpg' },
      { slug: 'general-industrial', name: 'General Industrial', image: '/images/case-general.jpg' },
      { slug: 'water-treatment', name: 'Water Treatment', image: '/images/case-water-treatment.jpg' },
    ],
  },
  {
    id: 'chemical-processing-pipeline-upgrade',
    title: 'Chemical Processing Pipeline Upgrade',
    subtitle: 'High integrity valves for process safety',
    industry: 'Chemical Processing',
    industrySlug: 'chemical-processing',
    location: 'Zhejiang, China',
    application: 'Process Pipeline & Distribution',
    description: 'Haiyue Valve provided high-performance valves and actuation solutions for a chemical plant pipeline upgrade, ensuring safe, precise flow regulation in critical process lines.',
    image: '/images/case-chemical.jpg',
    productsSupplied: ['Ball Valve', 'Control Valve', 'Globe Valve', 'Actuator'],
    service: 'Solution Design, Supply & Technical Support',
    heroImage: '/images/case-chemical.jpg',
    backgroundImage: '/images/case-chemical.jpg',
    backgroundText: 'The chemical processing facility required a complete valve upgrade for their process pipeline system handling corrosive acids and high-temperature solvents. The project demanded valves with superior chemical resistance and precise flow control capabilities.',
    challenges: [
      { title: 'Chemical Resistance', desc: 'Process media include concentrated acids and chlorinated solvents at elevated temperatures.' },
      { title: 'Precise Flow Control', desc: 'Automated process lines require precise flow regulation with minimal deviation.' },
      { title: 'Safety Compliance', desc: 'All valves must meet strict safety standards for hazardous chemical processing environments.' },
    ],
    solutionText: 'Haiyue Valve engineered a complete solution featuring CF8M stainless steel ball valves, bellow seal globe valves for zero emission, and automated control packages for precise flow management. All valves were tested to API 598 and ISO 15848 standards.',
    solutionPoints: [
      { title: 'Stainless Steel Ball Valves', desc: 'CF8M construction with PTFE seats for reliable isolation of corrosive media.' },
      { title: 'Bellow Seal Globe Valves', desc: 'Zero-emission stem sealing for hazardous media, compliant with ISO 15848.' },
      { title: 'Automated Control Packages', desc: 'Pneumatic and electric actuators integrated for precise flow regulation.' },
    ],
    productsUsed: [
      { id: 'floating-ball-valve', name: 'Ball Valve', series: 'Series: Q41F / Q41PPL', size: 'Size: 1/2" – 12"', pressure: 'Pressure: PN16 – PN40', image: '/images/prod-floating-ball.png' },
      { id: 'bellow-seal-globe', name: 'Globe Valve', series: 'Series: WJ41H / WJ41Y', size: 'Size: 1/2" – 8"', pressure: 'Pressure: PN16 – PN40', image: '/images/prod-globe-ss.png' },
      { id: 'stainless-steel-globe-valve', name: 'Control Valve', series: 'Series: ZJHP / ZJHM', size: 'Size: 1" – 8"', pressure: 'Pressure: PN16 – PN64', image: '/images/prod-globe-ss.png' },
    ],
    results: [
      { value: '99.9%', label: 'Flow Accuracy', desc: 'Precise flow control within ±0.5% of setpoint across all process lines.', icon: 'trending' },
      { value: '0 ppm', label: 'Fugitive Emissions', desc: 'Bellow seal valves achieve zero detectable fugitive emissions.', icon: 'shield' },
      { value: '15yr', label: 'Service Life', desc: 'CF8M stainless construction designed for 15+ years in corrosive service.', icon: 'clock' },
    ],
    relatedIndustries: [
      { slug: 'chemical-processing', name: 'Chemical Processing', image: '/images/case-chemical.jpg' },
      { slug: 'oil-gas', name: 'Oil & Gas', image: '/images/case-oil-gas.jpg' },
      { slug: 'water-treatment', name: 'Water Treatment', image: '/images/case-water-treatment.jpg' },
      { slug: 'general-industrial', name: 'General Industrial', image: '/images/case-general.jpg' },
    ],
  },
];

export const filterCategories = [
  { id: 'all', label: 'All Cases' },
  { id: 'water-treatment', label: 'Water Treatment' },
  { id: 'chemical-processing', label: 'Chemical Processing' },
  { id: 'oil-gas', label: 'Oil & Gas' },
  { id: 'hvac', label: 'HVAC' },
  { id: 'general-industrial', label: 'General Industrial' },
];

export function getCaseById(id: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.id === id);
}
