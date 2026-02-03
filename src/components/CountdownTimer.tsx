import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

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
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-border/50">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
          <Calendar className="w-5 h-5 text-white" />
        </div>
        <div className="text-center">
          <h3 className="font-display text-lg font-semibold text-foreground">Tour Countdown</h3>
          <p className="text-sm text-muted-foreground">March 3, 2026</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 md:gap-4">
        {timeUnits.map((unit) => (
          <div
            key={unit.label}
            className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-3 md:p-4 text-center border border-primary/20"
          >
            <div className="text-2xl md:text-4xl font-bold text-primary tabular-nums">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider mt-1">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
