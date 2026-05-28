import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, Clock } from 'lucide-react';
import CTABanner from '../components/CTABanner';
import { submitInquiry } from '../lib/supabase';
import { CTAButton, FormLabel, PageHero, SelectInput, TextareaField, TextInput } from '../components/common';
import { pageHeroes } from '../data/pageHeroes';

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-brand-red" />,
    title: 'Sales Email',
    content: 'sales@haiyuevalve.com',
  },
  {
    icon: <Phone className="w-5 h-5 text-brand-red" />,
    title: 'Phone',
    content: '+86 577 0000 0000',
  },
  {
    icon: <MapPin className="w-5 h-5 text-brand-red" />,
    title: 'Address',
    content: 'No. 88, Coastal Industrial Road, Longwan District, Wenzhou, Zhejiang, China',
  },
  {
    icon: <Clock className="w-5 h-5 text-brand-red" />,
    title: 'Business Hours',
    content: 'Monday – Friday: 8:30 AM – 5:30 PM (CST)',
    sub: 'Saturday & Sunday: Closed',
  },
];

const purposeCards = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Sales Inquiry',
    desc: 'Get product information, pricing, and lead time details.',
    href: '/request-quote?source=sales-inquiry',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Technical Support',
    desc: 'Our engineers are ready to help with technical questions.',
    href: '/contact?topic=Technical%20Support',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-red">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Factory Visit',
    desc: 'Schedule a visit to our factory and see our capabilities firsthand.',
    href: '/contact?topic=Factory%20Visit',
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmitting(true);

    const formData = new FormData(event.currentTarget);
    try {
      await submitInquiry({
        type: 'contact',
        contact: {
          name: formData.get('name'),
          email: formData.get('email'),
          company: formData.get('company'),
          country: formData.get('country'),
        },
        message: formData.get('message'),
        source_path: `${window.location.pathname}${window.location.search}`,
      });
      navigate('/thank-you?type=contact');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not submit your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-[80px]">
      <PageHero {...pageHeroes.contact} />

      {/* ═══════ MAIN CONTACT SECTION ═══════ */}
      <section className="bg-gray-50 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Form */}
            <div className="lg:w-[55%]">
              <div className="bg-white border border-gray-200 p-6 lg:p-8">
                <h2 className="text-lg font-bold text-text-primary mb-1">Send Us a Message</h2>
                <p className="text-sm text-text-muted mb-6">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <FormLabel required>Name</FormLabel>
                      <TextInput name="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <FormLabel required>Email</FormLabel>
                      <TextInput name="email" type="email" placeholder="Your email" required />
                    </div>
                    <div>
                      <FormLabel required>Company</FormLabel>
                      <TextInput name="company" placeholder="Your company name" required />
                    </div>
                    <div>
                      <FormLabel required>Country</FormLabel>
                      <SelectInput name="country" placeholder="Select your country" required options={['China', 'United States', 'Germany', 'Russia', 'Saudi Arabia', 'India', 'Brazil', 'Other']} />
                    </div>
                    <div>
                      <FormLabel required>Message</FormLabel>
                      <TextareaField name="message" rows={4} defaultValue={searchParams.get('topic') ? `I would like to learn more about: ${searchParams.get('topic')}` : ''} placeholder="How can we help you?" required />
                    </div>
                    {error && <p className="text-xs text-brand-red">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 h-[40px] px-6 bg-brand-red text-white text-sm font-semibold hover:bg-dark-red transition-colors"
                    >
                      {submitting ? 'Sending...' : 'Send Message'} <ArrowRight className="w-4 h-4" />
                    </button>
                    <p className="text-[11px] text-text-muted mt-2">
                      By submitting this form, you agree to our <Link to="/resources#faqs" className="text-brand-red hover:underline">Privacy Policy</Link>.
                    </p>
                  </form>
              </div>
            </div>

            {/* Right: Company Info */}
            <div className="lg:w-[45%] space-y-4">
              <h2 className="text-lg font-bold text-text-primary mb-2">Company Information</h2>
              {contactInfo.map((item) => (
                <div key={item.title} className="bg-white border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <div>
                      <h4 className="font-semibold text-text-primary text-sm mb-1">{item.title}</h4>
                      <p className="text-sm text-text-secondary">{item.content}</p>
                      {item.sub && <p className="text-xs text-text-muted mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT PURPOSE CARDS ═══════ */}
      <section className="bg-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {purposeCards.map((card) => (
              <Link
                key={card.title}
                to={card.href}
                className="bg-white border border-gray-200 p-6 hover:border-brand-red/30 transition-colors cursor-pointer group"
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="font-semibold text-text-primary text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">{card.desc}</p>
                <ArrowRight className="w-4 h-4 text-brand-red group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOTTOM RFQ CTA ═══════ */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-4">
              <svg className="w-10 h-10 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <h3 className="font-semibold text-text-primary text-base">Have Product Specifications?</h3>
                <p className="text-sm text-text-secondary">Customers with detailed specifications can submit an RFQ to get a faster and more accurate quote.</p>
              </div>
            </div>
            <CTAButton to="/request-quote">Request a Quote</CTAButton>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
