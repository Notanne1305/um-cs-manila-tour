import { Trophy, Medal, Award, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import { getRankedDonors, addDonation } from "@/lib/donations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Leaderboard = () => {
  const [donors, setDonors] = useState(getRankedDonors());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donorAmount, setDonorAmount] = useState("");
  const { toast } = useToast();

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

  const handleAddDonation = () => {
    if (!donorName.trim() || !donorAmount.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both name and amount",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(donorAmount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Error",
        description: "Please enter a valid amount",
        variant: "destructive",
      });
      return;
    }

    addDonation(donorName, amount);
    
    // Update local state (the event is already dispatched by addDonation)
    setDonors(getRankedDonors());
    
    // Reset form
    setDonorName("");
    setDonorAmount("");
    setIsDialogOpen(false);
    
    toast({
      title: "Success!",
      description: `Added ₱${amount.toLocaleString()} donation from ${donorName}`,
    });
  };
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
                    {donors.map((donor, index) => {
                      const icon = getIcon(donor.iconType);
                      return (
                        <tr
                          key={donor.id}
                          className={`border-b border-border transition-colors hover:bg-muted/50 ${
                            index % 2 === 0 ? "bg-transparent" : "bg-muted/30"
                          }`}
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              {icon ? (
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-primary ${
                                  donor.rank === 1 ? "bg-yellow-100 dark:bg-yellow-900" :
                                  donor.rank === 2 ? "bg-gray-100 dark:bg-gray-700" :
                                  "bg-orange-100 dark:bg-orange-900"
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
                          <td className="py-4 px-4 text-foreground font-medium">
                            {donor.name}
                          </td>
                          <td className="py-4 px-4 text-right">
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

            <div className="mt-8 text-center space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Want to join our top givers?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="/#donate"
                  className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  Make a Donation
                </a>
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <Plus className="w-4 h-4" />
                      Add GCash Donation
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add GCash Donation</DialogTitle>
                      <DialogDescription>
                        Enter the donor's name and amount received via GCash. If the donor already exists, the amount will be added to their total.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Donor Name</Label>
                        <Input
                          id="name"
                          placeholder="e.g., Juan Dela Cruz"
                          value={donorName}
                          onChange={(e) => setDonorName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleAddDonation();
                            }
                          }}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="amount">Amount (₱)</Label>
                        <Input
                          id="amount"
                          type="number"
                          step="0.01"
                          min="0"
                          placeholder="e.g., 1000.00"
                          value={donorAmount}
                          onChange={(e) => setDonorAmount(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              handleAddDonation();
                            }
                          }}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleAddDonation}>
                        Add Donation
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Leaderboard;
