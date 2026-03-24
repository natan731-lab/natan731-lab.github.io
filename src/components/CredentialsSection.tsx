import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Fingerprint, HardHat, FlaskConical, Cloud, Search } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

const cards = [
  {
    icon: ShieldCheck,
    title: "(ISC)² Certified in Cybersecurity (CC)",
    desc: "Certificação internacional cobrindo os 5 domínios: Princípios de Segurança, Continuidade de Negócios, Controle de Acesso, Segurança de Rede e Operações de Segurança.",
  },
  {
    icon: Fingerprint,
    title: "Google Cybersecurity Professional",
    desc: "Análise de ameaças, monitoramento SIEM, ferramentas Linux e SQL, e automação de tarefas de segurança com Python.",
  },
  {
    icon: HardHat,
    title: "Formação de Vigilante (1200h)",
    desc: "Especialista em Proteção de Ativos, Gestão de Riscos Operacionais e Segurança de Grandes Eventos. Foco em disciplina e atenção ao detalhe.",
  },
  {
    icon: FlaskConical,
    title: "Técnico em Química — MEC (1200h)",
    desc: "Formação focada em processos laboratoriais, conformidade com normas técnicas e segurança industrial (ISO/ABNT).",
  },
  {
    icon: Cloud,
    title: "Azure & IoT (Microsoft/Enap)",
    desc: "Fundamentos de computação em nuvem e segurança em dispositivos conectados (IoT) para cidades inteligentes.",
  },
];

const CredentialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [careerProgress, setCareerProgress] = useState(0);
  const [verifying, setVerifying] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setCareerProgress(85), 300);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleVerify = (idx: number) => {
    setVerifying(idx);
    setTimeout(() => {
      setVerifying(null);
      window.open("https://www.linkedin.com/in/natan-dias-corr%C3%AAa-04a724228/", "_blank", "noopener,noreferrer");
    }, 1500);
  };

  return (
    <section id="certificações" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div
        className={`container mx-auto px-4 transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> gpg --verify credentials.sig
        </h2>
        <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-card-foreground">
          Matriz de{" "}
          <span className="text-primary text-glow">Credenciais</span>
        </h3>

        {/* Career Progress Bar */}
        <div className="mb-10 max-w-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
              PROGRESSO_DE_CARREIRA_INFOSEC
            </span>
            <span className="text-xs font-bold text-primary">{careerProgress}%</span>
          </div>
          <Progress value={careerProgress} className="h-2 bg-border" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Tooltip key={card.title}>
                <TooltipTrigger asChild>
                  <div
                    className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(142_71%_45%/0.12)] ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: visible ? `${i * 120}ms` : "0ms" }}
                  >
                    <div className="pointer-events-none absolute -inset-px rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 border border-primary/30" />

                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon size={20} className="text-primary" />
                      </div>
                      <h4 className="text-sm font-semibold text-card-foreground leading-tight">
                        {card.title}
                      </h4>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{card.desc}</p>

                    {/* Verify button */}
                    <button
                      onClick={() => handleVerify(i)}
                      disabled={verifying === i}
                      className="flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-primary/70 hover:text-primary transition-colors disabled:opacity-50"
                    >
                      <Search size={10} />
                      {verifying === i ? "VALIDANDO_HASH..." : "VERIFICAR_HASH_CREDENTIAL"}
                    </button>
                    {verifying === i && (
                      <div className="mt-2 h-1 w-full rounded-full bg-border overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ animation: "loading 1.5s ease-out forwards" }} />
                      </div>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="bg-background border-primary/40 text-primary text-[10px] tracking-widest uppercase"
                >
                  CREDENTIAL_VERIFIED: STATUS_OK
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
