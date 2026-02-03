import { useState, useEffect } from "react";
import { Menu, X, GraduationCap, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", hash: "" },
    { name: "About", href: "/", hash: "#about" },
    { name: "Itinerary", href: "/", hash: "#itinerary" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Donate", href: "/", hash: "#donate" },
    { name: "Contact", href: "/", hash: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash && location.pathname === "/") {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group animate-fade-in"
            style={{ animationDelay: '0.1s' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground hidden sm:block">
              Manila EdTour
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href + link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 animate-fade-in",
                  "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
                style={{ animationDelay: `${0.2 + index * 0.05}s` }}
              >
                {link.name}
              </a>
            ))}
            <Link to="/#donate">
              <Button
                size="sm"
                className="ml-2 gradient-hero text-primary-foreground hover:opacity-90"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href + link.hash}
                onClick={(e) => handleNavClick(e, link.hash)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Link to="/#donate" onClick={() => setIsMobileMenuOpen(false)}>
              <Button
                className="w-full mt-2 gradient-hero text-primary-foreground"
                size="sm"
              >
                <Heart className="w-4 h-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

