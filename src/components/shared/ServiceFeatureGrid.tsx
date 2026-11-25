import type { LucideIcon } from "lucide-react";

export interface ServiceFeatureGridItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface ServiceFeatureGridProps {
  title: string;
  items: ServiceFeatureGridItem[];
}

export default function ServiceFeatureGrid({ title, items }: ServiceFeatureGridProps) {
  return (
    <section className="py-3 bg-white md:py-20 ">
      <div className="container text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-10 text-center">{title}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title: cardTitle, desc }) => (
            <div
              key={cardTitle}
              className="rounded-lg border border-gray-200 p-6 text-left hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <Icon className="text-red-600" size={20} />
              </div>
              <h3 className="font-medium text-lg mb-2">{cardTitle}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
