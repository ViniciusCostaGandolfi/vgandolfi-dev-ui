import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import HeroSection from "~/components/HeroSection";
import AboutSection from "~/components/AboutSection";
import ExperienceSection from "~/components/ExperienceSection";
import SkillsSection from "~/components/SkillsSection";
import ProjectsSection from "~/components/ProjectsSection";
import EducationSection from "~/components/EducationSection";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    {
      title: "Vinícius Costa Gandolfi - Full Stack Developer | Java, Spring Boot & Angular",
    },
    {
      name: "description",
      content:
        "Full Stack Developer specializing in Java, Spring Boot, Angular and microservices. Check out my portfolio with projects and professional experience.",
    },
    {
      name: "keywords",
      content:
        "Java, Spring Boot, Angular, Full Stack, Developer, Portfolio, Microservices",
    },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </>
  );
}
