import { Facebook, Twitter, Linkedin, Youtube, ArrowUp } from "lucide-react";

const socials = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-xl font-bold text-primary">Thames</span>

        <div className="flex items-center gap-4">
          {socials.map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:brightness-110 transition-all"
        >
          <ArrowUp size={18} />
        </button>
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        © {new Date().getFullYear()} Pramod Zinjade. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
