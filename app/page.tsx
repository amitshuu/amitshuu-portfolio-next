import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";

const onDevelopment = process.env.ON_DEVELOPMENT;
console.log(onDevelopment === "false");

export default function Home() {
  return (
    <main
      className={`w-full h-full bg-dark-bg ${
        onDevelopment === "true" ? "debug-screens" : null
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
