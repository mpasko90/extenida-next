import type { Metadata } from "next";
import AboutPage from "./page";

export const metadata: Metadata = {
  title: "About Extendia | Design & Build in South West London",
  description:
    "Learn about Extendia, a design and build company specialising in house extensions, loft conversions and renovations across South West London.",
  alternates: { canonical: "/about" },
};

export default function AboutPageWrapper() {
  return <AboutPage />;
}
