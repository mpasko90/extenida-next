// Seed portfolio data (copied from extendia-alpha MVP dataset)
// serviceType 'conversion' merged into 'bathroom'

export interface PortfolioImage {
  id: string;
  full: string;   // full-size image URL
  thumb: string;  // 600x400 thumbnail
  alt?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  serviceType: 'house-extension' | 'bathroom' | 'refurbishment';
  location: string;
  images: PortfolioImage[];
  featured?: boolean;
  /** Optional 360° / virtual tour URL (e.g. Klapty) */
  virtualTour?: string;
}

function img(base: string, names: string[]): PortfolioImage[] {
  // Some upload folders have WordPress "-scaled" originals (e.g. 2021/11, 2022/11, 2023/11),
  // while others (e.g. 2022/04, 2024/10) use the original without "-scaled".
  // Thumbnails also follow the same pattern: either "name-scaled-600x400.jpg" or "name-600x400.jpg".
  const usesScaled = base !== '2022/04' && base !== '2024/10';
  return names.map((raw) => {
    // Normalize input names so passing values like "elmscrescent1" or "elmscrescent1-scaled" both work.
    const n = raw.replace(/-scaled$/i, '');
    const id = n.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|/g, '');
    const scaledPart = usesScaled ? '-scaled' : '';
    return {
      id,
      full: `/images/wp-content/uploads/${base}/${n}${scaledPart}.jpg`,
      thumb: `/images/wp-content/uploads/${base}/${n}${scaledPart}-600x400.jpg`,
      alt: n.replace(/[-_]/g, ' ').trim(),
    };
  });
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'house-extension-and-full-ground-floor-refurbishment-walton-on-thames',
    title: 'House Extension and Full Ground Floor Refurbishment Walton-on-Thames',
    serviceType: 'house-extension',
    location: 'Walton-on-Thames',
    images: img('2021/11', [
      'DJI_0308-scaled','DJI_0311-scaled','DJI_0320-scaled','DJI_0321-scaled','DJI_0327-scaled','DJI_0328-scaled',
      'DSC_4245-scaled','DSC_4246-scaled','DSC_4251-scaled','DSC_4257-scaled','DSC_4262-scaled','DSC_4266-scaled',
      'DSC_4269-scaled','DSC_4289-scaled','DSC_4279-scaled','DSC_4291-scaled','DSC_4294-scaled','DSC_4295-scaled',
      'DSC_4300-scaled','DSC_4309-scaled','DSC_4310-scaled','DSC_4312-scaled'
    ]),
    featured: true,
    virtualTour: 'https://www.klapty.com/tour/8N40uciGEm'
  },
  {
    slug: 'house-extension-hampton',
    title: 'House Extension Hampton',
    serviceType: 'house-extension',
    location: 'Hampton',
    images: img('2021/11', [
      'DJI_0284-scaled','DJI_0289-scaled','DJI_0293-scaled','DJI_0296-scaled','DJI_0297-scaled','DJI_0298-scaled',
      'DSC_4186-scaled','DSC_4195-scaled','DSC_4206-scaled','DSC_4210-scaled','DSC_4213-scaled','DSC_4216-scaled',
      'DSC_4217-scaled','DSC_4223-scaled','DSC_4224-scaled','DSC_4225-scaled','DSC_4227-scaled','DSC_4230-scaled'
    ])
  ,
    virtualTour: 'https://www.klapty.com/tour/8C70LW1Ut3'
  },
  {
    slug: 'house-extension-twickenham',
    title: 'House Extension Twickenham',
    serviceType: 'house-extension',
    location: 'Twickenham',
    images: img('2021/11', [
      'DJI_0249-1-scaled','DJI_0255-scaled','DJI_0258-scaled','DJI_0261-scaled','DJI_0263-scaled','DJI_0265-scaled',
      'DJI_02666-scaled','DSC_4118-scaled','DSC_4120-scaled','DSC_4121-scaled','DSC_4126-scaled','DSC_4128-scaled',
      'DSC_4130-scaled','DSC_4134-scaled','DSC_4141-scaled','DSC_4144-scaled','DSC_4151-scaled','DSC_4156-scaled',
      'DSC_4157-scaled','DSC_4158-scaled','DSC_4165-scaled','DSC_4175-scaled','DSC_41311-scaled','DSC_41766-scaled'
    ])
  ,
    virtualTour: 'https://www.klapty.com/tour/8CL0VSDWXC'
  },
  {
    slug: 'bathroom-refurbishment-kingston-upon-thames',
    title: 'Bathroom Refurbishment Kingston upon Thames',
    serviceType: 'bathroom',
    location: 'Kingston upon Thames',
    images: img('2021/11', [
      'Douglas-Road-Extendia--scaled','Douglas-Road-Extendia-2-1-scaled','Douglas-Road-Extendia-2-scaled','Douglas-Road-Extendia-4-scaled',
      'Douglas-Road-Extendia-5-scaled','Douglas-Road-Extendia-6-scaled','Douglas-Road-Extendia-7-scaled','Douglas-Road-Extendia-8-scaled',
      'Douglas-Road-Extendia-9-scaled','Douglas-Road-Extendia-10-scaled','Douglas-Road-Extendia-14-scaled','Douglas-Road-Extendia-16-scaled',
      'Douglas-Road-Extendia-17-scaled','Douglas-Road-Extendia-18-scaled','Douglas-Road-Extendia-8562-scaled','Douglas-Road-Extendia-8599-scaled',
      'Douglas-Road-Extendia-8615-scaled','Douglas-Road-Extendia-8635-scaled','Douglas-Road-Extendia-8656-scaled','Douglas-Road-Extendia-8666-scaled'
    ])
  },
  {
    slug: 'bathroom-refurbishment-putney',
    title: 'Bathroom Refurbishment Putney',
    serviceType: 'bathroom',
    location: 'Putney',
    images: img('2022/04', [
      '24a-Quill-Lane-8660','24a-Quill-Lane-8682','24a-Quill-Lane-8664','24a-Quill-Lane-8668','24a-Quill-Lane--',
      '24a-Quill-Lane-8671','24a-Quill-Lane-8677','24a-Quill-Lane-8694','24a-Quill-Lane-8699','24a-Quill-Lane-8702',
      '24a-Quill-Lane-8708','24a-Quill-Lane-8711','24a-Quill-Lane-8712','24a-Quill-Lane-8720','24a-Quill-Lane-8723'
    ])
  },
  {
    slug: 'bathroom-conversion-putney',
    title: 'Bathroom Conversion Putney',
    serviceType: 'bathroom',
    location: 'Putney',
    images: img('2022/11', [
      'Quill-Lane-scaled','Quill-Lane-2-scaled','Quill-Lane-3-scaled','Quill-Lane-4-scaled','Quill-Lane-5-scaled',
      'Quill-Lane-6-scaled','Quill-Lane-7-scaled','Quill-Lane-8-scaled','Quill-Lane-9-scaled','Quill-Lane-10-scaled',
      'Quill-Lane-11-scaled','Quill-Lane-12-scaled','Quill-Lane-13-scaled','Quill-Lane-14-scaled','Quill-Lane-15-scaled',
      'Quill-Lane-16-scaled','Quill-Lane-17-scaled'
    ])
  },
  {
    slug: 'house-refurbishment-clapham',
    title: 'House Refurbishment Clapham',
    serviceType: 'refurbishment',
    location: 'Clapham',
    images: img('2023/11', [
      'elmscrescent1-scaled','elmscrescent2-scaled','elmscrescent3-scaled','elmscrescent4-scaled','elmscrescent5-scaled',
      'elmscrescent6-scaled','elmscrescent7-scaled','elmscrescent8-scaled','elmscrescent9-scaled','elmscrescent10-scaled',
      'elmscrescent11-scaled','elmscrescent12-scaled','elmscrescent13-scaled','elmscrescent14-scaled','elmscrescent15-scaled',
      'elmscrescent16-scaled','elmscrescent17-scaled','elmscrescent19-scaled','elmscrescent21-scaled','elmscrescent23-scaled',
      'elmscrescent24-scaled','elmscrescent25-scaled','elmscrescent26-scaled','elmscrescent27-scaled','elmscrescent28-scaled',
      'elmscrescent29-scaled','elmscrescent30-scaled','elmscrescent31-scaled','elmscrescent32-scaled','elmscrescent33-scaled',
      'elmscrescent34-scaled','elmscrescent35-scaled'
    ])
  },
  // New projects from Houzz (images downloaded from Houzz)
  {
    slug: 'traditional-rear-extension-twickenham',
    title: 'Traditional Rear Extension Twickenham',
    serviceType: 'house-extension',
    location: 'Twickenham',
    images: img('2024/10', [
      'traditional-rear-extension-twickenham-01','traditional-rear-extension-twickenham-02','traditional-rear-extension-twickenham-03',
      'traditional-rear-extension-twickenham-04','traditional-rear-extension-twickenham-05','traditional-rear-extension-twickenham-06',
      'traditional-rear-extension-twickenham-07','traditional-rear-extension-twickenham-08','traditional-rear-extension-twickenham-09',
      'traditional-rear-extension-twickenham-10','traditional-rear-extension-twickenham-11','traditional-rear-extension-twickenham-12',
      'traditional-rear-extension-twickenham-13','traditional-rear-extension-twickenham-14','traditional-rear-extension-twickenham-15',
      'traditional-rear-extension-twickenham-16','traditional-rear-extension-twickenham-17','traditional-rear-extension-twickenham-18',
      'traditional-rear-extension-twickenham-19','traditional-rear-extension-twickenham-20','traditional-rear-extension-twickenham-21',
      'traditional-rear-extension-twickenham-22','traditional-rear-extension-twickenham-23','traditional-rear-extension-twickenham-24',
      'traditional-rear-extension-twickenham-25'
    ])
  },
  {
    slug: 'modern-rear-extension-hampton',
    title: 'Modern Rear Extension in Hampton',
    serviceType: 'house-extension',
    location: 'Hampton',
    images: img('2024/10', [
      'modern-rear-extension-hampton-01','modern-rear-extension-hampton-02','modern-rear-extension-hampton-03',
      'modern-rear-extension-hampton-04','modern-rear-extension-hampton-05','modern-rear-extension-hampton-06',
      'modern-rear-extension-hampton-07','modern-rear-extension-hampton-08','modern-rear-extension-hampton-09',
      'modern-rear-extension-hampton-10','modern-rear-extension-hampton-11','modern-rear-extension-hampton-12',
      'modern-rear-extension-hampton-13','modern-rear-extension-hampton-14','modern-rear-extension-hampton-15',
      'modern-rear-extension-hampton-16','modern-rear-extension-hampton-17','modern-rear-extension-hampton-18',
      'modern-rear-extension-hampton-19','modern-rear-extension-hampton-20'
    ])
  }
];

export function getProjects() { return portfolioProjects; }
export function getProjectBySlug(slug: string) { return portfolioProjects.find(p => p.slug === slug); }
export function getProjectsByService(serviceType: PortfolioProject['serviceType']) { return portfolioProjects.filter(p => p.serviceType === serviceType); }
export function getProjectsByLocation(location: string) { return portfolioProjects.filter(p => p.location.toLowerCase() === location.toLowerCase()); }
export function getSampleForService(serviceSlug: string, limit = 3) {
  // Map service slug to serviceType heuristic
  let serviceType: PortfolioProject['serviceType'] | null = null;
  if (serviceSlug.includes('extension')) serviceType = 'house-extension';
  else if (serviceSlug.includes('bathroom')) serviceType = 'bathroom';
  else if (serviceSlug.includes('refurb')) serviceType = 'refurbishment';
  if (!serviceType) return [];
  return getProjectsByService(serviceType).flatMap(p => p.images.slice(0,2).map(img => ({...img, project: p.slug}))).slice(0, limit);
}
