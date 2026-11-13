import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** Cortina de transición entre páginas (cinematográfica, no un fade suave). */
const COVER_MS = 480;
const REVEAL_MS = 560;
/** Con "reducir movimiento" (típico en iPhone) no se quita: se hace un
 *  cross-fade corto, sin desplazamiento. Quitarlo del todo hacía que la
 *  página cambiara de golpe en el móvil. */
const COVER_RM_MS = 260;
const REVEAL_RM_MS = 340;

type Phase = "idle" | "cover" | "reveal";

/**
 * Transición entre páginas: al pulsar un enlace interno, la pantalla funde a
 * negro, se navega con la página nueva ya montada detrás y se revela mientras
 * corre su animación de apertura. Sin tocar el layout ni el sticky del reel:
 * todo va en una capa fija por encima.
 *
 * Se intercepta el click en captura, así cubre todos los <Link> del site sin
 * tocar cada componente. Respeta cmd/ctrl/shift, target, descargas, enlaces
 * externos y anclas. Con `prefers-reduced-motion` usa un cross-fade corto.
 */
const PageTransition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phase, setPhase] = useState<Phase>("idle");

  const pending = useRef<string | null>(null); // ruta a la que vamos
  const navigating = useRef(false); // hay una transición en curso
  const prevPath = useRef(location.pathname);
  const timers = useRef<number[]>([]);
  const durations = useRef({ cover: COVER_MS, reveal: REVEAL_MS });

  const clearTimers = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => clearTimers, []);

  // 1) Interceptar el click en un enlace interno
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (navigating.current) return;

      const anchor = (e.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || href.startsWith("//")) return;

      const url = new URL(href, window.location.origin);
      if (url.pathname === window.location.pathname) return; // misma ruta: router normal

      e.preventDefault();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      durations.current = {
        cover: reduce ? COVER_RM_MS : COVER_MS,
        reveal: reduce ? REVEAL_RM_MS : REVEAL_MS,
      };
      navigating.current = true;
      pending.current = url.pathname + url.search;
      setPhase("cover");

      timers.current.push(
        window.setTimeout(() => {
          if (pending.current) navigate(pending.current);
        }, durations.current.cover)
      );

      // Red de seguridad: si la navegación no llega, no dejar la cortina puesta
      timers.current.push(
        window.setTimeout(() => {
          navigating.current = false;
          pending.current = null;
          setPhase("idle");
        }, durations.current.cover + 2000)
      );
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);

  // 2) La ruta nueva ya está montada: revelar con su apertura en marcha
  useEffect(() => {
    if (prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;
    if (!navigating.current) return; // navegación normal (atrás/adelante)

    clearTimers();
    pending.current = null;
    setPhase("reveal");
    timers.current.push(
      window.setTimeout(() => {
        navigating.current = false;
        setPhase("idle");
      }, durations.current.reveal)
    );
  }, [location.pathname]);

  return (
    <div
      aria-hidden
      data-page-transition
      className="pointer-events-none fixed inset-0 z-[95] bg-black"
      style={{
        opacity: phase === "cover" ? 1 : 0,
        transitionProperty: "opacity",
        transitionTimingFunction:
          phase === "cover"
            ? "cubic-bezier(0.65, 0, 0.35, 1)"
            : "cubic-bezier(0.37, 0, 0.63, 1)",
        transitionDuration: `${
          phase === "cover" ? durations.current.cover : durations.current.reveal
        }ms`,
      }}
    />
  );
};

export default PageTransition;
