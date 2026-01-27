import { Trophy, Medal, Award } from "lucide-react";
import Footer from "@/components/Footer";

interface Donor {
  rank: number;
  name: string;
  amount: number;
  icon: React.ReactNode;
}

const donors: Donor[] = [
  { rank: 1, name: "Juan Dela Cruz", amount: 50000, icon: <Trophy className="w-6 h-6" /> },
  { rank: 2, name: "Maria Santos", amount: 35000, icon: <Medal className="w-6 h-6" /> },
  { rank: 3, name: "Pedro Reyes", amount: 25000, icon: <Award className="w-6 h-6" /> },
  { rank: 4, name: "Ana Garcia", amount: 20000, icon: null },
  { rank: 5, name: "Luis Mendoza", amount: 18000, icon: null },
  { rank: 6, name: "Carmen Lopez", amount: 15000, icon: null },
  { rank: 7, name: "Ricardo Flores", amount: 12000, icon: null },
  { rank: 8, name: "Sofia Rodriguez", amount: 10000, icon: null },
  { rank: 9, name: "Miguel Torres", amount: 9000, icon: null },
  { rank: 10, name: "Isabella Martinez", amount: 8000, icon: null },
  { rank: 11, name: "Antonio Ramos", amount: 7500, icon: null },
  { rank: 12, name: "Rosa Diaz", amount: 7000, icon: null },
];

const Leaderboard = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              Recognition
            </span>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Top Givers
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Honoring our most generous supporters who made this tour possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
              <div className="overflow-y-auto max-h-[600px] md:max-h-[700px]">
                <table className="w-full">
                  <thead className="sticky top-0 bg-card border-b border-border">
                    <tr>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Rank</th>
                      <th className="text-left py-4 px-4 font-semibold text-foreground">Name</th>
                      <th className="text-right py-4 px-4 font-semibold text-foreground">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {donors.map((donor, index) => (
                      <tr
                        key={donor.rank}
                        className={`border-b border-border transition-colors hover:bg-muted/50 ${
                          index % 2 === 0 ? "bg-transparent" : "bg-muted/30"
                        }`}
                      >
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            {donor.icon ? (
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${
                                donor.rank === 1 ? "bg-yellow-100 dark:bg-yellow-900" :
                                donor.rank === 2 ? "bg-gray-100 dark:bg-gray-700" :
                                "bg-orange-100 dark:bg-orange-900"
                              }`}>
                                {donor.icon}
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-semibold text-muted-foreground">
                                {donor.rank}
                              </div>
                            )}
                            <span className="font-semibold text-foreground">{donor.rank}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-foreground font-medium">
                          {donor.name}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="font-semibold text-primary">
                            ₱{donor.amount.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Want to join our top givers?
              </p>
              <a
                href="/#donate"
                className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Make a Donation
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Leaderboard;
