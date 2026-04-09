import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

const navItems = ["Home", "About", "Works", "Services", "Contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-primary cursor-pointer" onClick={() => scrollTo("Home")}>Thames</span>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => scrollTo(item)} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                {item}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:brightness-110 transition-all">
            <Download size={16} /> Download CV
          </button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border px-6 pb-4">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block w-full text-left py-3 text-muted-foreground hover:text-primary transition-colors">
              {item}
            </button>
          ))}
          <button className="mt-2 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium w-full justify-center">
            <Download size={16} /> Download CV
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
