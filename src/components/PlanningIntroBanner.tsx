export function PlanningIntroBanner() {
  return (
    <section className="py-4 sm:py-10 bg-gradient-to-b from-white via-[#FAF7FD] to-[#FAF7FD]">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-purple-200 shadow-md sm:shadow-lg hover:shadow-xl transition-all bg-white">
          <img
            src="https://adquiraonline.com/wp-content/uploads/2026/11/Duvidas-e-Planejamento-da-Gravidez.png"
            alt="Dúvidas e Planejamento da Gravidez - Guia da Gestante Organizada"
            className="w-full h-auto object-contain block mx-auto"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}
