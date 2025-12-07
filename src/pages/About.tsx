import { GraduationCap, Target, Heart } from "lucide-react";
import { personalInfo, education } from "@/data/portfolio";

const About = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          About Me
        </h1>

        <div className="mt-12 space-y-16">
          {/* Objective */}
          <div className="animate-fade-in-delay-1">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-portfolio-accent" />
              <h2 className="text-xl font-semibold text-foreground">Objective</h2>
            </div>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Summary */}
          <div className="animate-fade-in-delay-2">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-portfolio-accent" />
              <h2 className="text-xl font-semibold text-foreground">Who I Am</h2>
            </div>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {personalInfo.about.map((paragraph, i) => (
                <p key={i} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="animate-fade-in-delay-3">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-5 w-5 text-portfolio-accent" />
              <h2 className="text-xl font-semibold text-foreground">Education</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="rounded-xl border border-border bg-card p-5 transition-all hover:border-portfolio-accent/50 hover:shadow-md"
                >
                  <h3 className="font-medium text-foreground">{edu.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.institution}</p>
                  <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    {edu.grade && <span className="font-medium">{edu.grade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
