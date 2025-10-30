import { Metadata } from 'next';
import ServiceAreaLayout from '@/components/ServiceAreaLayout';

export const metadata: Metadata = {
  title: 'Kitchen Renovations Richmond | Design-Led Kitchens & Installation',
  description:
    'Bespoke kitchen renovations in Richmond. Structural openings, ventilation, ergonomic layouts and premium finishes. Free consultation. Call 020 3916 5670.',
  keywords:
    'kitchen renovation Richmond, kitchen design, kitchen installation, kitchen fitters Richmond, open-plan kitchen, kitchen remodel Richmond',
  openGraph: {
    title: 'Kitchen Renovations Richmond | Extendia',
    description:
      'Design-led kitchen renovations in Richmond: layout optimisation, structural openings, ventilation, premium cabinetry and surfaces.',
    type: 'website',
    url: 'https://extendia.co.uk/services/kitchen-renovations/richmond',
  },
};

export default function KitchenRenovationsRichmondPage() {
  return (
    <ServiceAreaLayout
      areaName="Richmond"
      serviceTitle="Kitchen Renovations"
      serviceDescription="Design-led kitchen refurbishments in Richmond focused on workflow, storage density, light and ventilation. From structural openings to appliance integration, we deliver high-performance family kitchens."
      benefitsList={[
        {
          title: 'Layout & Workflow Optimisation',
          description:
            'Zoning for prep, cook and plate-up; improved circulation and sightlines for social cooking.',
          icon: 'Lightbulb',
        },
        {
          title: 'Structural Openings',
          description:
            'Create open-plan kitchen-diners with engineered steelwork and coordinated services routing.',
          icon: 'Building',
        },
        {
          title: 'Ventilation & Extraction',
          description:
            'Quiet, effective extraction and fresh air strategy for healthier, odour-free cooking environments.',
          icon: 'Leaf',
        },
        {
          title: 'Premium Cabinetry & Surfaces',
          description:
            'Durable worksurfaces, custom storage and lighting layers for a refined daily experience.',
          icon: 'Star',
        },
      ]}
      areaSpecifics={[
        {
          title: 'Period Property Coordination',
          description:
            "Richmond's conservation areas demand sympathetic detailing—structural openings and services planned to preserve character.",
        },
        {
          title: 'Side-Return Opportunities',
          description:
            'Side return or rear extensions paired with kitchen reconfiguration to unlock natural light and space.',
        },
        {
          title: 'Family-Centric Storage',
          description:
            'High-efficiency storage, pantries and island planning to keep busy homes organised.',
        },
        {
          title: 'Lighting Strategy',
          description:
            'Natural + task + ambient lighting balance for day-to-night usability and atmosphere.',
        },
      ]}
      trustIndicators={[
        { icon: 'TrendingUp', title: 'Value Uplift', description: 'Well-planned kitchens can boost resale potential significantly' },
        { icon: 'Clock', title: '3–14 Weeks', description: 'Typical programme depending on scope and structural changes', metric: '3–14w' },
        { icon: 'ShieldCheck', title: 'Warranty', description: 'Comprehensive workmanship warranty and manufacturer guarantees' },
      ]}
      projectExamples={[
        {
          title: 'Open-Plan Kitchen-Diner',
          description:
            'Structural wall removal, steel installation, island with downdraft extraction, engineered oak flooring.',
          location: 'Richmond Hill',
          cost: '£28,000 – £45,000',
          duration: '4–6 weeks',
          image: '/images/wp-content/uploads/2021/11/Douglas-Road-Extendia-30.jpg',
        },
        {
          title: 'Galley to L-Shaped Upgrade',
          description:
            'Rewire, new plumbing runs, bespoke cabinetry, quartz worktops and layered lighting.',
          location: 'Kew',
          cost: '£18,000 – £30,000',
          duration: '3–4 weeks',
          image: '/images/wp-content/uploads/2021/11/Douglas-Road-Extendia-27.jpg',
        },
      ]}
      faqItems={[
        {
          question: 'Do you supply or install client-procured kitchens?',
          answer:
            'We work with both partner-supplied and client-procured kitchens—coordinating installation tolerances, services routes and schedules.',
        },
        {
          question: 'Do I need planning permission?',
          answer:
            'Kitchen-only refurbishments rarely require planning. Structural openings, changes to the building envelope or external alterations may require approvals—we advise from the outset.',
        },
      ]}
      compliance={{
        planningInfo:
          'Kitchen-only refits typically fall under internal works; where structural alterations are proposed we assess planning requirements.',
        buildingRegs:
          'Compliance with Part P (electrical), ventilation and fire-safety requirements; sign-offs by competent persons.',
        certifications:
          'NICEIC, Gas Safe (for gas appliances), City & Guilds',
        insurance:
          'Public Liability and Professional Indemnity—documents available on request',
        warranty:
          'Workmanship warranty plus manufacturer warranties on materials',
      }}
    />
  );
}
