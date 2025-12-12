import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "../../../api/client";
import { useAuth } from "../../../auth/AuthContext";
import { AppRoles } from "../../../constants/AppRoles";
import { Endpoints } from "../../../constants/Endpoints";
import { formatBytes } from "../../../helpers/FileSizeFormat";
import type { ClientMeta } from "../../../types/files";

function safeErrMsg(e: any): string {
  return (
    e?.detail ||
    e?.title ||
    e?.message ||
    (typeof e === "string" ? e : "") ||
    "Request failed."
  );
}

export default function GameClientSection() {
  const { role } = useAuth();
  const isAdmin = (role || "") === AppRoles.Admin;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [meta, setMeta] = useState<ClientMeta | null>(null);
  const [metaLoading, setMetaLoading] = useState(false);

  const [busy, setBusy] = useState<
    "upload" | "delete" | "download" | "refresh" | null
  >(null);
  const [error, setError] = useState<string>("");

  const hasClient = !!meta;

  const prettyName = useMemo(() => {
    if (!meta?.name) return "Exovitae.zip";
    return meta.name;
  }, [meta]);

  const refreshMetadata = async () => {
    setMetaLoading(true);
    setError("");
    try {
      const data = await api.get<ClientMeta>(
        `${Endpoints.Files}/game-client/metadata`
      );
      setMeta(data ?? null);
    } catch (e: any) {
      const msg = safeErrMsg(e);
      const looksLikeNotFound =
        (msg || "").toLowerCase().includes("not found") ||
        (msg || "").toLowerCase().includes("no game client");

      setMeta(null);
      if (!looksLikeNotFound) setError(msg);
    } finally {
      setMetaLoading(false);
    }
  };

  useEffect(() => {
    refreshMetadata();
  }, []);

  const openFilePicker = () => {
    if (!isAdmin) return;
    if (busy) return;
    if (hasClient) return;
    setError("");
    fileInputRef.current?.click();
  };

  const doUpload = async (file: File) => {
    if (!isAdmin) return;
    if (busy) return;

    setBusy("upload");
    setError("");

    try {
      const form = new FormData();
      form.append("File", file, file.name);

      const data = await api.uploadForm<ClientMeta>(
        `${Endpoints.Files}/game-client`,
        form
      );

      setMeta(data ?? null);
    } catch (e: any) {
      setError(safeErrMsg(e));
    } finally {
      setBusy(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const onFileChosen = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const lower = (file.name || "").toLowerCase();
    const isZipByName = lower.endsWith(".zip");
    const isZipByType =
      (file.type || "").toLowerCase() === "application/zip" ||
      (file.type || "").toLowerCase() === "application/x-zip-compressed";

    if (!isZipByName && !isZipByType) {
      setError("Please select a .zip file for the game client.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    await doUpload(file);
  };

  const handleDownload = async () => {
    if (busy) return;
    if (!hasClient) return;

    setBusy("download");
    setError("");

    try {
      const blob = await api.getBlob(`${Endpoints.Files}/game-client`);
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = prettyName || "Exovitae.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => URL.revokeObjectURL(url), 10_000);
    } catch (e: any) {
      setError(safeErrMsg(e));
    } finally {
      setBusy(null);
    }
  };

  const handleDelete = async () => {
    if (!isAdmin) return;
    if (busy) return;
    if (!hasClient) return;

    setBusy("delete");
    setError("");

    try {
      await api.delete<void>(`${Endpoints.Files}/game-client`);
      setMeta(null);
    } catch (e: any) {
      setError(safeErrMsg(e));
    } finally {
      setBusy(null);
    }
  };

  const handleRefresh = async () => {
    if (busy) return;
    setBusy("refresh");
    try {
      await refreshMetadata();
    } finally {
      setBusy(null);
    }
  };

  const uploadDisabled = !isAdmin || !!busy || hasClient;
  const deleteDisabled = !isAdmin || !!busy || !hasClient;
  const downloadDisabled = !!busy || !hasClient;

  return (
    <div className="sectionShell">
      <section className="sectionCard">
        <h1 className="pageTitle">Game Client</h1>
        <p className="pageSubtitle">
          Admins can add, remove, or download the client
        </p>
        <div className="accentDivider" />

        <div className="sectionHeader" style={{ marginBottom: 0 }}>
          <div>
            <div className="metaSubtle">
              {metaLoading ? (
                <>
                  <span className="spinner" />
                </>
              ) : hasClient ? (
                <>
                  Status: <strong>Available</strong>
                </>
              ) : (
                <>
                  Status: <strong>Not uploaded</strong>
                </>
              )}
            </div>
          </div>

          <div className="stack-h" style={{ gap: "0.5rem", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={openFilePicker}
              className="sectionButton"
              disabled={uploadDisabled}
              title={
                !isAdmin
                  ? "Admin only"
                  : hasClient
                  ? "A client is already uploaded. Delete it first."
                  : "Upload a game client ZIP"
              }
              style={{ whiteSpace: "nowrap" }}
            >
              {busy === "upload" ? <span className="spinner" /> : null}
              {busy === "upload" ? "Uploading…" : "Upload"}
            </button>

            <button
              type="button"
              onClick={handleDelete}
              className="sectionButton"
              disabled={deleteDisabled}
              title={
                !isAdmin
                  ? "Admin only"
                  : !hasClient
                  ? "No client to delete"
                  : "Delete client"
              }
              style={{ whiteSpace: "nowrap" }}
            >
              {busy === "delete" ? <span className="spinner" /> : null}
              {busy === "delete" ? "Deleting…" : "Delete"}
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="sectionButton"
              disabled={downloadDisabled}
              title={
                !hasClient ? "No client to download" : "Download client ZIP"
              }
              style={{ whiteSpace: "nowrap" }}
            >
              {busy === "download" ? <span className="spinner" /> : null}
              {busy === "download" ? "Downloading..." : "Download"}
            </button>

            <button
              type="button"
              onClick={handleRefresh}
              className="sectionButton"
              disabled={!!busy}
              title="Refresh metadata"
              style={{ whiteSpace: "nowrap" }}
            >
              {busy === "refresh" ? <span className="spinner" /> : null}
              {busy === "refresh" ? "Refreshing…" : "Refresh"}
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".zip,application/zip,application/x-zip-compressed"
              style={{ display: "none" }}
              onChange={onFileChosen}
            />
          </div>
        </div>

        {error ? (
          <div className="errorText" style={{ marginTop: "0.75rem" }}>
            {error}
          </div>
        ) : null}

        <div className="listStack" style={{ marginTop: "0.75rem" }}>
          <article className="card">
            <header className="cardHeader">
              <div className="metaSubtle" style={{ textAlign: "right" }}>
                {hasClient && meta?.uploadedAt
                  ? `Uploaded: ${new Date(meta.uploadedAt).toLocaleString()}`
                  : ""}
              </div>
            </header>

            <div
              className="stack-h"
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                gap: "0.75rem",
                alignItems: "start",
              }}
            >
              <div>
                <div className="metaSubtle">Name</div>
                <div className="breakText" style={{ fontWeight: 600 }}>
                  {hasClient ? meta?.name : "—"}
                </div>
              </div>

              <div>
                <div className="metaSubtle">Size</div>
                <div style={{ fontWeight: 600 }}>
                  {hasClient ? formatBytes(meta?.size) : "—"}
                </div>
              </div>

              <div>
                <div className="metaSubtle">Content Type</div>
                <div className="breakText" style={{ fontWeight: 600 }}>
                  {hasClient ? meta?.type : "—"}
                </div>
              </div>
            </div>

            {!hasClient ? (
              <div style={{ marginTop: "0.75rem", color: "#94a3b8" }}></div>
            ) : null}
          </article>
        </div>
      </section>
    </div>
  );
}
