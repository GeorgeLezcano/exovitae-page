import { useEffect, useRef, useState } from "react";
import { api } from "../../api/client";
import { Endpoints } from "../../constants/Endpoints";

type ResetPasswordRequest = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export default function ResetPasswordModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ResetPasswordRequest, string>>
  >({});

  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 0);
      const onKey = (e: KeyboardEvent) =>
        e.key === "Escape" && !submitting && onClose();
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    } else {
      setCurrent("");
      setNext("");
      setConfirm("");
      setSubmitting(false);
      setGeneralError("");
      setFieldErrors({});
    }
  }, [open, onClose, submitting]);

  if (!open) return null;

  const validate = () => {
    const errs: Partial<Record<keyof ResetPasswordRequest, string>> = {};
    if (!current.trim()) errs.currentPassword = "Current password is required.";
    if (!next.trim()) errs.newPassword = "New password is required.";
    if (!confirm.trim())
      errs.confirmNewPassword = "Confirm password is required.";
    if (next && confirm && next !== confirm) {
      errs.confirmNewPassword = "Confirmation does not match the new password.";
    }
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submit = async () => {
    setGeneralError("");
    setFieldErrors({});
    if (!validate()) return;

    setSubmitting(true);
    try {
      await api.patch<void, ResetPasswordRequest>(Endpoints.ResetPassword, {
        currentPassword: current,
        newPassword: next,
        confirmNewPassword: confirm,
      });
      onClose();
    } catch (err: any) {
      const title = err?.title || err?.message || "Password change failed.";
      const errors = err?.errors as Record<string, string[]> | undefined;

      const mapped: Partial<Record<keyof ResetPasswordRequest, string>> = {};
      if (errors) {
        if (errors.currentPassword?.length)
          mapped.currentPassword = errors.currentPassword[0];
        if (errors.newPassword?.length)
          mapped.newPassword = errors.newPassword[0];
        if (errors.confirmNewPassword?.length)
          mapped.confirmNewPassword = errors.confirmNewPassword[0];
        if (errors.password?.length && !mapped.newPassword)
          mapped.newPassword = errors.password[0];
      }

      setFieldErrors(mapped);
      setGeneralError(title);
    } finally {
      setSubmitting(false);
    }
  };

  const disabledSubmit =
    submitting ||
    current.trim().length === 0 ||
    next.trim().length === 0 ||
    confirm.trim().length === 0 ||
    next !== confirm;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="pw-title"
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
          <strong id="pw-title">Change Password</strong>
        </div>

        <div className="stack-v" style={{ gap: "0.75rem" }}>
          <div className="field">
            <input
              ref={firstInputRef}
              className={`inputField ${
                fieldErrors.currentPassword ? "inputError" : ""
              }`}
              type="password"
              placeholder="Current password"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              aria-invalid={!!fieldErrors.currentPassword}
              aria-describedby="err-current"
              disabled={submitting}
            />
            <span id="err-current" className="errorFloat">
              {fieldErrors.currentPassword}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${
                fieldErrors.newPassword ? "inputError" : ""
              }`}
              type="password"
              placeholder="New password"
              value={next}
              onChange={(e) => setNext(e.target.value)}
              aria-invalid={!!fieldErrors.newPassword}
              aria-describedby="err-new"
              disabled={submitting}
            />
            <span id="err-new" className="errorFloat">
              {fieldErrors.newPassword}
            </span>
          </div>

          <div className="field">
            <input
              className={`inputField ${
                fieldErrors.confirmNewPassword ? "inputError" : ""
              }`}
              type="password"
              placeholder="Confirm new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              aria-invalid={!!fieldErrors.confirmNewPassword}
              aria-describedby="err-confirm"
              disabled={submitting}
            />
            <span id="err-confirm" className="errorFloat">
              {fieldErrors.confirmNewPassword}
            </span>
          </div>

          <div className="generalErrorSlot" role="alert">
            {submitting ? (
              <span className="spinner"></span>
            ) : (
              generalError && <span className="errorText">{generalError}</span>
            )}
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
            onClick={submit}
            disabled={disabledSubmit}
            aria-busy={submitting}
            title="Update Password"
          >
            {submitting ? "Updating…" : "Update Password"}
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
