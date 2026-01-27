import { Heart, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-primary-foreground/80" />
            <span className="font-display text-lg text-primary-foreground/90">
              Manila EdTour 2026
            </span>
          </div>
          
          <p className="text-primary-foreground/60 text-sm max-w-md mb-6">
            BS Computer Science - University of Mindanao
            <br />
            Educational Tour • March 4-7, 2026
          </p>
          
          <div className="flex items-center gap-2 text-primary-foreground/50 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>and hope</span>
          </div>
          
          <p className="text-primary-foreground/40 text-xs mt-6">
            © 2025 All rights reserved. Thank you for your support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
