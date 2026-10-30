import { useState } from "react";
import { Check, CheckCircle, Sparkles, Smartphone, ArrowRight } from "lucide-react";
import { SAMPLE_CHECKLIST, KIWIFY_CHECKOUT_URL } from "../data/guideData";

export function InteractiveChecklistPreview() {
  const [activeTab, setActiveTab] = useState(0);
  const [checklistState, setChecklistState] = useState(SAMPLE_CHECKLIST);

  const toggleTask = (trimesterIndex: number, taskId: string) => {
    setChecklistState((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      const target = copy[trimesterIndex].tasks.find((t: { id: string }) => t.id === taskId);
      if (target) {
        target.done = !target.done;
      }
      return copy;
    });
  };

  const currentTrimester = checklistState[activeTab];
  const totalTasks = currentTrimester.tasks.length;
  const completedTasks = currentTrimester.tasks.filter((t) => t.done).length;
  const percent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <section id="demonstracao" className="py-14 sm:py-20 bg-white border-b border-purple-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold tracking-wider text-[#7C3AED] uppercase bg-purple-100 px-3 py-1 rounded-full">
            📲 Degustação ao Vivo
          </span>
          <h2 className="font-rounded-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2E1065] mt-3 mb-3">
            Experimente a praticidade: clique e marque as tarefas
          </h2>
          <p className="text-sm sm:text-base text-[#581C87]/80 leading-relaxed font-medium">
            Veja como é simples e gostoso acompanhar sua gravidez sem planilhas confusas ou complicação.
          </p>
        </div>

        {/* Interactive App Container Mockup */}
        <div className="bg-[#FAF7FD] rounded-3xl border-2 border-purple-200 shadow-xl p-5 sm:p-8 relative overflow-hidden">
          
          {/* Header Bar of the Interactive Widget */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-purple-100">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                <Smartphone className="w-5 h-5" />
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#2E1065]">
                  Meu Cronograma Gestacional
                </h4>
                <p className="text-xs text-[#6D28D9]/70 font-medium">
                  Toque nos itens para marcar como concluído
                </p>
              </div>
            </div>

            {/* Trimester Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-purple-100/70 rounded-2xl text-xs font-bold">
              {checklistState.map((tri, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all ${
                    activeTab === idx
                      ? "bg-white text-[#7C3AED] shadow-sm font-extrabold"
                      : "text-[#6D28D9]/70 hover:text-[#4C1D95]"
                  }`}
                >
                  {idx + 1}º Tri
                </button>
              ))}
            </div>
          </div>

          {/* Current Focus Banner */}
          <div className="mt-4 p-4 bg-white rounded-2xl border border-purple-100 flex items-center justify-between gap-3 shadow-sm">
            <div>
              <span className="text-xs font-extrabold text-[#7C3AED] uppercase">
                {currentTrimester.trimestre}
              </span>
              <p className="text-xs sm:text-sm text-[#4C1D95] font-semibold">
                <strong>Foco:</strong> {currentTrimester.foco}
              </p>
            </div>
            
            {/* Progress counter */}
            <div className="text-right shrink-0">
              <span className="text-xs font-extrabold text-emerald-700 tabular-nums">
                {completedTasks}/{totalTasks} concluídos ({percent}%)
              </span>
              <div className="w-24 sm:w-28 bg-purple-100 h-2.5 rounded-full overflow-hidden mt-1">
                <div
                  className="bg-gradient-to-r from-[#7C3AED] to-[#10B981] h-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Checklist Items */}
          <div className="mt-4 space-y-2.5">
            {currentTrimester.tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => toggleTask(activeTab, task.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  task.done
                    ? "bg-[#F3FAF5] border-emerald-200 text-emerald-900"
                    : "bg-white border-purple-100 text-[#2E1065] hover:border-purple-300 shadow-sm"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                    task.done
                      ? "bg-emerald-600 text-white"
                      : "border-2 border-purple-300 bg-white"
                  }`}
                >
                  {task.done && <Check className="w-4 h-4 stroke-[3]" />}
                </div>

                <div className="flex-1">
                  <span
                    className={`text-xs sm:text-sm font-semibold ${
                      task.done ? "line-through text-emerald-700/60" : "text-[#2E1065]"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>

                {task.done && (
                  <span className="text-xs font-extrabold text-emerald-600 shrink-0">
                    Concluído! 💜
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Prompt to buy */}
          <div className="mt-6 pt-5 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#581C87] font-semibold">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>O guia completo possui mais de <strong>120 itens organizados</strong> por fases e categorias.</span>
            </div>

            <a
              href={KIWIFY_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-95 text-white text-xs font-bold rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              <span>Quero a Lista Completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
