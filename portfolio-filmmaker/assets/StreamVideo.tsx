import { useEffect, useRef, useState } from "react";
import type { MediaAsset } from "@/data/types";
import { useIsMobile } from "@/hooks/useMediaQuery";

interface Props {
  asset: MediaAsset;
  /** Solo el panel visible reproduce. El resto queda pausado en su poster. */
  active?: boolean;
  /** Precarga el vídeo aunque no esté activo (siguiente panel). */
  preload?: boolean;
  className?: string;
  /** object-position para el recorte en móvil */
  objectPosition?: string;
  /** true = silenciado (por defecto). Los lightboxes lo desactivan. */
  muted?: boolean;
}

/**
 * Vídeo de fondo con MP4 servido desde el propio sitio.
 * El poster pinta primero y el vídeo entra encima cuando puede reproducir.
 */
const StreamVideo = ({
  asset,
  active = false,
  preload = false,
  className = "",
  objectPosition = "center",
  muted = true,
}: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const isMobile = useIsMobile();

  const src = isMobile ? (asset.portraitMp4 ?? asset.mp4) : asset.mp4;
  const poster = isMobile ? (asset.portraitPoster ?? asset.poster) : asset.poster;

  useEffect(() => {
    setReady(false);
    const video = videoRef.current;
    if (!video || !src) return;
    if (video.currentSrc !== new URL(src, window.location.href).href) {
      video.src = src;
      video.load();
    }
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (active) {
      const attempt = video.play();
      if (attempt) attempt.catch(() => undefined);
    } else {
      video.pause();
    }
  }, [active]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = muted;
    if (!muted) {
      video.play().catch(() => undefined);
    }
  }, [muted]);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      {poster && (
        <img
          src={poster}
          alt={asset.alt ?? ""}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
          style={{ objectPosition }}
          loading={active || preload ? "eager" : "lazy"}
          fetchPriority={active ? "high" : "auto"}
          decoding="async"
        />
      )}

      {src && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          style={{ objectPosition }}
          muted={muted}
          loop
          playsInline
          autoPlay
          disablePictureInPicture
          preload={active || preload ? "auto" : "none"}
          poster={poster}
          onCanPlay={() => setReady(true)}
        />
      )}
    </div>
  );
};

export default StreamVideo;
