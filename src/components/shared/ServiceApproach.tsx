import { ArrowRight, Check } from "lucide-react";

export interface ServiceApproachProps {
  title: string;
  text: string;
  bullets: string[];
  quote: string;
}

export default function ServiceApproach({
  title,
  text,
  bullets,
  quote,
}: ServiceApproachProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container split-grid">
        <div className="prose">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>{text}</p>
          <ul className="check-list space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start">
                <Check className="text-red-600 mr-2 flex-shrink-0 mt-0.5" size={18} />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="intro-note border-l-4 border-red-600 pl-4">
          <span className="text-xl font-medium">&ldquo;</span>
          <p className="mt-2">{quote}</p>
          <a href="/contact" className="text-link inline-flex items-center mt-4">
            Let&rsquo;s discuss your requirement <ArrowRight size={15} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
