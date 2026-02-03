import { Plane, Building, PartyPopper, Home } from "lucide-react";

const schedule = [
  {
    day: "Day 1",
    date: "March 3, 2026",
    title: "Arrival and Company Visits",
    icon: Plane,
    activities: [
      "Travel from Davao to Manila",
      "Company Visit 1",
      "Lunch",
      "Company Visit 2",
      "Dinner",
      "Hotel Check-in"
    ]
  },
  {
    day: "Day 2",
    date: "March 4, 2026",
    title: "Tech Exploration & Cultural Immersion",
    icon: Building,
    activities: [
      "Breakfast",
      "Heritage/ Cultural Tour",
      "Lunch",
      "Company Visit 3",
      "Dinner",
      "Overnight"
    ]
  },
  {
    day: "Day 3",
    date: "March 5, 2026",
    title: "Fun and Learning Day",
    icon: PartyPopper,
    activities: [
      "Breakfast",
      "Company Visit 4",
      "Lunch",
      "Enchanted Kingdom Visit",
      "Dinner",
      "Overnight"
    ]
  },
  {
    day: "Day 4",
    date: "March 6, 2026",
    title: "Departure and Farewell",
    icon: Home,
    activities: [
      "Breakfast",
      "Hotel Check-out",
      "Company Visit 5",
      "Lunch",
      "Free & Easy/ Shopping Time",
      "Dinner",
      "Travel back to Davao"
    ]
  }
];

const Itinerary = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Tour Schedule
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            4-Day Itinerary
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A carefully planned schedule packed with learning opportunities and professional experiences.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5 hidden md:block" />
            
            {schedule.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 mb-12 last:mb-0 animate-fade-in-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.4 + index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full gradient-warm border-4 border-background shadow-soft z-10" />
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? '' : ''}`}>
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={index % 2 === 0 ? '' : ''}>
                        <span className="block font-display text-lg text-foreground">{item.day}</span>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-display text-xl text-foreground mb-3">
                      {item.title}
                    </h3>
                    
                    <ul className="space-y-2">
                      {item.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-muted-foreground text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
