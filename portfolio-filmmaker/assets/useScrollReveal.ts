import { useEffect, useRef, useState } from "react";

/**
 * True cuando el elemento ENTRA en pantalla por scroll después del montaje.
 *
 * Caso borde cubierto: si al cargar (reload con scroll restaurado) el elemento
 * ya está en pantalla, se marca `instant` — estado final sin animación, porque
 * el usuario no ve animaciones a mitad de página. La animación solo corre
 * cuando es el scroll el que trae el elemento.
 */
export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t0 = performance.now();
    // Ventana de gracia: los scroll events de aquí dentro son la restauración
    // del navegador en un reload (trae la página a media altura), no el usuario.
    // Con Lenis el inercia de un flick del usuario sigue soltando events
    // después de la gracia, así que sigue contando como scroll real.
    const GRACE_MS = 800;

    let scrolled = false;
    const onScroll = () => {
      if (performance.now() - t0 > GRACE_MS) scrolled = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        window.removeEventListener("scroll", onScroll);
        setRevealed(true);
        setInstant(!scrolled);
      },
      { threshold: 0.25, rootMargin: "-60px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { ref, revealed, instant };
}
