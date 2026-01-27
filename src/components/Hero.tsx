import { MapPin, Calendar, GraduationCap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container relative z-10 text-center px-4">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full text-primary-foreground/90 text-sm mb-6">
          <GraduationCap className="w-4 h-4" />
          <span>BS Computer Science - University of Mindanao</span>
        </div>
        
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground max-w-4xl mx-auto leading-tight mb-6">
          Help Me Pursue My
          <span className="block mt-2 text-accent">Educational Dream</span>
        </h1>
        
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-8 leading-relaxed">
          I'm seeking financial support for an educational tour to Manila's top tech companies—an opportunity to learn from industry professionals and prepare for my future career in IT.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-primary-foreground/90">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-accent" />
            <span>March 4-7, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span>Manila, Philippines</span>
          </div>
        </div>
        
        <div className="mt-12">
          <a 
            href="#donate" 
            className="inline-flex items-center gap-2 gradient-warm text-accent-foreground font-semibold px-8 py-4 rounded-full shadow-medium hover:scale-105 transition-transform duration-300"
          >
            Support My Journey
          </a>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(45 20% 97%)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
