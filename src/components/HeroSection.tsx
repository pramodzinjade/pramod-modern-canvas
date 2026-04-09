import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg";
import { Cloud, Server, Shield, Database } from "lucide-react";

const words = ["Engineer", "Architect", "DevOps Pro", "Problem Solver"];

const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">Hello I'm</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Pramod<br />
            <span className="text-primary">Zinjade</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A Passionate Cloud{" "}
            <span className="text-primary font-semibold">{text}</span>
            <span className="typing-cursor text-primary">|</span>
          </p>
          <button onClick={scrollToContact} className="mt-4 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:brightness-110 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
            Say Hello
          </button>
        </div>

        {/* Right */}
        <div className="relative flex justify-center animate-fade-in-up delay-200" style={{ animationDelay: "0.3s" }}>
          {/* Decorative icons */}
          <Cloud className="absolute top-4 left-4 text-primary/30" size={28} />
          <Server className="absolute bottom-8 left-8 text-primary/20" size={24} />
          <Shield className="absolute top-12 right-4 text-primary/25" size={22} />
          <Database className="absolute bottom-4 right-12 text-primary/20" size={26} />

          {/* Decorative ring */}
          <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/20 animate-pulse" />

          <img
            src={profileImg}
            alt="Pramod Zinjade"
            className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover profile-ring grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
