// [SEGMENTO_00]: MAIN_LAYOUT - SYSTEM_ASSEMBLY_VERIFIED
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdentitySection from "@/components/IdentitySection";
import CredentialsSection from "@/components/CredentialsSection";
import LogsSection from "@/components/LogsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsMatrixSection from "@/components/SkillsMatrixSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EasterEgg from "@/components/EasterEgg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background animate-terminal-flicker">
      {/* [OVERLAY]: Scanlines CRT Effect */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, hsl(142 71% 45%) 0px, transparent 1px, transparent 3px)",
        }}
      />

      <Header />
      <HeroSection />
      <IdentitySection />
      <ProjectsSection />
      <CredentialsSection />
      <LogsSection />
      <SkillsMatrixSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
      <EasterEgg />
    </main>
  );
};

export default Index;
