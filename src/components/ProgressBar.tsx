import { useState, useEffect } from "react";
import { getTotalDonations, getRankedDonors } from "@/lib/donations";
import { Target } from "lucide-react";

const GOAL_AMOUNT = 24800;

type ProgressBarProps = {
  // when true, compute total using the leaderboard's donor amounts (getRankedDonors)
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

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('donationsUpdated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('donationsUpdated', handleStorageChange);
    };
  }, []);

  const percentage = Math.min(100, (totalDonations / GOAL_AMOUNT) * 100);
  const remaining = Math.max(0, GOAL_AMOUNT - totalDonations);

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">Fundraising Goal</h3>
            <p className="text-sm text-muted-foreground">
              ₱{totalDonations.toLocaleString()} of ₱{GOAL_AMOUNT.toLocaleString()}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-3xl font-bold text-primary">
            {Math.round(percentage)}%
          </p>
          <p className="text-xs text-muted-foreground">Complete</p>
        </div>
      </div>
      
      <div className="w-full bg-muted rounded-full h-5 overflow-hidden mb-3">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-full transition-all duration-700 ease-out flex items-center justify-end pr-2 relative"
          style={{ width: `${percentage}%` }}
        >
          {percentage >= 100 && (
            <span className="text-xs font-semibold text-primary-foreground animate-bounce">🎉</span>
          )}
          {percentage > 10 && percentage < 100 && (
            <span className="text-xs font-semibold text-primary-foreground">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      </div>
      
      {totalDonations < GOAL_AMOUNT ? (
        <p className="text-sm text-muted-foreground text-center">
          <span className="font-semibold text-foreground">₱{remaining.toLocaleString()}</span> remaining to reach our goal
        </p>
      ) : (
        <p className="text-sm text-primary font-semibold text-center">
          🎉 Goal achieved! Thank you for your generosity!
        </p>
      )}
    </div>
  );
};

export default ProgressBar;

