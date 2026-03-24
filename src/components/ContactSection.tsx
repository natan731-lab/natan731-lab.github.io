import { useState, FormEvent, useEffect, useRef } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    }, 1800);
  };

  return (
    <section id="contato" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div
        className={`container mx-auto px-4 max-w-2xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> ssh contact@natan_correa
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Protocolo de <span className="text-primary text-glow">Contato</span>
        </h3>

        <div className="rounded-lg border border-dashed border-border bg-card p-6 sm:p-8">
          {/* Terminal bar */}
          <div className="mb-6 flex items-center gap-2 border-b border-border pb-4">
            <span className="text-[10px] tracking-widest text-primary uppercase font-semibold">
              [INICIAR_PROTOCOLO_DE_COMUNICACAO]
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} ID_REMETENTE (Nome completo)
              </label>
              <input
                type="text"
                required
                aria-label="Nome completo"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} CANAL_DE_RESPOSTA (E-mail profissional)
              </label>
              <input
                type="email"
                required
                aria-label="E-mail profissional"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-widest text-muted-foreground">
                {">"} RELATÓRIO_MENSAGEM (Proposta ou dúvida)
              </label>
              <textarea
                required
                rows={5}
                aria-label="Mensagem"
                className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-card-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                placeholder="Descreva sua solicitação..."
              />
            </div>

            {/* Loading bar */}
            {sending && (
              <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full animate-[loading_1.5s_ease-in-out] bg-primary rounded-full" />
              </div>
            )}

            {/* Success message */}
            {sent && (
              <div className="rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                  ✓ DADOS_TRANSMITIDOS_COM_SUCESSO
                </p>
                <p className="text-[10px] text-muted-foreground mt-1">
                  AGUARDE_RESPOSTA_DO_OPERADOR
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={sending || sent}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:shadow-[0_0_20px_hsl(142_71%_45%/0.4)] disabled:opacity-60"
            >
              <Send size={14} />
              {sent ? "✓ DADOS_TRANSMITIDOS" : sending ? "TRANSMITINDO..." : "TRANSMITIR_DADOS_ENVIAR"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
