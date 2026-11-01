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
    <div className="bg-gradient-to-r from-[#4C1D95] via-[#6D28D9] to-[#8B5CF6] text-white py-2 px-3 sm:px-4 text-[11px] sm:text-xs border-b border-purple-400/30 shadow-inner">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2 truncate">
          <span className="flex items-center gap-1 font-extrabold text-[#FDE047] tracking-wide shrink-0">
            <Tag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span className="hidden xs:inline">Oferta Especial</span>
            <span className="xs:hidden">Oferta</span>
          </span>
          <span className="text-purple-300">·</span>
          <span className="text-[#A7F3D0] font-bold truncate">
            <span className="hidden sm:inline">Acesso Vitalício + </span>3 Bônus Inclusos
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0 text-[11px] sm:text-xs">
          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FDE047] shrink-0" />
          <span className="text-purple-100 font-medium hidden sm:inline">Expira em:</span>
          <div className="flex items-center gap-0.5 sm:gap-1 font-mono font-bold tabular-nums text-white bg-black/30 px-2 py-0.5 rounded-md border border-purple-300/30">
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
