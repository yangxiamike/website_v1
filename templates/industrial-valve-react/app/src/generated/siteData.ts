import type { SiteData } from '../data/siteSchema';

export const siteData: SiteData = {
  company: {
    nameCn: '浙江海岳阀门有限公司',
    nameEn: 'Zhejiang Haiyue Valve Co., Ltd.',
    brand: 'Haiyue Valve',
    tagline: 'HAIYUE VALVE',
    summary:
      'Zhejiang-based industrial valve manufacturer focused on practical valve solutions for water treatment, chemical, oil & gas, HVAC and general industrial applications.',
    logo: '/images/logo-haiyue-lockup.png',
    logoAlt: 'Haiyue Valve',
    since: '2012',
    location: 'Wenzhou, Zhejiang, China',
    address: 'No. 88, Coastal Industrial Road, Longwan District, Wenzhou, Zhejiang, China',
    employees: '~85',
    email: 'sales@haiyuevalve.com',
    whatsapp: '+86 138 0000 0000',
    phone: '+86 577 0000 0000',
    hours: 'Mon-Fri, 9:00-18:00 China Time',
  },
  nav: {
    primary: [
      {
        label: 'Products',
        href: '/products',
        children: [
          { label: 'Ball Valve', href: '/products?type=ball-valve' },
          { label: 'Gate Valve', href: '/products?type=gate-valve' },
          { label: 'Globe Valve', href: '/products?type=globe-valve' },
          { label: 'Butterfly Valve', href: '/products?type=butterfly-valve' },
          { label: 'Check Valve', href: '/products?type=check-valve' },
          { label: 'Y Strainer', href: '/products?type=strainer' },
        ],
      },
      { label: 'Industries', href: '/industries' },
      { label: 'Cases', href: '/cases' },
      { label: 'Factory', href: '/factory' },
      {
        label: 'Resources',
        href: '/resources',
        children: [
          { label: 'Catalogs & Datasheets', href: '/resources#downloads' },
          { label: 'Technical Articles', href: '/resources#articles' },
          { label: 'FAQs', href: '/resources#faqs' },
        ],
      },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    footerQuick: [
      { label: 'Products', href: '/products' },
      { label: 'Industries', href: '/industries' },
      { label: 'Factory', href: '/factory' },
      { label: 'Resources', href: '/resources' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    footerProducts: [
      { label: 'Ball Valve', href: '/products?type=ball-valve' },
      { label: 'Gate Valve', href: '/products?type=gate-valve' },
      { label: 'Globe Valve', href: '/products?type=globe-valve' },
      { label: 'Butterfly Valve', href: '/products?type=butterfly-valve' },
      { label: 'Check Valve', href: '/products?type=check-valve' },
      { label: 'Y Strainer', href: '/products?type=strainer' },
      { label: 'View All Products', href: '/products' },
    ],
    footerResources: [
      { label: 'Catalogs & Datasheets', href: '/resources#downloads' },
      { label: 'Technical Articles', href: '/resources#articles' },
      { label: 'Installation Guides', href: '/resources#downloads' },
      { label: 'FAQs', href: '/resources#faqs' },
    ],
  },
  pages: {
    home: { label: 'Home', href: '/', enabled: true },
    products: { label: 'Products', href: '/products', enabled: true },
    industries: { label: 'Industries', href: '/industries', enabled: true },
    cases: { label: 'Cases', href: '/cases', enabled: true },
    factory: { label: 'Factory', href: '/factory', enabled: true },
    resources: { label: 'Resources', href: '/resources', enabled: true },
    about: { label: 'About', href: '/about', enabled: true },
    contact: { label: 'Contact', href: '/contact', enabled: true },
    requestQuote: { label: 'Request a Quote', href: '/request-quote', enabled: true },
  },
  seo: {
    default: {
      siteName: 'Haiyue Valve',
      title: 'Industrial Valve Manufacturer & Export Partner',
      description:
        'Haiyue Valve supplies industrial ball, gate, globe, butterfly, check valves and strainers for global B2B projects.',
      notFoundTitle: 'Page Not Found',
    },
    routes: [
      {
        pattern: '/',
        title: 'Industrial Valve Manufacturer & Export Partner',
        description:
          'Haiyue Valve supplies industrial ball, gate, globe, butterfly, check valves and strainers for global B2B projects.',
      },
      {
        pattern: '/products',
        title: 'Industrial Valve Product Catalog',
        description:
          'Browse Haiyue Valve product ranges for water treatment, chemical processing, oil and gas, HVAC, and general pipelines.',
      },
      {
        pattern: '/products/:id',
        title: 'Industrial Valve Product Details',
        description:
          'Review valve specifications, applications, materials, documents, and related products from Haiyue Valve.',
      },
      {
        pattern: '/industries',
        title: 'Industrial Valve Applications',
        description:
          'Explore industrial valve solutions for water treatment, chemical processing, oil and gas, HVAC, power, and pipelines.',
      },
      {
        pattern: '/industries/:id',
        title: 'Industry Valve Solutions',
        description:
          'Valve recommendations and application guidance for industrial projects and working conditions.',
      },
      {
        pattern: '/cases',
        title: 'Sample Valve Project Scenarios',
        description:
          'Sample valve supply scenarios showing product selection references across industrial applications.',
      },
      {
        pattern: '/cases/:id',
        title: 'Valve Project Scenario Details',
        description:
          'Detailed sample project scenario for valve selection, products used, and application requirements.',
      },
      {
        pattern: '/factory',
        title: 'Valve Factory Capabilities',
        description:
          'Learn about Haiyue Valve manufacturing, CNC machining, assembly, testing, inspection, and export support.',
      },
      {
        pattern: '/resources',
        title: 'Valve Resources & Technical Downloads',
        description:
          'Find valve catalogs, datasheets, technical articles, installation guides, and frequently asked questions.',
      },
      {
        pattern: '/about',
        title: 'About Haiyue Valve',
        description:
          'Company profile, export support, quality practices, and service approach for global industrial buyers.',
      },
      {
        pattern: '/contact',
        title: 'Contact Haiyue Valve',
        description:
          'Contact Haiyue Valve for sales inquiries, technical support, factory visits, and general questions.',
      },
      {
        pattern: '/request-quote',
        title: 'Request a Valve Quotation',
        description:
          'Submit valve requirements, drawings, and project specifications for a quotation from Haiyue Valve.',
      },
      {
        pattern: '/thank-you',
        title: 'Thank You',
        description: 'Your request has been received by Haiyue Valve.',
      },
    ],
  },
  products: [
    {
      id: 'ball-valve',
      name: 'Ball Valve',
      shortDesc: 'Quick on/off, reliable sealing, easy maintenance.',
      image: '/images/product-ball.png',
      size: "1/2'' - 8''",
      pressure: 'PN16 / PN25 / Class 150 / Class 300',
      material: 'WCB / CF8 / CF8M / Brass',
      category: 'ball-valve',
      specs: {
        sizeRange: "1/2'' - 8''",
        pressureClass: 'PN16 / PN25 / Class 150 / 300',
        bodyMaterials: 'WCB / CF8 / CF8M',
      },
      application: 'Water treatment, chemical, general pipeline',
    },
    {
      id: 'gate-valve',
      name: 'Gate Valve',
      shortDesc: 'Full open/close, low flow resistance.',
      image: '/images/product-gate.png',
      size: 'DN50 - DN600',
      pressure: 'PN10 / PN16',
      material: 'Ductile Iron / Cast Iron',
      category: 'gate-valve',
      specs: {
        sizeRange: 'DN50 - DN600',
        pressureClass: 'PN10 / PN16',
        bodyMaterials: 'Ductile Iron / Cast Iron',
      },
      application: 'Water supply, wastewater, fire protection',
    },
    {
      id: 'globe-valve',
      name: 'Globe Valve',
      shortDesc: 'Suitable for shut-off and moderate regulation.',
      image: '/images/product-globe.png',
      size: "1/2'' - 12''",
      pressure: 'PN16 / PN25 / Class 150',
      material: 'WCB / CF8M',
      category: 'globe-valve',
      specs: {
        sizeRange: "1/2'' - 12''",
        pressureClass: 'PN16 / PN25 / Class 150',
        bodyMaterials: 'WCB / CF8M',
      },
      application: 'Steam, chemical, regulation pipeline',
    },
    {
      id: 'butterfly-valve',
      name: 'Butterfly Valve',
      shortDesc: 'Compact, lightweight, easy installation.',
      image: '/images/product-butterfly.png',
      size: 'DN50 - DN500',
      pressure: 'PN10 / PN16 / Class 150',
      material: 'Cast Iron / Ductile Iron / WCB / SS',
      category: 'butterfly-valve',
      specs: {
        sizeRange: 'DN50 - DN500',
        pressureClass: 'PN10 / PN16 / Class 150',
        bodyMaterials: 'CI / DI / WCB / SS',
      },
      application: 'HVAC, water treatment, light chemical',
    },
    {
      id: 'check-valve',
      name: 'Check Valve',
      shortDesc: 'Prevent medium backflow, diverse structures.',
      image: '/images/product-check.png',
      size: 'DN40 - DN400',
      pressure: 'PN16 / Class 150',
      material: 'WCB / Cast Iron / Stainless Steel',
      category: 'check-valve',
      specs: {
        sizeRange: 'DN40 - DN400',
        pressureClass: 'PN16 / Class 150',
        bodyMaterials: 'WCB / CI / SS',
      },
      application: 'Pump discharge, backflow prevention',
    },
    {
      id: 'strainer',
      name: 'Y Strainer',
      shortDesc: 'Protect pumps and equipment, easy to maintain.',
      image: '/images/product-strainer.png',
      size: 'DN40 - DN300',
      pressure: 'PN16 / Class 150',
      material: 'WCB / CF8 / CF8M',
      category: 'strainer',
      specs: {
        sizeRange: 'DN40 - DN300',
        pressureClass: 'PN16 / Class 150',
        bodyMaterials: 'WCB / CF8 / CF8M',
      },
      application: 'Pump protection, pipeline filtration',
    },
  ],
  industries: [
    {
      id: 'water-treatment',
      name: 'Water Treatment',
      shortDesc: 'Water supply, wastewater, pump stations, and filtration systems.',
      description:
        'Municipal water supply, wastewater treatment, pumping stations, and filtration systems. Reliable flow control for critical water infrastructure.',
      image: '/images/industry-water.jpg',
      keyProducts: ['Gate Valve', 'Butterfly Valve', 'Check Valve', 'Ball Valve'],
      route: '/industries/water-treatment',
    },
    {
      id: 'chemical-processing',
      name: 'Chemical Processing',
      shortDesc: 'Valves for corrosive, high-temperature, and chemical process applications.',
      description:
        'General chemical fluid transfer. Material and sealing selected according to medium compatibility and operating conditions.',
      image: '/images/industry-chemical.jpg',
      keyProducts: ['Ball Valve', 'Globe Valve', 'Butterfly Valve', 'Check Valve'],
      route: '/industries/chemical-processing',
    },
    {
      id: 'oil-gas',
      name: 'Oil & Gas',
      shortDesc: 'Reliable valves for upstream, midstream, and downstream oil & gas operations.',
      description:
        'Conventional oil, gas and supporting pipeline systems. Standards and pressure ratings confirmed per project requirements.',
      image: '/images/industry-oil-gas.jpg',
      keyProducts: ['Ball Valve', 'Gate Valve', 'Globe Valve', 'Check Valve'],
      route: '/industries/oil-gas',
    },
    {
      id: 'hvac',
      name: 'HVAC',
      shortDesc: 'Solutions for heating, ventilation, air conditioning, and chilled water systems.',
      description:
        'Heating, ventilation, building water supply/drainage, and fire protection systems. Cost-effective and reliable valve solutions.',
      image: '/images/industry-hvac.jpg',
      keyProducts: ['Butterfly Valve', 'Gate Valve', 'Ball Valve', 'Check Valve'],
      route: '/industries/hvac',
    },
    {
      id: 'power-energy',
      name: 'Power & Energy',
      shortDesc: 'Valves for power generation and energy infrastructure systems.',
      description:
        'Power generation and energy infrastructure systems. High-performance valves for steam, cooling water, and fuel systems.',
      image: '/images/industry-power-energy.jpg',
      keyProducts: ['Gate Valve', 'Globe Valve', 'Ball Valve', 'Check Valve'],
      route: '/industries/power-energy',
    },
    {
      id: 'general-pipeline',
      name: 'General Pipeline',
      shortDesc: 'Durable valves for water, steam, gas, and general industrial pipelines.',
      description:
        'Water, steam, gas, and general industrial pipelines. Versatile valve solutions for diverse industrial applications.',
      image: '/images/industry-general-pipeline.jpg',
      keyProducts: ['Gate Valve', 'Ball Valve', 'Butterfly Valve', 'Y Strainer'],
      route: '/industries/general-pipeline',
    },
  ],
  caseStudies: [
    {
      id: 'water-project',
      title: 'Municipal Water Supply Infrastructure',
      description:
        'Supplied resilient seated gate valves and butterfly valves for a municipal water treatment facility upgrade. Products manufactured to EN standards with pressure test reports.',
      image: '/images/industry-water.jpg',
      industry: 'Water Treatment',
      cta: 'View Details',
    },
    {
      id: 'chemical-plant',
      title: 'Chemical Processing Plant Expansion',
      description:
        'Provided stainless steel ball valves and check valves for chemical fluid handling lines. Materials selected per medium compatibility requirements.',
      image: '/images/industry-chemical.jpg',
      industry: 'Chemical Processing',
      cta: 'Read More',
    },
    {
      id: 'hvac-project',
      title: 'Commercial HVAC System Integration',
      description:
        'Delivered wafer butterfly valves and Y-strainers for a large-scale commercial HVAC installation. Coordinated actuator mounting and delivery schedule.',
      image: '/images/industry-power.jpg',
      industry: 'HVAC',
      cta: 'Read More',
    },
  ],
  newsArticles: [
    {
      id: 1,
      title: 'How to Select the Right Valve Material for Your Medium',
      category: 'Technical Guide',
      date: 'May 8, 2025',
      image: '/images/pipeline-closeup.jpg',
      excerpt:
        'A practical guide to matching valve body material, seat material and sealing to your fluid medium and operating conditions.',
    },
    {
      id: 2,
      title: 'Understanding Pressure Ratings: PN vs Class',
      category: 'Industry Insights',
      date: 'April 22, 2025',
      image: '/images/industry-chemical.jpg',
      excerpt:
        'Clarifying the differences between PN and Class pressure rating systems for industrial valve selection.',
    },
    {
      id: 3,
      title: 'Haiyue Valve Expands Testing Capacity',
      category: 'Company News',
      date: 'April 10, 2025',
      image: '/images/factory-testing.jpg',
      excerpt:
        'New pressure testing and dimensional inspection equipment added to support growing order volume.',
    },
  ],
  faqs: [
    {
      question: 'What information should I provide for a valve quotation?',
      answer:
        'Please provide valve type, size, pressure rating, body material, connection type, medium, working temperature, quantity and required standard. Drawings or photos are helpful for OEM parts.',
    },
    {
      question: 'Do you support OEM or private label packing?',
      answer:
        'Yes. We can support OEM marking, neutral packing and customer label requirements after specification confirmation.',
    },
    {
      question: 'Can you provide samples before bulk order?',
      answer:
        'For standard small-size products, samples can be discussed. For customized valves or large-size valves, sample cost and lead time need confirmation.',
    },
    {
      question: 'What is the usual lead time?',
      answer:
        'Lead time depends on valve type, size, material and quantity. Standard items are usually faster; customized or large-size valves require production planning.',
    },
    {
      question: 'Can you provide test reports?',
      answer:
        'Pressure test reports and basic inspection records can be prepared according to order requirements.',
    },
    {
      question: 'Which standards can you manufacture to?',
      answer:
        'Common ANSI / ASME, DIN / EN, API-related designs and project-specific requirements can be reviewed case by case.',
    },
    {
      question: 'What markets do you export to?',
      answer:
        'We have experience supporting customers in Southeast Asia, Middle East, South America, Eastern Europe and other industrial markets.',
    },
    {
      question: 'How soon will I receive a quote?',
      answer:
        'We typically reply to inquiries within one working day; complex specifications may require engineering review.',
    },
    {
      question: 'Can you help with custom or special designs?',
      answer:
        'Yes, we can review custom requirements based on drawings, samples or technical specifications on a case-by-case basis.',
    },
    {
      question: 'Do you provide site visits or technical meetings?',
      answer:
        'Online meetings can be arranged. Factory visits for qualified buyers can be discussed with our sales team.',
    },
  ],
  milestones: [
    {
      year: '2012',
      event:
        'Haiyue Valve founded in Wenzhou, Zhejiang, starting with standard industrial valve manufacturing.',
    },
    {
      year: '2014',
      event: 'Expanded product line to include gate valves, globe valves and butterfly valves.',
    },
    {
      year: '2016',
      event: 'Established CNC machining capabilities and in-house pressure testing.',
    },
    {
      year: '2018',
      event: 'Began regular export operations to Southeast Asia and Middle East markets.',
    },
    {
      year: '2020',
      event: 'Added Y-strainer and valve parts product lines for OEM support.',
    },
    {
      year: '2022',
      event: 'Upgraded testing equipment and expanded production workspace.',
    },
    {
      year: '2024+',
      event: 'Continuing to serve global industrial buyers with reliable valve solutions.',
    },
  ],
  leadership: [
    {
      name: 'Chen Wei',
      role: 'General Manager',
      bio: 'Over 20 years in valve manufacturing and export operations management.',
      image: '/images/team-ceo.png',
    },
    {
      name: 'Lin Xiaomei',
      role: 'Production Director',
      bio: 'Expert in production planning, quality control and workshop management.',
      image: '/images/team-coo.png',
    },
    {
      name: 'Zhang Jun',
      role: 'Technical Engineer',
      bio: 'Responsible for product design, standard compliance and customer technical support.',
      image: '/images/team-cto.png',
    },
    {
      name: 'Wang Fang',
      role: 'Sales Manager',
      bio: 'Handles international sales, customer communication and export documentation.',
      image: '/images/team-cqo.png',
    },
  ],
  certifications: [
    { name: 'API 598', description: 'Valve Inspection & Test' },
    { name: 'API 6D', description: 'Pipeline Valves' },
    { name: 'ISO 9001', description: 'Quality Management Practice' },
    { name: 'ASME B16.34', description: 'Valve Standards' },
    { name: 'DIN / EN', description: 'European Standards' },
    { name: 'CE / PED', description: 'Available on Request' },
  ],
  factoryCapabilities: [
    {
      title: 'CNC Machining',
      description: 'CNC machining for valve bodies, stems and key components.',
      image: '/images/factory-cnc.jpg',
      bullets: [
        'CNC turning and milling for valve bodies',
        'Drilling, threading and sealing surface prep',
        'Key component precision machining',
      ],
    },
    {
      title: 'Assembly Line',
      description: 'Standard product assembly for ball, gate, check and butterfly valves.',
      image: '/images/factory-assembly.jpg',
      bullets: [
        'Ball valve assembly and testing',
        'Gate valve assembly line',
        'Butterfly valve and check valve assembly',
      ],
    },
    {
      title: 'Testing & Inspection',
      description: 'Pressure testing and dimensional inspection before shipment.',
      image: '/images/factory-testing.jpg',
      bullets: [
        'Hydrostatic shell test',
        'Seat leakage test',
        'Pneumatic low-pressure sealing test',
        'Dimensional inspection for key dimensions',
      ],
    },
    {
      title: 'Quality Control',
      description: 'Multi-stage inspection from incoming material to final packing.',
      image: '/images/factory-testing.jpg',
      bullets: [
        'Incoming material check',
        'Machining inspection',
        'Assembly check',
        'Surface and marking check',
        'Final packing inspection',
      ],
    },
    {
      title: 'Warehouse & Logistics',
      description: 'Organized storage and export packing for safe delivery.',
      image: '/images/factory-warehouse.jpg',
      bullets: [
        'Carton / plywood case / pallet packing',
        'Product labels and neutral/OEM marking',
        'Packing list and export documentation',
      ],
    },
    {
      title: 'Standards',
      description: 'Manufacturing aligned with common international standards.',
      image: '/images/factory-testing.jpg',
      bullets: [
        'ANSI / ASME B16.34, B16.5',
        'DIN / EN standards',
        'API 6D / API 598',
        'JIS compatible on request',
      ],
    },
  ],
  processSteps: [
    {
      step: '01',
      title: 'Requirement Review',
      desc: 'Confirm valve type, standard, pressure, material, medium, temperature and quantity.',
    },
    {
      step: '02',
      title: 'Incoming Check',
      desc: 'Inspect castings, forgings, seals, fasteners and material documents.',
    },
    {
      step: '03',
      title: 'Machining',
      desc: 'CNC machining, drilling, threading and sealing surface preparation.',
    },
    {
      step: '04',
      title: 'Assembly',
      desc: 'Install stem, seal, verify operation feel and direction marking.',
    },
    {
      step: '05',
      title: 'Pressure Test',
      desc: 'Shell strength test, seat leakage test, pneumatic sealing test.',
    },
    {
      step: '06',
      title: 'Surface Check',
      desc: 'Visual inspection, painting, marking and flow direction labels.',
    },
    {
      step: '07',
      title: 'Final Packing',
      desc: 'Quantity check, accessories, labels, packaging and shipping docs.',
    },
  ],
  kpis: [
    { label: 'Years Export', value: '10+', desc: 'Export experience' },
    { label: 'Product Types', value: '6+', desc: 'Valve categories' },
    { label: 'Test Stations', value: '5', desc: 'Pressure & inspection' },
    { label: 'Response', value: '24h', desc: 'Quote reply' },
    { label: 'ISO 9001', value: 'Certified', desc: 'Quality management' },
  ],
  contactFaqs: [
    {
      question: 'How soon will I receive a quote?',
      answer:
        'We typically reply within one working day; complex specifications may require engineering review.',
    },
    {
      question: 'What information do you need for a quotation?',
      answer:
        'Valve type, size, pressure rating, body material, connection type, medium, working temperature, quantity and required standard.',
    },
    {
      question: 'Can you help with custom or special designs?',
      answer:
        'Yes, we can review custom requirements based on drawings, samples or technical specifications on a case-by-case basis.',
    },
    {
      question: 'Do you provide site visits or technical meetings?',
      answer:
        'Online meetings can be arranged. Factory visits for qualified buyers can be discussed with our sales team.',
    },
  ],
};

export const {
  company,
  products,
  industries,
  caseStudies,
  newsArticles,
  faqs,
  milestones,
  leadership,
  certifications,
  factoryCapabilities,
  processSteps,
  kpis,
  contactFaqs,
} = siteData;
