import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQS, KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#FAF7FD] border-b border-purple-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-purple-100 text-[#7C3AED] text-xs font-extrabold rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mb-3">
            Ainda tem alguma dúvida?
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Veja as respostas para as perguntas mais comuns de outras futuras mamães antes de começar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-purple-100 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-purple-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-extrabold text-[#2E1065]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#7C3AED] text-white" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#581C87]/80 leading-relaxed border-t border-purple-100 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA within FAQ */}
        <div className="mt-10 text-center">
          <p className="text-xs text-[#7C3AED] font-bold mb-3">
            Pronta para ter a gravidez mais tranquila e organizada da sua vida?
          </p>
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 rounded-2xl shadow-md transition-all active:scale-95"
          >
            <span>QUERO COMEÇAR POR APENAS R$ 47</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
