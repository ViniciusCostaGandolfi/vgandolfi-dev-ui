import type { Project } from "~/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body">
        <h3 className="card-title text-xl">{project.title}</h3>
        <p className="text-base-content/70">{project.description}</p>
        <div className="flex flex-wrap gap-2 my-3">
          {project.tags.map((tag) => (
            <span key={tag} className="badge badge-primary badge-outline">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end mt-2">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Visit Site
          </a>
        </div>
      </div>
    </div>
  );
}
