"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

import transportImage from "../../public/transport-services.jpeg";
import cargoImage from "../../public/cargo-image.jpeg";
import parcelImage from "../../public/parcel-image.jpeg";
import b2bImage from "../../public/b2b-image.jpeg";

const nav = [
  ["About Us", "/about"],
  ["Services", "/services"],
  ["B2B Courier", "/b2b-courier"],
  ["Cargo", "/cargo-services"],
  ["Transport", "/transport-services"],
  ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="Shree Balaji Enterprises"
            width={240}
            height={80}
            className="brand-logo"
          />
        </Link>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </nav>
        <Link className="button button-small desktop-cta" href="/contact">
          Get a quote <ArrowRight size={15} />
        </Link>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            className="button"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Get a quote <ArrowRight size={15} />
          </Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cover">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              <Image
                src="/footer-logo-image.png"
                alt="Shree Balaji Enterprises"
                width={210}
                height={140}
                className="footer-logo"
              />
            </Link>
            <p className="footer-copy">
              Reliable courier, cargo and transportation solutions from Jodhpur
              to destinations across India.
            </p>
          </div>
          <div className="footer-links">
            <p className="footer-label">Explore</p>
            <Link href="/about">About us</Link>
            <Link href="/services">Our services</Link>
            <Link href="/contact">Request a quote</Link>
          </div>
          <div className="footer-links">
            <p className="footer-label">Contact</p>
            <span>
              <MapPin size={15} /> Jodhpur, Rajasthan
            </span>
            <a href="mailto:hello@shreebalajienterprises.in">
              <Mail size={15} /> Email us
            </a>
            <a href="tel:+919999999999">
              <Phone size={15} /> Call our team
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Shree Balaji Enterprises</span>
          <span>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-and-conditions">Terms</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  );
}

const services = [
  {
    number: "01",
    title: "Courier Services",
    desc: "Reliable parcel delivery solutions for individuals and businesses. We help coordinate shipments to destinations through suitable courier networks.",
    href: "/services",
    image: parcelImage,
  },
  {
    number: "02",
    title: "B2B courier",
    desc: "Practical shipment coordination built around the way businesses operate.",
    href: "/b2b-courier",
    image: b2bImage,
  },
  {
    number: "03",
    title: "Cargo services",
    desc: "Careful handling for larger, heavier and time-sensitive cargo needs.",
    href: "/cargo-services",
    image: cargoImage,
  },
  {
    number: "04",
    title: "Goods transportation",
    desc: "Straightforward movement of goods with clear communication at every step.",
    href: "/transport-services",
    image: transportImage,
  },
];
export function ServicesGrid() {
  return (
    <div className="services-grid">
      {services.map(({ number, title, desc, href, image }) => (
        <Link href={href} className="service-card" key={title}>
          <div className="service-image">
            <Image
              src={image}
              alt={`${title} logistics service`}
              fill
              sizes="(max-width: 800px) 100vw, 25vw"
            />
          </div>
          <div className="service-content">
            <span className="service-number">{number}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <span className="text-link">
              Explore service <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

const processSteps = [
  {
    title: "Share your requirement",
    description:
      "Tell us about your shipment, pickup location and destination.",
    image: "/how-it-work/01.jpeg",
  },
  {
    title: "Get the right solution",
    description:
      "We help identify a suitable courier or transportation option for your needs.",
    image: "/how-it-work/02.jpeg",
  },
  {
    title: "Shipment dispatch",
    description:
      "Your shipment is coordinated through the selected delivery network.",
    image: "/how-it-work/03.jpeg",
  },
  {
    title: "Delivery to destination",
    description:
      "Your shipment moves towards its destination through the selected delivery partner.",
    image: "/how-it-work/04.jpeg",
  },
];

export function Process({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1) setActiveIndex(idx);
        });
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="process-scrolly">
      <div className="process-scrolly-sticky">
        <SectionIntro eyebrow={eyebrow} title={title} />
        <div className="process-scrolly-grid">
          <div className="process-scrolly-copy">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className={`process-scrolly-text${
                  activeIndex === i ? " is-active" : ""
                }`}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div className="process-line" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="process-scrolly-visual">
            {processSteps.map((step, i) => (
              <div
                key={step.image}
                className={`process-scrolly-image${
                  activeIndex === i ? " is-active" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="process-scrolly-track">
        {processSteps.map((_, i) => (
          <div
            key={i}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
            className="process-scrolly-trigger"
          />
        ))}
      </div>
    </div>
  );
}

export function FAQ() {
  const questions = [
    "Which courier and logistics services do you provide?",
    "Do you provide B2B courier services?",
    "Can I send cargo from Jodhpur to other Indian cities?",
    "How can I request a logistics quote?",
  ];
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="faq">
      {questions.map((q, i) => (
        <div className="faq-item" key={q}>
          <button
            onClick={() => setActive(active === i ? null : i)}
            aria-expanded={active === i}
          >
            <span>{q}</span>
            <ChevronDown size={18} className={active === i ? "rotate" : ""} />
          </button>
          {active === i && (
            <p>
              Tell us what you need to move, where it needs to go, and any
              important requirements. Our team will review your enquiry and get
              back to you with the next steps.
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  image = "../../public/hero.jpeg",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string | StaticImageData;
}) {
  return (
    <section className="page-hero">
      <div className="container page-hero-grid">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="lead">{text}</p>
          <Link href="/contact" className="button">
            Discuss your requirement <ArrowRight size={16} />
          </Link>
        </div>
        <div className="page-hero-image">
          <Image
            src={image}
            alt="Shree Balaji Enterprises logistics operations"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      {sent ? (
        <div className="form-success">
          <ShieldCheck size={28} />
          <h3>Thanks for reaching out.</h3>
          <p>
            Your enquiry has been noted. A team member will contact you soon.
          </p>
        </div>
      ) : (
        <>
          <div className="form-row">
            <label>
              Full name
              <input required name="name" placeholder="Your name" />
            </label>
            <label>
              Phone number
              <input required name="phone" placeholder="+91" />
            </label>
          </div>
          <div className="form-row">
            <label>
              Email address
              <input type="email" name="email" placeholder="you@company.com" />
            </label>
            <label>
              Service required
              <select required name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option>Courier services</option>
                <option>B2B courier</option>
                <option>Cargo services</option>
                <option>Goods transportation</option>
              </select>
            </label>
          </div>
          <label>
            How can we help?
            <textarea
              required
              name="message"
              placeholder="Tell us about your shipment or requirement"
              rows={5}
            />
          </label>
          <button className="button" type="submit">
            Send enquiry <ArrowRight size={16} />
          </button>
        </>
      )}
    </form>
  );
}

export function TrustBar() {
  return (
    <div className="trust-bar">
      <div>
        <Truck size={21} />
        <span>Courier & cargo support</span>
      </div>
      <div>
        <ShieldCheck size={21} />
        <span>Clear, customer-first service</span>
      </div>
      <div>
        <MapPin size={21} />
        <span>Based in Jodhpur, Rajasthan</span>
      </div>
      <div>
        <Clock3 size={21} />
        <span>Responsive communication</span>
      </div>
    </div>
  );
}
