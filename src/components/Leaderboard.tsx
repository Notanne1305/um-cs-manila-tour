"use client";

import { Trophy, Award, Medal } from "lucide-react";
import { useEffect, useState } from "react";
import { getRankedDonors } from "@/lib/donations";
import ProgressBar from "./ProgressBar";

const Leaderboard = () => {
  const [donors, setDonors] = useState(() => getRankedDonors());

  // Refresh donors when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setDonors(getRankedDonors());
    };

    // Listen for storage events (from other tabs/windows)
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (from same tab)
    window.addEventListener('donationsUpdated', handleStorageChange);

    // Initial load
    handleStorageChange();

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('donationsUpdated', handleStorageChange);
    };
  }, []);

  const getIcon = (iconType: 'trophy' | 'medal' | 'award' | null) => {
    if (iconType === 'trophy') return <Trophy className="w-6 h-6" />;
    if (iconType === 'medal') return <Medal className="w-6 h-6" />;
    if (iconType === 'award') return <Award className="w-6 h-6" />;
    return null;
  };
  return (
    <section id="leaderboard" className="space-y-6">
      {/* Progress bar on top of leaderboard */}
      <div>
        {/* Use leaderboard totals so progress matches the leaderboard amounts */}
        <ProgressBar useRankedTotals />
      </div>

      {/* Leaderboard list */}
      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-border/50">
        <div className="text-center mb-6">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Recognition
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Top Givers
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honoring our most generous supporters who made this tour possible.
          </p>
        </div>

        <div className="overflow-y-auto max-h-[500px]">
          <table className="w-full">
            <thead className="sticky top-0 bg-card border-b border-border">
              <tr>
                <th className="text-left py-4 px-4 md:px-6 font-semibold text-foreground">Rank</th>
                <th className="text-left py-4 px-4 md:px-6 font-semibold text-foreground">Name</th>
                <th className="text-right py-4 px-4 md:px-6 font-semibold text-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {donors.map((donor, index) => {
                const icon = getIcon(donor.iconType);
                return (
                  <tr
                    key={donor.id}
                    className={`border-b border-border transition-colors hover:bg-muted/50 ${
                      index % 2 === 0 ? "bg-transparent" : "bg-muted/30"
                    }`}
                  >
                    <td className="py-4 px-4 md:px-6">
                      <div className="flex items-center gap-3">
                        {icon ? (
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            donor.rank === 1 
                            ? "text-yellow-600 bg-yellow-100 dark:bg-yellow-900" :
                            donor.rank === 2 
                           ? "text-gray-500 bg-gray-100 dark:bg-gray-700":
                             donor.rank === 3
                           ? "text-orange-600 bg-orange-100 dark:bg-orange-900"
                           : "text-primary bg-muted"
                          }`}>
                            {icon}
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                            {donor.rank}
                          </div>
                        )}
                        <span className="font-semibold text-foreground">{donor.rank}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 md:px-6 text-foreground font-medium">
                      {donor.name}
                    </td>
                    <td className="py-4 px-4 md:px-6 text-right">
                      <span className="font-semibold text-primary">
                        ₱{donor.amount.toLocaleString()}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
