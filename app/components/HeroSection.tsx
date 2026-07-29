export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero min-h-screen bg-base-200"
    >
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vinicius Gandolfi
          </h1>
          <p className="text-xl md:text-2xl text-base-content/80 mb-8">
            Full Stack Developer building tools with React, Angular and Spring Boot
          </p>
          <a href="#projects" className="btn btn-primary btn-lg">
            See My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
