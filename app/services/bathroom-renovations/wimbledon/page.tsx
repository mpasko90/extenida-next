import { Metadata } from 'next';
import ServiceAreaLayout from '@/components/ServiceAreaLayout';

export const metadata: Metadata = {
  title: 'Bathroom Renovations Wimbledon | Expert Bathroom Design & Installation',
  description: 'Professional bathroom renovations in Wimbledon. Complete design & installation service. Luxury finishes, accessibility features. Free consultation. Call 020 8144 4062.',
  keywords: 'bathroom renovation Wimbledon, bathroom design, luxury bathroom, accessible bathroom, wet room, bathroom installation, bathroom fitters Wimbledon',
  openGraph: {
    title: 'Bathroom Renovations Wimbledon | Extendia',
    description: 'Transform your bathroom with luxury renovations in Wimbledon. Expert design, quality installation, 10-year warranty.',
    type: 'website',
    url: 'https://extendia.co.uk/services/bathroom-renovations/wimbledon',
  },
};

export default function BathroomRenovationsWimbledonPage() {
  return (
    <ServiceAreaLayout
      serviceName="Bathroom Renovations"
      areaName="Wimbledon"
      serviceTitle="Bathroom Renovations in Wimbledon"
      serviceDescription="Create your perfect bathroom with our comprehensive renovation service in Wimbledon. From luxury spa-style retreats to practical family bathrooms and accessible wet rooms, we deliver exceptional results with quality materials and expert craftsmanship."
      benefitsList={[
        {
          title: "Complete Design Service",
          description: "From initial concept to 3D visualization, our designers create bathrooms that perfectly suit your lifestyle and space.",
          icon: "Lightbulb"
        },
        {
          title: "Quality Installation",
          description: "Fully qualified tradesmen including plumbers, electricians, and tilers ensure perfect installation every time.",
          icon: "Wrench"
        },
        {
          title: "Luxury Materials",
          description: "Access to premium bathroom brands and materials at trade prices, ensuring exceptional value and quality.",
          icon: "Award"
        },
        {
          title: "Accessibility Focus",
          description: "Specialists in accessible bathroom design including wet rooms, grab rails, and mobility-friendly solutions.",
          icon: "Heart"
        }
      ]}
      areaSpecifics={[
        {
          title: "Period Property Expertise",
          description: "Wimbledon's Victorian and Edwardian homes require specialist knowledge. We blend modern functionality with period character.",
          icon: "Building"
        },
        {
          title: "Space Optimization",
          description: "Maximizing smaller bathroom spaces common in Wimbledon properties through clever design and storage solutions.",
          icon: "CheckCircle"
        },
        {
          title: "Family-Friendly Design",
          description: "Creating practical bathrooms for growing families in Wimbledon's residential areas, including safety features for children.",
          icon: "Users"
        },
        {
          title: "Luxury Upgrades",
          description: "High-end bathroom renovations reflecting Wimbledon's prestigious character with premium finishes and spa-like features.",
          icon: "Star"
        }
      ]}
      trustIndicators={[
        {
          icon: "TrendingUp",
          title: "200+ Bathrooms",
          description: "Successfully renovated across Wimbledon",
          metric: "200+"
        },
        {
          icon: "Star",
          title: "5-Star Reviews",
          description: "Average customer rating for completed projects",
          metric: "5.0★"
        },
        {
          icon: "Clock",
          title: "15+ Years Experience",
          description: "Bathroom renovation expertise in Wimbledon",
          metric: "15+ Years"
        },
        {
          icon: "Award",
          title: "Qualified Tradesmen",
          description: "Gas Safe, NICEIC, and City & Guilds certified",
          metric: "Certified"
        },
        {
          icon: "ShieldCheck",
          title: "10-Year Warranty",
          description: "Comprehensive guarantee on all work",
          metric: "10 Years"
        },
        {
          icon: "Heart",
          title: "Local Business",
          description: "Wimbledon-based with local references",
          metric: "Local"
        }
      ]}
      projectExamples={[
        {
          title: "Victorian Villa Spa Bathroom",
          description: "Luxury master en-suite with freestanding bath, walk-in shower, and underfloor heating in period property.",
          location: "Wimbledon Village",
          cost: "£25,000 - £35,000",
          duration: "3-4 weeks",
          image: "/images/projects/wimbledon-luxury-bathroom.jpg"
        },
        {
          title: "Family Bathroom Renovation",
          description: "Complete family bathroom with bath/shower combination, modern storage, and child-safety features.",
          location: "South Wimbledon",
          cost: "£12,000 - £18,000",
          duration: "2-3 weeks",
          image: "/images/projects/wimbledon-family-bathroom.jpg"
        },
        {
          title: "Accessible Wet Room",
          description: "Level-access wet room with mobility aids, non-slip flooring, and emergency call system for elderly client.",
          location: "Raynes Park",
          cost: "£15,000 - £22,000",
          duration: "2-3 weeks",
          image: "/images/projects/wimbledon-accessible-wetroom.jpg"
        }
      ]}
      faqItems={[
        {
          question: "How much does a bathroom renovation cost in Wimbledon?",
          answer: "Costs vary by specification: Basic renovations from £8,000-£12,000, mid-range renovations £12,000-£25,000, and luxury bathrooms £25,000-£50,000+. We provide detailed fixed-price quotes after assessing your space and requirements during our free consultation."
        },
        {
          question: "How long does a bathroom renovation take?",
          answer: "Most bathroom renovations take 2-4 weeks depending on complexity. Simple refreshes take 1-2 weeks, standard renovations 2-3 weeks, and luxury or structural work 3-4 weeks. We provide realistic timelines and keep disruption to a minimum."
        },
        {
          question: "Do you handle all trades for bathroom renovations?",
          answer: "Yes, we manage all trades including plumbing, electrical work, tiling, carpentry, and decoration. All our tradesmen are fully qualified (Gas Safe, NICEIC certified) and experienced in bathroom installations. You deal with one point of contact throughout."
        },
        {
          question: "Can you create accessible bathrooms for elderly or disabled users?",
          answer: "Absolutely. We specialize in accessible bathroom design including wet rooms, grab rails, height-adjustable features, and mobility aids. We work with occupational therapists and can advise on available grants for accessibility modifications."
        },
        {
          question: "What bathroom brands and materials do you work with?",
          answer: "We work with premium brands including Villeroy & Boch, Duravit, Hansgrohe, and Porcelanosa, as well as quality mid-range options. All materials come with manufacturer warranties, and we can source specific items to match your vision and budget."
        },
        {
          question: "Do you provide guarantees on bathroom renovations?",
          answer: "Yes, we provide a 10-year guarantee on all installation work, plus manufacturer warranties on materials (typically 5-25 years). We're fully insured and provide aftercare support to ensure your complete satisfaction."
        }
      ]}
      compliance={{
        planningInfo: "Most bathroom renovations don't require planning permission, but we advise on any structural changes or external alterations.",
        buildingRegs: "Full Building Regulations compliance for electrical, plumbing, and ventilation work, including Part M accessibility requirements.",
        conservationArea: "Sensitive approach to period property renovations respecting character while achieving modern functionality.",
        certifications: "Gas Safe Registered, NICEIC Approved, City & Guilds Qualified, WRAS Approved, Part P Electrical Certified",
        insurance: "£2M Public Liability, £1M Professional Indemnity, Product Liability Insurance, Employer's Liability",
        warranty: "10-year installation warranty, manufacturer warranties up to 25 years, aftercare support, emergency callout service"
      }}
    />
  );
}
