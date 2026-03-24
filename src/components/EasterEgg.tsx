import { useEffect } from "react";
import { toast } from "@/hooks/use-toast";

const EasterEgg = () => {
  useEffect(() => {
    let buffer = "";
    const handler = (e: KeyboardEvent) => {
      buffer += e.key.toUpperCase();
      if (buffer.length > 10) buffer = buffer.slice(-10);
      if (buffer.includes("GRC")) {
        buffer = "";
        toast({
          title: "🛡️ [SISTEMA_AUDITADO]",
          description: "CONFORMIDADE_100% — Todos os controles verificados.",
          duration: 4000,
        });
        console.log("[SISTEMA_AUDITADO: CONFORMIDADE_100%]");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return null;
};

export default EasterEgg;
