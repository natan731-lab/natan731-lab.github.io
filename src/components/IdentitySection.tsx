import { useEffect, useRef, useState } from "react";
import { Radar } from "lucide-react";

const attributes = [
  { emoji: "🛡️", label: "Disciplina Operacional (Ex-Vigilante)" },
  { emoji: "⚖️", label: "Foco em Compliance & LGPD" },
  { emoji: "💻", label: "Desenvolvimento Seguro (ADS)" },
  { emoji: "🎯", label: "Mentalidade 'Sonho Grande'" },
];

const IdentitySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-24 scroll-mt-20 overflow-hidden" ref={sectionRef}>
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
        }`}
      >
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> cat /etc/identity --declassified
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Protocolo de <span className="text-primary text-glow">Identidade</span>
        </h3>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left: Photo with crosshair frame */}
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-80 sm:w-80 sm:h-96">
              {/* Crosshair corners */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />

              {/* Inner frame */}
              <div className="absolute inset-4 rounded-md border border-border bg-card overflow-hidden flex items-center justify-center">
                {/* Scanline overlay */}
                <div
                  className="pointer-events-none absolute inset-0 z-10 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, hsl(142 71% 45%) 0px, transparent 1px, transparent 3px)",
                  }}
                />
                {/* Green tint overlay */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-primary/5" />

                {/* Placeholder */}
                <div className="flex flex-col items-center gap-3 text-muted-foreground">
                  <div className="h-20 w-20 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                    <span className="text-4xl">🛡️</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest">Foto do Operador</span>
                </div>
              </div>

              {/* Crosshair center lines */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-primary/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-primary/10" />

              {/* Corner labels */}
              <span className="absolute -bottom-6 left-4 text-[9px] tracking-widest text-muted-foreground">
                SCAN: ACTIVE
              </span>
              <span className="absolute -bottom-6 right-4 text-[9px] tracking-widest text-primary">
                ID: CONFIRMED
              </span>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <h4 className="mb-6 text-lg font-bold text-primary text-glow tracking-wider">
              [ID: NATAN_CORREA]
            </h4>

            <p className="mb-5 text-sm leading-relaxed text-card-foreground">
              Analista de Sistemas em formação (UNINOVE), unindo{" "}
              <span className="text-primary font-semibold">2400+ horas</span> de formação em
              segurança operacional e técnica (Vigilante Patrimonial e Técnico em Química) com a
              inteligência da Cibersegurança. A minha trajetória foi construída sob os pilares da{" "}
              <span className="text-primary">disciplina, gestão de riscos e conformidade</span>.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
              Como profissional de Segurança da Informação, trago a atenção extrema aos detalhes
              desenvolvida no campo e a capacidade de resposta sob pressão. O meu foco é{" "}
              <span className="text-primary font-medium">GRC</span>: garantir que processos,
              pessoas e tecnologia operem em total conformidade e segurança.
            </p>

            {/* Operator Attributes */}
            <h5 className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground">
              {">"} Atributos de Operador
            </h5>
            <div className="flex flex-wrap gap-3">
              {attributes.map((attr) => (
                <div
                  key={attr.label}
                  className="group flex items-center gap-2 rounded-md border border-border bg-secondary/30 px-3 py-2 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_12px_hsl(142_71%_45%/0.15)] cursor-default"
                >
                  <Radar size={12} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-[11px] text-card-foreground group-hover:text-primary transition-colors">
                    {attr.emoji} {attr.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
