// [SEGMENTO_06]: PROTOCOLO_DE_CONTATO - COMMUNICATION_CHANNELS_ACTIVE
import { useState, FormEvent, useEffect, useRef } from "react";
import { Send, Linkedin, Github, Mail, Phone, Copy, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const channels = [
  {
    icon: Linkedin,
    label: "CONECTAR_VIA_LINKEDIN",
    href: "https://www.linkedin.com/in/natan-correa-sec",
    external: true,
  },
  {
    icon: Github,
    label: "INSPECIONAR_REPOSITORIOS",
    href: "https://github.com/natan731-lab",
    external: true,
  },
  {
    icon: Mail,
    label: "natan.correa.sec@gmail.com",
    href: "mailto:natan.correa.sec@gmail.com",
    copyable: "natan.correa.sec@gmail.com",
    external: false,
  },
  {
    icon: Phone,
    label: "ESTABELECER_LINHA_DIRETA_WHATSAPP",
    href: "https://wa.me/5511984251642",
    copyable: "+55 11 98425-1642",
    external: true,
    isWhatsApp: true,
  },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
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

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    toast({
      title: "📋 DADO_COPIADO_PARA_TRANSFERENCIA",
      description: text,
      duration: 2000,
    });
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="contato" className="py-24 scroll-mt-20" ref={sectionRef}>
      <div
        className={`container mx-auto px-4 max-w-3xl transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="mb-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          <span className="text-primary">$</span> ssh contact@natan_correa
        </h2>
        <h3 className="mb-12 text-2xl sm:text-3xl font-bold text-card-foreground">
          Protocolo de <span className="text-primary text-glow">Contato</span>
        </h3>

        {/* Matriz de Conexão */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2">
          {channels.map((ch, i) => {
            const Icon = ch.icon;
            return (
              <div key={ch.label} className="flex items-center gap-2">
                <a
                  href={ch.href}
                  target={ch.external ? "_blank" : undefined}
                  rel={ch.external ? "noopener noreferrer" : undefined}
                  className={`group flex-1 flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3.5 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_hsl(142_71%_45%/0.15)] ${
                    ch.isWhatsApp ? "hover:bg-primary/10" : ""
                  }`}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-md transition-colors ${
                    ch.isWhatsApp ? "bg-primary/20 text-primary" : "bg-primary/10 text-primary"
                  } group-hover:bg-primary/25`}>
                    <Icon size={18} />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-card-foreground group-hover:text-primary transition-colors">
                    {ch.label}
                  </span>
                </a>
                {ch.copyable && (
                  <button
                    onClick={() => handleCopy(ch.copyable!, i)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/40 hover:text-primary hover:shadow-[0_0_10px_hsl(142_71%_45%/0.2)]"
                    aria-label={`Copiar ${ch.copyable}`}
                    title="Copiar"
                  >
                    {copiedIdx === i ? <Check size={14} className="text-primary" /> : <Copy size={14} />}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {/* Formulário */}
        <div className="rounded-lg border border-dashed border-border bg-card p-6 sm:p-8">
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

            {sending && (
              <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full animate-[loading_1.5s_ease-in-out] bg-primary rounded-full" />
              </div>
            )}

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
