"use client";

import ServiceAreaLayout from "@/components/ServiceAreaLayout";

export default function LoftConversionsKingston() {
  const pageData = {
    serviceName: "loft conversions",
    areaName: "Kingston Upon Thames",
    serviceTitle: "Loft Conversions",
    serviceDescription: "Specialist loft conversion services in Kingston Upon Thames. Transform your unused attic into valuable living space.",
    benefitsList: [
      {
        title: "Kingston Planning Expertise",
        description: "Full understanding of Kingston Council's loft conversion regulations."
      },
      {
        title: "Victorian Home Specialists",
        description: "Expert conversion of Kingston's Victorian property lofts."
      },
      {
        title: "Conservation Compliance",
        description: "Full compliance with Kingston conservation area requirements."
      },
      {
        title: "Natural Light Design",
        description: "Maximizing natural light in Kingston's residential areas."
      },
      {
        title: "Space Optimization",
        description: "Creative solutions for Kingston's typical property layouts."
      },
      {
        title: "Local Experience",
        description: "Extensive portfolio of successful Kingston loft conversions."
      }
    ],
    areaSpecifics: [
      {
        title: "Town Centre Properties",
        description: "Specialized solutions for Kingston town centre Victorian properties."
      },
      {
        title: "Suburban Homes",
        description: "Tailored approaches for Kingston's suburban property styles."
      },
      {
        title: "Conservation Properties",
        description: "Sensitive conversion work in Kingston's conservation areas."
      },
      {
        title: "Period Features",
        description: "Preservation of original features in historic Kingston homes."
      }
    ]
  };

  return <ServiceAreaLayout {...pageData} />;
}
