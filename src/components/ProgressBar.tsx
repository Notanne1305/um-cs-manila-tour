import { useState, useEffect } from "react";
import { getTotalDonations, getRankedDonors } from "@/lib/donations";
import { Target, Rocket } from "lucide-react";

const GOAL_AMOUNT = 24800;

type ProgressBarProps = {
  useRankedTotals?: boolean;
};

const ProgressBar = ({ useRankedTotals = false }: ProgressBarProps) => {
  const computeTotal = (useRanked: boolean) =>
    useRanked ? getRankedDonors().reduce((t, d) => t + d.amount, 0) : getTotalDonations();

  const [totalDonations, setTotalDonations] = useState(() => computeTotal(useRankedTotals));

  useEffect(() => {
    const handleStorageChange = () => {
      setTotalDonations(computeTotal(useRankedTotals));
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("donationsUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("donationsUpdated", handleStorageChange);
    };
  }, [useRankedTotals]);

  const percentage = Math.min(100, (totalDonations / GOAL_AMOUNT) * 100);
  const remaining = Math.max(0, GOAL_AMOUNT - totalDonations);

  return (
    <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border/50">
      <style jsx>{`
        @keyframes rocket-pulse {
          0%, 100% {
            transform: translateY(-50%) scale(1);
            filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.6));
          }
          50% {
            transform: translateY(-50%) scale(1.1);
            filter: drop-shadow(0 0 16px rgba(59, 130, 246, 0.9));
          }
        }
        
        @keyframes rocket-trail {
          0% {
            opacity: 0.8;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-20px) scale(0.5);
          }
        }
        
        .rocket-animated {
          animation: rocket-pulse 1.5s ease-in-out infinite;
        }
        
        .rocket-trail {
          animation: rocket-trail 0.6s ease-out infinite;
        }
      `}</style>

      {/* Top Section: Total Raised and % */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4 flex-wrap">
        <div className="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
            <Target className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-wide text-muted-foreground font-semibold truncate">
              Total Raised
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground truncate">
              ₱{totalDonations.toLocaleString()}
            </p>
          </div>
        </div>

        <div className="mt-2 sm:mt-0 text-left sm:text-right flex-shrink-0">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">
            {percentage.toFixed(1)}%
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            of ₱{GOAL_AMOUNT.toLocaleString()} goal
          </p>
        </div>
      </div>

      {/* Progress Bar with Animated Rocket */}
      <div className="relative w-full bg-muted rounded-full h-5 sm:h-6 overflow-visible mb-2">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect on the bar */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
        
        {/* Rocket with trail effects */}
        <div
          className="absolute top-1/2 transition-all duration-1000 ease-out z-10"
          style={{ left: `${Math.max(2, Math.min(98, percentage))}%` }}
        >
          {/* Trail particles */}
          <div className="absolute top-1/2 -translate-y-1/2 right-2">
            <div className="rocket-trail absolute w-2 h-2 bg-orange-400 rounded-full blur-sm"></div>
            <div className="rocket-trail absolute w-1.5 h-1.5 bg-yellow-400 rounded-full blur-sm" style={{ animationDelay: '0.2s' }}></div>
            <div className="rocket-trail absolute w-1 h-1 bg-red-400 rounded-full blur-sm" style={{ animationDelay: '0.4s' }}></div>
          </div>
          
          {/* Main Rocket */}
          <div className="rocket-animated relative">
            <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-primary rotate-45" />
            {/* Glow background */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-md -z-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Labels: 0, remaining, goal */}
      <div className="flex justify-between mt-2 sm:mt-3 text-xs sm:text-sm">
        <span className="text-muted-foreground">₱0</span>
        {totalDonations < GOAL_AMOUNT ? (
          <span className="font-semibold">₱{remaining.toLocaleString()} to go!</span>
        ) : (
          <span className="font-semibold text-primary">🎉 Goal reached!</span>
        )}
        <span className="text-muted-foreground">₱{GOAL_AMOUNT.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default ProgressBar;