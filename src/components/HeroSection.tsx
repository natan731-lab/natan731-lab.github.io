import { Terminal, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Scan effect */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-scan absolute left-0 right-0 h-[2px] bg-primary/20 shadow-[0_0_30px_10px_hsl(142_71%_45%/0.05)]" />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(hsl(142 71% 45%) 1px, transparent 1px), linear-gradient(90deg, hsl(142 71% 45%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground animate-fade-in">
          <span className="text-primary">$</span> initializing_security_protocol...
        </p>

        <h1 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold text-card-foreground animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          Central de Operações{" "}
          <span className="text-primary text-glow">de Segurança</span>
        </h1>

        <p className="mb-6 text-base sm:text-lg text-muted-foreground font-light animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Unindo a Disciplina Patrimonial à Inteligência Digital
        </p>

        <p className="mx-auto mb-10 max-w-2xl text-sm text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
          Profissional em transição estratégica para Cybersecurity, focado em Governança, Risco e
          Compliance (GRC). Analista de Sistemas em formação (UNINOVE), aplicando rigor operacional
          na proteção de ativos de informação.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <a
            href="#grc"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(142_71%_45%/0.4)]"
          >
            <Terminal size={16} />
            Acessar Portfólio GRC
          </a>
          <a
            href="https://github.com/natan731-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10"
          >
            <Github size={16} />
            Ver Repositórios GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
