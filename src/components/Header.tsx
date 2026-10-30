import { Heart, Sparkles } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../data/guideData";

interface HeaderProps {
  onScrollToOffer?: () => void;
}

export function Header({ onScrollToOffer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-purple-100 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (one line, display face) */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 font-rounded-heading text-lg sm:text-xl font-bold tracking-tight text-[#4C1D95] whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
        >
          <span className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white shadow-sm shrink-0">
            <Heart className="w-4 h-4 fill-white" />
          </span>
          <span className="bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent font-extrabold">
            Guia da Gestante
          </span>
        </a>

        {/* Zone 2: 4 nav links (single-line, concise) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#6D28D9]/80">
          <a href="#conteudo" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            O Que Inclui
          </a>
          <a href="#demonstracao" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Demonstração
          </a>
          <a href="#bonus" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            3 Bônus Grátis
          </a>
          <a href="#depoimentos" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={KIWIFY_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#7C3AED] via-[#8B5CF6] to-[#EC4899] hover:opacity-95 active:scale-95 rounded-xl shadow-md hover:shadow-lg transition-all whitespace-nowrap shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Garantir por R$ 47
          </a>
        </div>
      </div>
    </header>
  );
}
