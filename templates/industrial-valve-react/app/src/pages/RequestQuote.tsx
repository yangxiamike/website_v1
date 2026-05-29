import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check, Phone, Mail, MapPin, Clock, ShieldCheck, FileText, Upload, HelpCircle } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { deleteRfqAttachment, submitInquiry, uploadRfqAttachment, type UploadedAttachment } from '../lib/supabase';
import { productsList } from '../data/productsCatalog';
import { FormLabel, PageHero, SelectInput, TextareaField, TextInput } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';

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

export default function RequestQuote() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [fileName, setFileName] = useState('No file chosen');
  const sourceProduct = productsList.find((product) => product.id === searchParams.get('product'));
  const sourceLabel = sourceProduct?.name || searchParams.get('source');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const file = formData.get('attachment');

    try {
      const attachments: UploadedAttachment[] = file instanceof File && file.size > 0 ? [await uploadRfqAttachment(file)] : [];
      try {
        await submitInquiry({
          type: 'rfq',
          contact: {
            full_name: formData.get('full_name'),
            company: formData.get('company'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            country: formData.get('country'),
            job_title: formData.get('job_title'),
          },
          product_requirements: {
            product_type: formData.get('product_type'),
            size: formData.get('size'),
            pressure_class: formData.get('pressure_class'),
            body_material: formData.get('body_material'),
            connection_type: formData.get('connection_type'),
            quantity: formData.get('quantity'),
            valve_standard: formData.get('valve_standard'),
            actuation: formData.get('actuation'),
            medium: formData.get('medium'),
            temperature: formData.get('temperature'),
            operating_pressure: formData.get('operating_pressure'),
            end_connection_standard: formData.get('end_connection_standard'),
            testing_standard: formData.get('testing_standard'),
            special_requirements: formData.get('special_requirements'),
          },
          project: {
            project_name: formData.get('project_name'),
            end_user: formData.get('end_user'),
            delivery_time: formData.get('delivery_time'),
            destination_port: formData.get('destination_port'),
            incoterms: formData.get('incoterms'),
            source_product: searchParams.get('product'),
            source: searchParams.get('source'),
          },
          message: formData.get('message'),
          source_path: `${window.location.pathname}${window.location.search}`,
          attachments,
        });
      } catch (submitError) {
        await Promise.allSettled(attachments.map((attachment) => deleteRfqAttachment(attachment)));
        throw submitError;
      }
      navigate('/thank-you?type=rfq');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit your RFQ. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-[72px] sm:pt-[80px]">
      <PageHero {...pageHeroes.requestQuote} />

      {/* ═══════ TRUST POINTS ═══════ */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
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
              <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-4 sm:p-6 lg:p-8">
                {sourceLabel && (
                  <div className="mb-6 border border-brand-red/20 bg-brand-red/5 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Request context</p>
                    <p className="text-sm text-text-secondary mt-1">
                      {sourceProduct ? `You are requesting a quotation for ${sourceProduct.name}.` : `You came from: ${sourceLabel}.`}
                    </p>
                  </div>
                )}
                {/* 1. Contact Information */}
                <div className="mb-8">
                  <h3 className="font-bold text-text-primary text-lg mb-5">1. Contact Information</h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <FormLabel required>Full Name</FormLabel>
                      <TextInput name="full_name" placeholder="Your full name" required />
                    </div>
                    <div>
                      <FormLabel required>Company Name</FormLabel>
                      <TextInput name="company" placeholder="Your company name" required />
                    </div>
                    <div>
                      <FormLabel required>Email Address</FormLabel>
                      <TextInput name="email" placeholder="name@company.com" required type="email" />
                    </div>
                    <div>
                      <FormLabel required>Phone / WhatsApp</FormLabel>
                      <TextInput name="phone" placeholder="+86 138 0000 0000" required />
                    </div>
                    <div>
                      <FormLabel required>Country / Region</FormLabel>
                      <SelectInput name="country" placeholder="Select country or region" required options={['China', 'United States', 'Germany', 'Russia', 'Saudi Arabia', 'India', 'Brazil', 'Other']} />
                    </div>
                    <div>
                      <FormLabel>Job Title</FormLabel>
                      <TextInput name="job_title" placeholder="Your job title" />
                    </div>
                  </div>
                </div>

                {/* 2. Product Requirement */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">2. Product Requirement</h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <FormLabel required>Product Type</FormLabel>
                      <SelectInput name="product_type" placeholder="Select product type" required options={productTypes} defaultValue={sourceProduct?.category} />
                    </div>
                    <div>
                      <FormLabel required>Size (DN)</FormLabel>
                      <TextInput name="size" placeholder="Example: DN50" required />
                    </div>
                    <div>
                      <FormLabel required>Pressure Class</FormLabel>
                      <TextInput name="pressure_class" placeholder="Example: PN16 / Class 150" required />
                    </div>
                    <div>
                      <FormLabel required>Body Material</FormLabel>
                      <SelectInput name="body_material" placeholder="Select material" required options={materials} />
                    </div>
                    <div>
                      <FormLabel required>Connection Type</FormLabel>
                      <SelectInput name="connection_type" placeholder="Select connection" required options={connections} />
                    </div>
                    <div>
                      <FormLabel required>Quantity</FormLabel>
                      <TextInput name="quantity" placeholder="Example: 10 pcs" required />
                    </div>
                    <div>
                      <FormLabel>Valve Standard</FormLabel>
                      <TextInput name="valve_standard" placeholder="Example: API 600, GB/T 12237" />
                    </div>
                    <div className="md:col-span-2 xl:col-span-2">
                      <FormLabel>Actuation (Optional)</FormLabel>
                      <TextInput name="actuation" placeholder="Manual / Gear / Electric / Pneumatic" />
                    </div>
                  </div>
                </div>

                {/* 3. Working Condition */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">3. Working Condition</h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <FormLabel required>Medium / Fluid</FormLabel>
                      <TextInput name="medium" placeholder="e.g. Water, Steam, Oil, Gas" required />
                    </div>
                    <div>
                      <FormLabel required>Temperature (°C)</FormLabel>
                      <TextInput name="temperature" placeholder="Min – Max" required />
                    </div>
                    <div>
                      <FormLabel required>Operating Pressure</FormLabel>
                      <TextInput name="operating_pressure" placeholder="Example: 1.6 MPa" required />
                    </div>
                    <div>
                      <FormLabel>End Connection Standard</FormLabel>
                      <TextInput name="end_connection_standard" placeholder="e.g. ASME B16.5" />
                    </div>
                    <div>
                      <FormLabel>Testing Standard</FormLabel>
                      <TextInput name="testing_standard" placeholder="e.g. API 598" />
                    </div>
                    <div>
                      <FormLabel>Special Requirements</FormLabel>
                      <TextInput name="special_requirements" placeholder="e.g. Fire safe, NACE, Low temp." />
                    </div>
                  </div>
                </div>

                {/* 4. Project Information */}
                <div className="mb-8 pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-text-primary text-lg mb-5">4. Project Information</h3>
                  <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    <div>
                      <FormLabel>Project Name</FormLabel>
                      <TextInput name="project_name" placeholder="e.g. Project name" />
                    </div>
                    <div>
                      <FormLabel>End User / Owner</FormLabel>
                      <TextInput name="end_user" placeholder="e.g. End user or owner" />
                    </div>
                    <div>
                      <FormLabel required>Delivery Time</FormLabel>
                      <SelectInput name="delivery_time" placeholder="Select delivery time" required options={deliveryTimes} />
                    </div>
                    <div>
                      <FormLabel required>Destination Port</FormLabel>
                      <TextInput name="destination_port" placeholder="e.g. Shanghai, Singapore" required />
                    </div>
                    <div>
                      <FormLabel required>Incoterms</FormLabel>
                      <SelectInput name="incoterms" placeholder="Select incoterms" required options={incoterms} />
                    </div>
                    <div>
                      <FormLabel>Upload Drawing / Datasheet</FormLabel>
                      <div className="relative">
                        <input name="attachment" type="file" id="file-upload" accept=".pdf,.dwg,.jpg,.jpeg,application/pdf,image/jpeg" className="hidden" onChange={(event) => setFileName(event.target.files?.[0]?.name || 'No file chosen')} />
                        <label
                          htmlFor="file-upload"
                          className="flex min-h-[44px] w-full items-center gap-2 border border-gray-200 bg-white px-3 py-3 text-sm text-text-secondary transition-colors hover:border-brand-red cursor-pointer sm:min-h-[40px] sm:py-2"
                        >
                          <Upload className="w-4 h-4" />
                          Choose file
                          <span className="ml-1 min-w-0 truncate text-text-muted">{fileName}</span>
                        </label>
                      </div>
                      <p className="text-[11px] text-text-muted mt-1">DWG, PDF, JPG up to 20MB</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <FormLabel>Additional Notes / Message</FormLabel>
                    <TextareaField name="message" rows={4} placeholder="Please provide any additional information about your requirements." />
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col items-stretch justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
                  <div className="w-full sm:w-auto">
                    {error && <p className="text-xs text-brand-red mb-3">{error}</p>}
                    <button type="submit" disabled={submitting} className="inline-flex h-[48px] w-full items-center justify-center gap-2 bg-brand-red px-8 text-sm font-semibold text-white transition-colors hover:bg-dark-red disabled:opacity-70 whitespace-nowrap sm:w-auto">
                      {submitting ? 'Submitting...' : 'Submit RFQ'} <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="flex max-w-md items-start gap-1.5 text-left text-xs text-text-muted">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Your information is secure and will only be used to process your request.
                  </p>
                </div>
              </form>
            </div>

            {/* RIGHT: Sidebar */}
            <div className="lg:w-[30%] space-y-6">
              {/* What to Prepare */}
              <div className="bg-white border border-gray-200 p-5 sm:p-6">
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
              <div className="bg-white border border-gray-200 p-5 sm:p-6">
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
              <div className="bg-white border border-gray-200 p-5 sm:p-6">
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
          <div className="grid gap-6 mt-8 md:grid-cols-2">
            <div className="flex items-start gap-4 border border-gray-200 bg-white p-5 sm:p-6">
              <Upload className="w-8 h-8 text-brand-red flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-text-primary text-sm mb-1">Upload Drawings or Technical Files</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                  Have detailed drawings or P&IDs? Upload them with your request or email directly to{' '}
                  <a href="mailto:sales@haiyuevalve.com" className="text-brand-red hover:underline">our team</a>.
                </p>
                <button type="button" onClick={() => document.getElementById('file-upload')?.click()} className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 border border-gray-200 px-4 text-sm text-text-secondary transition-colors hover:border-brand-red hover:text-brand-red sm:w-auto sm:h-9">
                  <Upload className="w-4 h-4" /> Upload Files
                </button>
              </div>
            </div>
            <div className="relative flex items-start gap-4 border border-gray-200 bg-white p-5 sm:p-6">
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
                  className="mt-3 inline-flex h-10 w-full items-center justify-center gap-2 border border-gray-200 px-4 text-sm text-text-secondary transition-colors hover:border-brand-red hover:text-brand-red sm:w-auto sm:h-9"
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
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
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
              className="inline-flex h-[48px] w-full items-center justify-center gap-2 bg-white px-7 text-sm font-semibold text-brand-red transition-colors hover:bg-gray-100 sm:w-auto flex-shrink-0"
            >
              Request for Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
