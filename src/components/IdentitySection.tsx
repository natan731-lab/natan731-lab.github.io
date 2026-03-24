import { Shield, CheckCircle2 } from "lucide-react";

const attributes = [
  "Disciplina Militar/Vigilante",
  "Atenção Extrema aos Detalhes",
  "Mentalidade de Sonho Grande",
  "Foco no Mercado Financeiro",
];

const IdentitySection = () => {
  return (
    <section id="sobre" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> cat /etc/identity
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Protocolo de <span className="text-primary text-glow">Identidade</span>
        </h3>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left: Shield / Terminal frame */}
          <div className="flex items-center justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-lg border border-border bg-card">
              <div className="absolute -inset-px rounded-lg border border-primary/20" />
              <Shield className="h-32 w-32 text-primary/30" />
              <span className="absolute text-6xl">🛡️</span>
            </div>
          </div>

          {/* Right: Bio */}
          <div>
            <p className="mb-6 text-sm leading-relaxed text-card-foreground">
              Analista de Sistemas em formação (UNINOVE) com 25 anos. Unindo{" "}
              <span className="text-primary font-semibold">2400+ horas</span> de formação em
              segurança operacional (Vigilante Patrimonial e Técnico em Química) com a precisão da
              Cibersegurança. Especialista em GRC, focado em governança, conformidade e gestão de
              riscos.
            </p>

            <h4 className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
              {">"} Atributos Operacionais
            </h4>
            <ul className="space-y-3">
              {attributes.map((attr) => (
                <li key={attr} className="flex items-center gap-3 text-sm text-card-foreground">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  {attr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitySection;
