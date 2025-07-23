"use client";

import ServiceAreaLayout from "@/components/ServiceAreaLayout";

export default function HouseExtensionsKingston() {
  const pageData = {
    serviceName: "house extensions",
    areaName: "Kingston Upon Thames",
    serviceTitle: "House Extensions",
    serviceDescription: "Expert house extension services tailored for Kingston Upon Thames properties. We specialize in period properties and modern homes.",
    benefitsList: [
      {
        title: "Local Expertise",
        description: "Deep understanding of Kingston Upon Thames planning requirements and architectural styles."
      },
      {
        title: "Period Property Specialists",
        description: "Extensive experience with Victorian and Edwardian homes common in Kingston."
      },
      {
        title: "Conservation Area Knowledge",
        description: "Expert navigation of conservation area restrictions and requirements."
      },
      {
        title: "Modern Integration",
        description: "Seamlessly blend new extensions with existing Kingston architecture."
      },
      {
        title: "Full Project Management",
        description: "End-to-end project handling from planning to completion."
      },
      {
        title: "Quality Guaranteed",
        description: "10-year warranty on all extension work in Kingston Upon Thames."
      }
    ],
    areaSpecifics: [
      {
        title: "Kingston Town Centre Properties",
        description: "Specialized solutions for properties in Kingston's historic town centre, respecting local architectural heritage."
      },
      {
        title: "Riverside Homes",
        description: "Custom extensions for riverside properties, maximizing views and natural light."
      },
      {
        title: "Conservation Areas",
        description: "Careful consideration of conservation area guidelines in North Kingston and Riverside areas."
      },
      {
        title: "Victorian Terraces",
        description: "Expert handling of typical Kingston Victorian terrace extensions and modifications."
      }
    ]
  };

  return <ServiceAreaLayout {...pageData} />;
}
