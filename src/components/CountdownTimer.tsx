import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-03-03T00:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = TARGET_DATE.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  const DigitBox = ({ digit, isSeconds }: { digit: string; isSeconds?: boolean }) => (
    <div className={`relative w-14 h-20 md:w-20 md:h-28 bg-gradient-to-b from-slate-800 to-slate-900 rounded-xl shadow-lg flex items-center justify-center overflow-hidden group ${isSeconds ? 'animate-pulse-digit' : ''}`}>
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent h-1/2" />
      {/* Center line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/30" />
      {/* Digit */}
      <span className={`text-4xl md:text-6xl font-black text-white tabular-nums relative z-10 ${isSeconds ? 'text-primary' : ''}`}>
        {digit}
      </span>
      {/* Bottom reflection */}
      <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );

  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-10 md:mb-14">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full text-primary text-sm font-semibold mb-6 border border-primary/20 animate-pulse-soft">
          <span>⏱️</span>
          <span>Countdown</span>
        </div>
        
        {/* Heading */}
        <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-4">
          Time Until the Educational Tour
        </h2>
        
        {/* Description */}
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          The countdown to an unforgettable experience in Manila. Every moment brings us closer to the adventure.
        </p>
      </div>

      {/* Countdown Grid */}
      <div className="flex justify-center items-center gap-3 md:gap-6 lg:gap-10">
        {timeUnits.map((unit, index) => {
          const digits = String(unit.value).padStart(2, "0").split("");
          const isSeconds = unit.label === "SECONDS";
          
          return (
            <div key={unit.label} className="flex flex-col items-center gap-3">
              <div className="flex gap-1.5 md:gap-2">
                <DigitBox digit={digits[0]} isSeconds={isSeconds} />
                <DigitBox digit={digits[1]} isSeconds={isSeconds} />
              </div>
              <span className="text-xs md:text-sm font-bold text-muted-foreground tracking-widest">
                {unit.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountdownTimer;
