import { useMemo, useState, useEffect } from "react";
import { api } from "../../../api/client";
import { useAuth } from "../../../auth/AuthContext";
import {
  type FileMeta,
  type FileMetadataDto,
  type PagedResultDto,
  mapDtoToFileMeta,
} from "../../../types/files";
import UploadModal from "../../elements/UploadModal";
import PreviewModal from "../../elements/PreviewModal";
import { Endpoints } from "../../../constants/Endpoints";
import { AppRoles } from "../../../constants/AppRoles";

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
  const isAdmin = (role || "") === AppRoles.Admin;

  const [files, setFiles] = useState<FileMeta[]>([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [previewName, setPreviewName] = useState<string>("");
  const [previewMime, setPreviewMime] = useState<string | undefined>(undefined);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState<string | null>(null);

  const pageSize = 100;

  const fetchFiles = async () => {
    setLoading(true);
    try {
      const data = await api.get<PagedResultDto<FileMetadataDto>>(
        `${Endpoints.Files}?page=1&pageSize=${pageSize}`
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
      ids.map((id) => api.delete<void>(`${Endpoints.Files}/${id}`))
    );
    setSelected(new Set());
    fetchFiles();
  };

  const openPreview = async (id: string, suggestedName: string) => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }

    setPreviewName(suggestedName);
    setPreviewError(null);
    setPreviewLoading(true);
    setPreviewOpen(true);

    try {
      const blob = await api.getBlob(`${Endpoints.Files}/${id}`);
      setPreviewMime(blob.type || undefined);
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url);
    } catch (e: any) {
      setPreviewError(e?.title || e?.message || "Failed to load preview.");
    } finally {
      setPreviewLoading(false);
    }
  };

  const closePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    setPreviewOpen(false);
    setPreviewName("");
    setPreviewMime(undefined);
    setPreviewError(null);
    setPreviewLoading(false);
  };

  const handleDownload = async (id: string, suggestedName: string) => {
    try {
      const blob = await api.getBlob(`${Endpoints.Files}/${id}?download=true`);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = suggestedName || `${id}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch {}
  };

  const handleToggleVisibility = async (f: FileMeta) => {
    if (!isAdmin) return;
    try {
      const newVal = !f.isPublic;
      await api.patch<void, undefined>(
        `${Endpoints.Files}/${f.id}/visibility/${newVal}`
      );
      setFiles((cur) =>
        cur.map((x) => (x.id === f.id ? { ...x, isPublic: newVal } : x))
      );
    } catch {}
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
              placeholder="Search Files"
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
                      onClick={() =>
                        openPreview(f.id, `${f.name}.${f.extension}`)
                      }
                      title="Preview inline"
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
                        await api.delete<void>(`${Endpoints.Files}/${f.id}`);
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

        <PreviewModal
          open={previewOpen}
          fileName={previewName}
          mimeType={previewMime}
          objectUrl={previewUrl}
          loading={previewLoading}
          errorText={previewError}
          onClose={closePreview}
          onDownload={
            previewUrl
              ? () => {
                  const a = document.createElement("a");
                  a.href = previewUrl;
                  a.download = previewName || "download";
                  document.body.appendChild(a);
                  a.click();
                  a.remove();
                }
              : undefined
          }
          onOpenNewTab={
            previewUrl
              ? () => window.open(previewUrl, "_blank", "noopener,noreferrer")
              : undefined
          }
        />
      </section>
    </div>
  );
}
