"use client";

import ServiceAreaLayout from "@/components/ServiceAreaLayout";

export default function HouseExtensionsRichmond() {
  const pageData = {
    serviceName: "house extensions",
    areaName: "Richmond",
    serviceTitle: "House Extensions",
    serviceDescription: "Premium house extension services in Richmond. Specialists in period properties and conservation areas.",
    benefitsList: [
      {
        title: "Richmond Planning Experts",
        description: "In-depth knowledge of Richmond Council's planning requirements and processes."
      },
      {
        title: "Conservation Area Specialists",
        description: "Expert handling of Richmond's numerous conservation areas and listed buildings."
      },
      {
        title: "Period Property Focus",
        description: "Specialized experience with Richmond's Georgian and Victorian properties."
      },
      {
        title: "Local Materials",
        description: "Use of materials that match Richmond's architectural character."
      },
      {
        title: "Riverside Expertise",
        description: "Special considerations for properties near Richmond riverside."
      },
      {
        title: "Heritage Integration",
        description: "Seamless blending of new extensions with Richmond's historic architecture."
      }
    ],
    areaSpecifics: [
      {
        title: "Richmond Hill Properties",
        description: "Specialized solutions for elevated properties with view considerations."
      },
      {
        title: "Riverside Homes",
        description: "Extensions designed to maximize Thames views and natural light."
      },
      {
        title: "Conservation Properties",
        description: "Careful adherence to Richmond's strict conservation guidelines."
      },
      {
        title: "Georgian Architecture",
        description: "Expert handling of extensions for Richmond's Georgian properties."
      }
    ]
  };

  return <ServiceAreaLayout {...pageData} />;
}
