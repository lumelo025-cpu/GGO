import { Star, CheckCircle, Quote, MessageCircleHeart } from "lucide-react";
import { TESTIMONIALS } from "../data/guideData";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-10 sm:py-20 bg-[#FAF7FD] border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-pink-100 text-[#EC4899] text-xs font-extrabold rounded-full mb-3 border border-pink-200">
            <MessageCircleHeart className="w-3.5 h-3.5" />
            <span>Mães Reais, Histórias Reais</span>
          </div>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mb-3 sm:mb-4">
            Veja o que dizem as futuras mães que usam o Guia
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Mais de 4.000 gestantes já transformaram a ansiedade do enxoval em paz e segurança diária.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl sm:rounded-3xl border-2 border-purple-100 p-4 sm:p-7 shadow-sm sm:shadow-md hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top: Stars and Highlight */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-emerald-800 flex items-center gap-1 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    <CheckCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Compra Verificada
                  </span>
                </div>

                <div className="font-bold text-sm sm:text-[15px] text-[#2E1065] mb-2 sm:mb-3 flex items-start gap-2">
                  <Quote className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5 opacity-60" />
                  <span>"{t.highlight}"</span>
                </div>

                <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed mb-5 sm:mb-6 italic font-medium">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-purple-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-purple-200 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-[#2E1065]">
                    {t.name}
                  </h4>
                  <div className="text-[11px] sm:text-xs text-[#7C3AED] font-semibold">
                    <span>{t.status}</span>
                    <span className="mx-1 text-purple-300">·</span>
                    <span>{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border-2 border-purple-100 shadow-sm sm:shadow-md grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center text-xs text-[#581C87]">
          <div className="pb-3 sm:pb-0 border-b sm:border-b-0 sm:border-r border-purple-100">
            <div className="font-rounded-heading text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">
              +4.000
            </div>
            <span className="text-purple-900/70 font-semibold">Gestantes Atendidas</span>
          </div>
          <div className="pb-3 sm:pb-0 border-b sm:border-b-0 sm:border-r border-purple-100">
            <div className="font-rounded-heading text-2xl sm:text-3xl font-extrabold text-[#7C3AED]">
              ⭐ 4.9 de 5.0
            </div>
            <span className="text-purple-900/70 font-semibold">Avaliação Média</span>
          </div>
          <div>
            <div className="font-rounded-heading text-2xl sm:text-3xl font-extrabold text-[#EC4899]">
              99.2%
            </div>
            <span className="text-purple-900/70 font-semibold">Satisfação Positiva</span>
          </div>
        </div>

      </div>
    </section>
  );
}
