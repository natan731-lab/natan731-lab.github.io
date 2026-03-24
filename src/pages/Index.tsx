import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IdentitySection from "@/components/IdentitySection";
import CredentialsSection from "@/components/CredentialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-terminal-flicker">
      <Header />
      <HeroSection />
      <IdentitySection />
      <CredentialsSection />

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center">
        <p className="text-xs text-muted-foreground">
          <span className="text-primary">$</span> echo "© 2026 NATAN_CORREA_OS — All rights reserved"
        </p>
      </footer>
    </div>
  );
};

export default Index;
