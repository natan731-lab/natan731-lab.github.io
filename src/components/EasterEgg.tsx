// [SEGMENTO_08]: EASTER_EGG_GRC - SECURITY_AUDIT_SIMULATION
import { useEffect, useRef, useState, useCallback } from "react";
import { toast } from "@/hooks/use-toast";

const MatrixRain = ({ onComplete }: { onComplete: () => void }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = "01アイウエオカキクケコGRCNATAN🛡️";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(2, 6, 23, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#22c55e";
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

const EasterEgg = () => {
  const [showMatrix, setShowMatrix] = useState(false);

  const handleComplete = useCallback(() => {
    setShowMatrix(false);
    toast({
      title: "🛡️ [SISTEMA_AUDITADO]",
      description: "CONFORMIDADE_100%_DETECTADA — Todos os controles verificados com sucesso.",
      duration: 5000,
    });
  }, []);

  useEffect(() => {
    let buffer = "";
    const handler = (e: KeyboardEvent) => {
      buffer += e.key.toUpperCase();
      if (buffer.length > 10) buffer = buffer.slice(-10);
      if (buffer.includes("GRC")) {
        buffer = "";
        if (!showMatrix) {
          setShowMatrix(true);
          console.log("[SISTEMA_AUDITADO: CONFORMIDADE_100%]");
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showMatrix]);

  return showMatrix ? <MatrixRain onComplete={handleComplete} /> : null;
};

export default EasterEgg;
