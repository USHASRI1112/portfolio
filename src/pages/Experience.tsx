import { Briefcase, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";

const Experience = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experience
        </h1>
        <p className="animate-fade-in-delay-1 mt-4 text-muted-foreground">
          My professional journey in software development.
        </p>

        <div className="mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="animate-fade-in-up group relative border-l-2 border-border pl-8 hover:border-portfolio-accent/50 transition-colors"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-border bg-background transition-colors group-hover:border-portfolio-accent group-hover:bg-portfolio-accent-light" />
              
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-xl font-semibold text-foreground">{exp.title}</h2>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  {exp.type}
                </span>
              </div>
              
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </span>
              </div>
              
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
