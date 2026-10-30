import { Check, ShieldCheck, Zap, Smartphone, Sparkles, ArrowRight, Lock, Clock } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function PricingOfferSection() {
  const inclusions = [
    "Cronograma Completo da Gestante por Trimestre (Checklist Inteligente)",
    "Checklist Roupas do Bebê do RN aos 12 Meses (Sem Exageros)",
    "Acessórios Essenciais com Curadoria Completa por Categoria",
    "Mala Maternidade e Mochila de Passeios (Mamãe, Bebê e Acompanhante)",
    "Minhas Inspirações: Espaço para Sonhar e Planejar seu Enxoval",
    "BÔNUS 01: Planilha Financeira para Controle do Enxoval (R$ 29,90)",
    "BÔNUS 02: Enxoval Personalizado com IA ChatGPT (R$ 39,90)",
    "BÔNUS 03: Lista Secreta com Links Diretos de Fornecedores (R$ 39,90)",
    "Acesso Vitalício direto no celular (sem cobranças futuras)",
    "Suporte e Atualizações futuras gratuitas"
  ];

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-gradient-to-b from-white via-purple-50/50 to-[#FAF7FD] border-b border-purple-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Main Offer Container */}
        <div className="relative rounded-3xl bg-white border-3 border-[#7C3AED] shadow-2xl shadow-purple-500/20 overflow-hidden p-6 sm:p-10">
          
          {/* Top Badge Banner */}
          <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#EC4899] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold tracking-wide uppercase flex items-center justify-center gap-2 shadow-sm">
            <Sparkles className="w-4 h-4 fill-white" />
            <span>OFERTA ESPECIAL ATIVADA</span>
            <Sparkles className="w-4 h-4 fill-white" />
          </div>

          <div className="pt-7 sm:pt-6 text-center">
            
            {/* Validity date & discount */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-purple-100 text-[#7C3AED] text-xs font-bold rounded-full mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Disponível Até: <strong>29/10/2026 - 23h59</strong></span>
            </div>

            <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mb-2">
              Guia da Gestante Organizada
            </h2>
            <p className="text-sm sm:text-base text-[#581C87]/80 mb-6 font-medium">
              Pague apenas uma vez (sem mensalidades) e receba todos os bônus + acesso vitalício direto no seu smartphone.
            </p>

            {/* Discount Callout */}
            <div className="inline-block bg-gradient-to-r from-emerald-100 via-teal-100 to-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide mb-6 border border-emerald-200 shadow-sm">
              🎉 APROVEITE R$ 50,00 DE DESCONTO HOJE
            </div>

            {/* Price Stack */}
            <div className="mb-6 p-5 sm:p-7 bg-[#FAF7FD] rounded-3xl border-2 border-purple-200 shadow-inner">
              <div className="text-sm sm:text-base line-through text-slate-400 font-bold mb-1">
                De R$ 97,00
              </div>
              <div className="text-xs uppercase tracking-widest font-extrabold text-[#7C3AED] mb-1">
                POR APENAS
              </div>
              <div className="flex items-baseline justify-center gap-1 font-rounded-heading">
                <span className="text-2xl font-extrabold text-[#2E1065]">R$</span>
                <span className="text-5xl sm:text-6xl font-black text-[#7C3AED] tracking-tight">
                  47,00
                </span>
                <span className="text-sm font-bold text-slate-500">à vista</span>
              </div>
              <div className="text-sm sm:text-base font-extrabold text-[#2E1065] mt-2">
                Ou até <span className="text-[#7C3AED] bg-purple-100 px-2 py-0.5 rounded-lg underline underline-offset-2">11X de R$ 5,22</span>
              </div>
              <p className="text-xs text-[#581C87]/70 font-semibold mt-2">
                Menos de R$ 0,18 por dia para ter uma gravidez tranquila, leve e organizada.
              </p>
            </div>

            {/* Included Checklist */}
            <div className="text-left space-y-2.5 mb-8 max-w-xl mx-auto">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#7C3AED] mb-3">
                Tudo o que você vai receber imediatamente:
              </p>
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5 text-xs font-extrabold">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#3B0764] leading-snug font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Big Action CTA Button */}
            <div className="space-y-3">
              <a
                href={KIWIFY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex flex-col sm:flex-row items-center justify-center gap-2 px-6 py-5 text-base sm:text-lg font-black text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#EC4899] hover:opacity-95 active:scale-[0.99] rounded-2xl shadow-xl shadow-purple-500/30 transition-all text-center leading-tight animate-pulse-subtle group"
              >
                <span>CLIQUE ABAIXO E COMECE USAR AGORA MESMO DIRETO NO SEU CELULAR!</span>
                <ArrowRight className="w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#6D28D9] pt-2 font-semibold">
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  Checkout Blindado Kiwify
                </span>
                <span className="text-purple-300">·</span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  Acesso Imediato
                </span>
                <span className="text-purple-300">·</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantia de 7 Dias
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
