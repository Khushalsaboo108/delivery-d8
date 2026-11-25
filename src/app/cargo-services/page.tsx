import { Metadata } from "next";
import { Container, Factory, Ship, Weight } from "lucide-react";

import { images } from "@/src/components/site/images";
import { PageHero } from "@/src/components/site";
import ServiceApproach from "@/src/components/shared/ServiceApproach";
import ServiceTrust from "@/src/components/shared/ServiceTrust";
import ServiceFeatureGrid from "@/src/components/shared/ServiceFeatureGrid";
import ServiceHowItWorks from "@/src/components/shared/ServiceHowItWorks";
import ServiceFinalCTA from "@/src/components/shared/ServiceFinalCTA";

const title = "Cargo Services in Jodhpur | Shree Balaji Enterprises";
const description =
  "Discuss cargo movement and larger shipment requirements with Shree Balaji Enterprises in Jodhpur — from container loads to oversized consignments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/cargo-services" },
  openGraph: {
    title,
    description,
    url: "/cargo-services",
    images: [{ url: images.cargoHero, alt: "Container truck at a cargo terminal" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.cargoHero],
  },
};

export default function CargoServicesPage() {
  return (
    <>
      <PageHero
        image={images.cargoHero}
        eyebrow="Cargo Services"
        title="Cargo movement, handled with attention."
        text="For larger or heavier requirements, start with a clear conversation about your cargo, route and priorities. We help you plan dependable cargo movement from Jodhpur to destinations across India and beyond."
      />
      <ServiceApproach
        title="A grounded approach to cargo requirements."
        text="Cargo shipments carry more weight — literally and in terms of business impact. We take the time to understand your load, route and timeline before coordinating the right way forward."
        bullets={[
          "Cargo enquiry and requirement review",
          "Careful shipment coordination",
          "Support for oversized or heavy consignments",
          "Domestic and international movement support",
        ]}
        quote="Every cargo shipment has a deadline that matters. We help you plan around it."
      />
      <ServiceTrust
        image={images.cargoSupport}
        imageAlt="Packages moving through a warehouse dispatch line"
        eyebrow="Built for bigger shipments"
        title="From warehouse to terminal, coordinated end to end."
        text="Cargo rarely moves in a single step. We help coordinate the handling, documentation and timing between your warehouse and the terminal or route your shipment needs."
        imageSide="right"
      />
      <ServiceFeatureGrid
        title="Cargo support for every kind of load."
        items={[
          {
            icon: Container,
            title: "Container & bulk cargo",
            desc: "Full and part container loads coordinated with care.",
          },
          {
            icon: Factory,
            title: "Industrial goods",
            desc: "Machinery, raw material and industrial consignments.",
          },
          {
            icon: Ship,
            title: "Port & terminal movement",
            desc: "Coordination to and from cargo terminals.",
          },
          {
            icon: Weight,
            title: "Heavy & oversized loads",
            desc: "Planning for weight and dimension-sensitive cargo.",
          },
        ]}
      />
      <ServiceHowItWorks
        title="From enquiry to cargo dispatch."
        steps={[
          "Share your cargo requirement",
          "Review route & priorities",
          "Confirm coordination plan",
          "Dispatch & track movement",
        ]}
      />
      <ServiceFinalCTA
        eyebrow="Ready when you are"
        title="Have a cargo shipment to plan?"
        text="Connect with Shree Balaji Enterprises to discuss your cargo movement requirements."
      />
    </>
  );
}
