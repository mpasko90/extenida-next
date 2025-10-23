// Awards data ported from Extendia Alpha
// Centralized for reuse in sections/pages.

export interface AwardEntry {
  id: string;
  title: string;
  year: string; // allow ranges
  organization: string;
  description: string;
  image?: string;
  link?: string;
  groupKey?: string;
}

export const awards: AwardEntry[] = [
  {
    id: 'houzz-service-2025',
    title: 'Best of Houzz – Service',
    year: '2025',
    organization: 'Houzz',
    description: 'Awarded for sustained excellence in client reviews and project delivery standards (2024/25 cycle).',
  // Using original Alpha asset path (contains spaces) now present in public folder.
  image: '/images/awards/boh-promo-kit 2025/UK BOH25 Service/02_Social_Assets/houzz2025.png',
    link: 'https://www.houzz.co.uk/professionals/design-build-firms/extendia-pfvwgb-pf~2163000585',
    groupKey: 'houzz-service'
  },
  // 2024 awards added (images available under public/images/awards/updated)
  {
    id: 'sme-uk-enterprise-2024',
    title: 'UK Enterprise Awards – Winner',
    year: '2024',
    organization: 'SME News',
    description: 'Recognised as a 2024 winner in the UK Enterprise Awards for outstanding performance and service.',
    image: '/images/awards/updated/Aug25051_BUILDCLOCK-LIMITED_SME-2024-UK-Enterprise--Awards-Winners-Badge.png'
  },
  {
    id: 'build-magazine-winner-logo-2024',
    title: 'BUILD Magazine – Official Winner',
    year: '2024',
    organization: 'BUILD Magazine',
    description: 'Official winners logo supplied by BUILD Magazine for the 2024 awards season.',
    image: '/images/awards/updated/Aug25050_BUILDCLOCK-LIMITED_Logo.png'
  },
  {
    id: 'build-construction-engineering-2024',
    title: 'Construction & Engineering Awards – Winner',
    year: '2024',
    organization: 'BUILD Magazine',
    description: 'Awarded in BUILD’s 2024 Construction & Engineering Awards for excellence in residential project delivery.',
    image: '/images/awards/updated/Aug25052_BUILDCLOCK-LIMITED_BUILD-Construction-&-Engineering-Awards-2024-Winners-Badge.png'
  },
  {
    id: 'build-architecture-2024',
    title: 'Architecture Awards – Winner',
    year: '2024',
    organization: 'BUILD Magazine',
    description: 'Winner of BUILD’s 2024 Architecture Awards recognising quality, design and innovation.',
    image: '/images/awards/updated/Aug25053_BUILDCLOCK-LIMITED_BUILD-Architecture-Awards-2024-Winners-Badge-(2).png'
  },
  {
    id: 'houzz-service-2023',
    title: 'Best of Houzz – Service',
    year: '2023',
    organization: 'Houzz',
    description: 'Maintained superior homeowner satisfaction metrics and verified service quality.',
    image: '/images/awards/Ready_Best_of_Houzz_Service_2023.webp',
    link: 'https://www.houzz.co.uk/professionals/design-build-firms/extendia-pfvwgb-pf~2163000585',
    groupKey: 'houzz-service'
  },
  {
    id: 'houzz-service-2022',
    title: 'Best of Houzz – Service',
    year: '2022',
    organization: 'Houzz',
    description: 'First recognition establishing our consecutive service excellence benchmark.',
    image: '/images/awards/Ready_Best_of_Houzz_Service_2022.webp',
    link: 'https://www.houzz.co.uk/professionals/design-build-firms/extendia-pfvwgb-pf~2163000585',
    groupKey: 'houzz-service'
  },
  {
    id: 'architecture-experience-2023',
    title: 'Most Experienced Construction Company',
    year: '2023',
    organization: 'Architecture Awards (Build Review)',
    description: 'Recognised for comprehensive project delivery capability and consistent quality across London residential enhancements.',
    image: '/images/awards/2023-Architecture-Awards-Logo.png',
    link: 'https://www.build-review.com/winners/extendia/'
  }
];

// Helper to aggregate multi-year awards (e.g., combine years for same groupKey)
export function aggregateAwards(list: AwardEntry[]) {
  const map = new Map<string, AwardEntry & { years: string[] }>();
  list.forEach(a => {
    if (a.groupKey) {
      const existing = map.get(a.groupKey);
      if (existing) {
        existing.years.push(a.year);
      } else {
        map.set(a.groupKey, { ...a, years: [a.year] });
      }
    }
  });
  return Array.from(map.values())
    .map(entry => ({ ...entry, yearDisplay: entry.years.sort().join(', ') }))
    .sort((a,b) => b.years[0].localeCompare(a.years[0]));
}
