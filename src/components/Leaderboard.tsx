import { Trophy, Medal, Award } from "lucide-react";

interface Donor {
  rank: number;
  name: string;
  amount: number;
  icon: React.ReactNode;
}

const donors: Donor[] = [
  { rank: 1, name: "A**Y GA**E A.", amount: 2000.00, icon: <Trophy className="w-6 h-6" /> },
  { rank: 2, name: "R** AL*****E J.", amount: 9.00, icon: <Medal className="w-6 h-6" /> },
  { rank: 3, name: "KE**N JO*N A.", amount: 6.00, icon: <Award className="w-6 h-6" /> },
  { rank: 4, name: "A**E G.", amount: 5.00, icon: null },
  { rank: 5, name: "L**S M.", amount: 5.00, icon: null },
  { rank: 6, name: "C*****A L.", amount: 5.00, icon: null },
  { rank: 7, name: "R*****O F.", amount: 5.00, icon: null },
];

const Leaderboard = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
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

        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
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
                  {donors.map((donor, index) => (
                    <tr
                      key={donor.rank}
                      className={`border-b border-border transition-colors hover:bg-muted/50 ${
                        index % 2 === 0 ? "bg-transparent" : "bg-muted/30"
                      }`}
                    >
                      <td className="py-4 px-4 md:px-6">
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
                      <td className="py-4 px-4 md:px-6 text-foreground font-medium">
                        {donor.name}
                      </td>
                      <td className="py-4 px-4 md:px-6 text-right">
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
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
