import type { Metadata } from 'next';
import PrivacyPage from './page';

export const metadata: Metadata = {
  title: 'Privacy Policy | Extendia',
  description:
    'Understand how Extendia collects, uses and protects your personal data when you use our website and services.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPageWrapper() {
  return <PrivacyPage />;
}
