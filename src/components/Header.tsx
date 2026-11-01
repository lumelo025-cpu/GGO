import { Heart } from "lucide-react";

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

        {/* Zone 2: Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-7 text-xs sm:text-sm font-bold text-[#6D28D9]/80">
          <a href="#conteudo" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            O Que Inclui
          </a>
          <a href="#demonstracao" className="hidden sm:inline hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Demonstração
          </a>
          <a href="#bonus" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            3 Bônus Grátis
          </a>
          <a href="#depoimentos" className="hidden md:inline hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Depoimentos
          </a>
          <a href="#faq" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Dúvidas
          </a>
        </nav>
      </div>
    </header>
  );
}
