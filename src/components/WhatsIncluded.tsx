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
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-medium border border-border/50">
      <div className="text-center mb-6">
        <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
          What's Included in{" "}
          <span className="text-primary underline decoration-primary/50 underline-offset-4">
            ₱{GOAL_AMOUNT.toLocaleString()}.00
          </span>
          ?
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {inclusions.map((item) => (
          <div
            key={item.title}
            className="bg-background/50 rounded-xl p-4 text-center hover:bg-background/80 transition-colors border border-border/30"
          >
            <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
              <item.icon className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-foreground text-sm mb-1">
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
