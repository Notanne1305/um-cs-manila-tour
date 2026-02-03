import { User, School, MapPin } from "lucide-react";

const StudentProfile = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl shadow-medium overflow-hidden">
            <div className="gradient-hero p-8 md:p-12 text-center">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto flex items-center justify-center mb-6 border-4 border-primary-foreground/30 overflow-hidden">
                <img 
                  src="/profile_najud.jpg"
                  alt="Jonathan Gonzales Sindo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
                Jonathan Gonzales Sindo
              </h2>
              <p className="text-primary-foreground/80">
                3rd Year BS Computer Science Student
              </p>
            </div>
            
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <School className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">University</h4>
                    <p className="text-muted-foreground text-sm">
                      University of Mindanao<br />
                      College of Computing Education
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">
                      Davao City, Philippines
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl text-foreground mb-4">
                  My Story
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a 3rd-year BS Computer Science student at the University of Mindanao, I am passionate 
                  about technology and eager to learn from industry professionals. This educational tour 
                  represents a once-in-a-lifetime opportunity to bridge the gap between academic learning 
                  and real-world application.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am humbly seeking financial assistance to help cover transportation, accommodation, 
                  meals, and other expenses for this tour. Any contribution, no matter how small, would 
                  bring me one step closer to this dream. Your support means the world to me and will 
                  help shape my future in the IT industry.
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
