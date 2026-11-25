import { InfoPage } from "../../components/page-templates";
import {
  User,
  Truck,
  MessageSquare,
  Layers,
  Users,
  MessageSquareText,
  BringToFront,
} from "lucide-react";
import Link from "next/link";
import aboutUsHerorImage from "../../../public/about-us-hero.jpeg";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ServiceFinalCTA from "../../components/shared/ServiceFinalCTA";
import type { Metadata } from "next";

const title = "About Shree Balaji Enterprises | Jodhpur Logistics";
const description =
  "Learn about Shree Balaji Enterprises, a customer-focused courier and logistics partner based in Jodhpur, Rajasthan.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: "/about",
    images: [{ url: "/about-us-hero.jpeg", alt: "Shree Balaji Enterprises team outside their Jodhpur logistics office" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/about-us-hero.jpeg"],
  },
};

const aboutUsHero = aboutUsHerorImage;
export default function Page() {
  return (
    <>
      {/* 1. About Hero */}
      <section className="container mx-auto py-16 grid md:grid-cols-2 gap-8 relative">
        <div className="space-y-6">
          <p className="text-sm font-medium text-red-600">
            ABOUT SHREE BALAJI ENTERPRISES
          </p>
          <h1 className="text-2xl md:text-5xl font-bold text-gray-900">
            Moving your business forward, one shipment at a time.
          </h1>
          <p className="text-lg text-gray-700 max-w-prose">
            Shree Balaji Enterprises is a Jodhpur‑based logistics and courier
            service provider, helping individuals and businesses coordinate
            shipments through reliable delivery networks.
            <br />
            <br />
            From everyday parcels to business consignments and cargo
            requirements, we focus on understanding your needs and connecting
            each shipment with a suitable delivery solution.
          </p>
          {/* <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition"
          >
            
          </a> */}

          <Link href="/contact" className="button">
            Let's Discuss Your Requirement <ArrowRight size={16} />
          </Link>

          {/* 2. Company Introduction */}
          <section className="container mx-auto py-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Logistics built on understanding, coordination and care.
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl">
              Shree Balaji Enterprises believes that logistics is about more
              than moving shipments from one place to another. It's about
              understanding customer requirements, coordinating the right
              delivery solutions and keeping communication clear throughout the
              process.
              <br />
              <br />
              Based in Jodhpur, Rajasthan, we support individuals and businesses
              with courier, cargo and transportation requirements through our
              delivery network.
              <br />
              <br />
              Our approach is simple: listen to the customer, understand the
              shipment and help make the delivery process straightforward.
            </p>
          </section>
        </div>
        <div className="relative w-full h-72 md:sticky md:top-24 md:h-[28rem] rounded overflow-hidden">
          <Image
            src={aboutUsHero}
            alt="Shree Balaji Enterprises logistics team beside a branded delivery vehicle"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded object-cover"
          />
        </div>
      </section>

      {/* 3. Mission and Vision */}
      <section className="container mx-auto py-12 grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To make courier and logistics coordination simpler and more
            accessible for individuals and businesses through dependable service
            and clear communication.
          </p>
        </div>
        <div className="bg-gray-50 p-8 rounded-lg border border-gray-200">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To build lasting customer relationships and grow as a trusted
            logistics partner, connecting businesses and people with
            destinations across India and beyond.
          </p>
        </div>
      </section>

      {/* 4. What Makes Us Different */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">
          A service approach that puts your requirements first.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Block */}
          {[
            {
              icon: Users,
              title: "Customer‑first approach",
              desc: "We listen first, then tailor the delivery solution to your exact needs.",
            },
            {
              icon: Truck,
              title: "Delivery network",
              desc: "Extensive partner network ensures coverage across India and beyond.",
            },
            {
              icon: MessageSquareText,
              title: "Clear communication",
              desc: "Real‑time updates and proactive support keep you informed.",
            },
            {
              icon: BringToFront,
              title: "Flexible logistics solutions",
              desc: "From parcels to bulk cargo, we adapt to any shipment size.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-start space-y-3 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-red-400 rounded">
                {/* Minimal Lucide icon placeholder – replace with actual icon component */}
                <span className="text-white font-medium">
                  <f.icon />
                </span>
              </div>
              <h4 className="text-xl font-medium text-gray-800">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Delivery Network Slider */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          Our Delivery Partners
        </h2>
        <div className="overflow-x-auto whitespace-nowrap scroll-smooth hover:pause">
          {/* Example partner logos – replace src with actual partner assets */}
          {["partner1.png", "partner2.png", "partner3.png", "partner4.png"].map(
            (src, idx) => (
              <Image
                key={idx}
                src={`/partners/${src}`}
                alt={`Partner ${idx + 1}`}
                width={120}
                height={60}
                className="inline-block mx-4"
              />
            ),
          )}
        </div>
      </section>

      <ServiceFinalCTA
        eyebrow="Ready when you are"
        title="Looking for a logistics partner you can rely on?"
        text="Connect with Shree Balaji Enterprises to discuss your courier, cargo or transportation requirement."
      />
    </>
  );
}
