import { Heart, GraduationCap, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1729] to-[#0a0f1a] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl text-white">
              Manila EdTour <span className="text-accent">2026</span>
            </span>
          </div>
          
          <p className="text-white/60 text-sm max-w-md mb-8">
            BS Computer Science - University of Mindanao
            <br />
            Educational Tour • March 3-6, 2026
          </p>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>and hope</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          
          <p className="text-white/40 text-xs">
            © 2025 All rights reserved. Thank you for your support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
