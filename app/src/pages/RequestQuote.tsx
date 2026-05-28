import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Phone, Mail, MapPin, Clock, ShieldCheck, FileText, Upload, HelpCircle, ChevronDown } from 'lucide-react';
import CTABanner from '../components/CTABanner';

const whatToPrepare = [
  'Valve type, size, pressure rating',
  'Material, connection & standard',
  'Medium, temperature & pressure',
  'Quantity and delivery time',
  'Drawings or technical datasheets',
  'Destination port and Incoterms',
];

const engineeringSupport = [
  'Technical selection assistance',
  'Custom design & material options',
  'Fast & reliable quotation',
];

const productTypes = ['Ball Valve', 'Gate Valve', 'Globe Valve', 'Butterfly Valve', 'Check Valve', 'Y Strainer', 'Other'];
const materials = ['WCB', 'CF8', 'CF8M', 'CF3M', 'Duplex', 'Super Duplex', 'Other'];
const connections = ['Flanged RF', 'Flanged RTJ', 'Threaded', 'Socket Weld', 'Butt Weld', 'Wafer', 'Lug'];
const deliveryTimes = ['Within 2 weeks', '2–4 weeks', '4–8 weeks', '8–12 weeks', '12+ weeks', 'To be discussed'];
const incoterms = ['EXW', 'FOB', 'CIF', 'CFR', 'DAP', 'DDP'];

function FormLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-sm font-medium text-text-primary mb-1.5">
      {children}
      {required && <span className="text-brand-red ml-0.5">*</span>}
    </label>
  );
}

function TextInput({ placeholder, required, type = 'text' }: { placeholder: string; required?: boolean; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full h-10 px-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-brand-red transition-colors"
    />
  );
}

function SelectInput({ placeholder, options }: { placeholder: string; options: string[] }) {
  return (
    <div className="relative">
      <select className="w-full h-10 px-3 text-sm border border-gray-200 bg-white focus:outline-none focus:border-brand-red transition-colors appearance-none cursor-pointer text-text-secondary">
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
    </div>
  );
}

export default function RequestQuote() {
  const navigate = useNavigate();
  return (
    <div className="pt-[72px]">
      {/* ═══════ HERO ═══════ */}
      <section className="relative overflow-hidden" style={{ minHeight: 240 }}>
        <div className="absolute inset-0">
          <img src="/images/cases-hero.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <h1 className="text-3xl lg:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Request a Valve Quotation
          </h1>
          <p className="text-white/80 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            Send us your valve requirements, drawings, and project specifications. Our engineering team will review and provide a competitive quotation.
          </p>
        </div>
      </section>

      {/* ═══════ TRUST POINTS ═══════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Technical confirmation</div>
                <div className="text-xs text-text-muted">before quotation</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Export documentation</div>
                <div className="text-xs text-text-muted">support</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-brand-red flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <div className="text-sm font-semibold text-text-primary">Response within</div>
                <div className="text-xs text-text-muted">24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ MAIN FORM + SIDEBAR ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* LEFT: Form */}
            <div className="lg:w-[70%]">
              <div className="bg-white border border-gray-200 p-6 lg:p-8">
                {/* 1. Contact Information */}
                <div className="mb-8">
                  <h3 className="font-bold text-text-primary text-lg mb-5">1. Contact Information</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <FormLabel required>Full Name</FormLabel>
                      <TextInput placeholder="Your full name" required />
                    </div>
                    <div>
                      <FormLabel required>Company Name</FormLabel>
                      <TextInput placeholder="Your company name" required />
                    </div>
                    <div>
                      <FormLabel required>Email Address</FormLabel>
                      <TextInput placeholder="name@company.com" required type="email" />
                    </div>
                    <div>
                      <FormLabel required>Phone / WhatsApp</FormLabel>
                      <TextInput placeholder="+86 138 0000 0000" required />
                    </div>
                    <div>
                      <FormLabel required>Country / Region</FormLabel>
                      <SelectInput placeholder="Select country or region" options={['China', 'United States', 'Germany', 'Russia', 'Saudi Arabia', 'India', 'Brazil', 'Other']} />
                    </div>
                    <div>
                      <FormLabel>Job Title</FormLabel>
                      <TextInput placeholder="Your job title" />
                    </div>
                  </div>
                </div>

                {/* 2. Product Requirement */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">2. Product Requirement</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <FormLabel required>Product Type</FormLabel>
                      <SelectInput placeholder="Select product type" options={productTypes} />
                    </div>
                    <div>
                      <FormLabel required>Size (DN)</FormLabel>
                      <TextInput placeholder="Example: DN50" required />
                    </div>
                    <div>
                      <FormLabel required>Pressure Class</FormLabel>
                      <TextInput placeholder="Example: PN16 / Class 150" required />
                    </div>
                    <div>
                      <FormLabel required>Body Material</FormLabel>
                      <SelectInput placeholder="Select material" options={materials} />
                    </div>
                    <div>
                      <FormLabel required>Connection Type</FormLabel>
                      <SelectInput placeholder="Select connection" options={connections} />
                    </div>
                    <div>
                      <FormLabel required>Quantity</FormLabel>
                      <TextInput placeholder="Example: 10 pcs" required />
                    </div>
                    <div>
                      <FormLabel>Valve Standard</FormLabel>
                      <TextInput placeholder="Example: API 600, GB/T 12237" />
                    </div>
                    <div className="sm:col-span-2">
                      <FormLabel>Actuation (Optional)</FormLabel>
                      <TextInput placeholder="Manual / Gear / Electric / Pneumatic" />
                    </div>
                  </div>
                </div>

                {/* 3. Working Condition */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">3. Working Condition</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <FormLabel required>Medium / Fluid</FormLabel>
                      <TextInput placeholder="e.g. Water, Steam, Oil, Gas" required />
                    </div>
                    <div>
                      <FormLabel required>Temperature (°C)</FormLabel>
                      <TextInput placeholder="Min – Max" required />
                    </div>
                    <div>
                      <FormLabel required>Operating Pressure</FormLabel>
                      <TextInput placeholder="Example: 1.6 MPa" required />
                    </div>
                    <div>
                      <FormLabel>End Connection Standard</FormLabel>
                      <TextInput placeholder="e.g. ASME B16.5" />
                    </div>
                    <div>
                      <FormLabel>Testing Standard</FormLabel>
                      <TextInput placeholder="e.g. API 598" />
                    </div>
                    <div>
                      <FormLabel>Special Requirements</FormLabel>
                      <TextInput placeholder="e.g. Fire safe, NACE, Low temp." />
                    </div>
                  </div>
                </div>

                {/* 4. Project Information */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">4. Project Information</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <FormLabel>Project Name</FormLabel>
                      <TextInput placeholder="e.g. Project name" />
                    </div>
                    <div>
                      <FormLabel>End User / Owner</FormLabel>
                      <TextInput placeholder="e.g. End user or owner" />
                    </div>
                    <div>
                      <FormLabel required>Delivery Time</FormLabel>
                      <SelectInput placeholder="Select delivery time" options={deliveryTimes} />
                    </div>
                    <div>
                      <FormLabel required>Destination Port</FormLabel>
                      <TextInput placeholder="e.g. Shanghai, Singapore" required />
                    </div>
                    <div>
                      <FormLabel required>Incoterms</FormLabel>
                      <SelectInput placeholder="Select incoterms" options={incoterms} />
                    </div>
                    <div>
                      <FormLabel>Upload Drawing / Datasheet</FormLabel>
                      <div className="relative">
                        <input type="file" id="file-upload" className="hidden" />
                        <label
                          htmlFor="file-upload"
                          className="w-full h-10 px-3 text-sm border border-gray-200 bg-white flex items-center gap-2 cursor-pointer hover:border-brand-red transition-colors text-text-secondary"
                        >
                          <Upload className="w-4 h-4" />
                          Choose file
                          <span className="text-text-muted ml-1">No file chosen</span>
                        </label>
                      </div>
                      <p className="text-[11px] text-text-muted mt-1">DWG, PDF, JPG up to 20MB</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <FormLabel>Additional Notes / Message</FormLabel>
                    <textarea
                      rows={4}
                      placeholder="Please provide any additional information about your requirements."
                      className="w-full px-3 py-2 text-sm border border-gray-200 bg-white focus:outline-none focus:border-brand-red transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-100">
                  <button onClick={() => navigate('/thank-you?type=rfq')} className="inline-flex items-center gap-2 h-[48px] px-8 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors">
                    Submit RFQ <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-text-muted flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Your information is secure and will only be used to process your request.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:w-[30%] space-y-6">
              {/* What to Prepare */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-semibold text-text-primary text-base mb-4">What to Prepare</h4>
                <p className="text-sm text-text-muted mb-4">The more details you provide, the faster we can confirm and quote.</p>
                <ul className="space-y-2.5">
                  {whatToPrepare.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <Check className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-semibold text-text-primary text-base mb-4">Quick Contact</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">+86 577 5557 0300</div>
                      <div className="text-xs text-text-muted">Mon–Fri 8:30 – 17:30 (CST)</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">sales@haiyuevalve.com</div>
                      <div className="text-xs text-text-muted">We will reply within 24 hours</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">+86 138 0000 0000</div>
                      <div className="text-xs text-text-muted">WhatsApp / WeChat</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium text-text-primary">Zhejiang, China</div>
                      <div className="text-xs text-text-muted">Global export & support</div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Engineering Support */}
              <div className="bg-white border border-gray-200 p-6">
                <h4 className="font-semibold text-text-primary text-base mb-4">Engineering Support</h4>
                <div className="overflow-hidden mb-4">
                  <img src="/images/engineering-support.jpg" alt="Engineering Support" className="w-full h-36 object-cover" />
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  Our engineering team will review your requirements, confirm feasibility, and recommend the best valve solution.
                </p>
                <ul className="space-y-2 mb-4">
                  {engineeringSupport.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="text-brand-red mt-0.5">•</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="text-brand-red text-sm font-semibold hover:underline inline-flex items-center gap-1">
                  Learn more about Our Capabilities <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ═══════ BOTTOM HELPER SECTIONS ═══════ */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border border-gray-200 p-6 flex items-start gap-4">
              <Upload className="w-8 h-8 text-brand-red flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">Upload Drawings or Technical Files</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Have detailed drawings or P&IDs? Upload them with your request or email directly to{' '}
                  <a href="mailto:sales@haiyuevalve.com" className="text-brand-red hover:underline">our team</a>.
                </p>
                <button className="mt-3 inline-flex items-center gap-2 h-9 px-4 border border-gray-200 text-sm text-text-secondary hover:border-brand-red hover:text-brand-red transition-colors">
                  <Upload className="w-4 h-4" /> Upload Files
                </button>
              </div>
            </div>
            <div className="relative bg-white border border-gray-200 p-6 flex items-start gap-4">
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-xs text-text-muted font-medium">OR</div>
              </div>
              <HelpCircle className="w-8 h-8 text-brand-red flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">Not Sure About the Details?</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Contact our engineers directly. We're happy to help clarify your requirements.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-2 h-9 px-4 border border-gray-200 text-sm text-text-secondary hover:border-brand-red hover:text-brand-red transition-colors"
                >
                  Contact Engineering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ BOTTOM CTA ═══════ */}
      <section className="bg-brand-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 text-white/90 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="text-white font-semibold text-lg">Partner with a Trusted Valve Manufacturer</h3>
                <p className="text-white/80 text-sm">High quality. On-time delivery. Global service.</p>
              </div>
            </div>
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 h-[48px] px-7 bg-white text-brand-red text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
            >
              Request a Quote Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
