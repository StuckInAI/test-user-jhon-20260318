import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Acme Corp. We would love to hear from you and discuss how we can help.',
};

const contactInfo = [
  {
    icon: '📍',
    title: 'Our Office',
    details: ['123 Business Avenue', 'San Francisco, CA 94102'],
  },
  {
    icon: '📞',
    title: 'Phone',
    details: ['+1 (555) 123-4567', 'Mon–Fri, 9am–6pm PST'],
  },
  {
    icon: '✉️',
    title: 'Email',
    details: ['hello@acmecorp.com', 'support@acmecorp.com'],
  },
  {
    icon: '🌐',
    title: 'Social Media',
    details: ['@acmecorp on Twitter', '@acmecorp on LinkedIn'],
  },
];

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in <span className="text-primary-300">Touch</span>
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto leading-relaxed">
            Have a question or ready to start your project? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
                <p className="text-gray-600">Reach out through any of the channels below and we&apos;ll get back to you as soon as possible.</p>
              </div>
              {contactInfo.map((info) => (
                <div key={info.title} className="card flex items-start gap-4">
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="text-gray-600 text-sm mt-1">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-gray-200 h-64 flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-4xl mb-2">🗺️</div>
          <p className="text-lg font-medium">San Francisco, CA</p>
          <p className="text-sm">123 Business Avenue, Suite 400</p>
        </div>
      </section>
    </div>
  );
}
