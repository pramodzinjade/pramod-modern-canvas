import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AWS 3-Tier Architecture",
    description: "Deployed a highly available web application using EC2, ALB, RDS, and Auto Scaling on AWS.",
    tags: ["AWS", "EC2", "RDS", "ALB"],
  },
  {
    title: "CI/CD Pipeline with Jenkins",
    description: "Built an automated CI/CD pipeline with Jenkins, Docker, and GitHub webhooks for seamless deployments.",
    tags: ["Jenkins", "Docker", "GitHub"],
  },
  {
    title: "Kubernetes Cluster Setup",
    description: "Provisioned and managed a production-ready Kubernetes cluster using EKS with Helm charts.",
    tags: ["Kubernetes", "EKS", "Helm"],
  },
  {
    title: "Infrastructure as Code",
    description: "Automated cloud infrastructure provisioning using Terraform modules for multi-environment setups.",
    tags: ["Terraform", "IaC", "AWS"],
  },
  {
    title: "Monitoring Dashboard",
    description: "Set up Prometheus and Grafana monitoring stack with custom alerts for application health.",
    tags: ["Prometheus", "Grafana", "Alerts"],
  },
  {
    title: "S3 Static Website Hosting",
    description: "Deployed a static website on S3 with CloudFront CDN, Route 53, and SSL certificate.",
    tags: ["S3", "CloudFront", "Route53"],
  },
];

const WorksSection = () => (
  <section id="works" className="py-24 bg-card/50">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        My <span className="text-primary">Works</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        A selection of projects showcasing my cloud engineering and DevOps expertise.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-background border border-border rounded-xl p-6 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
              <ExternalLink size={18} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0 ml-2" />
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorksSection;
