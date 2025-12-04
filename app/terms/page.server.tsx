import type { Metadata } from 'next';
import TermsPage from './page';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Extendia',
  description:
    'Read the terms and conditions for using Extendia services, including responsibilities, liabilities and legal information.',
  alternates: { canonical: '/terms' },
};

export default function TermsPageWrapper() {
  return <TermsPage />;
}
