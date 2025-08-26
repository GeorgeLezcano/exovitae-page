import { useEffect, useState, useRef } from "react";
import { api } from "../../../api/client";

type UserInfo = {
  id?: string | null;
  username: string | null;
  email: string | null;
  role: string | null;
  enabled: boolean;
};

type SetRoleForm = {
  email: string;
  role: "Admin" | "User";
  replaceExisting?: boolean;
};

type SetUserStatusForm = {
  email: string;
  enabled: boolean;
};

async function fetchUsers(): Promise<UserInfo[]> {
  return await api.get<UserInfo[]>("/api/auth/users");
}

async function setUserRole(input: SetRoleForm): Promise<UserInfo> {
  return await api.post<UserInfo, SetRoleForm>("/api/auth/set-role", {
    ...input,
    replaceExisting: input.replaceExisting ?? true,
  });
}

async function setUserEnabled(input: SetUserStatusForm): Promise<void> {
  await api.post<void, SetUserStatusForm>("/api/auth/set-enabled", input);
}

async function adminResetPassword(
  email: string
): Promise<{ temporaryPassword: string }> {
  return await api.post<{ temporaryPassword: string }, {}>(
    `/api/auth/users/${encodeURIComponent(email)}/reset-password`,
    {}
  );
}

export default function UserManagementSection() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<string | null>(null);

  const [roleBusy, setRoleBusy] = useState<Record<string, boolean>>({});
  const [enabledBusy, setEnabledBusy] = useState<Record<string, boolean>>({});

  const [resetOpen, setResetOpen] = useState(false);
  const [resetTargetEmail, setResetTargetEmail] = useState<string>("");
  const [resetting, setResetting] = useState(false);
  const [resetError, setResetError] = useState<string>("");
  const [tempPassword, setTempPassword] = useState<string | null>(null);

  const refresh = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchUsers();
      setUsers(data);
      setLastRefreshed(new Date().toLocaleString());
    } catch (e: any) {
      setError(
        e?.response?.status === 403
          ? "You must be an admin to view users."
          : "Failed to load users."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refresh();
  }, []);

  const updateUserLocal = (email: string, patch: Partial<UserInfo>) => {
    setUsers((cur) =>
      cur.map((u) =>
        u.email?.toLowerCase() === email.toLowerCase() ? { ...u, ...patch } : u
      )
    );
  };

  const handleRoleChange = async (email: string, newRole: "Admin" | "User") => {
    if (!email) return;
    setError("");

    const prev = users.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase()
    );
    updateUserLocal(email, { role: newRole });
    setRoleBusy((m) => ({ ...m, [email]: true }));

    try {
      await setUserRole({ email, role: newRole, replaceExisting: true });
    } catch (e: any) {
      if (prev) updateUserLocal(email, { role: prev.role ?? "User" });
      if (e?.response?.status === 400 && e.response.data?.errors?.role?.[0]) {
        setError(e.response.data.errors.role[0]);
      } else if (e?.response?.status === 404) {
        setError("User not found.");
      } else if (e?.response?.status === 403) {
        setError("You must be an admin to set roles.");
      } else {
        setError("Failed to update role.");
      }
    } finally {
      setRoleBusy((m) => ({ ...m, [email]: false }));
    }
  };

  const handleToggleEnabled = async (email: string, nextEnabled: boolean) => {
    if (!email) return;
    setError("");

    const prev = users.find(
      (u) => u.email?.toLowerCase() === email.toLowerCase()
    );
    updateUserLocal(email, { enabled: nextEnabled });
    setEnabledBusy((m) => ({ ...m, [email]: true }));

    try {
      await setUserEnabled({ email, enabled: nextEnabled });
    } catch (e: any) {
      if (prev) updateUserLocal(email, { enabled: prev.enabled });
      if (e?.response?.status === 400 && e.response.data?.errors?.email?.[0]) {
        setError(e.response.data.errors.email[0]);
      } else if (e?.response?.status === 404) {
        setError("User not found.");
      } else if (e?.response?.status === 403) {
        setError("You must be an admin to change status.");
      } else {
        setError("Failed to update user status.");
      }
    } finally {
      setEnabledBusy((m) => ({ ...m, [email]: false }));
    }
  };

  const openResetModal = (email: string) => {
    setResetTargetEmail(email);
    setResetError("");
    setTempPassword(null);
    setResetOpen(true);
  };

  return (
    <div className="w-100 max-900">
      <div className="sectionHeader">
        <div>
          <h1 style={{ margin: 0 }}>User Management</h1>
          <div className="metaSubtle">
            {users.length} user{users.length !== 1 ? "s" : ""}
            {lastRefreshed ? ` • Last refreshed: ${lastRefreshed}` : ""}
          </div>
        </div>

        <button
          className="sectionButton"
          onClick={refresh}
          disabled={loading}
          aria-label="Refresh users"
          title="Refresh"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {loading ? <span className="spinner" /> : null}
          {loading ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      {error ? (
        <div className="errorText" style={{ marginBottom: "0.75rem" }}>
          {error}
        </div>
      ) : null}
      <div className="listStack">
        {users.length === 0 && !loading ? (
          <p>No users found.</p>
        ) : (
          users.map((u, idx) => {
            const email = u.email ?? "";
            const isRoleBusy = !!roleBusy[email];
            const isEnabledBusy = !!enabledBusy[email];

            return (
              <article key={email || u.id || `row-${idx}`} className="card">
                <header className="cardHeader">
                  <div>
                    <strong className="breakText">
                      {u.username ?? "(no username)"}{" "}
                      <span className="metaSubtle">
                        ({email || "no-email"})
                      </span>
                    </strong>
                    <div className="metaSubtle">
                      Status: {u.enabled ? "Enabled" : "Disabled"}
                    </div>
                  </div>

                  <div
                    className="stack-h"
                    style={{ gap: "0.5rem", alignItems: "center" }}
                  >
                    {isEnabledBusy ? <span className="spinner" /> : null}
                    <label
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={u.enabled}
                        onChange={(e) =>
                          handleToggleEnabled(email, e.target.checked)
                        }
                        disabled={isEnabledBusy}
                        aria-label={`Toggle ${email} enabled status`}
                      />
                      <span>{u.enabled ? "Enabled" : "Disabled"}</span>
                    </label>

                    <button
                      className="sectionButton"
                      title="Reset password (generate a temporary password)"
                      onClick={() => openResetModal(email)}
                      aria-label={`Reset password for ${email}`}
                    >
                      Reset Password
                    </button>
                  </div>
                </header>

                <div className="stack-h" style={{ gap: "0.75rem" }}>
                  <label
                    htmlFor={`role-${email || idx}`}
                    className="metaSubtle"
                  >
                    Role:
                  </label>
                  <select
                    id={`role-${email || idx}`}
                    value={u.role ?? "User"}
                    onChange={(e) =>
                      handleRoleChange(
                        email,
                        e.target.value === "Admin" ? "Admin" : "User"
                      )
                    }
                    disabled={isRoleBusy}
                    style={{
                      padding: "0.5rem 0.75rem",
                      border: "1px solid #2196f3",
                      borderRadius: "0.375rem",
                      backgroundColor: "#11121a",
                      color: "#f1f1f1",
                      outline: "none",
                    }}
                    aria-label={`Set role for ${email || `user ${idx + 1}`}`}
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>

                  {isRoleBusy ? <span className="spinner" /> : null}
                </div>
              </article>
            );
          })
        )}
      </div>

      <ResetPasswordForUserModal
        open={resetOpen}
        email={resetTargetEmail}
        tempPassword={tempPassword}
        submitting={resetting}
        errorText={resetError}
        onClose={() => {
          setResetOpen(false);
          setResetTargetEmail("");
          setResetError("");
          setTempPassword(null);
          setResetting(false);
        }}
        onConfirm={async () => {
          if (!resetTargetEmail) return;
          setResetError("");
          setResetting(true);
          try {
            const res = await adminResetPassword(resetTargetEmail);
            setTempPassword(res.temporaryPassword);
          } catch (e: any) {
            if (e?.response?.status === 404) setResetError("User not found.");
            else if (e?.response?.status === 400 && e.response.data?.title) {
              setResetError(e.response.data.title);
            } else {
              setResetError("Failed to reset password.");
            }
          } finally {
            setResetting(false);
          }
        }}
      />
    </div>
  );
}

function ResetPasswordForUserModal({
  open,
  email,
  submitting,
  tempPassword,
  errorText,
  onClose,
  onConfirm,
}: {
  open: boolean;
  email: string;
  submitting: boolean;
  tempPassword: string | null;
  errorText: string;
  onClose: () => void;
  onConfirm: () => void;
}) {
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

  const onOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && !submitting) onClose();
  };

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
