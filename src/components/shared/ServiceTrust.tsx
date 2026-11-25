import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface ServiceTrustProps {
  image: string | StaticImageData;
  imageAlt: string;
  eyebrow: string;
  title: string;
  text: string;
  imageSide?: "left" | "right";
}

export default function ServiceTrust({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  imageSide = "left",
}: ServiceTrustProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container split-grid location-grid items-center">
        <div
          className="location-image"
          style={imageSide === "right" ? { order: 2 } : undefined}
        >
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 800px) 100vw, 50vw" />
        </div>
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="text-2xl font-semibold mb-3">{title}</h2>
          <p className="text-gray-600">{text}</p>
        </div>
      </div>
    </section>
  );
}
