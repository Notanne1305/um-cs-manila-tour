import { Shield, Sparkles, Copy, Check } from "lucide-react";
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
      key: "gcash",
      title: "GCash Donation",
      logo: "/Gcash_Logo.svg", // place in /public
      image: "/qr-code.jpg",
      number: "09380369397",
      accountName: "Jonathan Sindo",
    },
    {
      key: "maribank",
      title: "Maribank",
      logo: "/Maribank_Logo.svg", // place in /public
      image: "/maribank.jpg",
      number: "18868694270",
      accountName: "JONATHAN SINDO",
    },
  ];

  return (
    <section
      id="donate"
      className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />

      <div className="container relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            Support My Journey
          </span>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Your <span className="text-primary">Generosity</span> Truly Matters
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution, no matter the size, brings me closer to this
            life-changing opportunity. Thank you for believing in my dreams.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {methods.map((m) => (
            <div
              key={m.key}
              className="bg-card rounded-3xl shadow-medium overflow-hidden border border-border/50 relative"
            >
              {/* Card Header */}
              <div
                className={`
                  p-6 text-center relative overflow-hidden
                  ${
                    m.key === "gcash"
                      ? "bg-gradient-to-br from-blue-500 to-blue-600"
                      : "bg-gradient-to-br from-orange-500 to-orange-600"
                  }
                `}
              >
                <div className="absolute top-2 left-2 w-16 h-16 bg-white/20 rounded-full blur-xl" />
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-white/10 rounded-full blur-xl" />

                <div className="relative inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full">
                  <img
                    src={m.logo}
                    alt={`${m.title} logo`}
                    className="w-10 h-10 object-contain"
                  />
                  <span className="text-white font-semibold">
                    {m.title}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* QR Code */}
                <div className="max-w-[240px] mx-auto mb-8">
                  <div className="aspect-square bg-white rounded-2xl p-4 shadow-soft">
                    <img
                      src={m.image}
                      alt={`${m.title} QR code`}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Number */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    {m.title} Number
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <p className="font-display text-2xl md:text-3xl tracking-wider">
                      {m.number.replace(/(\d{4})(?=\d)/g, "$1 ")}
                    </p>

                    <button
                      onClick={() => copyNumber(m.number, m.key)}
                      className="p-2 hover:bg-secondary rounded-lg transition-colors"
                    >
                      {copied === m.key ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-muted-foreground hover:text-primary" />
                      )}
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground mt-3">
                    Account Name:{" "}
                    <span className="font-semibold text-foreground">
                      {m.accountName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="max-w-3xl mx-auto text-center mt-6 flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            Your donation goes directly to supporting my educational tour
            expenses. Thank you for your trust and generosity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
