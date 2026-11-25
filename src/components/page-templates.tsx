import Link from "next/link";

import { ArrowRight } from "lucide-react";
import {
  ContactForm,
  PageHero,
  SectionIntro,
  ServicesGrid,
} from "./site";
import { images } from "./site/images";
import Image from "next/image";
import serviceHeorImage from "../../public/shipment.jpeg";
import ServiceFinalCTA from "./shared/ServiceFinalCTA";

export function InfoPage({
  title,
  eyebrow,
  text,
  image = images.hero,
  children,
}: {
  title: string;
  eyebrow: string;
  text: string;
  image?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <PageHero title={title} eyebrow={eyebrow} text={text} image={image} />
        <section className="page-section">
          <div className="container prose">{children}</div>
        </section>
      </main>
    </>
  );
}
const serviceImage = serviceHeorImage;
export function ServicesPage() {
  return (
    <>
      <main>
        {/* Services Hero */}
        <PageHero
          eyebrow="WHAT WE DO"
          title="Services that keep goods moving."
          text="We provide courier, cargo and transportation solutions for individuals and businesses. From everyday parcels to larger commercial consignments, we help coordinate shipments through suitable delivery networks across India and international destinations."
          image={serviceImage}
        />
        {/* Services Overview */}
        <section className="page-section" style={{ background: "#f7f7f7" }}>
          <div className="container">
            <SectionIntro
              eyebrow="OUR SERVICES"
              title="Find the right place to start."
            />
            <ServicesGrid />
          </div>
        </section>
        {/* Find the Right Service */}
        <section className="page-section">
          <div className="container">
            <SectionIntro
              eyebrow="CHOOSE YOUR SERVICE"
              title="The right solution starts with your shipment."
              text="Every shipment has different requirements. Whether you're sending a single parcel, managing regular business consignments or moving larger cargo, we're here to understand your needs and help identify a suitable delivery solution."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="service-choice p-4 border rounded">
                <h3 className="font-bold">
                  Personal parcel delivery – Courier Services
                </h3>
                <p>Ideal for individual shipments and small parcels.</p>
              </div>
              <div className="service-choice p-4 border rounded">
                <h3 className="font-bold">
                  Regular business shipments – B2B Courier
                </h3>
                <p>Optimized for ongoing business parcel needs.</p>
              </div>
              <div className="service-choice p-4 border rounded">
                <h3 className="font-bold">
                  Larger or heavier consignments – Cargo Services
                </h3>
                <p>Designed for bulk and heavy cargo handling.</p>
              </div>
              <div className="service-choice p-4 border rounded">
                <h3 className="font-bold">
                  Movement of commercial goods – Goods Transportation
                </h3>
                <p>
                  Efficient transport for commercial goods between locations.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="/contact" className="button">
                Not sure which service you need? Talk to us{" "}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <ServiceFinalCTA
          eyebrow="Let's get your shipment moving"
          title="Have a shipment in mind?"
          text="Tell us what you need to send, where it needs to go, and we'll help you explore the right logistics solution."
        />
      </main>
    </>
  );
}
export function ContactPage() {
  return (
    <>
      <main>
        <PageHero
          eyebrow="Get in touch"
          title="Tell us what you need to move."
          text="Share a few details about your requirement. Our team in Jodhpur will help you understand the next step."
          image={images.parcel}
        />
        <section className="page-section">
          <div className="container split-grid">
            <div>
              <SectionIntro
                eyebrow="Enquiries"
                title="A clear answer starts with a clear brief."
                text="Use the form for courier, B2B, cargo or transportation enquiries. You can also call or message us directly."
              />
              <div className="check-list">
                <p>
                  <b>Location</b>
                  <br />
                  Jodhpur, Rajasthan, India
                </p>
                <p>
                  <b>Phone</b>
                  <br />
                  <a className="text-link" href="tel:+919999999999">
                    Call our team
                  </a>
                </p>
                <p>
                  <b>Email</b>
                  <br />
                  <a
                    className="text-link"
                    href="mailto:hello@shreebalajienterprises.in"
                  >
                    Send an email
                  </a>
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
