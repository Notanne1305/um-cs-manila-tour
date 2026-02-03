import { MapPin, Calendar, Heart, Sparkles, GraduationCap } from "lucide-react";
import ParticleField from "./ParticleField";
import ScrollIndicator from "./ScrollIndicator";

const Hero = () => {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center overflow-x-hidden md:overflow-visible bg-gradient-to-b from-[#0f1729] via-[#1a1f35] to-[#0f1729]"
      style={{ touchAction: 'pan-y' }}
    >
      {/* Particle Animation */}
      <ParticleField />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/15 rounded-full blur-[140px] animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-32 right-[15%] w-96 h-96 bg-accent/12 rounded-full blur-[160px] animate-pulse-soft pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/8 rounded-full blur-[220px] pointer-events-none" />
      
      {/* Decorative Stars */}
      <Sparkles className="absolute top-24 left-1/2 -translate-x-1/2 w-8 h-8 text-accent animate-float pointer-events-none" />
      <Sparkles className="absolute top-40 left-[20%] w-4 h-4 text-accent/60 animate-float pointer-events-none" style={{ animationDelay: '1s' }} />
      <Sparkles className="absolute top-60 right-[25%] w-5 h-5 text-accent/40 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
      <Sparkles className="absolute bottom-40 left-[30%] w-4 h-4 text-accent/50 animate-float pointer-events-none" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute bottom-52 right-[20%] w-6 h-6 text-accent/70 animate-float pointer-events-none" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 text-center px-4 py-20">

        <div className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-300 rounded-full animate-pulse-soft" />
              <div className="absolute inset-1 rounded-full overflow-hidden">
                        <img 
                          src="/profile_najud.jpg"
                          alt="Jonathan Gonzales Sindo" 
                          className="w-full h-full object-cover"
                        />
             </div>
          </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-3 bg-primary/80 backdrop-blur-md px-5 py-2.5 rounded-full text-primary-foreground text-sm font-medium mb-10 border border-primary-foreground/10 shadow-lg shadow-primary/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <GraduationCap className="w-5 h-5 text-accent" />
        <span className="tracking-wide">BS COMPUTER SCIENCE - UNIVERSITY OF MINDANAO</span>
        </div>
        
        {/* Main Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground max-w-5xl mx-auto leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <span className="font-black">Help Me Pursue My</span>
          <br />
          <span className="italic font-bold bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent">
            Educational Tour
          </span>
        </h1>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          I'm seeking financial support for an educational tour to Manila's top tech 
          companies—an opportunity to learn from industry professionals and 
          prepare for my future career in Computer Science.
        </p>
        
        {/* Info Cards */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-14 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Tour Date</p>
                <p className="font-semibold text-primary-foreground">March 3-6, 2026</p>
              </div>
            </div>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50 mb-1">Destination</p>
                <p className="font-semibold text-primary-foreground">Manila, Philippines</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <a
          href="#donate"
          className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-4 rounded-full shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-300 relative z-50 pointer-events-auto animate-fade-in-up"
          style={{ animationDelay: '1.2s' }}
        >
          <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="text-lg">Support My Journey</span>
        </a>
      </div>
      
      
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
