// [SEGMENTO_01]: HEADER_OPERACIONAL - COMMAND_CENTER_VERIFIED
import { useState, useEffect } from "react";
import { Menu, X, ShieldAlert, FileDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const navItems = [
  { label: "SOBRE", href: "#sobre" },
  { label: "PROJETOS", href: "#projetos" },
  { label: "CERTIFICAÇÕES", href: "#certificações" },
  { label: "GRC", href: "#grc" },
  { label: "CONTATO", href: "#contato" },
];

const fullTitle = "🛡️ NATAN_DIAS_CORRÊA_OS";
const cvLink = "https://drive.google.com/file/d/16P3WW8aUhgjFZ0G9_0eu-4XoQhJCtjKC/view?usp=drive_link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [cvHover, setCvHover] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayedTitle(fullTitle.slice(0, i));
      if (i >= fullTitle.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full" style={{ background: "hsl(45, 93%, 47%)" }} />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="text-sm font-bold tracking-wider text-primary text-glow">
            {displayedTitle}
            {!typingDone && <span className="animate-blink">▊</span>}
          </span>
        </div>

        {/* Center Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative px-3 py-1 text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              [{item.label}]
              <span className="absolute bottom-0 left-3 right-3 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* CV Download Button */}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCvHover(true)}
            onMouseLeave={() => setCvHover(false)}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-md border border-primary/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_15px_hsl(142_71%_45%/0.3)]"
          >
            <FileDown size={12} />
            {cvHover ? "DOWNLOAD_INICIADO" : "EXPORTAR_CV_PDF"}
          </a>

          <span className="hidden lg:flex items-center gap-2 text-[11px] text-muted-foreground">
            SISTEMA:{" "}
            <span className="flex items-center gap-1.5 text-primary font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-blink" />
              LIVE
            </span>
          </span>

          {/* High Contrast Toggle */}
          <button
            onClick={() => setHighContrast(!highContrast)}
            className="hidden sm:flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_hsl(142_71%_45%/0.2)]"
            aria-label="Alternar modo de alto contraste"
            title="Modo de Emergência"
          >
            <ShieldAlert size={14} />
          </button>

          {/* Profile mini avatar */}
          <div className="hidden sm:block relative group">
            <img
              src={profilePhoto}
              alt="Foto de Natan Dias Corrêa"
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover border-2 border-border transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_12px_hsl(142_71%_45%/0.4)]"
            />
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-primary">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              {">"} [{item.label}]
            </a>
          ))}
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-primary/80"
          >
            <FileDown size={14} />
            EXPORTAR_CV_PDF
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
