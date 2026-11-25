export interface ServiceHowItWorksProps {
  title: string;
  steps: string[];
}

export default function ServiceHowItWorks({ title, steps }: ServiceHowItWorksProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-10">{title}</h2>
        <div className="relative max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={step} className="relative flex flex-col items-center">
              {idx < steps.length - 1 && (
                <span
                  className="absolute top-6 left-[calc(50%_+_24px)] hidden h-0 border-t-2 border-dashed border-gray-200 md:block w-[calc(100%_-_16px)]"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mb-2 font-semibold">
                {idx + 1}
              </div>
              <p className="font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
