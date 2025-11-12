'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // YYYY-MM-DD format
  variant?: 'default' | 'large'; // Variante para diferentes tamaños
}

export default function Countdown({ targetDate, variant = 'default' }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Si el tiempo ha terminado, no mostrar nada
  if (isExpired) {
    return null;
  }

  if (variant === 'large') {
    return (
      <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 w-full">
        <span className="text-secondary font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2">Comienza en:</span>
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 flex-wrap">
          {timeLeft.days > 0 && (
            <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
              <div className="bg-secondary/30 text-secondary px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5 rounded-md sm:rounded-lg font-bold min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4rem] lg:min-w-[5rem] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg border border-secondary/40">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <span className="text-secondary/80 font-semibold text-xs sm:text-sm md:text-base uppercase">Días</span>
            </div>
          )}
          <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="bg-secondary/30 text-secondary px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5 rounded-md sm:rounded-lg font-bold min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4rem] lg:min-w-[5rem] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg border border-secondary/40">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span className="text-secondary/80 font-semibold text-xs sm:text-sm md:text-base uppercase">Horas</span>
          </div>
          <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="bg-secondary/30 text-secondary px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5 rounded-md sm:rounded-lg font-bold min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4rem] lg:min-w-[5rem] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg border border-secondary/40">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-secondary/80 font-semibold text-xs sm:text-sm md:text-base uppercase">Min</span>
          </div>
          <div className="flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2">
            <div className="bg-secondary/30 text-secondary px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5 rounded-md sm:rounded-lg font-bold min-w-[3rem] sm:min-w-[3.5rem] md:min-w-[4rem] lg:min-w-[5rem] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl shadow-lg border border-secondary/40">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <span className="text-secondary/80 font-semibold text-xs sm:text-sm md:text-base uppercase">Seg</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-xs md:text-sm overflow-hidden">
      <span className="text-secondary font-bold whitespace-nowrap">Comienza en:</span>
      <div className="flex items-center gap-1 md:gap-1.5 flex-shrink-0">
        {timeLeft.days > 0 && (
          <>
            <div className="bg-secondary/20 text-secondary px-2 md:px-2.5 py-1 md:py-1.5 rounded font-bold min-w-[2rem] md:min-w-[2.5rem] text-center text-xs md:text-sm">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <span className="text-secondary/70 font-medium text-xs md:text-sm">d</span>
          </>
        )}
        <div className="bg-secondary/20 text-secondary px-2 md:px-2.5 py-1 md:py-1.5 rounded font-bold min-w-[2rem] md:min-w-[2.5rem] text-center text-xs md:text-sm">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <span className="text-secondary/70 font-medium text-xs md:text-sm">h</span>
        <div className="bg-secondary/20 text-secondary px-2 md:px-2.5 py-1 md:py-1.5 rounded font-bold min-w-[2rem] md:min-w-[2.5rem] text-center text-xs md:text-sm">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <span className="text-secondary/70 font-medium text-xs md:text-sm">m</span>
        <div className="bg-secondary/20 text-secondary px-2 md:px-2.5 py-1 md:py-1.5 rounded font-bold min-w-[2rem] md:min-w-[2.5rem] text-center text-xs md:text-sm">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <span className="text-secondary/70 font-medium text-xs md:text-sm">s</span>
      </div>
    </div>
  );
}

