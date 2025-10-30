// Awards data ported from Extendia Alpha
// Centralized for reuse in sections/pages.

export interface AwardEntry {
  id: string;
  title: string;
  year: string;
  organization: string;
  description: string;
  image?: string;
  link?: string; // "Visit" link
}

export const awards: AwardEntry[] = [
  {
    id: 'houzz-service-2025',
    title: 'BEST OF HOUZZ SERVICE 2025',
    year: '2025',
    organization: 'HOUZZ',
    description: 'For providing excellent customer service, which is measured by a high overall rating and volume of positive client reviews.',
    link: 'https://www.houzz.co.uk/professionals/design-and-build/extendia-pfvwgb-pf~2051099058',
    image: '/images/awards/2025-houzz-hq.png',
  },
  {
    id: 'uk-enterprise-2024',
    title: 'UK ENTERPRISE AWARDS 2024',
    year: '2024',
    organization: 'SME NEWS',
    description: 'Most Innovative Domestic Construction & Design Enterprise 2024 – London',
    link: 'https://smenews.digital/winners/extendia/',
    image: '/images/awards/updated/Aug25051_BUILDCLOCK-LIMITED_SME-2024-UK-Enterprise--Awards-Winners-Badge.png',
  },
  {
    id: 'construction-engineering-2024',
    title: 'CONSTRUCTION & ENGINEERING AWARDS 2024',
    year: '2024',
    organization: 'BUILD MAGAZINE',
    description: 'Best Domestic Construction & Design Enterprise 2024 - London',
    link: 'https://www.build-review.com/winners/extendia-3/',
    image: '/images/awards/updated/Aug25052_BUILDCLOCK-LIMITED_BUILD-Construction-&-Engineering-Awards-2024-Winners-Badge.png',
  },
  {
    id: 'architecture-awards-2024-contractor',
    title: 'ARCHITECTURE AWARDS 2024',
    year: '2024',
    organization: 'BUILD MAGAZINE',
    description: 'Home Extensions Contractor of the Year 2024 - London',
    link: 'https://www.build-review.com/winners/extendia-2/',
    image: '/images/awards/updated/Aug25053_BUILDCLOCK-LIMITED_BUILD-Architecture-Awards-2024-Winners-Badge-(2).png',
  },
  {
    id: 'architecture-awards-2024-project',
    title: 'ARCHITECTURE AWARDS 2024',
    year: '2024',
    organization: 'BUILD MAGAZINE',
    description: 'Best Home Extension Project (South East England): House Extension and Full Ground Floor Refurbishment Walton-on-Thames',
    link: 'https://www.build-review.com/winners/extendia-2/',
    image: '/images/awards/updated/Aug25053_BUILDCLOCK-LIMITED_BUILD-Architecture-Awards-2024-Winners-Badge-(2).png',
  },
  {
    id: 'houzz-service-2023',
    title: 'BEST OF HOUZZ SERVICE 2023',
    year: '2023',
    organization: 'HOUZZ',
    description: 'For providing excellent customer service, which is measured by a high overall rating and volume of positive client reviews.',
    link: 'https://www.houzz.co.uk/professionals/design-and-build/extendia-pfvwgb-pf~2051099058',
    image: '/images/awards/Ready_Best_of_Houzz_Service_2023.webp',
  },
  {
    id: 'architecture-awards-2023',
    title: 'ARCHITECTURE AWARDS 2023',
    year: '2023',
    organization: 'BUILD MAGAZINE',
    description: 'Most Experienced Construction Company 2023 - London',
    link: 'https://www.build-review.com/winners/extendia/',
    image: '/images/awards/2023-Architecture-Awards-Logo.png',
  },
  {
    id: 'houzz-service-2022',
    title: 'BEST OF HOUZZ SERVICE 2022',
    year: '2022',
    organization: 'HOUZZ',
    description: 'For providing excellent customer service, which is measured by a high overall rating and volume of positive client reviews.',
    link: 'https://www.houzz.co.uk/professionals/design-and-build/extendia-pfvwgb-pf~2051099058',
    image: '/images/awards/Ready_Best_of_Houzz_Service_2022.webp',
  },
];

// Helper to aggregate multi-year awards (e.g., combine years for same groupKey)
export function aggregateAwards(list: AwardEntry[]) {
  const map = new Map<string, AwardEntry & { years: string[] }>();
  list.forEach(a => {
    if (a.id.includes('houzz-service')) { // Simplified grouping
      const groupKey = 'houzz-service';
      const existing = map.get(groupKey);
      if (existing) {
        existing.years.push(a.year);
      } else {
        map.set(groupKey, { ...a, years: [a.year] });
      }
    }
  });
  return Array.from(map.values())
    .map(entry => ({ ...entry, yearDisplay: entry.years.sort((x, y) => parseInt(y, 10) - parseInt(x, 10)).join(', ') }))
    .sort((a,b) => parseInt(b.years[0], 10) - parseInt(a.years[0], 10));
}
