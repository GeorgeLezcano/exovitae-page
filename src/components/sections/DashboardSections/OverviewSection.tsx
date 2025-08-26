import { useEffect, useState } from "react";
import { api } from "../../../api/client";
import { Endpoints } from "../../../constants/Endpoints";

type OverviewSectionProps = {
  username: string | null;
};

type UserInfo = { role: string | null };
type Feedback = { rating: number };

type FileMetadataDto = {
  size: number;
};
type PagedResultDto<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

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
}: OverviewSectionProps) {
  const [usersLoading, setUsersLoading] = useState(false);
  const [usersTotal, setUsersTotal] = useState<number | null>(null);
  const [adminsTotal, setAdminsTotal] = useState<number | null>(null);

  const [fbLoading, setFbLoading] = useState(false);
  const [fbTotal, setFbTotal] = useState<number | null>(null);
  const [fbAvg, setFbAvg] = useState<number | null>(null);

  const [filesLoading, setFilesLoading] = useState(false);
  const [fileCount, setFileCount] = useState<number | null>(null);
  const [fileBytesTotal, setFileBytesTotal] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      setUsersLoading(true);
      try {
        const users = await api.get<UserInfo[]>(Endpoints.Users);
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
        const feedbacks = await api.get<Feedback[]>(Endpoints.Feedback);
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

    (async () => {
      setFilesLoading(true);
      try {
        const pageSize = 100;
        let page = 1;
        let totalBytes = 0;
        let totalCount: number | null = null;

        const first = await api.get<PagedResultDto<FileMetadataDto>>(
          `${Endpoints.Files}?page=${page}&pageSize=${pageSize}`
        );
        const itemsFirst = first?.items || [];
        totalCount = first?.total ?? itemsFirst.length;
        totalBytes += itemsFirst.reduce((s, it) => s + (it.size || 0), 0);

        const totalPages = Math.ceil((totalCount || 0) / pageSize);
        for (page = 2; page <= totalPages; page++) {
          const res = await api.get<PagedResultDto<FileMetadataDto>>(
            `${Endpoints.Files}?page=${page}&pageSize=${pageSize}`
          );
          const items = res?.items || [];
          totalBytes += items.reduce((s, it) => s + (it.size || 0), 0);
        }

        setFileCount(totalCount ?? 0);
        setFileBytesTotal(totalBytes);
      } catch {
        setFileCount(null);
        setFileBytesTotal(null);
      } finally {
        setFilesLoading(false);
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
        A quick snapshot of your workspace.
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
            {filesLoading ? <span className="spinner" /> : numOrDash(fileCount)}
          </div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Files</div>
          <div style={{ color: "#a8cfff", fontSize: "0.85rem", marginTop: 4 }}>
            Total size: {filesLoading ? "…" : formatBytes(fileBytesTotal)}
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
