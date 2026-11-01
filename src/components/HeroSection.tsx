import { CheckCircle2, ShieldCheck, Smartphone, Star, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 sm:pt-14 sm:pb-20 border-b border-purple-100">
      {/* Playful pastel lilac ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5FF] via-[#F3E8FF]/60 to-[#FAF7FD] pointer-events-none -z-10" />
      
      {/* Soft playful colored background blurs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-pink-300/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct value proposition and call to action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Playful unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold tracking-wide text-[#7C3AED] uppercase mb-4">
              <span className="bg-purple-100 text-[#6D28D9] px-2.5 py-1 rounded-full flex items-center gap-1">
                💜 Para Gestantes de 1ª ou 2ª Viagem
              </span>
              <span aria-hidden="true" className="text-purple-300">·</span>
              <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                ✨ 100% no Celular
              </span>
            </div>

            {/* Main Headline with rounded playful typography */}
            <h1 className="font-rounded-heading text-2xl sm:text-4xl lg:text-[45px] font-extrabold text-[#2E1065] leading-[1.2] sm:leading-[1.18] tracking-tight mb-4 sm:mb-5 text-balance">
              Chega de ansiedade, listas infinitas e compras por impulso na gravidez.
            </h1>

            {/* Subtitle with high emotional resonance */}
            <p className="text-sm sm:text-lg text-[#581C87]/80 leading-relaxed mb-6 max-w-xl font-medium">
              O passo a passo prático, leve e acolhedor para você curtir cada semana com serenidade, montar o enxoval perfeito sem gastar uma fortuna e ter tudo 100% pronto no seu celular.
            </p>

            {/* Quick check benefits */}
            <div className="space-y-2.5 mb-8">
              <div className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#3B0764]">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-purple-100 text-[#7C3AED]" />
                </div>
                <span><strong>Cronograma por trimestre:</strong> saiba exatamente o que fazer sem esquecer nada.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#3B0764]">
                <div className="w-5 h-5 rounded-full bg-pink-100 text-[#EC4899] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-pink-100 text-[#EC4899]" />
                </div>
                <span><strong>Enxoval sem excessos:</strong> roupas e itens essenciais com controle de compras e lavagens.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm sm:text-[15px] text-[#3B0764]">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 fill-emerald-100 text-[#059669]" />
                </div>
                <span><strong>3 Bônus Inclusos:</strong> Planilha financeira, Enxoval IA e Links diretos confiáveis.</span>
              </div>
            </div>

            {/* Feature Highlights Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 sm:p-6 border-2 border-purple-100 shadow-sm mb-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-[#6D28D9]">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4 text-[#7C3AED]" />
                  Direto no Celular
                </span>
                <span className="text-purple-200">·</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Sem Exageros
                </span>
                <span className="text-purple-200">·</span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Acesso Vitalício
                </span>
              </div>
            </div>

            {/* Social Proof Bar */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-purple-200 object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Gestante feliz"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-purple-200 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Mãe realizada"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-purple-200 object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&h=80&q=80"
                  alt="Mãe de primeira viagem"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs text-[#581C87]">
                <div className="flex items-center gap-1 text-amber-500 font-extrabold">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>4.9/5</span>
                </div>
                <span>Mais de <strong>4.000 gestantes</strong> organizadas</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-200 shadow-xl sm:shadow-2xl bg-white group">
              <img
                src="https://adquiraonline.com/wp-content/uploads/2026/11/Planejando-a-Chegada-do-Bebe.png"
                alt="Gestante tranquila acompanhando a gravidez pelo celular com organização"
                className="w-full h-auto object-contain block mx-auto"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "/src/assets/images/hero_pregnant_mother_1793325871925.jpg";
                }}
              />
            </div>

            {/* Side Floating Badge */}
            <div className="flex absolute -top-3 right-3 sm:-top-4 sm:-right-3 bg-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border-2 border-purple-200 items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-[#4C1D95]">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>💜 Atualizado 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
