import { useState, useEffect } from "react";
import { Clock, Tag } from "lucide-react";

export function CountdownBanner() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 55,
    seconds: 56,
  });

  useEffect(() => {
    // Target 23:59:59 of today
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();

      if (diff <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] text-white py-2.5 px-4 text-xs sm:text-sm border-b border-purple-400/30 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 font-extrabold text-[#FDE047] tracking-wide">
            <Tag className="w-3.5 h-3.5" />
            Oferta Especial Ativada
          </span>
          <span className="hidden sm:inline text-purple-200">·</span>
          <span className="hidden sm:inline text-purple-100">
            Disponível Até: <strong>29/10/2026 - 23h59</strong>
          </span>
          <span className="text-purple-300">·</span>
          <span className="text-[#A7F3D0] font-bold">
            Acesso Vitalício + 3 Bônus Inclusos
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Clock className="w-3.5 h-3.5 text-[#FDE047]" />
          <span className="text-purple-100 font-medium">Expira em:</span>
          <div className="flex items-center gap-1 font-mono font-bold tabular-nums text-white bg-black/25 px-2.5 py-0.5 rounded-lg border border-purple-300/30">
            <span>{formatDigit(timeLeft.hours)}</span>
            <span className="text-purple-300">:</span>
            <span>{formatDigit(timeLeft.minutes)}</span>
            <span className="text-purple-300">:</span>
            <span>{formatDigit(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
