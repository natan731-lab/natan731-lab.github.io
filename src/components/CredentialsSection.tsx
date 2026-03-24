import { useState, useEffect, useRef } from "react";
import { ShieldCheck, Fingerprint, HardHat, FlaskConical, Cloud, Cpu, BookOpen, GraduationCap, Search } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

const tabs = [
  {
    id: "cyber",
    label: "CYBERSECURITY & CLOUD",
    items: [
      {
        icon: ShieldCheck,
        title: "(ISC)² CC — Certified in Cybersecurity",
        details: [
          "Segurança de Rede",
          "Resposta a Incidentes",
          "Conceitos de Controle de Acesso",
          "Operações de Segurança",
          "Princípios de Segurança",
        ],
      },
      {
        icon: Fingerprint,
        title: "Google Cybersecurity Professional",
        details: [
          "Ferramentas Linux & SQL",
          "Python para Automação",
          "SIEM (Detecção e Resposta)",
          "Gestão de Vulnerabilidades",
        ],
      },
      {
        icon: Cloud,
        title: "Microsoft Azure — Conceitos de Nuvem",
        details: ["Infraestrutura Cloud", "Serviços de Computação e Rede"],
      },
    ],
  },
  {
    id: "ops",
    label: "SEGURANÇA OPERACIONAL",
    items: [
      {
        icon: HardHat,
        title: "Vigilante & Segurança Patrimonial (1200h)",
        details: ["Proteção de Ativos", "Gestão de Riscos Físicos", "Controle de Acesso"],
      },
      {
        icon: ShieldCheck,
        title: "Segurança em Grandes Eventos & ANL",
        details: ["Controle de Acesso", "Resposta a Crises", "Planejamento Operacional"],
      },
      {
        icon: Cpu,
        title: "IoT e Cidades Inteligentes (Enap)",
        details: ["Privacidade em IoT", "Segurança de Dispositivos Conectados"],
      },
    ],
  },
  {
    id: "tech",
    label: "RIGOR TÉCNICO & COMPLIANCE",
    items: [
      {
        icon: FlaskConical,
        title: "Técnico em Química — MEC (1200h)",
        details: ["Processos Laboratoriais", "Normas de Segurança", "Conformidade Rigorosa (ISO/ABNT)"],
      },
      {
        icon: GraduationCap,
        title: "ADS — Análise e Desenvolvimento de Sistemas",
        details: ["Lógica de Programação", "Algoritmos", "Engenharia de Software"],
      },
    ],
  },
];

const CredentialsSection = () => {
  const [activeTab, setActiveTab] = useState("cyber");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [careerProgress, setCareerProgress] = useState(0);

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

  const currentTab = tabs.find((t) => t.id === activeTab)!;

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
          Dashboard de{" "}
          <span className="text-primary text-glow">Auditoria de Conhecimento</span>
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

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-[10px] uppercase tracking-widest font-semibold transition-all border ${
                activeTab === tab.id
                  ? "bg-primary/10 border-primary/40 text-primary shadow-[0_0_10px_hsl(142_71%_45%/0.15)]"
                  : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              [{tab.label}]
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTab.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Tooltip key={item.title}>
                <TooltipTrigger asChild>
                  <div
                    className={`group relative rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_25px_hsl(142_71%_45%/0.12)] cursor-default ${
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
                        {item.title}
                      </h4>
                    </div>

                    <ul className="space-y-2">
                      {item.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-primary text-[8px]">▸</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Mini audit badge */}
                    <div className="mt-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Search size={10} className="text-primary" />
                      <span className="text-[9px] uppercase tracking-widest text-primary/70">
                        VALIDADO_POR_AUDITORIA
                      </span>
                    </div>
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
