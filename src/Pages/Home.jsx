import ThemeToggle from "./../Components/ThemeToggle";
import StarBackground from "./../Components/StarBackgound";
import NavBar from "./../Components/Navbar";
import HeroSection from "./../Components/HeroSection";
import AboutSection from "./../Components/AboutSection";
import SkillSection from "./../Components/SkillsSection";
import ProjectSection from "./../Components/ProjectsSection";
import ContactSection from "./../Components/ContactSecction";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className=" min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
