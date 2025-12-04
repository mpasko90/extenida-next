import type { Metadata } from 'next';
import ContactPage from './page';

export const metadata: Metadata = {
  title: 'Contact Extendia | Request a Consultation',
  description:
    'Get in touch with Extendia to discuss your house extension, loft conversion or renovation project in South West London.',
  alternates: { canonical: '/contact' },
};

export default function ContactPageWrapper() {
  return <ContactPage />;
}
