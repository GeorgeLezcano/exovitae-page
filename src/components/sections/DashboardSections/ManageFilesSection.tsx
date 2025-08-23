import { useMemo, useState, useEffect, useRef } from "react";

type FileMeta = {
  id: string;
  name: string;
  description?: string;
  type: string;
  extension: string;
  sizeBytes: number;
  uploadedAt: string;
};

const demoFiles: FileMeta[] = [
  {
    id: "f_01a2b3c4",
    name: "image1",
    description: "Some Random image",
    type: "image/png",
    extension: "png",
    sizeBytes: 1_234_567,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: "f_05aa22dd",
    name: "SomeDocument",
    description: "Stuff",
    type: "application/pdf",
    extension: "pdf",
    sizeBytes: 3_456_789,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    id: "f_9988ff00",
    name: "SomeData",
    description: "Sample CSV export",
    type: "text/csv",
    extension: "csv",
    sizeBytes: 456_789,
    uploadedAt: new Date(Date.now() - 1000 * 60 * 7).toISOString(),
  },
];

function formatBytes(n: number | undefined): string {
  if (!n || n <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(
    Math.floor(Math.log(n) / Math.log(1024)),
    units.length - 1
  );
  const v = n / Math.pow(1024, i);
  return `${v.toFixed(v >= 100 || i === 0 ? 0 : v >= 10 ? 1 : 2)} ${units[i]}`;
}

export default function ManageFilesSection() {
  const [useDemo, setUseDemo] = useState(true);
  const [files, setFiles] = useState<FileMeta[]>(demoFiles);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showUploadModal, setShowUploadModal] = useState(false);

  const toggleDemo = (checked: boolean) => {
    setUseDemo(checked);
    setSelected(new Set());
    setFiles(checked ? demoFiles : []);
  };

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return files;
    return files.filter(
      (f) =>
        (f.name + "." + f.extension).toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q) ||
        f.extension.toLowerCase().includes(q) ||
        (f.description ?? "").toLowerCase().includes(q)
    );
  }, [files, search]);

  const totalSize = useMemo(
    () => files.reduce((sum, f) => sum + (f.sizeBytes || 0), 0),
    [files]
  );

  const allSelected =
    filtered.length > 0 && filtered.every((f) => selected.has(f.id));
  const toggleSelectAll = () => {
    if (allSelected) {
      const next = new Set(selected);
      filtered.forEach((f) => next.delete(f.id));
      setSelected(next);
    } else {
      const next = new Set(selected);
      filtered.forEach((f) => next.add(f.id));
      setSelected(next);
    }
  };

  const toggleRow = (id: string) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const disabledBecauseNoAPI = true;

  return (
    <div className="sectionShell">
      <section className="sectionCard">
        <h1 className="pageTitle">File Management</h1>
        <p className="pageSubtitle">
          Upload, preview, download, and organize files
        </p>
        <div className="accentDivider" />

        <div className="sectionHeader">
          <div>
            <div className="metaSubtle">
              <strong>{files.length}</strong> file
              {files.length !== 1 ? "s" : ""} •{" "}
              <strong>{formatBytes(totalSize)}</strong> total
            </div>
          </div>

          <div className="stack-h" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <label
              className="metaSubtle"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <input
                type="checkbox"
                checked={useDemo}
                onChange={(e) => toggleDemo(e.target.checked)}
              />
              Demo data
            </label>

            <input
              className="inputField"
              placeholder="Search (name, description, type, extension)…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 320 }}
            />

            <button
              className="sectionButton"
              title="Upload (coming soon)"
              onClick={() => setShowUploadModal(true)}
            >
              Upload
            </button>

            <button
              className="sectionButton"
              title="Delete selected (coming soon)"
              disabled={disabledBecauseNoAPI || selected.size === 0}
            >
              Delete Selected
            </button>
          </div>
        </div>

        <div className="card" style={{ marginBottom: "0.75rem" }}>
          <div
            className="stack-h"
            style={{
              display: "grid",
              gridTemplateColumns: "28px 2fr 1fr 110px 180px 1fr",
              gap: "0.75rem",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleSelectAll}
              aria-label="Select all"
            />
            <div className="metaSubtle">Name / Description</div>
            <div className="metaSubtle">Type</div>
            <div className="metaSubtle" style={{ textAlign: "right" }}>
              Size
            </div>
            <div className="metaSubtle" style={{ textAlign: "right" }}>
              Uploaded
            </div>
            <div className="metaSubtle" style={{ textAlign: "right" }}>
              Actions
            </div>
          </div>
        </div>

        <div className="listStack">
          {filtered.length === 0 ? (
            <p style={{ marginTop: "0.5rem" }}>
              {files.length === 0
                ? "No files yet. Flip on “Demo data” to preview the layout."
                : "No files match your search."}
            </p>
          ) : (
            filtered.map((f, idx) => (
              <article key={f.id || `row-${idx}`} className="card">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "28px 2fr 1fr 110px 180px 1fr",
                    gap: "0.75rem",
                    alignItems: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selected.has(f.id)}
                    onChange={() => toggleRow(f.id)}
                    aria-label={`Select ${f.name}.${f.extension}`}
                  />

                  <div style={{ overflow: "hidden" }}>
                    <strong className="breakText">
                      {f.name}.{f.extension}
                    </strong>
                    {f.description ? (
                      <div
                        className="metaSubtle breakText"
                        style={{ marginTop: "0.15rem" }}
                      >
                        {f.description}
                      </div>
                    ) : null}
                  </div>

                  <div className="metaSubtle breakText">{f.type}</div>

                  <div style={{ textAlign: "right" }}>
                    {formatBytes(f.sizeBytes)}
                  </div>

                  <div
                    className="metaSubtle"
                    style={{ textAlign: "right", whiteSpace: "nowrap" }}
                  >
                    {new Date(f.uploadedAt).toLocaleString()}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="sectionButton"
                      disabled
                      title="Preview (coming soon)"
                    >
                      Preview
                    </button>
                    <button
                      className="sectionButton"
                      disabled
                      title="Download (coming soon)"
                    >
                      Download
                    </button>
                    <button
                      className="sectionButton"
                      disabled
                      title="Delete (coming soon)"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        <UploadModal
          open={showUploadModal}
          onClose={() => setShowUploadModal(false)}
          onUploadedPlaceholder={(f) => {
            const full = f.name.trim();
            const dot = full.lastIndexOf(".");
            const base = dot > 0 ? full.slice(0, dot) : full;
            const ext = dot > 0 ? full.slice(dot + 1).toLowerCase() : "bin";

            setFiles((cur) => [
              {
                id: `temp_${Date.now()}`,
                name: base || "untitled",
                description: f.description,
                type: f.type || "application/octet-stream",
                extension: ext,
                sizeBytes: f.size,
                uploadedAt: new Date().toISOString(),
              },
              ...cur,
            ]);
          }}
        />
      </section>
    </div>
  );
}

/* ==============
   Upload Modal 
   ==============*/

type UploadModalProps = {
  open: boolean;
  onClose: () => void;
  onUploadedPlaceholder: (file: {
    name: string;
    size: number;
    type: string;
    description?: string;
  }) => void;
};

const MAX_BYTES = 20 * 1024 * 1024; // 20MB placeholder
const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "text/csv",
]; // tweak later

function UploadModal({
  open,
  onClose,
  onUploadedPlaceholder,
}: UploadModalProps) {
  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => fileInputRef.current?.focus(), 0);
      const onKey = (e: KeyboardEvent) =>
        e.key === "Escape" && !submitting && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      setFile(null);
      setDescription("");
      setError("");
      setSubmitting(false);
    }
  }, [open, onClose, submitting]);

  if (!open) return null;

  const validate = (f: File | null) => {
    if (!f) return "Please choose a file.";
    if (f.size > MAX_BYTES)
      return `File too large (max ${Math.round(
        MAX_BYTES / (1024 * 1024)
      )} MB).`;
    if (!ALLOWED_TYPES.includes(f.type))
      return `Unsupported type: ${f.type || "unknown"}.`;
    return "";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const f = e.target.files?.[0] ?? null;
    setFile(f);
    const err = validate(f);
    if (err) setError(err);
  };

  const handleSubmit = async () => {
    const err = validate(file);
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);

    setTimeout(() => {
      if (file) {
        onUploadedPlaceholder({
          name: file.name,
          size: file.size,
          type: file.type || "application/octet-stream",
          description: description.trim() || undefined,
        });
      }
      setSubmitting(false);
      onClose();
    }, 800);
  };

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !submitting) onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-title"
      onClick={onOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        padding: "1rem",
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
          width: "100%",
          maxWidth: 520,
          backgroundColor: "rgba(17, 24, 39, 0.96)",
          borderColor: "#2196f3",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cardHeader">
          <strong id="upload-title">Upload File</strong>
        </div>

        <div className="stack-v" style={{ gap: "0.75rem" }}>
          <input
            ref={fileInputRef}
            className="inputField"
            type="file"
            onChange={handleFileChange}
            disabled={submitting}
            aria-describedby="upload-error"
          />

          <input
            className="inputField"
            placeholder="Description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={submitting}
          />

          <div className="generalErrorSlot" id="upload-error">
            {error ? <span className="errorText">{error}</span> : <span />}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
            marginTop: "0.75rem",
          }}
        >
          <button
            className="sectionButton"
            onClick={handleSubmit}
            disabled={submitting || !!validate(file)}
            aria-busy={submitting}
            title="Upload"
          >
            {submitting ? "Uploading…" : "Upload"}
          </button>

          <button
            className="sectionButton"
            onClick={onClose}
            disabled={submitting}
            title="Close"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
