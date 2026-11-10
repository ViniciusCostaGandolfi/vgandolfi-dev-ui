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
      title: "Vinícius Costa Gandolfi — Desenvolvedor Backend Java | Spring Boot, Microsserviços e Angular",
    },
    {
      name: "description",
      content:
        "Desenvolvedor Backend Java na PwC, com Java 21, Spring Boot, Apache Camel, RabbitMQ e arquitetura orientada a eventos. Vivência full stack com Angular e React. Projetos em produção: fazrota.com.br e gradehorarios.com.br.",
    },
    {
      name: "keywords",
      content:
        "Java, Spring Boot, Microsserviços, Apache Camel, RabbitMQ, Kafka, Angular, React, Backend, Desenvolvedor, Portfólio",
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
