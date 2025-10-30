import { Metadata } from 'next';
import ServiceAreaLayout from '@/components/ServiceAreaLayout';

export const metadata: Metadata = {
  title: 'House & Flat Renovations Kingston | Complete Refurbishments',
  description:
    'Comprehensive house and flat refurbishments in Kingston: reconfiguration, MEP upgrades, acoustic/thermal improvements and premium finishes. Transparent pricing. Call 020 3916 5670.',
  keywords:
    'house renovation Kingston, flat refurbishment Kingston, home renovation Kingston, complete refurbishment, reconfiguration, MEP upgrades',
  openGraph: {
    title: 'House & Flat Renovations Kingston | Extendia',
    description:
      'Full refurbishments: layout reconfiguration, structural steelwork, services upgrades, bathrooms and kitchens with premium finishes.',
    type: 'website',
    url: 'https://extendia.co.uk/services/house-renovations/kingston',
  },
};

export default function HouseRenovationsKingstonPage() {
  return (
    <ServiceAreaLayout
      areaName="Kingston"
      serviceTitle="House/Flat Renovations"
      serviceDescription="Complete house and flat refurbishments in Kingston—from structural openings and new electrical/plumbing to acoustic and thermal upgrades and cohesive finishes. One team with end-to-end responsibility."
      benefitsList={[
        {
          title: 'Reconfiguration',
          description: 'Optimised circulation, structural openings with engineered steel and full as-built documentation.',
          icon: 'Building',
        },
        {
          title: 'MEP Upgrades',
          description: 'New circuits and consumer units, plumbing runs and underfloor heating in compliance with regulations.',
          icon: 'Wrench',
        },
        {
          title: 'Acoustic & Thermal Comfort',
          description: 'Soundproofing, damp mitigation and energy efficiency improvements for real-life comfort.',
          icon: 'Shield',
        },
        {
          title: 'Bathrooms & Kitchens Integration',
          description: 'Bathroom and kitchen refurbishments coordinated within the overall programme for consistent style and sequencing.',
          icon: 'CheckCircle',
        },
      ]}
      areaSpecifics={[
        {
          title: 'Victorian/Edwardian Fabric',
          description:
            'Experience refurbishing period terraces and maisonettes while preserving facade character and heritage details.',
        },
        {
          title: 'Moisture Control',
          description:
            'Waterproofing, ventilation, careful interfaces at floors and lintels—fewer maintenance surprises.',
        },
        {
          title: 'Phasing & Budget Planning',
          description: 'Works phased to suit occupancy and cash flow, clear cost breakdowns and contingency aligned with condition survey.',
        },
        {
          title: 'Building Control Coordination',
          description:
            'Proactive communication with Building Control and prepared documentation for sign-offs—fewer delays.',
        },
      ]}
      trustIndicators={[
        { icon: 'TrendingUp', title: 'ROI & Comfort', description: 'Higher property value and real-life daily comfort' },
        { icon: 'Clock', title: '4–24 Weeks', description: 'Timeline depends on scope, access and decisions', metric: '4–24w' },
        { icon: 'ShieldCheck', title: 'Warranty', description: 'Workmanship warranty plus manufacturers’ guarantees' },
      ]}
      projectExamples={[
        {
          title: 'Ground Floor Open-Plan + Bathroom',
          description: 'Wall removals, HEB steelwork, new kitchen and bathroom layout, flooring and lighting.',
          location: 'Kingston Town Centre',
          cost: '£35,000 – £60,000',
          duration: '6–10 weeks',
          image: '/images/wp-content/uploads/2021/11/Douglas-Road-Extendia-10.jpg',
        },
        {
          title: 'Complete Flat Refurbishment',
          description: 'Rewiring, heating, soundproofing, bathroom, kitchen and turnkey finishes.',
          location: 'Norbiton',
          cost: '£45,000 – £85,000',
          duration: '8–14 weeks',
          image: '/images/wp-content/uploads/2021/11/Douglas-Road-Extendia-7.jpg',
        },
      ]}
      faqItems={[
        {
          question: 'Can you work while the property is occupied?',
          answer: 'Yes—we phase works and protect zones to minimise disruption. Shift work is possible when needed.',
        },
        {
          question: 'How do you manage unexpected site issues?',
          answer: 'We maintain a live risk register, contingency budget and fast change control—backed by transparent progress reporting.',
        },
      ]}
      compliance={{
        planningInfo:
          'Most internal works are permitted without planning; changes to massing, windows or facade may require applications—we advise case-by-case.',
        buildingRegs:
          'Compliance with Building Regulations Parts A, B, E, F, L, M and Part P (electrics). Sign-offs by relevant authorities.',
        certifications:
          'NICEIC, Gas Safe, City & Guilds; full O&M documentation provided.',
        insurance:
          'PL/PI/EL—comprehensive insurances during works; certificates available.',
        warranty:
          'Workmanship warranty plus manufacturers’ warranties; aftercare support.',
      }}
    />
  );
}
