import { Globe, Activity, Shield, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Deployment",
    description: "Deploy fast, scalable websites on AWS using S3, CloudFront, and CI/CD pipelines for seamless delivery.",
  },
  {
    icon: Activity,
    title: "Monitoring & Alerting",
    description: "Set up comprehensive monitoring with Prometheus, Grafana, and CloudWatch to keep your systems healthy.",
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Implement security best practices including IAM policies, VPC design, encryption, and compliance audits.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Migrate your on-premise infrastructure to AWS with minimal downtime using proven migration strategies.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        My <span className="text-primary">Services</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        Specialized cloud and DevOps services to help your business scale with confidence.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-primary" size={26} />
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
