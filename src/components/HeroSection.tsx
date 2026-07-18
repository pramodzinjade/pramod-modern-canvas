import { useState, useEffect } from "react";
import profileImg from "@/assets/profile.jpg.asset.json";
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
          <img
            src={profileImg.url}
            alt="Pramod Zinjade"
            className="w-64 h-auto sm:w-72 lg:w-80 rounded-2xl object-cover object-center shadow-[var(--shadow-glow)] transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
