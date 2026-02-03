import { Plane, Building, Utensils, Ticket, Package } from "lucide-react";

const GOAL_AMOUNT = 24800;

const inclusions = [
  {
    icon: Plane,
    title: "Transportation",
    description: "Round-trip travel and local transfers",
  },
  {
    icon: Building,
    title: "Accommodation",
    description: "3 nights hotel stay",
  },
  {
    icon: Utensils,
    title: "Meals",
    description: "Breakfast, lunch & dinner",
  },
  {
    icon: Ticket,
    title: "Entrance Fees",
    description: "All venue admission costs",
  },
  {
    icon: Package,
    title: "Other Expenses",
    description: "Tour-related necessities",
  },
];

const WhatsIncluded = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-medium border border-border/50">
      <div className="text-center mb-8">
        <span className="inline-block bg-accent/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
          💰 Budget Breakdown
        </span>
        <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-foreground">
          What's Included in{" "}
          <span className="text-primary relative">
            ₱{GOAL_AMOUNT.toLocaleString()}.00
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
          </span>
          ?
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
        {inclusions.map((item, index) => (
          <div
            key={item.title}
            className="group bg-background/50 rounded-xl p-4 md:p-5 text-center hover:bg-background/80 hover:-translate-y-2 transition-all duration-300 border border-border/30 hover:border-primary/30 hover:shadow-lg"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
              <item.icon className="w-7 h-7 text-white" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-tight">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsIncluded;
