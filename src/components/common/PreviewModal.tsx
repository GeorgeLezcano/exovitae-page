import { useEffect, useRef } from "react";

export type PreviewModalProps = {
  open: boolean;
  fileName: string;
  mimeType: string | undefined;
  objectUrl: string | null;
  loading: boolean;
  errorText: string | null;
  onClose: () => void;
  onDownload?: () => void;
  onOpenNewTab?: () => void;
};

export default function PreviewModal({
  open,
  fileName,
  mimeType,
  objectUrl,
  loading,
  errorText,
  onClose,
  onDownload,
  onOpenNewTab,
}: PreviewModalProps) {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    setTimeout(() => firstFocusRef.current?.focus(), 0);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const isImage = !!mimeType && mimeType.startsWith("image/");
  const isPdf = mimeType === "application/pdf";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="preview-title"
      onClick={onOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        padding: "2rem 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        className="card"
        style={{
          width: "min(1200px, 96vw)",
          height: "min(80vh, 900px)",
          backgroundColor: "rgba(17, 24, 39, 0.96)",
          borderColor: "#2196f3",
          display: "flex",
          flexDirection: "column",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="cardHeader"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flex: "0 0 auto",
          }}
        >
          <strong id="preview-title" className="breakText" title={fileName}>
            Preview — {fileName}
          </strong>

          <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
            {onDownload && (
              <button
                className="sectionButton"
                onClick={onDownload}
                title="Download"
              >
                Download
              </button>
            )}
            {onOpenNewTab && (
              <button
                className="sectionButton"
                onClick={onOpenNewTab}
                title="Open in new tab"
              >
                Open in new tab
              </button>
            )}
            <button
              ref={firstFocusRef}
              className="sectionButton"
              onClick={onClose}
              title="Close"
            >
              Close
            </button>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            flex: "1 1 auto",
            minHeight: 0,
            overflow: "hidden",
            borderTop: "1px solid rgba(33,150,243,0.25)",
          }}
        >
          {loading ? (
            <div
              style={{
                height: "100%",
                display: "grid",
                placeItems: "center",
                padding: "1rem",
              }}
            >
              <span className="spinner" />
            </div>
          ) : errorText ? (
            <div
              style={{
                height: "100%",
                display: "grid",
                placeItems: "center",
                padding: "1rem",
              }}
            >
              <span className="errorText">{errorText}</span>
            </div>
          ) : !objectUrl ? (
            <div
              style={{
                height: "100%",
                display: "grid",
                placeItems: "center",
                padding: "1rem",
              }}
            >
              <span className="metaSubtle">No preview available.</span>
            </div>
          ) : isImage ? (
            <div
              style={{
                height: "100%",
                width: "100%",
                overflow: "auto",
                display: "grid",
                placeItems: "center",
                padding: "0.5rem",
              }}
            >
              <img
                src={objectUrl}
                alt={fileName}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          ) : isPdf ? (
            <iframe
              title="PDF preview"
              src={objectUrl}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            />
          ) : (
            <iframe
              title="File preview"
              src={objectUrl}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
