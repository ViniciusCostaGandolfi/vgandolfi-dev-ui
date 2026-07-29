import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = titleRef.current;
    const s = subtitleRef.current;
    const c = ctaRef.current;
    const so = socialRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === t) {
              t.classList.add("animate-fade-in-down");
              t.style.opacity = "1";
            }
            if (entry.target === s) {
              s.classList.add("animate-fade-in-up");
              s.style.opacity = "1";
            }
            if (entry.target === c) {
              c.classList.add("animate-fade-in-up");
              c.style.opacity = "1";
            }
            if (entry.target === so) {
              so.classList.add("animate-fade-in");
              so.style.opacity = "1";
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    [t, s, c, so].forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Blob / gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[100px] animate-blob" style={{ animationDelay: "2s", animationDirection: "reverse" }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full bg-indigo-400/10 blur-[80px] animate-blob" style={{ animationDelay: "4s" }} />
        <div className="bg-grid absolute inset-0" />
      </div>

      <div className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div
          ref={titleRef}
          className="opacity-0 mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
        >
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex size-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Aqui está o pulo do gato 🐱
        </div>

        {/* Main heading */}
        <h1
          ref={subtitleRef}
          className="opacity-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto mb-6"
        >
          <span className="gradient-text">Vinícius Costa Gandolfi</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={ctaRef}
          className="opacity-0 text-lg sm:text-xl md:text-2xl text-base-content/60 max-w-2xl mx-auto mb-4 font-light"
        >
          Full-Stack Developer
        </p>
        <p
          className="text-base sm:text-lg text-base-content/50 max-w-xl mx-auto mb-10 font-light"
        >
          Java • Spring Boot • Angular • Microsserviços
        </p>

        {/* CTA Buttons */}
        <div
          className="opacity-0 flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#projects"
            className="btn btn-primary btn-lg px-8 rounded-full animate-pulse-glow font-medium"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Projects
          </a>
          <a
            href="#contact"
            className="btn btn-outline btn-lg px-8 rounded-full font-medium border-base-content/20 hover:border-primary/50"
          >
            <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
        </div>

        {/* Social links */}
        <div
          ref={socialRef}
          className="opacity-0 flex items-center gap-6"
        >
          <a
            href="https://github.com/viniciusCostaGandolfi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle hover:bg-primary/10 hover:text-primary transition-all duration-300"
            aria-label="GitHub"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/viniciuscostagandolfi/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-circle hover:bg-primary/10 hover:text-primary transition-all duration-300"
            aria-label="LinkedIn"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-base-content/30">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
