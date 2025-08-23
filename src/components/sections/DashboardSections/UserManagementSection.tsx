import { useEffect, useState } from "react";
import { api } from "../../../api/client";

type UserInfo = {
  id?: string | null;           // used only for React keys (fallback)
  username: string | null;
  email: string | null;
  role: string | null;          // "Admin" | "User"
  enabled: boolean;
};

type SetRoleForm = {
  email: string;
  role: "Admin" | "User";
  replaceExisting?: boolean;    // default true on server
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

export default function UserManagementSection() {
  const [users, setUsers] = useState<UserInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lastRefreshed, setLastRefreshed] = useState<string | null>(null);

  // per-row pending states
  const [roleBusy, setRoleBusy] = useState<Record<string, boolean>>({});
  const [enabledBusy, setEnabledBusy] = useState<Record<string, boolean>>({});

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

    const prev = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
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

    const prev = users.find((u) => u.email?.toLowerCase() === email.toLowerCase());
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

  return (
    <div className="w-100 max-900">
      {/* Header / toolbar */}
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
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
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

      {/* List */}
      <div className="listStack">
        {users.length === 0 && !loading ? (
          <p>No users found.</p>
        ) : (
          users.map((u, idx) => {
            const email = u.email ?? "";
            const isRoleBusy = !!roleBusy[email];
            const isEnabledBusy = !!enabledBusy[email];

            return (
              <article
                key={email || u.id || `row-${idx}`}
                className="card"
              >
                <header className="cardHeader">
                  <div>
                    <strong className="breakText">
                      {u.username ?? "(no username)"}{" "}
                      <span className="metaSubtle">({email || "no-email"})</span>
                    </strong>
                    <div className="metaSubtle">
                      Status: {u.enabled ? "Enabled" : "Disabled"}
                    </div>
                  </div>

                  {/* Enable/Disable */}
                  <div className="stack-h" style={{ gap: "0.5rem" }}>
                    {isEnabledBusy ? <span className="spinner" /> : null}
                    <label style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                      <input
                        type="checkbox"
                        checked={u.enabled}
                        onChange={(e) => handleToggleEnabled(email, e.target.checked)}
                        disabled={isEnabledBusy}
                        aria-label={`Toggle ${email} enabled status`}
                      />
                      <span>{u.enabled ? "Enabled" : "Disabled"}</span>
                    </label>
                  </div>
                </header>

                {/* Role row */}
                <div className="stack-h" style={{ gap: "0.75rem" }}>
                  <label htmlFor={`role-${email || idx}`} className="metaSubtle">
                    Role:
                  </label>
                  <select
                    id={`role-${email || idx}`}
                    value={u.role ?? "User"}
                    onChange={(e) =>
                      handleRoleChange(email, e.target.value === "Admin" ? "Admin" : "User")
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
    </div>
  );
}
