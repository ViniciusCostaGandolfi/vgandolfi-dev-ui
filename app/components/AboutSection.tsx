const technologies = [
  "React",
  "Angular",
  "TypeScript",
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "Docker",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-base-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          About Me
        </h2>
        <p className="text-lg text-base-content/80 leading-relaxed mb-8 text-center max-w-2xl mx-auto">
          I'm a full-stack developer who enjoys building practical tools that
          solve real-world problems. With experience across the stack — from
          crafting responsive frontends with React and Angular to designing
          robust APIs with Spring Boot — I focus on creating clean, maintainable
          code that delivers value.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech) => (
            <span key={tech} className="badge badge-lg badge-outline">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
