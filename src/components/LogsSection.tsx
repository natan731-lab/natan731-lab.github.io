// [SEGMENTO_05]: LOGS_DE_CONHECIMENTO - DOCUMENTATION_REGISTRY
import { useEffect, useRef, useState } from "react";
import { BookOpen, FileText, ExternalLink } from "lucide-react";

const logs = [
  {
    icon: BookOpen,
    title: "Artigos Técnicos (LinkedIn)",
    href: "https://www.linkedin.com/in/natan-correa-sec/recent-activity/articles/",
    hoverText: "[SISTEMA: ACESSANDO_DOCUMENTACAO...]",
  },
  {
    icon: FileText,
    title: "Documentação de Projetos (GitHub)",
    href: "https://github.com/natan731-lab",
    hoverText: "[SISTEMA: ACESSANDO_DOCUMENTACAO...]",
  },
];

const LogsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 scroll-mt-20 border-t border-border bg-card/30" ref={sectionRef}>
      <div
        className={`container mx-auto px-4 max-w-3xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> cat /var/log/knowledge
        </h2>
        <h3 className="mb-3 text-xl sm:text-2xl font-bold text-card-foreground">
          [LOGS_DE_CONHECIMENTO_E_<span className="text-primary text-glow">DOCUMENTACAO</span>]
        </h3>
        <p className="mb-8 text-xs text-muted-foreground tracking-wider">
          Registros técnicos e artigos sobre Governança, Riscos e Desenvolvimento Seguro.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {logs.map((log, i) => {
            const Icon = log.icon;
            return (
              <a
                key={log.title}
                href={log.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(142_71%_45%/0.12)]"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <span className="block text-sm font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {log.title}
                  </span>
                  {hoveredIdx === i && (
                    <span className="block text-[9px] tracking-widest text-primary/60 mt-1 animate-fade-in">
                      {log.hoverText}
                    </span>
                  )}
                </div>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogsSection;
