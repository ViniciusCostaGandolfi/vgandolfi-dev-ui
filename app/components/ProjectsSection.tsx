import { useEffect, useRef } from "react";
import projects from "~/data/projects.json";
import type { Project } from "~/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="opacity-0 group relative bg-base-200/40 backdrop-blur-sm rounded-2xl border border-base-content/5 overflow-hidden transition-all duration-500 glow-hover"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Decorative gradient top */}
      <div className="h-2 w-full bg-gradient-to-r from-primary via-blue-400 to-indigo-400" />

      <div className="p-6 md:p-8">
        {/* Project title */}
        <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base-content/70 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center gap-4">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-200 group/link"
          >
            Visitar site
            <svg
              className="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-fade-in-up");
          el.style.opacity = "1";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32 bg-base-200/30"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div ref={headerRef} className="opacity-0 text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Projects
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Projetos em{" "}
            <span className="gradient-text">destaque</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {(projects as Project[]).map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
