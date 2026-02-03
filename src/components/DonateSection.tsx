import { Heart, Smartphone, Shield, Sparkles, Copy, Check, Banknote } from "lucide-react";
import { useState } from "react";

const DonateSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyNumber = (num: string, key: string) => {
    navigator.clipboard.writeText(num);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  const methods = [
    {
      key: 'gcash',
      title: 'GCash Donation',
      icon: Smartphone,
      image: '/qr-code.jpg',
      number: '09380369397',
      accountName: 'Jonathan Sindo',
    },
    {
      key: 'maribank',
      title: 'Maribank',
      icon: Banknote,
      image: '/maribank.jpg',
      number: '1886 8694 270', // <-- replace with actual Maribank account number
      accountName: 'JONATHAN SINDO',
    },
  ];

  return (
    <section id="donate" className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="container relative">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Support My Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Your <span className="text-primary">Generosity</span> Truly Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution, no matter the size, brings me closer to this life-changing opportunity. 
            Thank you for believing in my dreams.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {methods.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.key} className="bg-card rounded-3xl shadow-medium overflow-hidden border border-border/50 relative">
                {/* Header */}
                <div className="bg-gradient-to-br from-primary via-primary to-primary/80 p-6 text-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 w-16 h-16 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-2 right-2 w-20 h-20 bg-accent/20 rounded-full blur-xl" />
                  
                  <div className="relative inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                    <span className="text-primary-foreground font-semibold">{m.title}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  {/* QR Code */}
                  <div className="max-w-[240px] mx-auto mb-8">
                    <div className="aspect-square bg-white rounded-2xl p-4 shadow-soft">
                      <img 
                        src={m.image} 
                        alt={`${m.title} QR code`} 
                        className="w-full h-full rounded-lg object-contain"
                        onError={(e) => {
                          e.currentTarget.parentElement!.innerHTML = `
                            <div class="w-full h-full flex flex-col items-center justify-center text-center">
                              <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
                                </svg>
                              </div>
                              <p class="text-muted-foreground text-sm">Scan QR Code</p>
                            </div>
                          `;
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Number */}
                  <div className="text-center mb-8">
                    <p className="text-sm text-muted-foreground mb-2">{m.title} Number</p>
                    <div className="flex items-center justify-center gap-3">
                      <p className="font-display text-2xl md:text-3xl text-foreground tracking-wider">
                        {m.number.replace(/(\d{4})(?=\d)/g, '$1 ')}
                      </p>
                      <button
                        onClick={() => copyNumber(m.number, m.key)}
                        className="p-2 hover:bg-secondary rounded-lg transition-colors group"
                        title="Copy number"
                      >
                        {copied === m.key ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                      </button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      Account Name: <span className="font-semibold text-foreground">{m.accountName}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Single donation note below all cards */}
        <div className="max-w-3xl mx-auto text-center mt-6 flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Your donation goes directly to supporting my educational tour expenses. 
            Thank you for your trust and generosity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DonateSection;
