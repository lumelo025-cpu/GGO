import { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero (350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-purple-200 px-3.5 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(124,58,237,0.12)]">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[10px] uppercase font-extrabold text-[#7C3AED] flex items-center gap-0.5">
              <Sparkles className="w-2.5 h-2.5 fill-current" />
              Oferta Hoje
            </span>
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-base font-black text-[#2E1065]">R$ 47,00</span>
            <span className="text-[10px] text-slate-500 font-semibold">ou 11x R$ 5,22</span>
          </div>
        </div>

        <a
          href={KIWIFY_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[210px] flex items-center justify-center gap-1.5 py-3 px-3 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 active:scale-95 text-white text-xs font-black rounded-xl shadow-md transition-all text-center whitespace-nowrap"
        >
          <span>QUERO O GUIA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
