import { Heart } from "lucide-react";

interface HeaderProps {
  onScrollToOffer?: () => void;
}

export function Header({ onScrollToOffer }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 transition-colors">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 font-rounded-heading text-base sm:text-xl font-bold tracking-tight text-[#4C1D95] whitespace-nowrap shrink-0 hover:text-[#7C3AED] transition-colors"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#8B5CF6] to-[#EC4899] flex items-center justify-center text-white shadow-sm shrink-0">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
          </span>
          <span className="bg-gradient-to-r from-[#5B21B6] via-[#7C3AED] to-[#DB2777] bg-clip-text text-transparent font-extrabold text-sm sm:text-lg">
            Guia da Gestante
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#6D28D9]/80 overflow-x-auto no-scrollbar py-1">
          <a href="#conteudo" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            O Que Inclui
          </a>
          <a href="#demonstracao" className="hidden sm:inline hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            Demonstração
          </a>
          <a href="#bonus" className="hover:text-[#7C3AED] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0">
            3 Bônus
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
