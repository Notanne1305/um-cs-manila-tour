import { Heart, GraduationCap, Sparkles, Github, Facebook, Instagram, Linkedin } from "lucide-react";

// TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Notanne1305", // Update with actual GitHub URL
    color: "hover:text-gray-400"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jonathan-sindo-4a8805298/", // Update with actual LinkedIn URL
    color: "hover:text-blue-500"
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/JonathanGonzalesSindo/",
    color: "hover:text-blue-400"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/nahtzzz/", // Update with actual Instagram URL
    color: "hover:text-pink-400"
  },
  {
    name: "TikTok",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@tan_dear", // Update with actual TikTok URL
    color: "hover:text-black dark:hover:text-white"
  }
  
];  

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f1729] to-[#0a0f1a] py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
      
      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display text-2xl text-white">
              Manila EdTour <span className="text-accent">2026</span>
            </span>
          </div>
          
          <p className="text-white/60 text-sm max-w-md mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            BS Computer Science - University of Mindanao
            <br />
            Educational Tour • March 3-6, 2026
          </p>
          
          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
          
          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }} />
          
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
            <span>and hope</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          
          <p className="text-white/40 text-xs animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            © 2025 All rights reserved. Thank you for your support.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
