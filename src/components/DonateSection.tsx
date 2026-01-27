import { Heart, Smartphone, Shield } from "lucide-react";
import { useState, useEffect } from "react";

const DonateSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
    const timer = setTimeout(() => setShowPopup(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="donate" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        {/* Popup */}
        {showPopup && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-medium">
              Hitsuraan ang mag donate 😎
            </div>
          </div>
        )}

        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Support My Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Your Generosity Truly Matters
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every contribution, no matter how big, brings me closer to this life-changing opportunity. 
            Thank you for believing in my dreams.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl shadow-medium overflow-hidden" onMouseEnter={() => setShowPopup(true)}>
            <div className="gradient-hero p-6 text-center">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-2 rounded-full">
                <Smartphone className="w-5 h-5 text-primary-foreground" />
                <span className="text-primary-foreground font-medium">GCash Donation</span>
              </div>
            </div>
            
            <div className="p-8 md:p-10">
              {/* QR Code Placeholder */}
              <div className="aspect-square max-w-xs mx-auto bg-muted rounded-2xl flex items-center justify-center mb-8 border-2 border-dashed border-border">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium mb-2">
                    GCash QR Code
                  </p>
                  <img src="/qr-code.jpg" alt="GCash QR code" className="w-full h-full rounded-lg" onError={(e) => e.currentTarget.style.display = 'none'} />
                </div>
              </div>
              
              <div className="text-center mb-8">
                <p className="text-sm text-muted-foreground mb-2">GCash Number</p>
                <p className="font-display text-2xl text-foreground">
                  0938 036 9397
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Account Name: Jonathan Sindo
                </p>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl">
                <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Your donation is secure and goes directly to supporting my educational tour expenses. 
                  Thank you for your trust and generosity.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-primary">
              <Heart className="w-5 h-5" />
              <span className="font-medium">Thank you for your support!</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
