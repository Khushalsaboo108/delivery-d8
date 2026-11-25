import { Metadata } from "next";
import { Boxes, Building2, Factory, ShoppingBag } from "lucide-react";

import { images } from "@/src/components/site/images";
import ServiceHero from "@/src/components/shared/ServiceHero";
import ServiceApproach from "@/src/components/shared/ServiceApproach";
import ServiceTrust from "@/src/components/shared/ServiceTrust";
import ServiceFeatureGrid from "@/src/components/shared/ServiceFeatureGrid";
import ServiceHowItWorks from "@/src/components/shared/ServiceHowItWorks";
import ServiceFinalCTA from "@/src/components/shared/ServiceFinalCTA";

const title = "B2B Courier Services in Jodhpur | Shree Balaji Enterprises";
const description =
  "Looking for B2B courier services in Jodhpur? Shree Balaji Enterprises helps businesses coordinate regular parcels, bulk shipments and courier requirements.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/b2b-courier" },
  openGraph: {
    title,
    description,
    url: "/b2b-courier",
    images: [{ url: images.b2bHero, alt: "Business shipping and fulfillment warehouse" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.b2bHero],
  },
};

export default function B2BCourierPage() {
  return (
    <>
      <ServiceHero
        image={images.b2bHero}
        imageAlt="Business shipping and fulfillment warehouse floor"
        eyebrow="B2B Courier"
        title="Courier solutions built around your business."
        text="Shree Balaji Enterprises helps businesses coordinate regular shipments, bulk parcels and commercial courier requirements through suitable delivery networks. From Jodhpur to destinations across India and beyond, we make business shipping easier to manage."
        ctaLabel="Discuss your business requirement"
        ctaHref="/contact"
      />
      <ServiceApproach
        title="Business shipping, coordinated with care."
        text="Every business has different shipping requirements. Whether you send regular parcels, manage bulk consignments or coordinate customer deliveries, we help you find suitable courier solutions based on your needs."
        bullets={[
          "Business and bulk shipment enquiries",
          "Courier coordination for regular requirements",
          "Domestic and international delivery solutions",
          "Clear communication throughout the process",
        ]}
        quote="Your business has places to be. We'll help keep your shipments moving."
      />
      <ServiceTrust
        image={images.b2bTrust}
        imageAlt="Business partners shaking hands over a logistics agreement"
        eyebrow="Why businesses choose us"
        title="A partner that treats your shipments like business-critical work."
        text="We know a missed shipment can mean a missed commitment to your own customer. That's why we stay close to every business account — clear updates, realistic timelines and a direct line when you need one."
        imageSide="left"
      />
      <ServiceFeatureGrid
        title="Shipping support for businesses of every size."
        items={[
          {
            icon: ShoppingBag,
            title: "E-commerce businesses",
            desc: "Fast, reliable parcels for online orders.",
          },
          {
            icon: Boxes,
            title: "Wholesalers & distributors",
            desc: "Bulk shipments across cities and states.",
          },
          {
            icon: Factory,
            title: "Manufacturers",
            desc: "Scheduled consignments for raw material & finished goods.",
          },
          {
            icon: Building2,
            title: "Offices & enterprises",
            desc: "Routine documents and equipment transport.",
          },
        ]}
      />
      <ServiceHowItWorks
        title="From business enquiry to shipment dispatch."
        steps={[
          "Share your shipping requirements",
          "Discuss suitable options",
          "Confirm your shipment",
          "Coordinate dispatch",
        ]}
      />
      <ServiceFinalCTA
        eyebrow="Ready when you are"
        title="Looking for a dependable B2B courier partner in Jodhpur?"
        text="Connect with Shree Balaji Enterprises to discuss your business shipping requirements."
      />
    </>
  );
}
