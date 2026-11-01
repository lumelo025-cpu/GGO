import { Check, CalendarCheck, Shirt, Package, Luggage, Palette } from "lucide-react";
import { GUIDE_MODULES } from "../data/guideData";

export function GuideModulesSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case "cronograma":
        return <CalendarCheck className="w-5 h-5 text-[#7C3AED]" />;
      case "roupas":
        return <Shirt className="w-5 h-5 text-[#EC4899]" />;
      case "acessorios":
        return <Package className="w-5 h-5 text-[#8B5CF6]" />;
      case "mala":
        return <Luggage className="w-5 h-5 text-[#6D28D9]" />;
      case "inspiracoes":
        return <Palette className="w-5 h-5 text-[#D946EF]" />;
      default:
        return <Check className="w-5 h-5 text-[#7C3AED]" />;
    }
  };

  return (
    <section id="conteudo" className="py-14 sm:py-20 bg-[#FAF7FD] border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-wider text-[#7C3AED] uppercase bg-purple-100 px-3 py-1 rounded-full">
            🌸 Tudo Incluso no Guia
          </span>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mt-3 mb-4">
            Os 5 Pilares do Guia da Gestante Organizada
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Cada módulo foi pensado para você economizar tempo, dinheiro e energia mental durante os 9 meses mais especiais da sua vida.
          </p>
        </div>

        {/* Modules List - Each with its own image */}
        <div className="space-y-10">
          {GUIDE_MODULES.map((module, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={module.id}
                className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-md hover:shadow-xl hover:border-purple-300 transition-all"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Text Column */}
                  <div className={isReversed ? 'lg:col-span-7 lg:order-2' : 'lg:col-span-7'}>
                    
                    {/* Header info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-2xl bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200 shadow-sm">
                        {getIcon(module.id)}
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider">
                          MÓDULO {module.number} · {module.tag}
                        </span>
                        <h3 className="font-rounded-heading text-xl sm:text-2xl font-extrabold text-[#2E1065]">
                          {module.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base font-bold text-[#6D28D9] mb-3">
                      {module.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed mb-6 font-medium">
                      {module.description}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3 pt-3 border-t border-purple-100">
                      {module.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center text-xs shrink-0 mt-0.5 font-extrabold">
                            ✓
                          </span>
                          <span className="text-xs sm:text-sm text-[#3B0764] leading-snug font-medium">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Image Column - Every Item has its own space! */}
                  <div className={isReversed ? 'lg:col-span-5 lg:order-1' : 'lg:col-span-5'}>
                    <div className="rounded-2xl overflow-hidden border-2 border-purple-100 bg-purple-50 relative group shadow-md">
                      <img
                        src={module.image}
                        alt={module.title}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          if (module.fallbackImage && e.currentTarget.src !== module.fallbackImage) {
                            e.currentTarget.src = module.fallbackImage;
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-purple-950/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 font-bold flex items-center justify-between">
                        <span>{module.tag}</span>
                        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Prático</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
