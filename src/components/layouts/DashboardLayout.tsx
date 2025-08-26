import { useEffect, useState, useRef } from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";
import { setAuthToken } from "../../api/client";
import { useAuth } from "../../auth/AuthContext";
import { PageRoutes } from "../../constants/PageRoutes";
import { SideButtonRoutes } from "../../constants/SideButtonRoutes";

import { DashBoardButtonRoutes } from "../../constants/DashBoardButtonRoutes";
import {
  dashboardItemList,
  type DashboardItem,
} from "../../constants/DashboardtemList";
import OverviewSection from "../sections/DashboardSections/OverviewSection";
import ManageFeedbackSection from "../sections/DashboardSections/ManageFeedbackSection";
import ManageFilesSection from "../sections/DashboardSections/ManageFilesSection";
import HealthStatus from "../elements/HealthStatus";
import RegistrationSection from "../sections/DashboardSections/RegistrationSection";
import UserManagementSection from "../sections/DashboardSections/UserManagementSection";
import { api } from "../../api/client"; 

export default function DashboardLayout() {
  const { setToken, username, setUsername, role } = useAuth();
  const isAdmin = (role || "").toLowerCase() === "admin";

  const [searchParams, setSearchParams] = useSearchParams();

  const tabParamRaw = (searchParams.get("tab") || "").toLowerCase();
  const validRoutes = Object.values(DashBoardButtonRoutes);
  const isValid = validRoutes.includes(
    tabParamRaw as (typeof validRoutes)[number]
  );

  useEffect(() => {
    if (!isValid) {
      setSearchParams(
        { tab: DashBoardButtonRoutes.Overview },
        { replace: true }
      );
    }
  }, [isValid, setSearchParams]);

  const selected = isValid
    ? (tabParamRaw as (typeof validRoutes)[number])
    : DashBoardButtonRoutes.Overview;

  const handleSideButtonOnClick = (linkTo: (typeof validRoutes)[number]) => {
    setSearchParams({ tab: linkTo }, { replace: true });
  };

  const handleLogout = () => {
    setAuthToken(null);
    setToken(null);
    setUsername(null);
    window.location.assign(
      `${PageRoutes.Homepage}?${createSearchParams({
        tab: SideButtonRoutes.Login,
      })}`
    );
  };

  const renderSection = () => {
    switch (selected) {
      case DashBoardButtonRoutes.Overview:
        return (
          <OverviewSection
            username={
              username
                ? username.charAt(0).toUpperCase() + username.slice(1)
                : null
            }
          />
        );
      case DashBoardButtonRoutes.FeedBack:
        return <ManageFeedbackSection />;
      case DashBoardButtonRoutes.Files:
        return <ManageFilesSection />;
      case DashBoardButtonRoutes.Register:
        return <RegistrationSection />;
      case DashBoardButtonRoutes.Users:
        return <UserManagementSection />;
      default:
        return <h1>Not Found</h1>;
    }
  };

  // ========= Reset Password Modal state =========
  const [pwOpen, setPwOpen] = useState(false);

  return (
    <div className="main-layout">
      <aside className="side-bar">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <img
            src="default_profile_icon.png"
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              marginBottom: "0.5rem",
              border: "2px solid #2196f3",
            }}
            alt="Profile"
          />
          <div style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}>
            <div
              style={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}
            >
              {username
                ? username.charAt(0).toUpperCase() + username.slice(1)
                : ""}
            </div>
          </div>
        </div>

        {dashboardItemList
          .filter((item: DashboardItem) =>
            isAdmin
              ? true
              : item.linkTo !== DashBoardButtonRoutes.Users &&
                item.linkTo !== DashBoardButtonRoutes.Register
          )
          .map((item: DashboardItem) => (
            <button
              key={item.name}
              className={`sideBarItemButton ${
                selected === item.linkTo ? "selected" : ""
              }`}
              onClick={() => handleSideButtonOnClick(item.linkTo)}
              disabled={item.disabled}
              title={item.tooltip}
              style={{ marginBottom: "2rem" }}
            >
              {item.name}
            </button>
          ))}
      </aside>

      <section className="info-panel">
        <header
          className="header"
          style={{ width: "100%", position: "relative", minHeight: 96 }}
        >
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 8,
              zIndex: 10,
              display: "flex",
              gap: 8,
            }}
          >
            <button
              className="sectionButton"
              onClick={handleLogout}
              aria-label="Logout"
              title="Logout"
            >
              Logout
            </button>
            <button
              className="sectionButton"
              onClick={() => setPwOpen(true)}
              aria-label="Reset password"
              title="Reset password"
            >
              Reset Password
            </button>
          </div>
          <HealthStatus />
        </header>

        <div className="details-view">{renderSection()}</div>
      </section>

      <ResetPasswordModal open={pwOpen} onClose={() => setPwOpen(false)} />
    </div>
  );
}

type ResetPasswordRequest = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

function ResetPasswordModal({
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
      await api.patch<void, ResetPasswordRequest>("/api/auth/me/password", {
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

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !submitting) onClose();
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
      onClick={onOverlayClick}
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
