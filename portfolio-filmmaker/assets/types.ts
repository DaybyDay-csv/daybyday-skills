import type { CategoryId, TrackId } from "./categories";

export type Orientation = "landscape" | "portrait";

/**
 * Dónde se muestra el asset:
 * - auto (default): vertical SOLO en móvil, horizontal en ambos.
 * - mobile / desktop: únicamente en ese dispositivo (el override del admin).
 */
export type Visibility = "auto" | "mobile" | "desktop";

/** Regla de visibilidad por dispositivo. Una sola fuente de verdad para galería y covers. */
export const assetVisibleOn = (
  a: Pick<MediaAsset, "visibility" | "orientation">,
  device: "mobile" | "desktop",
): boolean => {
  const v = a.visibility ?? "auto";
  if (v === "mobile") return device === "mobile";
  if (v === "desktop") return device === "desktop";
  // auto: el vertical vive solo en el teléfono; el horizontal va en los dos
  return device === "mobile" ? true : a.orientation === "landscape";
};

export interface MediaAsset {
  id: string;
  kind: "video" | "photo";
  orientation: Orientation;
  visibility?: Visibility;
  /** Cloudflare Stream UID (producción) */
  streamId?: string;
  /** Vertical 9:16 para móvil, si existe */
  portraitStreamId?: string;
  /** Fallback local mientras no hay Stream */
  mp4?: string;
  portraitMp4?: string;
  poster: string;
  portraitPoster?: string;
  alt?: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: CategoryId;
  track: TrackId;
  year?: number;
  location?: string;
  /** Una línea. Es lo que se lee en el reel. */
  summary: string;
  /** Dos o tres frases. Página de proyecto. */
  description: string;
  services: string[];
  cover: MediaAsset;
  /** Primer asset visible en móvil (puede ser vertical); fallback = cover. */
  coverMobile?: MediaAsset;
  assets: MediaAsset[];
  /** Orden manual dentro de su categoría */
  order: number;
}
