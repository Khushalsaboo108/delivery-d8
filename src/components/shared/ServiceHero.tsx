import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import type { StaticImageData } from "next/image";

export interface ServiceHeroProps {
  image: string | StaticImageData;
  imageAlt: string;
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function ServiceHero({
  image,
  imageAlt,
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-[var(--ink)] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="container relative z-10 flex flex-col items-start justify-center min-h-[70vh] py-24 text-white">
        <p className="eyebrow text-red-500 mb-2">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
          {title}
        </h1>
        <p className="max-w-xl mb-8 text-white/90">{text}</p>
        <Button
          size="lg"
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-5"
          nativeButton={false}
          render={<a href={ctaHref} />}
        >
          {ctaLabel} <ArrowRight className="ml-2" size={16} />
        </Button>
      </div>
    </section>
  );
}
