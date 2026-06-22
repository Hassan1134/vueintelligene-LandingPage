import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  description?: string;
}

export default function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description = "Real experiences, genuine feedback—discover how our creative solutions have transformed brands and elevated businesses.",
}: FaqSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="pt-5 pb-5">
      <div className="min-h-screen bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Title */}
          <div className="px-6 sm:px-8 lg:px-16 py-16 lg:py-24 flex flex-col justify-start">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              {title}
            </h2>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed max-w-sm">
              {description}
            </p>
          </div>

          {/* Right Column - FAQ List */}
          <div className="bg-gray-50 px-6 sm:px-8 lg:px-16 py-16 lg:py-24">
            <div className="space-y-0 max-w-2xl">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 py-5 cursor-pointer transition duration-300 last:border-b-0"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full text-left font-medium text-gray-900 flex items-start justify-between gap-4 hover:text-emerald-600 transition text-sm lg:text-base"
                  >
                    <span className="flex-1 leading-snug">{faq.q}</span>
                    <span
                      className={`text-emerald-600 flex-shrink-0 transition-transform duration-300 mt-0.5 ${
                        expandedFaq === i ? "rotate-180" : ""
                      }`}
                    >
                      −
                    </span>
                  </button>
                  {expandedFaq === i && (
                    <p className="text-gray-600 mt-4 text-xs lg:text-sm leading-relaxed animate-fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
