/**
 * Mapping of Houzz projects to portfolio entries
 * 
 * This file tracks which projects from data/houzz-projects.json 
 * have been added to the portfolio and their corresponding slugs.
 * 
 * To add images for new projects:
 * 1. Download images from Houzz URLs in houzz-projects.json
 * 2. Upload to /public/images/wp-content/uploads/[year]/[month]/
 * 3. Update the portfolio.ts file with the image filenames
 * 4. Update this mapping file
 */

export interface HouzzProjectMapping {
  houzzId: string;
  houzzTitle: string;
  portfolioSlug: string;
  status: 'active' | 'pending-images' | 'planned';
  imageCount: number;
  notes?: string;
}

export const houzzProjectMappings: HouzzProjectMapping[] = [
  // ACTIVE PROJECTS (already in portfolio with images)
  {
    houzzId: '7389572',
    houzzTitle: 'House Refurbishment Clapham',
    portfolioSlug: 'house-refurbishment-clapham',
    status: 'active',
    imageCount: 32,
    notes: 'Featured project with full description. Images in /2023/11/'
  },
  {
    houzzId: '7059708',
    houzzTitle: 'Bathroom Conversion Putney',
    portfolioSlug: 'bathroom-conversion-putney',
    status: 'active',
    imageCount: 17,
    notes: 'Images in /2022/11/'
  },
  {
    houzzId: '6897127',
    houzzTitle: 'Bathroom Refurbishment Putney',
    portfolioSlug: 'bathroom-refurbishment-putney',
    status: 'active',
    imageCount: 15,
    notes: 'Images in /2022/04/'
  },
  {
    houzzId: '6777391',
    houzzTitle: 'Bathroom Refurbishment Kingston upon Thames',
    portfolioSlug: 'bathroom-refurbishment-kingston-upon-thames',
    status: 'active',
    imageCount: 20,
    notes: 'Images in /2021/11/'
  },
  
  // NEWLY ACTIVE (just added with images)
  {
    houzzId: '6571785',
    houzzTitle: 'Traditional Rear Extension Twickenham',
    portfolioSlug: 'traditional-rear-extension-twickenham',
    status: 'active',
    imageCount: 25,
    notes: 'Images downloaded and thumbnails generated. In /2024/10/'
  },
  {
    houzzId: '6571789',
    houzzTitle: 'Modern Rear Extension in Hampton',
    portfolioSlug: 'modern-rear-extension-hampton',
    status: 'active',
    imageCount: 20,
    notes: 'Images downloaded and thumbnails generated. In /2024/10/'
  }
];

/**
 * Get all projects that are ready to display (have images)
 */
export function getActiveHouzzProjects() {
  return houzzProjectMappings.filter(p => p.status === 'active');
}

/**
 * Get projects that need images downloaded
 */
export function getPendingImageProjects() {
  return houzzProjectMappings.filter(p => p.status === 'pending-images');
}

/**
 * Get Houzz project data by portfolio slug
 */
export function getHouzzDataBySlug(slug: string) {
  return houzzProjectMappings.find(p => p.portfolioSlug === slug);
}
