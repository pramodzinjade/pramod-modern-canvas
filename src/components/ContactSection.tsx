import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-24 bg-card/50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Have a project in mind? Let's talk and make it happen.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Info cards */}
        <div className="space-y-6">
          {[
            { icon: Mail, label: "Email", value: "pramodzinjade71@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 93701 12058" },
            { icon: MapPin, label: "Location", value: "India" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="text-foreground font-medium text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="md:col-span-2">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:brightness-110 hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
