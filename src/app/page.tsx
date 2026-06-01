import { AboutSection } from "@/components/AboutSection";
import { CityMap } from "@/components/CityMap";
import { ContactSection } from "@/components/ContactSection";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LoadingIntro } from "@/components/LoadingIntro";
import { Navbar } from "@/components/Navbar";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <LoadingIntro />
      <Navbar />
      <main>
        <HeroSection />
        <CityMap />
        <FeaturedProjects />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
