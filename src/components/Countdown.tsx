'use client';

import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: string; // YYYY-MM-DD format
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

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

