import { useEffect, useRef } from "react";

export type AdminResetPasswordModalProps = {
  open: boolean;
  email: string;
  submitting: boolean;
  tempPassword: string | null;
  errorText: string;
  onClose: () => void;
  onConfirm: () => void;
};

export default function AdminResetPasswordModal({
  open,
  email,
  submitting,
  tempPassword,
  errorText,
  onClose,
  onConfirm,
}: AdminResetPasswordModalProps) {
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstFocusRef.current?.focus(), 0);
      const onKey = (e: KeyboardEvent) =>
        e.key === "Escape" && !submitting && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [open, submitting, onClose]);

  if (!open) return null;

  const copyTemp = async () => {
    if (!tempPassword) return;
    try {
      await navigator.clipboard.writeText(tempPassword);
    } catch {}
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resetpw-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
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
          <strong id="resetpw-title">Reset Password</strong>
        </div>

        <div className="stack-v" style={{ gap: "0.75rem" }}>
          {!tempPassword ? (
            <>
              <div className="metaSubtle">
                Generate a temporary password for{" "}
                <strong>{email || "(no-email)"}</strong>. The user will be able
                to log in with it and then change their password.
              </div>

              <div className="generalErrorSlot" role="alert">
                {submitting ? (
                  <span className="spinner"></span>
                ) : (
                  errorText && <span className="errorText">{errorText}</span>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="metaSubtle">
                Temporary password generated for <strong>{email}</strong>:
              </div>

              <div
                className="card"
                style={{
                  padding: "0.75rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <code
                  style={{
                    fontFamily:
                      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    fontSize: "0.95rem",
                    userSelect: "all",
                  }}
                >
                  {tempPassword}
                </code>
                <button
                  className="sectionButton"
                  onClick={copyTemp}
                  title="Copy temp password"
                >
                  Copy
                </button>
              </div>

              <div className="metaSubtle">
                Share this temporary password securely with the user. They
                should change it after their next login.
              </div>
            </>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "0.5rem",
            marginTop: "0.75rem",
          }}
        >
          {!tempPassword ? (
            <>
              <button
                ref={firstFocusRef}
                className="sectionButton"
                onClick={onConfirm}
                disabled={submitting || !email}
                aria-busy={submitting}
                title="Generate temporary password"
              >
                {submitting ? "Generating…" : "Generate Temp Password"}
              </button>
              <button
                className="sectionButton"
                onClick={onClose}
                disabled={submitting}
                title="Close"
              >
                Close
              </button>
            </>
          ) : (
            <button className="sectionButton" onClick={onClose} title="Done">
              Done
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
