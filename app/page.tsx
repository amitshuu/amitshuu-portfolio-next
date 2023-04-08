import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

const onDevelopment = process.env.ON_DEVELOPMENT;

export default function Home() {
  return (
    <main
      className={`w-full h-full bg-dark-bg ${
        onDevelopment ? "debug-screens" : ""
      }`}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
