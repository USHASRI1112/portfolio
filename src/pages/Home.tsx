import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="animate-fade-in text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Software Engineer
          </p>
          <h1 className="animate-fade-in-delay-1 mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Usha Sri Gudikandula
          </h1>
          <p className="animate-fade-in-delay-2 mt-6 text-lg leading-relaxed text-muted-foreground">
            Full-stack engineer building scalable, end-to-end solutions that integrate 
            robust backend systems with intuitive, responsive frontends. Passionate about 
            AI and delivering impactful products.
          </p>

          <div className="animate-fade-in-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-delay-3 mt-12 flex items-center gap-6">
            <a
              href="https://github.com/USHASRI1112"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/usha-sri-gudikandula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:ushasrigudikandula456@gmail.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
