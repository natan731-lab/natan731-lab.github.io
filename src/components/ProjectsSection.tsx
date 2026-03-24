import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Terminal, ShieldCheck, Monitor, Music } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "Proteção de Integridade de Dados" },
  { icon: Monitor, label: "Arquitetura de Sistemas (ADS)" },
  { icon: Music, label: "Foco em Produtividade e Disciplina" },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> ls ~/projects --classified
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Terminal de <span className="text-primary text-glow">Projetos</span>
        </h3>

        {/* Vibrato Digital Full-Width Card */}
        <div
          className={`group relative rounded-lg border border-primary/30 bg-card overflow-hidden transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Pulsing glow indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-primary font-semibold">LIVE</span>
          </div>

          {/* Matrix / particle hover effect overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 100%, hsl(142 71% 45%), transparent 60%), repeating-linear-gradient(0deg, hsl(142 71% 45% / 0.3) 0px, transparent 2px, transparent 8px)",
            }}
          />

          {/* Header bar */}
          <div className="flex items-center gap-2 border-b border-border bg-background/60 px-6 py-3">
            <Terminal size={14} className="text-primary" />
            <span className="text-[11px] font-semibold tracking-widest text-primary">
              [LOG_PROJETO_01: VIBRATO_DIGITAL_APP]
            </span>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left: Pitch */}
              <div>
                <h4 className="mb-2 text-xl font-bold text-card-foreground">
                  Vibrato <span className="text-primary text-glow">Digital</span>
                </h4>
                <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                  Produtividade & Segurança Musical
                </p>
                <p className="mb-6 mt-4 text-sm leading-relaxed text-muted-foreground">
                  Aplicação desenvolvida para músicos, focada em organização operacional e
                  integridade de dados. O projeto aplica princípios de{" "}
                  <span className="text-primary font-medium">Privacy by Design</span>, garantindo
                  que a jornada do músico seja documentada de forma segura e resiliente.
                </p>

                {/* Tech Highlights */}
                <div className="mb-8 space-y-3">
                  {highlights.map((h) => {
                    const Icon = h.icon;
                    return (
                      <div key={h.label} className="flex items-center gap-3">
                        <Icon size={15} className="text-primary flex-shrink-0" />
                        <span className="text-xs text-card-foreground">{h.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://natan731-lab.github.io/vibrato-digital-app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_25px_hsl(142_71%_45%/0.4)]"
                  >
                    <ExternalLink size={14} />
                    ACESSAR_SISTEMA_LIVE
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:bg-primary/10"
                  >
                    <Github size={14} />
                    INSPECIONAR_CÓDIGO_FONTE
                  </a>
                </div>
              </div>

              {/* Right: Terminal preview mockup */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full rounded-lg border border-border bg-background p-4">
                  <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-border">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "hsl(45, 93%, 47%, 0.7)" }} />
                    <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                    <span className="ml-2 text-[9px] text-muted-foreground tracking-widest">vibrato-digital — bash</span>
                  </div>
                  <div className="font-mono text-[11px] leading-6 text-muted-foreground space-y-1">
                    <p><span className="text-primary">$</span> npm run security-audit</p>
                    <p className="text-card-foreground">✓ 0 vulnerabilities found</p>
                    <p><span className="text-primary">$</span> npm run build</p>
                    <p className="text-card-foreground">✓ Build completed in 2.3s</p>
                    <p><span className="text-primary">$</span> deploy --target=gh-pages</p>
                    <p className="text-primary">✓ Deployed successfully → LIVE</p>
                    <p className="animate-blink text-primary">▊</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
