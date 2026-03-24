import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-md border border-primary/40 bg-background/80 backdrop-blur-sm px-3 py-2 text-primary transition-all hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(142_71%_45%/0.3)] animate-fade-in"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={16} />
      <span className="text-[9px] uppercase tracking-widest hidden sm:inline">REBOOT_SCROLL</span>
    </button>
  );
};

export default ScrollToTop;
