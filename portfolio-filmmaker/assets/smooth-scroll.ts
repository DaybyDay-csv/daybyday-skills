import Lenis from "lenis";

/**
 * Scroll con inercia (estilo preymaker): la rueda se interpola con lerp y
 * el resto de la página (sticky, IntersectionObserver) sigue funcionando
 * porque Lenis mueve el scrollTop real.
 *
 * Touch queda nativo (syncTouch false): en móvil la inercia del sistema es
 * mejor que ninguna. Con prefers-reduced-motion no se inicializa.
 */
let lenis: Lenis | null = null;

export function initSmoothScroll() {
  if (lenis) return lenis;
  if (typeof window === "undefined") return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;

  lenis = new Lenis({
    // lerp bajo = glide largo y lujoso tras el gesto (1.5s hasta asentarse).
    // wheelMultiplier bajo = cada gesto fija el destino MENOS lejos (la
    // inercia recorre la mitad de trayecto); el vuelo dura igual.
    lerp: 0.08,
    wheelMultiplier: 0.55,
    smoothWheel: true,
    syncTouch: false,
  });

  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  let rafId = requestAnimationFrame(raf);

  const destroy = () => {
    cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenis = null;
  };
  // Guarda el destructor para el unmount
  destroyFn = destroy;
  return lenis;
}

let destroyFn: (() => void) | null = null;

export function destroySmoothScroll() {
  destroyFn?.();
  destroyFn = null;
}

export const getLenis = () => lenis;

/** Salto instantáneo (para cambios de ruta/filtro): respeta a Lenis si vive. */
export function scrollToTopImmediate() {
  if (lenis) {
    lenis.scrollTo(0, { immediate: true, force: true });
  } else {
    window.scrollTo(0, 0);
  }
}

/** Congela el scroll (lightbox abierto) y lo libera al cerrar. */
export function lockScroll(lock: boolean) {
  if (!lenis) {
    document.body.style.overflow = lock ? "hidden" : "";
    return;
  }
  if (lock) lenis.stop();
  else lenis.start();
}
