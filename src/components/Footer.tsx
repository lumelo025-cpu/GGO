import { Heart, ShieldCheck, Lock, Smartphone } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function Footer() {
  return (
    <footer className="bg-[#1E0A38] text-[#E9D5FF] pt-10 sm:pt-12 pb-24 md:pb-12 border-t border-purple-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid md:grid-cols-12 gap-8 pb-10 border-b border-purple-900/50">
          
          {/* Brand info */}
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 font-rounded-heading text-lg font-extrabold text-white mb-3">
              <span className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Heart className="w-4 h-4 fill-white" />
              </span>
              <span>Guia da Gestante Organizada</span>
            </div>
            <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed max-w-sm mb-4 font-medium">
              O método prático, leve e acolhedor para planejar a gestação dos seus sonhos, organizar o enxoval com inteligência e viver cada semana com leveza e paz mental.
            </p>
            <div className="flex items-center gap-3 text-xs text-purple-300 font-semibold">
              <span className="flex items-center gap-1">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                100% no Celular
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                Compra Segura Kiwify
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-purple-200/80 font-medium">
              <li>
                <a href="#conteudo" className="hover:text-white transition-colors">
                  Conteúdo do Guia (5 Módulos)
                </a>
              </li>
              <li>
                <a href="#demonstracao" className="hover:text-white transition-colors">
                  Degustação Interativa
                </a>
              </li>
              <li>
                <a href="#bonus" className="hover:text-white transition-colors">
                  3 Bônus Exclusivos
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-white transition-colors">
                  Depoimentos de Mães
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Safe Purchase notice */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-3">
              Segurança e Garantia
            </h4>
            <p className="text-xs text-purple-200/80 leading-relaxed mb-3 font-medium">
              Pagamento processado em ambiente 100% criptografado e seguro pela plataforma Kiwify.
            </p>
            <div className="p-3.5 rounded-2xl bg-purple-950/80 border border-purple-800/60 flex items-center gap-2.5 text-xs text-purple-200">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="font-semibold">Garantia incondicional de 7 dias com reembolso imediato.</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/70">
          <p>© {new Date().getFullYear()} Guia da Gestante Organizada. Todos os direitos reservados.</p>
          <p>
            Este produto não substitui o acompanhamento pré-natal médico. Consulte sempre seu obstetra.
          </p>
        </div>

      </div>
    </footer>
  );
}
