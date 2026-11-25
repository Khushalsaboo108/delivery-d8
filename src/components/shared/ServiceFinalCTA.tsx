import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export interface ServiceFinalCTAProps {
  eyebrow: string;
  title: string;
  text: string;
}

export default function ServiceFinalCTA({ eyebrow, title, text }: ServiceFinalCTAProps) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="hero-actions">
          <Link href="/contact" className="button button-light">
            Request a quote <ArrowRight size={16} />
          </Link>
          <a href="tel:+919999999999" className="button button-outline-light">
            <Phone size={16} /> Call now
          </a>
        </div>
      </div>
    </section>
  );
}
