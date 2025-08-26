import { useMemo, useState, useEffect, useRef } from "react";
import { api } from "../../../api/client";
import { useAuth } from "../../../auth/AuthContext";
import {
  type FileMeta,
  type FileMetadataDto,
  type PagedResultDto,
  mapDtoToFileMeta,
} from "../../../types/files";

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
  const { role } = useAuth();
  const isAdmin = (role || "").toLowerCase() === "admin";

  const [files, setFiles] = useState<FileMeta[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const pageSize = 100;

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const data = await api.get<PagedResultDto<FileMetadataDto>>(
        `/api/files?page=1&pageSize=${pageSize}`
      );
      const items = (data?.items || []).map(mapDtoToFileMeta);
      setFiles(items);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

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
    const next = new Set(selected);
    if (allSelected) {
      filtered.forEach((f) => next.delete(f.id));
    } else {
      filtered.forEach((f) => next.add(f.id));
    }
    setSelected(next);
  };

  const toggleRow = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const handleDeleteSelected = async () => {
    if (!isAdmin || selected.size === 0) return;
    const ids = Array.from(selected);
    await Promise.allSettled(
      ids.map((id) => api.delete<void>(`/api/files/${id}`))
    );
    setSelected(new Set());
    fetchFiles();
  };

  const handlePreview = async (id: string) => {
    try {
      const blob = await api.getBlob(`/api/files/${id}`); 
      const url = URL.createObjectURL(blob);
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
    } catch {

    }
  };

  const handleDownload = async (id: string, suggestedName: string) => {
    try {
      const blob = await api.getBlob(`/api/files/${id}?download=true`);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = suggestedName || `${id}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch {

    }
  };

  const handleToggleVisibility = async (f: FileMeta) => {
    if (!isAdmin) return;
    try {
      const newVal = !f.isPublic;
      await api.patch<void, undefined>(
        `/api/files/${f.id}/visibility/${newVal}`
      );
      setFiles((cur) =>
        cur.map((x) => (x.id === f.id ? { ...x, isPublic: newVal } : x))
      );
    } catch {
  
    }
  };

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
              {loading ? " • loading…" : ""}
            </div>
          </div>

          <div className="stack-h" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <input
              className="inputField"
              placeholder="Search (name, description, type, extension)…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 320 }}
            />

            <button
              className="sectionButton"
              title={isAdmin ? "Upload" : "Admin only"}
              onClick={() => setShowUploadModal(true)}
              disabled={!isAdmin}
            >
              Upload
            </button>

            <button
              className="sectionButton"
              title={isAdmin ? "Delete selected" : "Admin only"}
              disabled={!isAdmin || selected.size === 0}
              onClick={handleDeleteSelected}
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
              {loading ? "Loading…" : "No files found."}
            </p>
          ) : (
            filtered.map((f) => (
              <article key={f.id} className="card">
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
                    {typeof f.isPublic === "boolean" && (
                      <div className="metaSubtle" style={{ marginTop: 4 }}>
                        Visibility: {f.isPublic ? "Public" : "Private"}
                      </div>
                    )}
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
                      onClick={() => handlePreview(f.id)}
                    >
                      Preview
                    </button>
                    <button
                      className="sectionButton"
                      onClick={() =>
                        handleDownload(f.id, `${f.name}.${f.extension}`)
                      }
                    >
                      Download
                    </button>
                    <button
                      className="sectionButton"
                      title={isAdmin ? "Delete" : "Admin only"}
                      disabled={!isAdmin}
                      onClick={async () => {
                        if (!isAdmin) return;
                        await api.delete<void>(`/api/files/${f.id}`);
                        fetchFiles();
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="sectionButton"
                      title={isAdmin ? "Toggle visibility" : "Admin only"}
                      disabled={!isAdmin || typeof f.isPublic !== "boolean"}
                      onClick={() => handleToggleVisibility(f)}
                    >
                      {f.isPublic ? "Make Private" : "Make Public"}
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
          onUploaded={fetchFiles}
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
  onUploaded: () => Promise<void> | void;
};

const MAX_BYTES = 5 * 1024 * 1024; 
const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "application/pdf",
  "text/csv",
]; 

function UploadModal({ open, onClose, onUploaded }: UploadModalProps) {
  const { role } = useAuth();
  const isAdmin = (role || "").toLowerCase() === "admin";

  const [file, setFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(false);
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
      setIsPublic(false);
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
    if (!isAdmin) return;

    setSubmitting(true);
    try {
      const form = new FormData();
      form.append("File", file!); 
      if (description.trim()) form.append("Description", description.trim()); 
      form.append("IsPublic", String(isPublic)); 

      await api.uploadForm<FileMetadataDto>("/api/files", form);
      await onUploaded();
      onClose();
    } catch (e: any) {
      setError(e?.title || e?.message || "Upload failed");
    } finally {
      setSubmitting(false);
    }
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

          <label
            className="metaSubtle"
            style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
          >
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              disabled={submitting}
            />
            Public
          </label>

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
            disabled={submitting || !!validate(file) || !isAdmin}
            aria-busy={submitting}
            title={isAdmin ? "Upload" : "Admin only"}
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
