import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
      <span className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60 font-medium">
        Scroll to Explore
      </span>
      <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-1">
        <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
