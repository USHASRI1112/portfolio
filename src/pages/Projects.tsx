import { useState } from "react";
import { ExternalLink, Github, Briefcase, GraduationCap, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/portfolio";

const ProjectCard = ({ 
  project, 
  isExpanded,
  onClick,
  index 
}: { 
  project: Project; 
  isExpanded: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <article
      className="animate-fade-in-up group border border-border rounded-2xl overflow-hidden bg-card transition-all duration-300 hover:shadow-lg hover:border-portfolio-accent/50 hover:-translate-y-1"
      style={{ animationDelay: `${(index + 1) * 0.08}s` }}
    >
      <div
        onClick={onClick}
        className="cursor-pointer hover:bg-portfolio-accent/5 transition-all duration-300 p-0 active:scale-98"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClick()}
      >
        {/* Card Header */}
        <div className="flex flex-col gap-3 p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              {project.type === "professional" ? (
                <Briefcase className="h-4 w-4" />
              ) : (
                <GraduationCap className="h-4 w-4" />
              )}
              <span className="text-xs font-medium uppercase tracking-wide">
                {project.type}
              </span>
            </div>
            {project.period && (
              <span className="text-xs text-muted-foreground">{project.period}</span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-portfolio-accent transition-colors">
            {project.title}
          </h3>
          
          <p className={`text-sm text-muted-foreground ${!isExpanded ? "line-clamp-2" : ""}`}>
            {project.shortDescription}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 px-5 pb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground hover:bg-portfolio-accent/20 hover:text-portfolio-accent transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer with expand button */}
        <div className="mt-auto border-t border-border px-5 py-3 group-hover:bg-portfolio-accent/5 transition-colors duration-300">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground group-hover:text-portfolio-accent transition-colors duration-300">
              {isExpanded ? "Show less" : "View details"}
            </span>
            <ChevronDown 
              className={`h-4 w-4 text-muted-foreground group-hover:text-portfolio-accent transition-all duration-300 ${isExpanded ? "rotate-180" : "group-hover:translate-y-0.5"}`}
            />
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-border bg-muted/30 p-6 space-y-6">
          {/* Full Description */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">About this Project</h4>
            <ul className="space-y-2">
              {project.fullDescription && project.fullDescription.length > 0 ? (
                project.fullDescription.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-portfolio-accent flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No description available</p>
              )}
            </ul>
          </div>

          {/* Action Buttons */}
          {(project.hasSourceCode || project.hasDemoAvailable) && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {project.hasSourceCode && project.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className=" rounded-lg  gap-2 flex items-center">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              )}
              {project.hasDemoAvailable && project.demo && (
                <Button size="sm" asChild className="rounded-lg">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className=" rounded-lg  gap-2 flex items-center">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  );
};

const Projects = () => {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "professional" | "academic">("all");

  const filteredProjects = projects.filter((project) => 
    filter === "all" ? true : project.type === filter
  );

  const handleToggleExpand = (projectId: string) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h1>
          <p className="animate-fade-in-delay-1 mt-4 max-w-2xl text-muted-foreground">
            A collection of professional and academic projects I've worked on, showcasing my expertise in full-stack development.
          </p>

          {/* Filter Tabs */}
          <div className="animate-fade-in-delay-2 mt-6 flex gap-2">
            {[
              { key: "all", label: "All Projects" },
              { key: "professional", label: "Professional" },
              { key: "academic", label: "Academic" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key as typeof filter)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                  filter === tab.key
                    ? "bg-foreground text-background"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjectId === project.id}
              index={index}
              onClick={() => handleToggleExpand(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
