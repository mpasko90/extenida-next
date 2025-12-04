import type { Metadata } from 'next';
import JourneyPage from './page';

export const metadata: Metadata = {
  title: 'Your Project Journey | Extendia',
  description:
    'See how Extendia guides you from initial consultation through design, construction and aftercare for your home extension or renovation.',
  alternates: { canonical: '/journey' },
};

export default function JourneyPageWrapper() {
  return <JourneyPage />;
}
