import { useState } from "react";
import { ShieldCheck, Fingerprint, HardHat, FlaskConical } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "(ISC)² CC - Certified in Cybersecurity",
    description: "Certificação internacional em fundamentos de segurança e controle de acesso.",
  },
  {
    icon: Fingerprint,
    title: "Google Cybersecurity Professional",
    description: "Análise de ameaças, SIEM e resposta a incidentes.",
  },
  {
    icon: HardHat,
    title: "Segurança Operacional (1200h)",
    description: "Formação de Vigilantes, Grandes Eventos e Gestão de Riscos Físicos.",
  },
  {
    icon: FlaskConical,
    title: "Técnico em Química (1200h)",
    description: "Análise laboratorial, rigor procedimental e normas de segurança.",
  },
];

const CredentialsSection = () => {
  const [verifying, setVerifying] = useState<number | null>(null);
  const [verified, setVerified] = useState<Set<number>>(new Set());

  const handleVerify = (index: number) => {
    setVerifying(index);
    setTimeout(() => {
      setVerifying(null);
      setVerified((prev) => new Set(prev).add(index));
    }, 1500);
  };

  return (
    <section id="certificações" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> gpg --verify credentials.sig
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Matriz de <span className="text-primary text-glow">Credenciais</span>
        </h3>

        <div className="grid gap-6 sm:grid-cols-2">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            const isVerifying = verifying === i;
            const isVerified = verified.has(i);

            return (
              <div
                key={i}
                className="group relative rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:box-glow-hover"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-card-foreground">{cred.title}</h4>
                </div>
                <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                  {cred.description}
                </p>
                <button
                  onClick={() => handleVerify(i)}
                  disabled={isVerifying}
                  className={`inline-flex items-center gap-2 rounded border px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all ${
                    isVerified
                      ? "border-primary/40 text-primary bg-primary/5"
                      : isVerifying
                      ? "border-primary/20 text-primary/60 animate-pulse"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {isVerifying
                    ? "Verificando hash..."
                    : isVerified
                    ? "✓ Hash verificado"
                    : "Verificar Hash"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
