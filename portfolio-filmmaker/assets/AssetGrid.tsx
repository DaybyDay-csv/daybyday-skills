import { useMemo, useState } from "react";
import { Play } from "lucide-react";
import { assetVisibleOn, type MediaAsset } from "@/data/types";
import { useIsMobile } from "@/hooks/useMediaQuery";
import Lightbox from "./Lightbox";

interface Props {
  assets: MediaAsset[];
}

type Filter = "all" | "video" | "photo";

/**
 * Galería a sangre con filtro: el visitante elige ver todo, solo films o
 * solo fotos. Sin padding lateral, sin gaps.
 * Films horizontales apilados a ancho completo, verticales en un carril con
 * su propio poster desenfocado de fondo (nada de negro), fotos en masonry.
 *
 * La visibilidad se resuelve por dispositivo (assetVisibleOn): en desktop los
 * verticales "auto" no existen — solo aparecen en el teléfono.
 */
const AssetGrid = ({ assets }: Props) => {
  const [open, setOpen] = useState<number | null>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const isMobile = useIsMobile();

  const deviceAssets = useMemo(
    () => assets.filter((a) => assetVisibleOn(a, isMobile ? "mobile" : "desktop")),
    [assets, isMobile],
  );

  const videos = useMemo(() => deviceAssets.filter((a) => a.kind === "video"), [deviceAssets]);
  const photos = useMemo(() => deviceAssets.filter((a) => a.kind === "photo"), [deviceAssets]);

  const visible = filter === "video" ? videos : filter === "photo" ? photos : deviceAssets;

  const landscapeFilms = visible.filter((a) => a.kind === "video" && a.orientation === "landscape");
  const portraitFilms = visible.filter((a) => a.kind === "video" && a.orientation === "portrait");
  const visiblePhotos = visible.filter((a) => a.kind === "photo");

  // El lightbox navega sobre lo que se está viendo, no sobre todo.
  const indexOf = (a: MediaAsset) => visible.findIndex((x) => x.id === a.id);

  const tabs: { id: Filter; label: string; count: number }[] = [
    { id: "all", label: "All", count: deviceAssets.length },
    { id: "video", label: "Films", count: videos.length },
    { id: "photo", label: "Photos", count: photos.length },
  ].filter((t) => t.id === "all" || t.count > 0);

  const Tile = ({ asset, className = "" }: { asset: MediaAsset; className?: string }) => (
    <button
      onClick={() => setOpen(indexOf(asset))}
      className={`group relative block w-full overflow-hidden bg-black ${className}`}
      aria-label={`Abrir ${asset.alt ?? "asset"}`}
    >
      <img
        src={asset.poster}
        alt={asset.alt ?? ""}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      {asset.kind === "video" && (
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Play
            className="h-8 w-8 text-white/85 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
            strokeWidth={1.25}
          />
        </span>
      )}
    </button>
  );

  return (
    <section className="w-full">
      {/* Filtro: el visitante elige qué ver */}
      {tabs.length > 1 && (
        <div className="sticky top-0 z-20 bg-black/85">
          <div className="no-scrollbar mx-auto flex max-w-[1440px] items-center gap-7 overflow-x-auto px-6 py-4 md:px-10">
            {tabs.map((t) => {
              const isActive = filter === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setFilter(t.id);
                    setOpen(null);
                  }}
                  aria-pressed={isActive}
                  className={`smallcaps shrink-0 border-b pb-1 transition-colors duration-300 ${
                    isActive
                      ? "border-[hsl(var(--primary))] text-white"
                      : "border-transparent text-white/60 hover:text-white"
                  }`}
                >
                  {t.label}
                  <span className="ml-2 text-white/35">{String(t.count).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-0">
        {landscapeFilms.map((a) => (
          <Tile key={a.id} asset={a} className="aspect-video" />
        ))}
      </div>

      {portraitFilms.length > 0 && (
        <div className="relative overflow-hidden bg-black">
          <img
            src={portraitFilms[0].poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full scale-110 object-cover opacity-35 blur-2xl"
          />
          <div className="relative flex flex-wrap justify-center gap-0">
            {portraitFilms.map((a) => (
              <Tile
                key={a.id}
                asset={a}
                className="aspect-[9/16] w-full sm:h-[80svh] sm:w-auto sm:aspect-[9/16]"
              />
            ))}
          </div>
        </div>
      )}

      {visiblePhotos.length > 0 && (
        <div className="columns-2 gap-0 md:columns-3">
          {visiblePhotos.map((a) => (
            <Tile key={a.id} asset={a} className="break-inside-avoid" />
          ))}
        </div>
      )}

      {open !== null && (
        <Lightbox assets={visible} index={open} onClose={() => setOpen(null)} onIndex={setOpen} />
      )}
    </section>
  );
};

export default AssetGrid;
