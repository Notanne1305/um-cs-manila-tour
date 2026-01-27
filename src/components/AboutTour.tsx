import { Building2, Users, Lightbulb, BookOpen } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Tech Company Visits",
    description: "Tour leading technology companies in Manila and learn about real-world IT operations and innovations."
  },
  {
    icon: Users,
    title: "Professional Networking",
    description: "Connect with industry professionals and gain insights into career opportunities in the tech field."
  },
  {
    icon: Lightbulb,
    title: "Hands-on Learning",
    description: "Experience practical applications of classroom knowledge through workshops and demonstrations."
  },
  {
    icon: BookOpen,
    title: "Career Preparation",
    description: "Prepare for future employment by understanding industry standards and professional practices."
  }
];

const AboutTour = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            About This Opportunity
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Educational Tour to Manila
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
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 gradient-hero rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTour;
