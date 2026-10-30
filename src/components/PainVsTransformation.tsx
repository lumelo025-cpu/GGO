import { XCircle, CheckCircle2, Sparkles } from "lucide-react";

export function PainVsTransformation() {
  const pains = [
    {
      title: "Sobrecarga de opiniões conflitantes",
      text: "Cada parente, amiga e perfil do Instagram diz uma coisa diferente. Você não sabe em quem confiar e fica paralisada sem saber o que comprar primeiro."
    },
    {
      title: "Medo constante de esquecer algo crucial",
      text: "Exames de cada trimestre, vacinas da gestante, documentos do cartório, ultrassons morfológicos... O medo de deixar passar uma data importante não te deixa relaxar."
    },
    {
      title: "Gastos astronômicos e desnecessários",
      text: "Comprar dezenas de macacões que o bebê perde em duas semanas, acessórios milagrosos que nunca saem da gaveta e estourar o limite do cartão sem necessidade."
    },
    {
      title: "Pânico da mala da maternidade no 8º mês",
      text: "Chegar perto do parto com a sensação de estar despreparada, sem saber quantas trocas levar para a mãe, bebê e acompanhante, e ter que correr no desespero."
    }
  ];

  const transformations = [
    {
      title: "Um roteiro claro na palma da sua mão",
      text: "Checklists organizados por trimestre. Você acorda sabendo exatamente o que precisa focar em cada semana, sem listas intermináveis nem confusão."
    },
    {
      title: "Paz mental e controle total",
      text: "Campos dedicados para anotar dúvidas para o médico, datas de exames e pendências. Basta dar check e curtir os chutes do seu bebê em paz."
    },
    {
      title: "Enxoval inteligente e economia de até R$ 2.500",
      text: "Do RN aos 12 meses com controle do que já comprou e lavou. Você adquire apenas o que tem utilidade real e sobra dinheiro para o futuro do seu filho."
    },
    {
      title: "Mala da maternidade pronta com semanas de antecedência",
      text: "Tudo separado em saquinhos identificados (Mamãe, Bebê, Acompanhante e Documentos). Quando o trabalho de parto começar, é só pegar a mala e ir."
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-extrabold tracking-wider text-[#7C3AED] uppercase bg-purple-100 px-3 py-1 rounded-full">
            ✨ A Diferença é Real
          </span>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mt-3 mb-4">
            Como você quer viver a sua gestação?
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            A gestação é um momento único na vida de uma mulher. Você não precisa passar 9 meses estressada, exausta e sobrecarregada com decisões de enxoval.
          </p>
        </div>

        {/* Contrast Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Column 1: The Pain (Without the Guide) */}
          <div className="bg-[#FFF5F5] rounded-3xl p-6 sm:p-8 border-2 border-rose-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-sm shrink-0">
                  <XCircle className="w-6 h-6" />
                </span>
                <div>
                  <h3 className="font-rounded-heading text-xl font-bold text-[#881337]">
                    Sem o Guia Organizado
                  </h3>
                  <p className="text-xs text-rose-600/80 font-medium">A rotina cansativa da maioria das grávidas</p>
                </div>
              </div>

              <div className="space-y-5">
                {pains.map((pain, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-rose-200 text-rose-700 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                      ✕
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#881337] mb-1">
                        {pain.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-rose-950/70 leading-relaxed">
                        {pain.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-rose-200 text-xs text-rose-700 font-bold text-center">
              Resultado: Ansiedade diária, estresse a dois e dinheiro jogado fora.
            </div>
          </div>

          {/* Column 2: The Transformation (With the Guide) */}
          <div className="bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] rounded-3xl p-6 sm:p-8 border-2 border-purple-300 shadow-xl shadow-purple-500/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-rounded-heading text-xl font-extrabold text-[#3B0764]">
                      Com o Guia da Gestante
                    </h3>
                    <span className="text-[10px] font-extrabold tracking-wide uppercase px-2 py-0.5 bg-purple-200/80 text-[#5B21B6] rounded-full">
                      💜 Transformação
                    </span>
                  </div>
                  <p className="text-xs text-[#6D28D9] font-medium">A serenidade que você e seu bebê merecem</p>
                </div>
              </div>

              <div className="space-y-5">
                {transformations.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#3B0764] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#581C87]/80 leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4 border-t border-purple-200 text-xs text-[#5B21B6] font-extrabold text-center flex items-center justify-center gap-1.5">
              <span>🎉 Resultado: Gestação leve, enxoval sem desperdício e segurança plena.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
