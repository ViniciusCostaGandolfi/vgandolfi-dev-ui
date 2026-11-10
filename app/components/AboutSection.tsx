import { useEffect, useRef } from "react";

const highlights = [
  { label: "Local", value: "Limeira - SP" },
  { label: "Experiência", value: "2+ anos" },
  { label: "Foco", value: "Backend Java" }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
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
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">
            Sobre mim
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
            Conheça um pouco da minha{" "}
            <span className="gradient-text">trajetória</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mt-4" />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="opacity-0"
        >
          {/* Professional summary */}
          <div className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-base-content/5 mb-10">
            <p className="text-lg leading-relaxed text-base-content/80">
              Desenvolvedor Backend Java com experiência em Spring Boot, microsserviços, APIs REST e integrações. Atualmente na PwC, com Java 21, Apache Camel, RabbitMQ e arquitetura orientada a eventos para clientes de seguros e previdência. Vivência full stack com Angular e React, experiência na área de logística e no setor de seguradoras.
            </p>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group bg-base-200/30 backdrop-blur-sm rounded-xl p-5 border border-base-content/5 text-center hover:border-primary/20 hover:bg-primary/[0.02] transition-all duration-300"
              >
                <div className="text-2xl font-display font-bold gradient-text mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-base-content/50 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
