import { Metadata } from 'next';
import ServiceAreaLayout from '@/components/ServiceAreaLayout';

export const metadata: Metadata = {
  title: 'House Extensions Kingston Upon Thames | Expert Home Extensions',
  description: 'Professional house extensions in Kingston Upon Thames. RIBA architects, 10+ years experience. Planning permission support. Free consultation. Call 020 8144 4062.',
  keywords: 'house extensions Kingston Upon Thames, home extensions, single storey extension, double storey extension, rear extension, side return extension, planning permission Kingston',
  openGraph: {
    title: 'House Extensions Kingston Upon Thames | Extendia',
    description: 'Transform your home with professional house extensions in Kingston Upon Thames. Expert architects, full planning support, 10-year warranty.',
    type: 'website',
    url: 'https://extendia.co.uk/services/house-extensions/kingston-upon-thames',
  },
};

export default function HouseExtensionsKingstonPage() {
  return (
    <ServiceAreaLayout
      serviceName="House Extensions"
      areaName="Kingston Upon Thames"
      serviceTitle="House Extensions in Kingston Upon Thames"
      serviceDescription="Transform your home with our expert house extension services. From single-storey rear extensions to complex multi-storey additions, we deliver exceptional results in Kingston Upon Thames with RIBA chartered architects, full planning permission support, and 10+ years local experience."
      benefitsList={[
        {
          title: "Local Planning Expertise",
          description: "Deep knowledge of Kingston Upon Thames planning policies, conservation areas, and local building requirements.",
          icon: "Building"
        },
        {
          title: "Award-Winning Design",
          description: "RIBA chartered architects creating beautiful, functional extensions that enhance your property value.",
          icon: "Award"
        },
        {
          title: "Complete Project Management",
          description: "From initial design through to completion, we manage every aspect of your extension project.",
          icon: "CheckCircle"
        },
        {
          title: "Quality Guaranteed",
          description: "10-year structural warranty and comprehensive insurance cover for complete peace of mind.",
          icon: "Shield"
        }
      ]}
      areaSpecifics={[
        {
          title: "Conservation Area Expertise",
          description: "Kingston town centre and surrounding conservation areas require specialist knowledge. We navigate these requirements expertly.",
          icon: "Shield"
        },
        {
          title: "Thames-side Properties",
          description: "Special considerations for properties near the Thames, including flood risk assessments and planning constraints.",
          icon: "Heart"
        },
        {
          title: "Victorian & Edwardian Homes",
          description: "Specialist in extending period properties while respecting their architectural heritage and character.",
          icon: "HomeIcon"
        },
        {
          title: "Modern Family Living",
          description: "Creating contemporary open-plan living spaces that suit modern family life in Kingston's residential areas.",
          icon: "Users"
        }
      ]}
      trustIndicators={[
        {
          icon: "TrendingUp",
          title: "100+ Successful Projects",
          description: "Completed extensions across Kingston Upon Thames",
          metric: "100+"
        },
        {
          icon: "Star",
          title: "5-Star Rating",
          description: "Average customer satisfaction score",
          metric: "5.0★"
        },
        {
          icon: "Clock",
          title: "10+ Years Experience",
          description: "Serving Kingston Upon Thames community",
          metric: "10+ Years"
        },
        {
          icon: "Award",
          title: "RIBA Architects",
          description: "Qualified chartered architects on every project",
          metric: "RIBA"
        },
        {
          icon: "ShieldCheck",
          title: "£2M Insurance",
          description: "Comprehensive public liability coverage",
          metric: "£2M"
        },
        {
          icon: "Heart",
          title: "Family Business",
          description: "Local, trusted, family-owned company",
          metric: "Local"
        }
      ]}
      projectExamples={[
        {
          title: "Victorian Terrace Extension",
          description: "Single-storey rear extension creating open-plan kitchen-dining area with bi-fold doors to garden.",
          location: "Kingston Hill",
          cost: "£45,000 - £55,000",
          duration: "8-10 weeks",
          image: "/images/projects/kingston-victorian-extension.jpg"
        },
        {
          title: "Edwardian Side Return",
          description: "Side return extension maximizing ground floor space with feature skylight and underfloor heating.",
          location: "Kingston Vale",
          cost: "£65,000 - £75,000",
          duration: "10-12 weeks",
          image: "/images/projects/kingston-side-return.jpg"
        },
        {
          title: "Double Storey Extension",
          description: "Two-storey rear extension adding master bedroom suite and enlarged kitchen-family area.",
          location: "New Malden",
          cost: "£85,000 - £100,000",
          duration: "14-16 weeks",
          image: "/images/projects/kingston-double-storey.jpg"
        }
      ]}
      faqItems={[
        {
          question: "Do I need planning permission for a house extension in Kingston Upon Thames?",
          answer: "Many single-storey rear extensions fall under Permitted Development Rights and don't require planning permission. However, Kingston has several conservation areas where different rules apply. We provide a free planning assessment to determine requirements for your specific property and location."
        },
        {
          question: "How much does a house extension cost in Kingston Upon Thames?",
          answer: "Costs typically range from £2,000-£3,500 per square meter depending on specification. A typical single-storey rear extension (20-30 sqm) costs £45,000-£75,000. We provide detailed, fixed-price quotes with no hidden costs after our initial consultation."
        },
        {
          question: "How long does a house extension take to complete?",
          answer: "Timeline depends on size and complexity. Single-storey extensions typically take 8-12 weeks, while double-storey extensions require 14-20 weeks. Planning permission (if required) adds 8-12 weeks to the timeline. We provide realistic schedules and keep you updated throughout."
        },
        {
          question: "What makes Kingston Upon Thames extensions different from other areas?",
          answer: "Kingston has unique considerations including extensive conservation areas, proximity to the Thames (flood risk zones), and a mix of period and modern properties. Our local expertise ensures we navigate these requirements while maximizing your extension's potential."
        },
        {
          question: "Can you help with Building Regulations approval?",
          answer: "Yes, we handle all Building Regulations applications and inspections. Our designs comply with current regulations for structural safety, insulation, ventilation, and accessibility. This is included in our comprehensive service."
        },
        {
          question: "Do you provide warranties on your extension work?",
          answer: "We provide a 10-year structural warranty on all extension work, plus individual warranties on materials and systems (heating, electrics, etc.). We're also fully insured with £2M public liability cover for complete protection."
        }
      ]}
      compliance={{
        planningInfo: "We handle all planning applications and liaise with Kingston Upon Thames Council planning department.",
        buildingRegs: "Full Building Regulations compliance and inspection management included in our service.",
        conservationArea: "Specialist expertise in conservation area requirements and heritage property considerations.",
        certifications: "RIBA Chartered Architects, Gas Safe, NICEIC Approved, Construction Skills Certification Scheme",
        insurance: "£2M Public Liability, £1M Professional Indemnity, Employer's Liability Insurance",
        warranty: "10-year structural warranty, materials warranties up to 25 years, workmanship guarantee"
      }}
    />
  );
}
