import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import SkillsSection from "./components/SkillsSection";
import Testimonials from "./components/Testimonials";

const onDevelopment = process.env.ON_DEVELOPMENT;

export default function Home() {
  return (
    <main
      className={` w-full h-full  ${
        onDevelopment === "true" ? "debug-screens" : null
      }`}
    >
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
