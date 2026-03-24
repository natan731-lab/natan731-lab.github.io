// [SEGMENTO_07]: FOOTER_PROFISSIONAL - COMPLIANCE_LAYER_ACTIVE
import { useState, useEffect } from "react";
import { Linkedin, Github, Shield } from "lucide-react";

const Footer = () => {
  const [latency, setLatency] = useState(42);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(28 + Math.random() * 35));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/natan-correa-sec"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Natan Dias Corrêa"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_12px_hsl(142_71%_45%/0.2)]"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/natan731-lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Natan Dias Corrêa"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_12px_hsl(142_71%_45%/0.2)]"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="mb-3 text-sm font-semibold text-card-foreground tracking-wider">
          🛡️ NATAN DIAS CORRÊA // SEGURANÇA DA INFORMAÇÃO & GRC // 2026
        </p>

        <p className="text-xs italic text-muted-foreground mb-4">
          "A segurança não é um produto, é um processo." — Bruce Schneier
        </p>

        {/* Privacy by Design Notice */}
        <p className="text-[10px] text-muted-foreground/60 mb-4 tracking-wider">
          🔐 PRIVACY_BY_DESIGN: Este sistema foi desenvolvido respeitando a LGPD. Nenhum dado sensível é coletado sem consentimento explícito do operador.
        </p>

        {/* Vulnerability Report */}
        <a
          href="mailto:natan.correa.sec@gmail.com?subject=[VULNERABILITY_REPORT]: Portfólio v3.0"
          className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-muted-foreground/40 hover:text-primary transition-colors mb-6"
        >
          Encontrou um bug? [REPORTAR_VULNERABILIDADE]
        </a>

        {/* Dynamic latency + Watermark */}
        <div className="flex items-center justify-center gap-4 text-[9px] tracking-widest text-muted-foreground/30 uppercase">
          <span>VER_SYSTEM: v3.0 // ENCRYPTED_CONNECTION: ACTIVE</span>
          <span className="text-primary/30">
            LATÊNCIA_DA_CONEXÃO: {latency}ms
          </span>
        </div>

        {/* Audit seal */}
        <div className="mt-6 flex items-center justify-center gap-2 opacity-50">
          <Shield size={12} className="text-primary/50" />
          <span className="text-[8px] tracking-[0.2em] text-muted-foreground/40 uppercase">
            [STATUS: AUDITADO_POR_NATAN_DIAS_CORRÊA]
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
