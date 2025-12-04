import type { Metadata } from 'next';
import HomePage from './page';

export const metadata: Metadata = {
  title: 'Extendia - House Extensions & Loft Conversions in South West London',
  description:
    'Design and build house extensions, loft conversions and full home renovations across South West London, including Kingston, Richmond, Wimbledon and Putney.',
  alternates: { canonical: '/' },
};

export default function HomePageWrapper() {
  return <HomePage />;
}
