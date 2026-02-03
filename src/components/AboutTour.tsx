import { Building2, Users, Lightbulb, BookOpen, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Tech Company Visits",
    description: "Tour leading technology companies in Manila and learn about real-world IT operations and innovations.",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Users,
    title: "Professional Networking",
    description: "Connect with industry professionals and gain insights into career opportunities in the tech field.",
    gradient: "from-accent to-yellow-400"
  },
  {
    icon: Lightbulb,
    title: "Hands-on Learning",
    description: "Experience practical applications of classroom knowledge through workshops and demonstrations.",
    gradient: "from-primary/80 to-accent"
  },
  {
    icon: BookOpen,
    title: "Career Preparation",
    description: "Prepare for future employment by understanding industry standards and professional practices.",
    gradient: "from-accent/80 to-primary"
  }
];

const AboutTour = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            About This Opportunity
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Educational Tour to <span className="text-primary">Manila</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Our department is organizing a transformative educational tour to expose 3rd-year 
            BS Computer Science students to the professional IT industry in the Philippines' capital.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-border/50 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                <item.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
