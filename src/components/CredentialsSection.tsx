import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Fingerprint, HardHat, FlaskConical } from "lucide-react";

const credentials = [
  {
    icon: ShieldCheck,
    title: "(ISC)² Certified in Cybersecurity (CC)",
    description:
      "Certificação global em Governança, Controle de Acesso e Segurança de Redes. Foco em conformidade e melhores práticas internacionais.",
  },
  {
    icon: Fingerprint,
    title: "Google Cybersecurity Professional",
    description:
      "Análise de ameaças, monitoramento de SIEM, resposta a incidentes e automação com Python para Segurança.",
  },
  {
    icon: HardHat,
    title: "Segurança Operacional (1200h)",
    description:
      "Formação de Vigilantes, Grandes Eventos e Gestão de Riscos Físicos. Base sólida em disciplina e proteção de ativos.",
  },
  {
    icon: FlaskConical,
    title: "Técnico em Química (1200h)",
    description:
      "Rigor procedimental, análise laboratorial e conformidade com normas de segurança (ISO/ABNT).",
  },
];

const CredentialsSection = () => {
  const [verifying, setVerifying] = useState<number | null>(null);
  const [verified, setVerified] = useState<Set<number>>(new Set());
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

  const handleVerify = (index: number) => {
    setVerifying(index);
    setTimeout(() => {
      setVerifying(null);
      setVerified((prev) => new Set(prev).add(index));
    }, 1500);
  };

  return (
    <section id="certificações" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> gpg --verify credentials.sig
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Matriz de <span className="text-primary text-glow">Credenciais</span>
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            const isVerifying = verifying === i;
            const isVerified = verified.has(i);

            return (
              <div
                key={i}
                className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-700 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(142_71%_45%/0.12)] ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visible ? `${i * 150}ms` : "0ms",
                }}
              >
                {/* Glow border on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-primary/30" />

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold text-card-foreground">{cred.title}</h4>
                </div>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                  {cred.description}
                </p>

                {/* Verify button with loading animation */}
                <button
                  onClick={() => handleVerify(i)}
                  disabled={isVerifying}
                  className="relative overflow-hidden inline-flex items-center gap-2 rounded border px-3 py-1.5 text-[10px] uppercase tracking-widest transition-all border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
                >
                  {isVerifying && (
                    <div className="absolute inset-0 bg-primary/10">
                      <div className="h-full animate-[loading_1.5s_ease-in-out] bg-primary/20" />
                    </div>
                  )}
                  <span className="relative z-10">
                    {isVerifying
                      ? "Validando hash..."
                      : isVerified
                      ? "✓ AUTENTICIDADE_CONFIRMADA"
                      : "VERIFICAR_AUTENTICIDADE"}
                  </span>
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
