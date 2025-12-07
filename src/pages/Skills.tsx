import { 
  Award, 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Monitor, 
  Server, 
  ExternalLink,
  CheckCircle2,
  CreditCard,
  Zap,
  Brain
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories, certifications } from "@/data/portfolio";
import SkillIcon from "@/components/SkillIcon";

const categoryIcons: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5" />,
  Monitor: <Monitor className="h-5 w-5" />,
  Server: <Server className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Cloud: <Cloud className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />,
};

const issuerLogos: Record<string, { icon: React.ReactNode; color: string }> = {
  aws: { 
    icon: <Cloud className="h-8 w-8" />, 
    color: "text-portfolio-accent" 
  },
  stripe: { 
    icon: <CreditCard className="h-8 w-8" />, 
    color: "text-portfolio-accent" 
  },
  stripe_pro: { 
    icon: <Zap className="h-8 w-8" />, 
    color: "text-portfolio-accent" 
  },
  stripe_billing: { 
    icon: <CheckCircle2 className="h-8 w-8" />, 
    color: "text-portfolio-accent" 
  },
  azure: {
    icon: <Cloud className="h-8 w-8" />,
    color: "text-portfolio-accent"
  },
  iit: {
    icon: <Brain className="h-8 w-8" />,
    color: "text-portfolio-accent"
  },
};

const Skills = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills & Certifications
        </h1>
        <p className="animate-fade-in-delay-1 mt-4 text-muted-foreground">
          Technologies I work with and credentials I've earned.
        </p>

        {/* Skills Grid */}
        <div className="mt-12">
          <h2 className="animate-fade-in-delay-1 text-xl font-semibold text-foreground">
            Technical Skills
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="animate-fade-in-up card-hover"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <span className="text-portfolio-accent">
                      {categoryIcons[category.iconName] || <Code2 className="h-5 w-5" />}
                    </span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill.name} className="skill-badge">
                        <SkillIcon iconName={skill.iconName} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="animate-fade-in flex items-center gap-2 text-xl font-semibold text-foreground">
            <Award className="h-5 w-5 text-portfolio-accent" />
            Certifications
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => {
              const logo = issuerLogos[cert.issuerLogo];
              return (
                <div
                  key={cert.id}
                  className="certification-card animate-fade-in-up group"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  {/* Accent line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-portfolio-accent to-transparent opacity-50" />
                  
                  <div className="flex gap-4">
                    {/* Logo */}
                    <div className={`shrink-0 ${logo?.color || "text-muted-foreground"}`}>
                      {logo?.icon || <Award className="h-8 w-8" />}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="font-medium text-foreground group-hover:text-portfolio-accent transition-colors">
                        {cert.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm">
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        <span className="text-muted-foreground">•</span>
                        <p className="text-xs text-muted-foreground">{cert.date}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                  
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
