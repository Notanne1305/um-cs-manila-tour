"use client";

import { Trophy, Award, Medal, Sparkles } from "lucide-react";
import { useEffect, useState, cloneElement } from "react";
import { getRankedDonors } from "@/lib/donations";
import ProgressBar from "./ProgressBar";
import CountdownTimer from "./CountdownTimer";

const Leaderboard = () => {
  const [donors, setDonors] = useState(() => getRankedDonors());

  // Refresh donors when localStorage changes
  useEffect(() => {
    const handleStorageChange = () => {
      setDonors(getRankedDonors());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("donationsUpdated", handleStorageChange);

    handleStorageChange();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("donationsUpdated", handleStorageChange);
    };
  }, []);

  const getIcon = (iconType: "trophy" | "medal" | "award" | null) => {
    if (iconType === "trophy") return <Trophy />;
    if (iconType === "medal") return <Medal />;
    if (iconType === "award") return <Award />;
    return null;
  };

  return (
    <section id="leaderboard" className="space-y-8 py-8">
      {/* Countdown Timer */}
      <CountdownTimer />

      {/* Progress Bar */}
      <ProgressBar useRankedTotals />

      <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-medium border border-border/50 animate-fade-in-up">
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            Recognition
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
            Top <span className="text-primary">Givers</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Honoring our most generous supporters who made this tour possible.
          </p>
        </div>

        <div className="overflow-y-auto max-h-[500px]">
          <table className="w-full">
            <thead className="sticky top-0 bg-card border-b border-border">
              <tr>
                <th className="text-left py-4 px-4 md:px-6 font-semibold">Rank</th>
                <th className="text-left py-4 px-4 md:px-6 font-semibold">Name</th>
                <th className="text-right py-4 px-4 md:px-6 font-semibold">
                  Amount
                </th>
              </tr>
            </thead>

            <tbody>
              {donors.map((donor, index) => {
                const icon = getIcon(donor.iconType);
                const isTopThree = donor.rank <= 3;

                const getRankStyles = () => {
                  if (donor.rank === 1) {
                    return {
                      container:
                        "w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 shadow-lg shadow-yellow-500/30",
                      icon: "w-7 h-7 text-white drop-shadow-md",
                      row: "bg-gradient-to-r from-yellow-500/10 to-transparent",
                    };
                  }
                  if (donor.rank === 2) {
                    return {
                      container:
                        "w-12 h-12 rounded-xl bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 shadow-lg shadow-slate-400/30",
                      icon: "w-6 h-6 text-white drop-shadow-md",
                      row: "bg-gradient-to-r from-slate-400/10 to-transparent",
                    };
                  }
                  if (donor.rank === 3) {
                    return {
                      container:
                        "w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 via-orange-600 to-orange-700 shadow-lg shadow-orange-500/30",
                      icon: "w-5 h-5 text-white drop-shadow-md",
                      row: "bg-gradient-to-r from-orange-500/10 to-transparent",
                    };
                  }
                  return {
                    container: "w-8 h-8 rounded-full bg-muted",
                    icon: "",
                    row: index % 2 === 0 ? "bg-transparent" : "bg-muted/30",
                  };
                };

                const styles = getRankStyles();

                return (
                  <tr
                    key={donor.id}
                    className={`border-b border-border transition-colors hover:bg-muted/50 ${styles.row}`}
                  >
                    <td className={`py-4 px-4 md:px-6 ${isTopThree ? "py-5" : ""}`}>
                      <div className="flex items-center justify-center">
                        {icon ? (
                          <div
                            className={`flex items-center justify-center ${styles.container}`}
                          >
                            {cloneElement(icon, {
                              className: styles.icon,
                            })}
                          </div>
                        ) : (
                          <div
                            className={`flex items-center justify-center text-sm font-semibold text-muted-foreground ${styles.container}`}
                          >
                            {donor.rank}
                          </div>
                        )}
                      </div>
                    </td>

                    <td
                      className={`py-4 px-4 md:px-6 font-medium ${
                        isTopThree
                          ? "text-lg font-semibold"
                          : "text-foreground"
                      }`}
                    >
                      {donor.name}
                    </td>

                    <td className="py-4 px-4 md:px-6 text-right">
                      <span
                        className={`font-semibold ${
                          isTopThree ? "text-lg text-primary" : "text-primary"
                        }`}
                      >
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
