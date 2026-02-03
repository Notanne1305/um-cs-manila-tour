import { School, MapPin, Quote, Star } from "lucide-react";

const StudentProfile = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 via-secondary/50 to-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="container relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 items-center">
            {/* Profile Card */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card rounded-3xl shadow-medium overflow-hidden border border-border/50">
                <div className="bg-gradient-to-br from-primary via-primary to-primary/80 p-8 text-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-accent/20 rounded-full blur-xl" />
                  
                  <div className="relative w-36 h-36 md:w-44 md:h-44 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-yellow-300 rounded-full animate-pulse-soft" />
                    <div className="absolute inset-1 rounded-full overflow-hidden">
                      <img 
                        src="/profile_najud.jpg"
                        alt="Jonathan Gonzales Sindo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
                    Jonathan Gonzales Sindo
                  </h2>
                  <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 text-accent" />
                    3rd Year BS Computer Science
                  </p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <School className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">University</p>
                      <p className="font-semibold text-foreground text-sm">University of Mindanao</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-2xl">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold text-foreground text-sm">Davao City, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Story Content */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div>
                <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
                  My Story
                </span>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Chasing Dreams Through <span className="text-primary">Education</span>
                </h3>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-10 h-10 text-accent/30" />
                <p className="text-muted-foreground leading-relaxed pl-8 text-lg">
                  As a 3rd-year BS Computer Science student at the University of Mindanao, I am passionate 
                  about technology and eager to learn from industry professionals. This educational tour 
                  represents a once-in-a-lifetime opportunity to bridge the gap between academic learning 
                  and real-world application.
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                I am humbly seeking financial assistance to help cover transportation, accommodation, 
                meals, and other expenses for this tour. Any contribution, no matter how small, would 
                bring me one step closer to this dream.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <p className="text-foreground font-medium italic">
                  Your support means the world to me and will help shape my future in the Computer Science Field. 
                  Thank you for believing in my dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfile;
