import projects from "~/data/projects.json";
import type { Project } from "~/data/projects";
import ProjectCard from "~/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 bg-base-200">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {(projects as Project[]).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
