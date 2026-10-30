import { ShieldCheck, HeartHandshake } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 rounded-3xl border-2 border-purple-200 p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8 shadow-md">
          
          {/* Guarantee Badge */}
          <div className="relative shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white border-3 border-dashed border-[#7C3AED] flex flex-col items-center justify-center text-center p-3 shadow-lg">
              <ShieldCheck className="w-8 h-8 text-[#7C3AED] mb-1" />
              <span className="font-rounded-heading text-xl sm:text-2xl font-extrabold text-[#2E1065] leading-none">
                7 DIAS
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#7C3AED] mt-1">
                Garantia Total
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">
              <HeartHandshake className="w-4 h-4 text-emerald-600" />
              <span>Compra 100% Livre de Riscos</span>
            </div>
            <h3 className="font-rounded-heading text-xl sm:text-2xl font-extrabold text-[#2E1065] mb-3">
              Teste o Guia por 7 dias inteiros. O risco é todo nosso!
            </h3>
            <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed mb-4 font-medium">
              Acreditamos tanto no impacto positivo do <strong>Guia da Gestante Organizada</strong> que assumimos todo o risco por você. Acesse todo o conteúdo, teste os checklists, use a planilha financeira e o gerador de enxoval com IA.
            </p>
            <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed font-medium">
              Se por qualquer motivo você sentir que não foi o melhor investimento para sua gestação, basta solicitar o reembolso na Kiwify com 1 clique e devolveremos 100% do seu dinheiro. Sem burocracia, sem perguntas.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
