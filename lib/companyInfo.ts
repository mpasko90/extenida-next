// Centralised company information for Extendia
// Source: Companies House (Company No: 13060077)

export const companyInfo = {
  name: 'Extendia Ltd',
  companyNumber: '13060077',
  registeredOffice: {
    line1: 'International House',
    line2: '109-111 Fulham Palace Road',
    city: 'London',
    country: 'England',
    postcode: 'W6 8JA'
  },
  registeredOfficeFormatted: 'International House, 109-111 Fulham Palace Road, London, England, W6 8JA',
  email: 'contact@extendia.co.uk',
  phone: {
    display: '020 3916 5670',
    international: '+442039165670',
    href: 'tel:+442039165670'
  },
  website: 'https://extendia.co.uk'
  // phone: '' // Add if/when an official public phone number is confirmed
} as const;

export type CompanyInfo = typeof companyInfo;
