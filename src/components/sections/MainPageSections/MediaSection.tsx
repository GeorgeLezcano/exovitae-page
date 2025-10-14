import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Endpoints } from "../../../constants/Endpoints";
import { api, BASE_URL } from "../../../api/client";
import type { FileMetadataDto, PagedResultDto } from "../../../types/files";

const fileSrc = (id: string, bust = 0) =>
  `${BASE_URL}${Endpoints.Files}/${id}${bust ? `?v=${bust}` : ""}`;

export default function MediaSection() {
  const [items, setItems] = useState<FileMetadataDto[]>([]);
  const [loadingList, setLoadingList] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [idx, setIdx] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);
  const [imgError, setImgError] = useState<string | null>(null);
  const [bust, setBust] = useState(0);
  const [zoom, setZoom] = useState(false);

  const pageSize = 48;
  const current = items[idx];

  useEffect(() => {
    (async () => {
      setLoadingList(true);
      setErr(null);
      try {
        const res = await api.get<PagedResultDto<FileMetadataDto>>(
          `${Endpoints.PublicFiles}?page=1&pageSize=${pageSize}`
        );
        const list = (res.items ?? []).filter((it) =>
          it.type?.toLowerCase().startsWith("image/")
        );
        setItems(list);
        setIdx(0);
      } catch (e: any) {
        setErr(e?.message ?? "Failed to load media.");
      } finally {
        setLoadingList(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (!current) return;
    const preload = (i: number) => {
      if (i < 0 || i >= items.length) return;
      const img = new Image();
      img.src = fileSrc(items[i].id);
    };
    preload(idx + 1);
    preload(idx - 1);
  }, [idx, items, current]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (zoom && e.key === "Escape") return setZoom(false);
      if (e.key === "ArrowRight")
        setIdx((i) => Math.min(items.length - 1, i + 1));
      if (e.key === "ArrowLeft") setIdx((i) => Math.max(0, i - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoom, items.length]);

  const frameRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [nat, setNat] = useState<{ w: number; h: number } | null>(null);
  const [outline, setOutline] = useState<{ w: number; h: number } | null>(null);

  useEffect(() => {
    setImgLoading(true);
    setImgError(null);
    setBust(0);
    const t = setTimeout(() => {
      if (imgRef.current && imgRef.current.complete) {
        setImgLoading(false);
        if (imgRef.current.naturalWidth && imgRef.current.naturalHeight) {
          setNat({
            w: imgRef.current.naturalWidth,
            h: imgRef.current.naturalHeight,
          });
        }
      }
    }, 0);
    return () => clearTimeout(t);
  }, [current?.id]);

  const computeOutline = () => {
    const fr = frameRef.current;
    const n = nat;
    if (!fr || !n) return setOutline(null);
    const cw = fr.clientWidth;
    const ch = fr.clientHeight;
    if (!cw || !ch || !n.w || !n.h) return setOutline(null);

    const rImg = n.w / n.h;
    const rBox = cw / ch;

    if (rBox > rImg) {
      const h = ch;
      const w = Math.round(h * rImg);
      setOutline({ w, h });
    } else {
      const w = cw;
      const h = Math.round(w / rImg);
      setOutline({ w, h });
    }
  };

  useLayoutEffect(() => {
    computeOutline();
  }, [nat, idx]);

  useEffect(() => {
    const onResize = () => computeOutline();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const canPrev = idx > 0;
  const canNext = idx < items.length - 1;

  return (
    <div className="sectionShell flushTop">
      <style>{`
        .descClamp {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="sectionCard" style={{ maxWidth: "1200px" }}>
        <h1 className="pageTitle">Media</h1>
        <p className="pageSubtitle">Browse Game Images</p>
        <div className="accentDivider" />

        {/* header: arrows (left) + count (right) */}
        <div
          className="sectionHeader"
          style={{ gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}
        >
          <div className="stack-h" style={{ gap: "0.5rem", flexShrink: 0 }}>
            <button
              className="sectionButton"
              onClick={() => setIdx((i) => Math.max(0, i - 1))}
              disabled={!canPrev}
              aria-label="Previous"
              title="Previous"
              style={{ minWidth: 56 }}
            >
              ←
            </button>
            <button
              className="sectionButton"
              onClick={() => setIdx((i) => Math.min(items.length - 1, i + 1))}
              disabled={!canNext}
              aria-label="Next"
              title="Next"
              style={{ minWidth: 56 }}
            >
              →
            </button>
          </div>

          <div
            className="metaSubtle"
            style={{ whiteSpace: "nowrap", marginLeft: "auto" }}
          >
            {loadingList
              ? "Loading…"
              : items.length
              ? `Image ${idx + 1} of ${items.length}`
              : ""}
          </div>
        </div>

        {err && (
          <div className="errorText" style={{ textAlign: "center" }}>
            {err}
          </div>
        )}

        {/* preview stage */}
        <div
          ref={frameRef}
          style={{
            height: "clamp(130px, 24vh, 220px)",
            background: "#0b0f1a",
            borderRadius: 8,
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            marginTop: "0.5rem",
          }}
        >
          {current ? (
            <>
              {imgLoading && !imgError && (
                <div
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "rgba(0,0,0,0.5)",
                    borderRadius: 6,
                    padding: "6px 8px",
                  }}
                >
                  <span className="spinner" />
                </div>
              )}

              {!imgError ? (
                <>
                  <img
                    ref={imgRef}
                    key={current.id}
                    src={fileSrc(current.id, bust)}
                    alt={current.name}
                    loading="eager"
                    decoding="async"
                    onLoad={(e) => {
                      const el = e.currentTarget;
                      setNat({
                        w: el.naturalWidth || 0,
                        h: el.naturalHeight || 0,
                      });
                      setImgLoading(false);
                    }}
                    onError={() => {
                      setImgLoading(false);
                      setImgError("Failed to load image.");
                    }}
                    onClick={() => setZoom(true)}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      cursor: "zoom-in",
                      display: "block",
                      userSelect: "none",
                    }}
                  />

                  {outline && (
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: `${outline.w}px`,
                        height: `${outline.h}px`,
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                        boxShadow: "0 0 0 1px rgba(33,150,243,0.55)",
                        borderRadius: 6,
                      }}
                    />
                  )}
                </>
              ) : (
                <div style={{ textAlign: "center" }}>
                  <div className="errorText" style={{ marginBottom: 8 }}>
                    {imgError}
                  </div>
                  <button
                    className="sectionButton"
                    onClick={() => {
                      setImgError(null);
                      setImgLoading(true);
                      setBust(Date.now());
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="metaSubtle">No Images to display</div>
          )}
        </div>

        {/* description aligned to the actual rendered image width */}
        {!!(current?.description && current.description.trim()) && (
          <div
            className="descClamp"
            title={current!.description!}
            style={{
              width: outline ? outline.w : "min(100%, 900px)",
              margin: "0.5rem auto 0",
              textAlign: "center",
              color: "#a8d9ff",
              fontSize: "1rem",
              lineHeight: 1.5,
              paddingInline: "0.5rem",
            }}
          >
            {current!.description}
          </div>
        )}

        {loadingList && (
          <div style={{ textAlign: "center", padding: "1rem" }}>
            <span className="spinner" />
          </div>
        )}
      </div>
      {zoom && current && (
        <Lightbox
          src={fileSrc(current.id)}
          alt={current.name}
          onClose={() => setZoom(false)}
        />
      )}
    </div>
  );
}

function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt?: string;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+") zoomIn();
      if (e.key === "-") zoomOut();
      if (e.key.toLowerCase() === "r") resetZoom();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY < 0) zoomIn();
      else zoomOut();
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const clampOffset = (nx: number, ny: number) => {
    const frame = frameRef.current;
    if (!frame) return { x: nx, y: ny };
    const cw = frame.clientWidth;
    const ch = frame.clientHeight;
    const maxX = (cw * (scale - 1)) / 2;
    const maxY = (ch * (scale - 1)) / 2;
    return {
      x: Math.min(Math.max(nx, -maxX), maxX),
      y: Math.min(Math.max(ny, -maxY), maxY),
    };
  };

  const setScaleClamped = (v: number) => {
    const nv = Math.min(Math.max(v, 1), 3);
    setScale(nv);
    if (nv === 1) setOffset({ x: 0, y: 0 });
    else setOffset((o) => clampOffset(o.x, o.y));
  };

  const zoomIn = () => setScaleClamped(scale + 0.25);
  const zoomOut = () => setScaleClamped(scale - 0.25);
  const resetZoom = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale === 1) return;
    dragging.current = true;
    dragStart.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging.current) return;
    const nx = e.clientX - dragStart.current.x;
    const ny = e.clientY - dragStart.current.y;
    setOffset(clampOffset(nx, ny));
  };
  const onMouseUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "2rem",
      }}
    >
      <div
        className="card"
        ref={frameRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          width: "min(95vw, 1200px)",
          height: "min(90vh, 900px)",
          padding: 0,
          background: "#0b0f1a",
          border: "1px solid #2196f3",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          cursor:
            scale > 1 ? (dragging.current ? "grabbing" : "grab") : "default",
        }}
      >
        <img
          src={src}
          alt={alt}
          onDoubleClick={() => setScaleClamped(scale === 1 ? 2 : 1)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${scale})`,
            transformOrigin: "center center",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            gap: "0.5rem",
            background: "rgba(0,0,0,0.7)",
            padding: "6px",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
            border: "1px solid rgba(33,150,243,0.6)",
          }}
        >
          <button
            className="sectionButton"
            onClick={zoomOut}
            aria-label="Zoom out"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderColor: "#2196f3",
            }}
          >
            −
          </button>
          <button
            className="sectionButton"
            onClick={zoomIn}
            aria-label="Zoom in"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderColor: "#2196f3",
            }}
          >
            +
          </button>
          <button
            className="sectionButton"
            onClick={resetZoom}
            aria-label="Reset"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderColor: "#2196f3",
            }}
          >
            Reset
          </button>
          <button
            className="sectionButton"
            onClick={onClose}
            aria-label="Close"
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              color: "#fff",
              borderColor: "#2196f3",
            }}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
