import React, { useEffect, useRef } from "react";

const skillCategories = [
  {
    title: "Linguagens",
    icon: "code",
    skills: ["Java 11/17/21", "TypeScript", "Python"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    skills: [
      "Spring Boot (Data, Security, MVC, Cloud)",
      "Angular",
      "React",
      "Apache Camel",
    ],
  },
  {
    title: "Mensageria & Cache",
    icon: "zap",
    skills: ["Kafka", "RabbitMQ", "Redis"],
  },
  {
    title: "Bancos de Dados",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "DevOps & Ferramentas",
    icon: "tool",
    skills: ["Docker", "Docker Compose", "Git", "Linux", "APIs REST"],
  },
];

const iconMap: Record<string, React.JSX.Element> = {
  code: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25M6.75 17.25L1.5 12l5.25-5.25M14.25 3.75l-4.5 16.5" />
    </svg>
  ),
  layers: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  ),
  zap: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  ),
  database: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  tool: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.5 5.5a2.121 2.121 0 01-3-3l5.5-5.5m4.34-4.34L16.5 3.75a2.121 2.121 0 013 3l-5.5 5.5m-4.34 4.34l2.5 2.5a2.121 2.121 0 003-3l-2.5-2.5M9.75 5.25l-2.5-2.5A2.121 2.121 0 004.25 9.75l2.5 2.5" />
    </svg>
  ),
};

function SkillCategory({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
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
      className="opacity-0 bg-base-200/40 backdrop-blur-sm rounded-2xl p-6 border border-base-content/5 hover:border-primary/15 transition-all duration-500 glow-hover"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-primary/10 text-primary">
          {iconMap[category.icon]}
        </div>
        <h3 className="font-display font-bold text-lg">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-sm px-3 py-1.5 rounded-lg bg-base-content/5 text-base-content/70 border border-base-content/10 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div ref={headerRef} className="opacity-0 text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Habilidades
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Minhas{" "}
            <span className="gradient-text">habilidades</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <SkillCategory key={cat.title} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
