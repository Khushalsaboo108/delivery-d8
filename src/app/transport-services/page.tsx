import { Metadata } from "next";
import { Boxes, Factory, Route, Truck } from "lucide-react";

import { images } from "@/src/components/site/images";
import ServiceHero from "@/src/components/shared/ServiceHero";
import ServiceApproach from "@/src/components/shared/ServiceApproach";
import ServiceTrust from "@/src/components/shared/ServiceTrust";
import ServiceFeatureGrid from "@/src/components/shared/ServiceFeatureGrid";
import ServiceHowItWorks from "@/src/components/shared/ServiceHowItWorks";
import ServiceFinalCTA from "@/src/components/shared/ServiceFinalCTA";

const title = "Goods Transport Service in Jodhpur | Shree Balaji Enterprises";
const description =
  "Practical goods transportation support for business requirements from Jodhpur, Rajasthan — across road, rail and beyond.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/transport-services" },
  openGraph: {
    title,
    description,
    url: "/transport-services",
    images: [{ url: images.transportHero, alt: "Goods transportation network across road, rail, sea and air" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [images.transportHero],
  },
};

export default function TransportServicesPage() {
  return (
    <>
      <ServiceHero
        image={images.transportHero}
        imageAlt="Goods transportation network across road, rail, sea and air"
        eyebrow="Goods Transportation"
        title="A steady way to move your goods."
        text="Talk to us about your transportation requirement and we will help you understand the right next step — across road, rail and beyond."
        ctaLabel="Discuss your transportation requirement"
        ctaHref="/contact"
      />
      <ServiceApproach
        title="Transportation support without unnecessary complexity."
        text="Good transportation starts with a clear plan. We help you move goods reliably, with straightforward communication from pickup to delivery."
        bullets={[
          "Goods transportation enquiries",
          "Business-focused coordination",
          "Requirement-led shipment planning",
          "Support across multiple delivery networks",
        ]}
        quote="Your goods have somewhere to be. We help keep the plan simple."
      />
      <ServiceTrust
        image={images.transportSupport}
        imageAlt="Delivery truck loaded and ready for dispatch"
        eyebrow="Reliable on the road"
        title="A fleet and network built around your schedule."
        text="From pickup to delivery, we coordinate with a network suited to your timeline — so your goods move when you need them to, not just when it's convenient."
        imageSide="left"
      />
      <ServiceFeatureGrid
        title="Goods transportation for every requirement."
        items={[
          {
            icon: Boxes,
            title: "Finished goods",
            desc: "Retail and business-ready goods moved safely.",
          },
          {
            icon: Factory,
            title: "Raw materials",
            desc: "Scheduled transport for production needs.",
          },
          {
            icon: Truck,
            title: "Business equipment",
            desc: "Careful handling for machinery & office equipment.",
          },
          {
            icon: Route,
            title: "Multi-city routes",
            desc: "Coordinated movement across cities and states.",
          },
        ]}
      />
      <ServiceHowItWorks
        title="From requirement to delivery."
        steps={[
          "Share your transportation need",
          "Discuss route & timeline",
          "Confirm pickup details",
          "Goods delivered & confirmed",
        ]}
      />
      <ServiceFinalCTA
        eyebrow="Ready when you are"
        title="Need goods moved reliably?"
        text="Connect with Shree Balaji Enterprises to discuss your transportation requirement."
      />
    </>
  );
}
