import { createSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import { api, setAuthToken } from "../../api/client";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";
import { useAuth } from "../../auth/AuthContext";
import ResetPasswordModal from "../common/ResetPasswordModal";
import ProfileAvatar from "../common/ProfileAvatar";
import { Endpoints } from "../../constants/Endpoints";
import { formatBytes } from "../../helpers/FileSizeFormat";
import type { ClientMeta } from "../../types/files";

function safeErrMsg(e: any): string {
  return (
    e?.detail ||
    e?.title ||
    e?.message ||
    (typeof e === "string" ? e : "") ||
    "Request failed."
  );
}

export default function UserLayout() {
  const { username, setToken, setUsername, setRole } = useAuth();
  const [pwOpen, setPwOpen] = useState(false);

  const [busy, setBusy] = useState<"download" | "refresh" | null>(null);
  const [error, setError] = useState<string>("");

  const [meta, setMeta] = useState<ClientMeta | null>(null);
  const [metaLoading, setMetaLoading] = useState(false);

  const hasClient = !!meta;

  const displayName = useMemo(() => {
    if (!username) return "";
    const first = username.split(".")[0] || username;
    return first.charAt(0).toUpperCase() + first.slice(1);
  }, [username]);

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

  const handleLogout = () => {
    setAuthToken(null);
    setToken(null);
    setUsername(null);
    setRole(null);

    const qs = createSearchParams({ tab: SideButtonRoutes.Login }).toString();
    window.location.assign(`${PageRoutes.Homepage}?${qs}`);
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
      a.download = meta?.name || "Exovitae.zip";
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

  const downloadDisabled = metaLoading || !!busy || !hasClient;

  const downloadLabel = metaLoading
    ? "Checking availability..."
    : hasClient
    ? busy === "download"
      ? "Downloading..."
      : "Download Game Client"
    : "Download Game Client";

  return (
    <div className="main-layout">
      <section className="info-panel">
        <header className="header" style={{ minHeight: 96 }}>
          <ProfileAvatar />

          <h1 style={{ margin: 0, paddingBottom: 12 }}>
            Welcome {displayName}
          </h1>

          <button
            type="button"
            className="animatedButton playNow"
            onClick={handleDownload}
            disabled={downloadDisabled}
            title={
              hasClient
                ? "Download the latest game client"
                : "No game client available at this time."
            }
            style={{
              opacity: downloadDisabled ? 0.75 : 1,
              cursor: downloadDisabled ? "not-allowed" : "pointer",
            }}
          >
            {busy === "download" || metaLoading ? (
              <span className="spinner" />
            ) : null}
            {downloadLabel}
          </button>

          <div
            className="metaSubtle"
            style={{ marginTop: 10, textAlign: "center" }}
          >
            {metaLoading ? (
              <span></span>
            ) : hasClient ? (
              <>
                <span style={{ display: "block" }}>
                  <strong>{meta?.name}</strong>
                </span>
                <span style={{ display: "block" }}>
                  Size: <strong>{formatBytes(meta?.size)}</strong>
                </span>
              </>
            ) : (
              <span>
                A client build hasn’t been published yet. Please check back
                later.
              </span>
            )}
          </div>
          {busy === "download" ? (
            <div
              className="metaSubtle"
              style={{
                marginTop: 6,
                textAlign: "center",
                fontSize: "0.85rem",
              }}
            >
              Downloading… please avoid refreshing or closing this page.
            </div>
          ) : null}
        </header>

        <div className="details-view">
          <header className="cardHeader">
            <div>
              <h1 style={{ margin: 0, paddingBottom: 12 }}>
                Page is under construction.
              </h1>
              <h1 style={{ margin: 0, paddingBottom: 12 }}>
                Some features may not be fully working.
              </h1>
            </div>
          </header>

          {error ? (
            <div className="errorText" style={{ marginTop: "0.75rem" }}>
              {error}
            </div>
          ) : null}

          <div style={{ marginTop: "0.75rem" }}>
            <button
              className="sectionButton"
              onClick={() => setPwOpen(true)}
              aria-label="Reset password"
              title="Reset password"
              disabled={!!busy}
            >
              Reset Password
            </button>

            <br />
            <br />

            <button
              className="sectionButton"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
              disabled={!!busy}
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      <ResetPasswordModal open={pwOpen} onClose={() => setPwOpen(false)} />
    </div>
  );
}
