import { useEffect, useState } from "react";
import { api } from "../../../api/client";

type OverviewSectionProps = {
  username: string | null;
  fileCount?: number | null;
  fileBytesTotal?: number | null;
};

type UserInfo = { role: string | null };
type Feedback = { rating: number };

function formatBytes(n: number | null | undefined) {
  if (!n || n <= 0) return "—";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(
    Math.floor(Math.log(n) / Math.log(1024)),
    units.length - 1
  );
  const v = n / Math.pow(1024, i);
  return `${v.toFixed(v >= 100 || i === 0 ? 0 : v >= 10 ? 1 : 2)} ${units[i]}`;
}

export default function OverviewSection({
  username = "",
  fileCount = null,
  fileBytesTotal = null,
}: OverviewSectionProps) {
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersTotal, setUsersTotal] = useState<number | null>(null);
  const [adminsTotal, setAdminsTotal] = useState<number | null>(null);

  const [fbLoading, setFbLoading] = useState(false);
  const [fbTotal, setFbTotal] = useState<number | null>(null);
  const [fbAvg, setFbAvg] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      setUsersLoading(true);
      try {
        const users = await api.get<UserInfo[]>("/api/auth/users");
        const total = users.length;
        const admins = users.filter(
          (u) => (u.role ?? "").toLowerCase() === "admin"
        ).length;
        setUsersTotal(total);
        setAdminsTotal(admins);
      } catch {
        setUsersTotal(null);
        setAdminsTotal(null);
      } finally {
        setUsersLoading(false);
      }
    })();

    (async () => {
      setFbLoading(true);
      try {
        const feedbacks = await api.get<Feedback[]>("/api/feedback");
        const total = feedbacks.length;
        const sum = feedbacks.reduce((s, f) => s + (Number(f.rating) || 0), 0);
        const avg = total > 0 ? sum / total : null;
        setFbTotal(total);
        setFbAvg(avg);
      } catch {
        setFbTotal(null);
        setFbAvg(null);
      } finally {
        setFbLoading(false);
      }
    })();
  }, []);

  const numOrDash = (v: number | null | undefined) => (v == null ? "—" : v);
  const avgOrDash = (v: number | null | undefined) =>
    v == null ? "—" : `${v.toFixed(1)} ★`;

  return (
    <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        Welcome {username}
      </h1>

      <p style={{ color: "#94a3b8", marginBottom: "1.5rem", fontSize: "1rem" }}>
        A quick snapshot of your workspace: user totals (admins highlighted) and
        feedback health. File stats will populate once storage is connected.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        <div
          style={{
            padding: "1rem",
            borderRadius: 8,
            background: "rgba(148,163,184,0.05)",
            border: "1px solid #475569",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {fileCount == null ? "—" : fileCount}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Files</div>
          <div style={{ color: "#a8cfff", fontSize: "0.85rem", marginTop: 4 }}>
            Total size: {formatBytes(fileBytesTotal)}
          </div>
        </div>

        <div
          style={{
            padding: "1rem",
            borderRadius: 8,
            background: "rgba(148,163,184,0.05)",
            border: "1px solid #475569",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {fbLoading ? <span className="spinner" /> : numOrDash(fbTotal)}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Feedback</div>
          <div style={{ color: "#a8cfff", fontSize: "0.85rem", marginTop: 4 }}>
            Avg rating: {fbLoading ? "…" : avgOrDash(fbAvg)}
          </div>
        </div>

        <div
          style={{
            padding: "1rem",
            borderRadius: 8,
            background: "rgba(148,163,184,0.05)",
            border: "1px solid #475569",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>
            {usersLoading ? (
              <span className="spinner" />
            ) : (
              numOrDash(usersTotal)
            )}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Users</div>
          <div style={{ color: "#a8cfff", fontSize: "0.85rem", marginTop: 4 }}>
            Admins: {usersLoading ? "…" : numOrDash(adminsTotal)}
          </div>
        </div>
      </div>
    </div>
  );
}
