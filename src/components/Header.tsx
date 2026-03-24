import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Sobre", "Projetos", "Certificações", "GRC", "Contato"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Left: Mac dots + Title */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-destructive" />
            <span className="h-3 w-3 rounded-full" style={{ background: "hsl(45, 93%, 47%)" }} />
            <span className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <span className="text-sm font-bold tracking-wider text-primary text-glow">
            🛡️ NATAN_CORREA_OS
          </span>
        </div>

        {/* Center: Nav (desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Status */}
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground font-medium">
            STATUS:{" "}
            <span className="flex items-center gap-1 text-primary">
              [<span className="inline-block h-2 w-2 rounded-full bg-primary animate-blink" />
              LIVE]
            </span>
          </span>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-primary"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-xs uppercase tracking-widest text-muted-foreground hover:text-primary"
            >
              {">"} {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
