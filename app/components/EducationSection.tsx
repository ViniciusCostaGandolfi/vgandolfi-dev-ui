import { useEffect, useRef } from "react";

const education = [
  {
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    institution: "UNIVESP (Universidade Estadual Virtual de São Paulo)",
    period: "2024 – 2026 (previsão de conclusão)",
    type: "graduation",
  },
  {
    title: "Engenharia de Produção",
    institution: "Unicamp",
    period: "Até 2024 (incompleto)",
    type: "graduation",
  },
];

const certifications = [
  "Formação Spring Boot & Microsserviços (RabbitMQ, Service Discovery, Data, Security) – Alura",
  "Formação Angular (Material, Tailwind, HTML, CSS, TS, Reactive Forms, Auth) – Alura",
];

const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário (leitura técnica e conversação básica)" },
];

export default function EducationSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headerRef.current, eduRef.current, certRef.current, langRef.current];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).style.opacity = "1";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div ref={headerRef} className="opacity-0 text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Educação e certificações
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Formação e{" "}
            <span className="gradient-text">certificações</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Education */}
          <div ref={eduRef} className="opacity-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-xl">Educação</h3>
            </div>

            <div className="space-y-3">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="bg-base-200/40 backdrop-blur-sm rounded-xl p-6 border border-base-content/5 hover:border-primary/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      <div className="size-3 rounded-full bg-primary/60" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-base">
                        {item.title}
                      </h4>
                      <p className="text-primary text-sm mt-0.5">{item.institution}</p>
                      <p className="text-base-content/50 text-sm mt-1">{item.period}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="flex flex-col gap-6">
            {/* Certifications */}
            <div ref={certRef} className="opacity-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl">Certificações</h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="bg-base-200/40 backdrop-blur-sm rounded-xl p-4 border border-base-content/5 hover:border-primary/15 transition-all duration-300 flex items-start gap-3"
                  >
                    <div className="mt-0.5 shrink-0 text-primary/60">
                      <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-sm text-base-content/80 leading-relaxed">
                      {cert}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div ref={langRef} className="opacity-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.78.147 2.653.255M21 5.621a48.474 48.474 0 00-6-.371M21 5.621v.522M21 5.621V6" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl">Idiomas</h3>
              </div>

              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="bg-base-200/40 backdrop-blur-sm rounded-xl p-4 border border-base-content/5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-base-content/60">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
