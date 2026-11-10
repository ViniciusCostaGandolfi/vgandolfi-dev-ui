import { useEffect, useRef } from "react";

const experiences = [
  {
    role: "Desenvolvedor Java",
    company: "PwC DTS",
    period: "10/2025 – Atual",
    description:
      "Desenvolvimento de APIs REST e integrações com Java 21, Spring Boot e Apache Camel para clientes de seguros e previdência. Implementação de rotas de integração, tratamento de erros e resiliência entre sistemas corporativos. Mensageria com RabbitMQ e arquitetura orientada a eventos, com foco em processamento assíncrono.",
    tags: ["Java 21", "Spring Boot", "Apache Camel", "RabbitMQ"],
  },
  {
    role: "Consultor de Logística e Automação",
    company: "Consultoria Independente (PJ)",
    period: "06/2025 – 09/2025",
    description:
      "Consultoria em logística para a INPO, com análise de processos e automação de rotinas. Apoio à operação logística e melhoria de fluxos.",
    tags: ["Automação", "Logística", "Análise de Processos"],
  },
  {
    role: "Desenvolvedor Fullstack",
    company: "Labsid (projeto Petrobras/SSD)",
    period: "05/2024 – 05/2025",
    description:
      "Desenvolvimento do SSD, sistema de gestão estratégica de recursos hídricos, em consultoria para a Petrobras. APIs REST com Java 11, Spring Boot, Spring Data JPA e Spring Security. Interfaces e dashboards com Angular, Tailwind, HTML, CSS e TypeScript. Integrações síncronas e assíncronas com mensageria.",
    tags: ["Java 11", "Spring Boot", "Angular", "TailwindCSS", "Kafka"],
  },
  {
    role: "Bolsista de Pesquisa (Logística e Dados)",
    company: "Unicamp & Correios",
    period: "01/2024 – 12/2024 (bolsa parcial)",
    description:
      "Pesquisa aplicada a processos logísticos com IA e pesquisa operacional. Modelos em Python (Pandas, Scikit-learn, TensorFlow e OR-Tools) para previsão, detecção de falhas e otimização de rotas.",
    tags: ["Python", "Pandas", "Scikit-learn", "OR-Tools"],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
    <section id="experience" className="py-20 md:py-28 bg-base-200/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div ref={sectionRef} className="opacity-0 text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Experiência
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Onde já <span className="gradient-text">trabalhei</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-base-100 rounded-2xl p-6 border border-base-content/5 hover:border-primary/20 transition-all duration-300 glow-hover"
            >
              <span className="text-xs font-mono font-medium text-primary/70 bg-primary/5 px-3 py-1 rounded-full">
                {exp.period}
              </span>
              <h3 className="font-display text-lg font-bold mt-4">{exp.role}</h3>
              <p className="text-primary font-medium text-sm mb-3">{exp.company}</p>
              <p className="text-base-content/70 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
