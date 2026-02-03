import { Mail, Phone, MessageCircle, Send } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "jsindo13@gmail.com",
    href: "mailto:jsindo13@gmail.com",
    gradient: "from-primary to-primary/70"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+63 938 036 9397",
    href: "tel:+639380369397",
    gradient: "from-accent to-yellow-400"
  },
  {
    icon: MessageCircle,
    title: "Messenger",
    value: "Jonathan Gonzales Sindo",
    href: "https://www.facebook.com/JonathanGonzalesSindo/",
    gradient: "from-primary/80 to-accent"
  }
];

const Contact = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I would be happy to provide more information about the educational tour 
            or answer any questions you may have.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target={method.title === "Messenger" ? "_blank" : undefined}
                rel={method.title === "Messenger" ? "noopener noreferrer" : undefined}
                className="group bg-card rounded-3xl p-6 shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 border border-border/50 relative overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-14 h-14 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm break-all">
                  {method.value}
                </p>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Reach out</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
