import { useState } from "react";
import { PiggyBank, Sparkles, Check, ArrowRight } from "lucide-react";
import { KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function SavingsCalculator() {
  const commonWasteItems = [
    { id: "1", name: "Aquecedor elétrico de lenço umedecido (resseca os lenços)", price: 240, defaultChecked: true },
    { id: "2", name: "15 pares de sapatinhos para recém-nascido (que caem do pé)", price: 380, defaultChecked: true },
    { id: "3", name: "Esterilizador elétrico volumoso (água fervente faz o mesmo)", price: 390, defaultChecked: true },
    { id: "4", name: "Excesso de macacões de botão RN (perdem em 10 dias)", price: 540, defaultChecked: true },
    { id: "5", name: "Aspirador nasal elétrico ineficiente", price: 180, defaultChecked: true },
    { id: "6", name: "Bolsa de maternidade de grife pesada e nada prática", price: 420, defaultChecked: true },
  ];

  const [selectedIds, setSelectedIds] = useState<string[]>(
    commonWasteItems.filter((item) => item.defaultChecked).map((item) => item.id)
  );

  const toggleItem = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalSaved = commonWasteItems
    .filter((item) => selectedIds.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-14 sm:py-20 bg-[#FAF7FD] border-b border-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-wider text-emerald-800 uppercase bg-emerald-100 px-3 py-1 rounded-full">
            💰 Economia Real no Bolso
          </span>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mt-3 mb-3">
            Seu bebê precisa mesmo de tudo isso?
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Veja quanto você pode economizar evitando compras por impulso no enxoval.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-purple-100 p-6 sm:p-8 shadow-lg">
          
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {commonWasteItems.map((item) => {
              const isChecked = selectedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`p-3.5 sm:p-4 rounded-2xl border-2 text-left transition-all flex items-center justify-between gap-3 ${
                    isChecked
                      ? "bg-purple-50/70 border-purple-300 text-[#2E1065] shadow-sm"
                      : "bg-[#FAFAFA] border-slate-200 text-slate-400 opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                        isChecked ? "bg-[#7C3AED] text-white" : "border-2 border-slate-300"
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-snug">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-[#7C3AED] shrink-0 tabular-nums bg-purple-100/80 px-2 py-0.5 rounded-lg">
                    R$ {item.price}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Result Highlight Box */}
          <div className="bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100 rounded-2xl p-5 sm:p-6 border-2 border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center shrink-0 shadow-md">
                <PiggyBank className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#7C3AED] uppercase tracking-wider">
                  Total Economizado no Enxoval:
                </span>
                <div className="font-rounded-heading text-3xl sm:text-4xl font-extrabold text-[#4C1D95] tabular-nums">
                  R$ {totalSaved.toLocaleString("pt-BR")},00
                </div>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <p className="text-xs font-bold text-[#6D28D9] mb-2">
                O Guia custa só <strong>R$ 47,00</strong> e se paga na hora!
              </p>
              <a
                href={KIWIFY_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
              >
                <span>Garantir Minha Economia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
