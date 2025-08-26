import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { api } from "../../api/client";
import { type FileMetadataDto } from "../../types/files";
import { Endpoints } from "../../constants/Endpoints";

export type UploadModalProps = {
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

export default function UploadModal({
  open,
  onClose,
  onUploaded,
}: UploadModalProps) {
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

      await api.uploadForm<FileMetadataDto>(Endpoints.Files, form);
      await onUploaded();
      onClose();
    } catch (e: any) {
      setError(e?.title || e?.message || "Upload failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upload-title"
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
