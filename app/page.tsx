
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { StatsSection } from "@/components/stats-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { ReviewsSection } from "@/components/reviews-section";

export const metadata = {
  title: 'Social Dynamics | Social Media Marketing Agentur in Salzburg',
  description: 'Social Dynamics ist Ihre Social Media Marketing Agentur in Salzburg. Wir erstellen beeindruckende Reels und kreativen Content für Ihren Erfolg.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ReviewsSection />
      <RoadmapSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
