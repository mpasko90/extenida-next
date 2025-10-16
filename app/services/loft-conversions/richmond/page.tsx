import { Metadata } from 'next';
import ServiceAreaLayout from '@/components/ServiceAreaLayout';

export const metadata: Metadata = {
  title: 'Loft Conversions Richmond | Expert Loft Extension Services',
  description: 'Professional loft conversions in Richmond. Velux, dormer, mansard conversions. Planning permission support. RIBA architects. Free consultation. Call 020 8144 4062.',
  keywords: 'loft conversion Richmond, loft extension, velux conversion, dormer loft conversion, mansard conversion, planning permission Richmond, roof extension',
  openGraph: {
    title: 'Loft Conversions Richmond | Extendia',
    description: 'Transform your loft space with professional conversions in Richmond. Expert architects, full planning support, 10-year warranty.',
    type: 'website',
    url: 'https://extendia.co.uk/services/loft-conversions/richmond',
  },
};

export default function LoftConversionsRichmondPage() {
  return (
    <ServiceAreaLayout
      serviceName="Loft Conversions"
      areaName="Richmond"
      serviceTitle="Loft Conversions in Richmond"
      serviceDescription="Maximize your home's potential with professional loft conversions in Richmond. From simple Velux conversions to complex mansard transformations, we create beautiful additional living space with RIBA chartered architects and full planning support."
      benefitsList={[
        {
          title: "Roof Space Expertise",
          description: "Specialists in maximizing loft potential while working with Richmond's varied roof types and planning constraints.",
          icon: "HomeIcon"
        },
        {
          title: "Conservation Area Knowledge",
          description: "Expert navigation of Richmond's extensive conservation areas and heritage property requirements.",
          icon: "Shield"
        },
        {
          title: "Natural Light Optimization",
          description: "Clever design solutions to flood your new space with natural light using Velux windows and roof lights.",
          icon: "Lightbulb"
        },
        {
          title: "Value Enhancement",
          description: "Loft conversions typically add 20-25% to property value, offering excellent return on investment.",
          icon: "TrendingUp"
        }
      ]}
      areaSpecifics={[
        {
          title: "Victorian & Edwardian Properties",
          description: "Richmond's period homes offer excellent loft conversion potential. We specialize in working with traditional roof structures.",
          icon: "Building"
        },
        {
          title: "Aviation Considerations",
          description: "Some areas of Richmond fall under Heathrow flight paths. We ensure compliance with aviation height restrictions.",
          icon: "Shield"
        },
        {
          title: "Thames Valley Views",
          description: "Many Richmond properties offer stunning views. We design conversions to maximize these beautiful vistas.",
          icon: "Heart"
        },
        {
          title: "Green Belt Proximity",
          description: "Being close to Richmond Park and green spaces means additional planning considerations we expertly navigate.",
          icon: "Leaf"
        }
      ]}
      trustIndicators={[
        {
          icon: "TrendingUp",
          title: "150+ Loft Conversions",
          description: "Successfully completed across Richmond area",
          metric: "150+"
        },
        {
          icon: "Star",
          title: "4.9-Star Rating",
          description: "Customer satisfaction from Richmond clients",
          metric: "4.9★"
        },
        {
          icon: "Clock",
          title: "12+ Years Experience",
          description: "Serving Richmond and surrounding areas",
          metric: "12+ Years"
        },
        {
          icon: "Award",
          title: "RIBA Approved",
          description: "Chartered architects on every project",
          metric: "RIBA"
        },
        {
          icon: "ShieldCheck",
          title: "Fully Insured",
          description: "Comprehensive public liability coverage",
          metric: "£2M"
        },
        {
          icon: "Heart",
          title: "Local Specialists",
          description: "Richmond-based team with area expertise",
          metric: "Local"
        }
      ]}
      projectExamples={[
        {
          title: "Victorian Villa Mansard",
          description: "Full mansard loft conversion creating master bedroom suite with en-suite and walk-in wardrobe.",
          location: "Richmond Hill",
          cost: "£75,000 - £90,000",
          duration: "12-14 weeks",
          image: "/images/wp-content/uploads/2021/05/loft_conversion_extendia.jpg"
        },
        {
          title: "Edwardian House Velux",
          description: "Simple Velux conversion creating children's bedroom and study area with clever storage solutions.",
          location: "East Sheen",
          cost: "£35,000 - £45,000",
          duration: "6-8 weeks",
          image: "/images/wp-content/uploads/2021/05/loft_conversion_extendia.jpg"
        },
        {
          title: "Period Property Dormer",
          description: "Rear dormer conversion maximizing headroom for family bathroom and guest bedroom.",
          location: "Kew",
          cost: "£55,000 - £70,000",
          duration: "10-12 weeks",
          image: "/images/wp-content/uploads/2021/05/loft_conversion_extendia.jpg"
        }
      ]}
      faqItems={[
        {
          question: "What types of loft conversions are possible in Richmond?",
          answer: "The most suitable type depends on your property and location. Velux conversions (£35-45k) are often permitted development. Dormer conversions (£55-70k) add more space but may need planning permission. Mansard conversions (£75-90k) maximize space but require planning approval, especially in conservation areas."
        },
        {
          question: "Do I need planning permission for a loft conversion in Richmond?",
          answer: "Simple Velux conversions usually fall under Permitted Development Rights. However, Richmond has extensive conservation areas where different rules apply. Dormer and mansard conversions typically require planning permission. We provide free planning assessments to determine requirements."
        },
        {
          question: "How much headroom do I need for a loft conversion?",
          answer: "Building Regulations require 2.2m minimum headroom over at least 50% of the floor area. Most Richmond properties built after 1900 have sufficient roof height. We can assess your loft space and recommend the best conversion type during our free consultation."
        },
        {
          question: "Will a loft conversion affect my home's character in a conservation area?",
          answer: "We specialize in sensitive conversions that respect Richmond's heritage. Our designs use appropriate materials and styles that complement your property's character while meeting modern needs. We handle all conservation area consultations."
        },
        {
          question: "How long does a loft conversion take in Richmond?",
          answer: "Velux conversions take 6-8 weeks, dormer conversions 10-12 weeks, and mansard conversions 12-14 weeks. Planning permission (if required) adds 8-12 weeks. We provide realistic timelines and coordinate with Richmond Council efficiently."
        },
        {
          question: "What's included in your loft conversion service?",
          answer: "Complete service including design, planning applications, Building Regulations, structural work, insulation, electrics, plumbing, decoration, and flooring. We also handle staircase installation and any necessary structural modifications."
        }
      ]}
      compliance={{
        planningInfo: "We handle all planning applications with Richmond Upon Thames Council and provide expert conservation area guidance.",
        buildingRegs: "Full Building Regulations compliance including structural calculations, fire safety, insulation, and staircase requirements.",
        conservationArea: "Specialist expertise in Richmond's conservation areas including Richmond Green, Kew Gardens, and riverside areas.",
        certifications: "RIBA Chartered Architects, Structural Engineers, Gas Safe, NICEIC Approved, FENSA Window Installation",
        insurance: "£2M Public Liability, £1M Professional Indemnity, Structural Warranty Insurance, Employer's Liability",
        warranty: "10-year structural warranty, 25-year roof warranty, materials warranties, workmanship guarantee"
      }}
    />
  );
}
