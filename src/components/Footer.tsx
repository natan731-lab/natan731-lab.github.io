import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="mb-6 flex items-center justify-center gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_12px_hsl(142_71%_45%/0.2)]"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/natan731-lab"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_12px_hsl(142_71%_45%/0.2)]"
          >
            <Github size={16} />
          </a>
        </div>

        <p className="mb-3 text-sm font-semibold text-card-foreground tracking-wider">
          🛡️ NATAN DIAS CORRÊA // ANALISTA DE SISTEMAS & SEGURANÇA DA INFORMAÇÃO
        </p>

        <p className="text-xs italic text-muted-foreground mb-6">
          "A segurança não é um produto, é um processo." — Bruce Schneier
        </p>

        {/* Watermark */}
        <p className="text-[9px] tracking-widest text-muted-foreground/30 uppercase">
          VER_SYSTEM: v3.0 // ENCRYPTED_CONNECTION: ACTIVE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
