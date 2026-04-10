const skills = [
  { name: "Linux", level: 90 },
  { name: "Networking", level: 85 },
  { name: "AWS Services", level: 88 },
  { name: "Docker & Kubernetes", level: 80 },
  { name: "CI/CD Pipelines", level: 82 },
  { name: "Terraform", level: 78 },
  { name: "Ansible", level: 75 },
  { name: "Monitoring (Grafana/Prometheus)", level: 80 },
];

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">
        About <span className="text-primary">Me</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
        I'm a passionate Cloud Engineer with hands-on experience in designing, deploying, and managing
        scalable cloud infrastructure. I love automating workflows and building reliable systems.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-6">My Skills</h3>
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-foreground">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-6">Who I Am</h3>
          <p className="text-muted-foreground leading-relaxed">
            With a strong foundation in Linux systems and networking, I specialize in AWS cloud services,
            containerization with Docker & Kubernetes, and infrastructure as code using Terraform.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I'm driven by the challenge of building robust, secure, and cost-effective cloud solutions.
            My goal is to bridge the gap between development and operations through automation and best practices.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { label: "Experience", value: "Fresher" },
              { label: "Projects", value: "10+" },
              { label: "Certifications", value: "AWS" },
              { label: "Availability", value: "Open" },
            ].map((item) => (
              <div key={item.label} className="bg-card p-4 rounded-lg border border-border">
                <p className="text-primary font-bold text-lg">{item.value}</p>
                <p className="text-muted-foreground text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
