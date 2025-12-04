import type { Metadata } from 'next';
import ServicesIndexPage from './page';

export const metadata: Metadata = {
  title: 'Services | Extendia',
  description:
    'Explore our core and specialist services including home extensions, loft conversions, renovations and more across South West London.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndexPageWrapper() {
  return <ServicesIndexPage />;
}
