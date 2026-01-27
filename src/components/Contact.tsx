import { Mail, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Have Questions?
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            I would be happy to provide more information about the educational tour 
            or answer any questions you may have.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <a 
              href="mailto:your.email@example.com" 
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <p className="text-muted-foreground text-sm text-wrap">jsindo13@gmail.com</p>
            </a>
            
            <a 
              href="tel:+639380369397" 
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Phone</h3>
              <p className="text-muted-foreground text-sm">+63 938 036 9397</p>
            </a>
            
            <a 
              href="#" 
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Messenger</h3>
              <p className="text-muted-foreground text-sm"></p>
              <a className="text-muted-foreground text-sm" href="https://www.facebook.com/JonathanGonzalesSindo/">Jonathan Gonzales Sindo</a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
