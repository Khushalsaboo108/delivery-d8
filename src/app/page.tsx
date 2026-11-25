import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import {
  FAQ,
  Footer,
  Header,
  Process,
  SectionIntro,
  ServicesGrid,
  TrustBar,
} from "../components/site";
import { images } from "../components/site/images";
import { ServiceAreaMap } from "../components/service-area-map";
import ServiceFinalCTA from "../components/shared/ServiceFinalCTA";
import heroImage from "../../public/hero.jpeg";
import whyBalajiImage from "../../public/why-balaji.jpeg";

const heroBannerImage = heroImage;
const whyBalaji = whyBalajiImage;

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Your local logistics partner in Jodhpur</p>
              <h1>
                Moving what matters, <em>with care.</em>
              </h1>
              <p className="lead">
                Reliable courier, cargo and transportation solutions for
                individuals and businesses — from Jodhpur to destinations across
                India.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="button">
                  Get a quote <ArrowRight size={16} />
                </Link>
                <a href="tel:+919999999999" className="button button-ghost">
                  <Phone size={16} /> Call now
                </a>
                <a
                  href="https://wa.me/919999999999"
                  className="button button-ghost"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <Image
                src={heroBannerImage}
                alt="Truck, train and port logistics network"
                fill
                priority
                sizes="(max-width: 800px) 100vw, 50vw"
              />
              <div className="hero-stamp">
                <strong>SB</strong>
                <span>
                  Shree Balaji
                  <br />
                  Enterprises
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <TrustBar />
        </div>
        <section className="section section-white">
          <div className="container intro-grid">
            <div>
              <SectionIntro
                eyebrow="01 — Our approach"
                title="The dependable link in your supply chain."
                text="Shree Balaji Enterprises helps people and businesses move goods with less friction. Based in Jodhpur, we bring a practical, responsive approach to courier, cargo and transportation requirements."
              />
            </div>
            <div className="intro-note">
              <span>“</span>
              <p>
                Every consignment has a destination. Our job is to make the
                journey feel clear, coordinated and dependable.
              </p>
              <small>— Shree Balaji Enterprises</small>
            </div>
          <Link className="text-link mt-0" href="/about">
            More about our business <ArrowRight size={16} />
          </Link>
          </div>
        </section>
        <section className="section section-grey">
          <div className="container">
            <SectionIntro
              eyebrow="02 — What we do"
              title="Logistics built around your requirement."
              text="From everyday parcels to business shipments and cargo movement, start with a conversation about what you need to move."
            />
            <ServicesGrid />
          </div>
        </section>
        <section className="section section-dark">
          <div className="container split-grid">
            <div>
              <SectionIntro
                eyebrow="03 — Why Shree Balaji"
                title="A straightforward partner for important movement."
                text="Good logistics is more than getting from A to B. It is communication, care and attention to the details that matter to you."
              />
              <ul className="check-list">
                <li>
                  <Check size={16} /> Customer-focused coordination
                </li>
                <li>
                  <Check size={16} /> Reliable shipment handling
                </li>
                <li>
                  <Check size={16} /> Business-oriented solutions
                </li>
                <li>
                  <Check size={16} /> Local Jodhpur presence
                </li>
              </ul>
            </div>
            <div className="dark-image">
              <Image
                src={whyBalaji}
                alt="Freight truck travelling on an open highway"
                fill
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>
        <section className="section section-white">
          <div className="container">
            <Process
              eyebrow="04 — How it works"
              title="Simple from first conversation to completion."
            />
          </div>
        </section>
        <section className="section section-grey">
          <div className="container split-grid location-grid">
            <ServiceAreaMap />
            <div>
              <SectionIntro
                eyebrow="05 — Our service area"
                title="From Jodhpur, Rajasthan to across the globe."
                text="Tell us your pickup point, destination and shipment needs. Whether it's within India or anywhere in the world, we will help you find the right way forward for your courier, cargo or goods transportation requirement."
              />
              <Link href="/contact" className="button">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
        <section className="section section-white">
          <div className="container narrow">
            <SectionIntro
              eyebrow="06 — Common questions"
              title="Before you send, ask us."
            />
            <FAQ />
          </div>
        </section>
        <ServiceFinalCTA
          eyebrow="Ready when you are"
          title="Looking for a reliable logistics partner in Jodhpur?"
          text="Connect with Shree Balaji Enterprises to discuss your courier, cargo and transportation requirements."
        />
      </main>
    </>
  );
}
