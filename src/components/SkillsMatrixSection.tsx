import { useState, useEffect, useRef } from "react";
import { Shield, Radar, Code2 } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

const columns = [
  {
    icon: Radar,
    tag: "CYBER_DEFENSE",
    title: "Cibersegurança",
    skills: [
      { name: "Defesa de Perímetro", level: 85 },
      { name: "Monitoramento SIEM (Análise de Incidentes)", level: 80 },
      { name: "Python para Automação de Segurança", level: 72 },
    ],
  },
  {
    icon: Shield,
    tag: "GOVERNANCE_GRC",
    title: "GRC & Riscos",
    skills: [
      { name: "Frameworks de Controle (NIST/ISO 27001)", level: 88 },
      { name: "Gestão de Riscos Operacionais", level: 90 },
      { name: "Conformidade com a LGPD", level: 92 },
    ],
  },
  {
    icon: Code2,
    tag: "TECH_STACK",
    title: "Desenvolvimento",
    skills: [
      { name: "Análise e Desenvolvimento de Sistemas (ADS)", level: 78 },
      { name: "Estrutura de Dados & SQL", level: 74 },
      { name: "Integração de APIs Seguras", level: 70 },
    ],
  },
];

const tools = [
  "Linux", "Python", "SQL", "SIEM Tools", "IAM", "React", "PostgreSQL", "NIST", "ISO 27001", "LGPD"
];

const SkillBar = ({ skill, animate }: { skill: Skill; animate: boolean }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="rounded-md border border-border bg-secondary/20 px-4 py-3 transition-all duration-300 hover:border-primary/30 hover:bg-primary/[0.03] cursor-default"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] text-card-foreground">{skill.name}</span>
        <span
          className={`text-[9px] uppercase tracking-widest font-medium transition-all duration-300 ${
            hovered ? "text-primary" : "text-muted-foreground/50"
          }`}
        >
          {hovered ? "[SISTEMA_AUDITADO: NIVEL_PROFISSIONAL_DETECTADO]" : "STATUS: OTIMIZADO"}
        </span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div
          className={`h-full rounded-full bg-primary transition-all ease-out ${
            hovered ? "shadow-[0_0_8px_hsl(142_71%_45%/0.5)] animate-pulse" : ""
          }`}
          style={{
            width: animate ? `${skill.level}%` : "0%",
            transitionDuration: "1.2s",
          }}
        />
      </div>
    </div>
  );
};

const SkillsMatrixSection = () => {
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
    <section id="grc" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> nmap --scan-skills --verbose
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Matriz de Habilidades &{" "}
          <span className="text-primary text-glow">Compliance</span>
        </h3>

        <div className="grid gap-6 lg:grid-cols-3">
          {columns.map((col, colIdx) => {
            const Icon = col.icon;
            return (
              <div
                key={col.tag}
                className={`group rounded-lg border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_20px_hsl(142_71%_45%/0.08)] ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: visible ? `${colIdx * 150}ms` : "0ms" }}
              >
                <div className="mb-1 text-[9px] tracking-widest text-primary/60">[{col.tag}]</div>
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h4 className="text-sm font-bold text-card-foreground">{col.title}</h4>
                </div>
                <div className="space-y-3">
                  {col.skills.map((skill) => (
                    <SkillBar key={skill.name} skill={skill} animate={visible} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tool Tags */}
        <div className={`mt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <h4 className="mb-4 text-[10px] uppercase tracking-widest text-muted-foreground text-center">
            {">"} Stack de Ferramentas
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-primary/20 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold tracking-widest text-primary transition-all hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_10px_hsl(142_71%_45%/0.15)] cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-[11px] text-muted-foreground/60 tracking-wider">
          Matriz atualizada em conformidade com os padrões (ISC)² e Google Cybersecurity.
        </p>
      </div>
    </section>
  );
};

export default SkillsMatrixSection;
