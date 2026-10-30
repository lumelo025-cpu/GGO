import { Gift, Sparkles, Check, Table, Bot, Link as LinkIcon, ArrowRight } from "lucide-react";
import { BONUS_ITEMS, KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function BonusesSection() {
  const getBonusIcon = (id: string) => {
    switch (id) {
      case "bonus-financeiro":
        return <Table className="w-5 h-5 text-[#7C3AED]" />;
      case "bonus-ia":
        return <Bot className="w-5 h-5 text-[#EC4899]" />;
      case "bonus-links":
        return <LinkIcon className="w-5 h-5 text-[#8B5CF6]" />;
      default:
        return <Gift className="w-5 h-5 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="bonus" className="py-14 sm:py-20 bg-white border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 text-[#7C3AED] text-xs font-extrabold rounded-full mb-3 border border-purple-200">
            <Gift className="w-4 h-4 text-[#EC4899]" />
            <span>3 PRESENTES ESPECIAIS INCLUSOS HOJE</span>
          </div>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mb-4">
            Bônus Exclusivos que acompanham o Guia
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Se fossem adquiridos separadamente, esses 3 bônus custariam mais de <strong className="text-[#7C3AED]">R$ 109,70</strong>. Hoje, você leva todos gratuitamente!
          </p>
        </div>

        {/* Bonuses Cards Grid - Each with its own image! */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {BONUS_ITEMS.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-[#FAF7FD] rounded-3xl border-2 border-purple-200 p-5 sm:p-6 flex flex-col justify-between hover:border-purple-400 hover:shadow-xl transition-all relative overflow-hidden group shadow-md"
            >
              <div>
                {/* Image Space for Each Bonus */}
                <div className="rounded-2xl overflow-hidden border border-purple-200 mb-5 relative group-hover:scale-[1.02] transition-transform duration-300 shadow-sm bg-purple-100">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full h-48 sm:h-52 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#7C3AED] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    {bonus.number}
                  </div>
                  <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    GRÁTIS
                  </div>
                </div>

                {/* Price Bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-slate-400 line-through">
                    Valor Normal: {bonus.originalPrice}
                  </span>
                  <span className="text-xs font-extrabold text-[#7C3AED] bg-purple-100 px-2 py-0.5 rounded-lg">
                    {bonus.badge}
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-start gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                    {getBonusIcon(bonus.id)}
                  </div>
                  <h3 className="font-rounded-heading text-lg font-extrabold text-[#2E1065] leading-snug">
                    {bonus.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed mb-5 font-medium">
                  {bonus.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 pt-4 border-t border-purple-200/70">
                  {bonus.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span className="text-xs text-[#3B0764] leading-relaxed font-semibold">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 text-[11px] font-extrabold text-[#7C3AED] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Incluso no pacote especial de R$ 47</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Callout Banner */}
        <div className="mt-12 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 rounded-3xl p-6 sm:p-8 border-2 border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-md">
          <div>
            <h4 className="font-rounded-heading text-lg sm:text-xl font-extrabold text-[#2E1065]">
              Economia Imediata: R$ 109,70 em bônus + R$ 50,00 de desconto no Guia!
            </h4>
            <p className="text-xs sm:text-sm text-[#581C87] font-semibold mt-1">
              Você leva mais de R$ 200 em valor prático por apenas R$ 47,00 em parcela única.
            </p>
          </div>
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white text-xs sm:text-sm font-extrabold rounded-2xl shadow-lg shadow-purple-500/25 transition-all whitespace-nowrap active:scale-95"
          >
            <span>QUERO TODOS OS BÔNUS</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
