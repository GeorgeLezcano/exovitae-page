import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { api, setAuthToken } from "../../api/client";

type HealthResponse = {
  serverStatus: string;
  databaseStatus: string;
  minioStatus: string;
  timestamp: string;
};

const POLL_MS = 15000;
const TIMEOUT_MS = 6000;
const OVERALL_LABEL = "System";

function isHealthy(s?: string) {
  return (s ?? "").toLowerCase().includes("healthy");
}

function colorForHealthy(healthy: boolean | null) {
  if (healthy === null) return "#94a3b8";
  return healthy ? "#16a34a" : "#dc2626";
}

function Row({ name, healthy }: { name: string; healthy: boolean | null }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 20,
        lineHeight: 1.2,
      }}
    >
      <span style={{ color: "#cbd5e1", whiteSpace: "nowrap" }}>{name}:</span>
      <span
        style={{
          color: colorForHealthy(healthy),
          fontWeight: 700,
          letterSpacing: 0.2,
          whiteSpace: "nowrap",
        }}
      >
        {healthy === null ? "—" : healthy ? "Healthy" : "Unhealthy"}
      </span>
    </div>
  );
}

export default function HealthStatus() {
  const { token } = useAuth();

  const [data, setData] = useState<HealthResponse | null>(null);
  const [error, setError] = useState<string>("");
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const pollRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const derived = useMemo(() => {
    const server = data ? isHealthy(data.serverStatus) : null;
    const db = data ? isHealthy(data.databaseStatus) : null;
    const minio = data ? isHealthy(data.minioStatus) : null;

    const overallHealthy =
      server !== null && db !== null && minio !== null
        ? server && db && minio
        : null;

    return { server, db, minio, overallHealthy };
  }, [data]);

  const fetchOnce = async () => {
    if (!token) {
      setError("Not logged in.");
      setLatencyMs(null);
      return;
    }

    setAuthToken(token);

    setLoading(true);
    setError("");

    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      setError((e) => e || "Request timed out");
    }, TIMEOUT_MS);

    const started = performance.now();
    try {
      const res = await api.get<HealthResponse>("/api/health");
      if (
        !res ||
        typeof res.serverStatus !== "string" ||
        typeof res.databaseStatus !== "string" ||
        typeof res.minioStatus !== "string" ||
        typeof res.timestamp !== "string"
      ) {
        throw new Error("Unexpected health payload");
      }

      setData(res);
      setLatencyMs(Math.round(performance.now() - started));
      setError("");
    } catch (e: any) {
      if (e && typeof e === "object") {
        const maybe = e as Partial<HealthResponse>;
        if (
          typeof maybe.serverStatus === "string" &&
          typeof maybe.databaseStatus === "string" &&
          typeof maybe.minioStatus === "string" &&
          typeof maybe.timestamp === "string"
        ) {
          setData(maybe as HealthResponse);
          setLatencyMs(Math.round(performance.now() - started));
          setError("");
        } else {
          const msg =
            typeof e === "string"
              ? e
              : e?.message || e?.title || "Network or authorization error";
          setError(msg);
          setLatencyMs(null);
        }
      } else {
        const msg =
          typeof e === "string"
            ? e
            : e?.message || e?.title || "Network or authorization error";
        setError(msg);
        setLatencyMs(null);
      }
    } finally {
      setLoading(false);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    }
  };

  useEffect(() => {
    fetchOnce();
    if (pollRef.current) window.clearInterval(pollRef.current);
    pollRef.current = window.setInterval(fetchOnce, POLL_MS);
    return () => {
      if (pollRef.current) window.clearInterval(pollRef.current);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [token]);

  const pillHealthy =
    derived.overallHealthy === null
      ? null
      : derived.overallHealthy
      ? true
      : false;

  const pillColor = colorForHealthy(pillHealthy);
  const pillLabel =
    pillHealthy === null ? "—" : pillHealthy ? "Healthy" : "Unhealthy";

  const friendlyLine =
    !error && pillHealthy !== null
      ? pillHealthy
        ? "All services are running"
        : "One or more services are down"
      : "";

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.7rem",
        pointerEvents: "none",
        maxWidth: "90%",
        fontSize: 16,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
          flexWrap: "wrap",
          justifyContent: "center",
          pointerEvents: "auto",
          padding: "0.15rem 0.25rem",
        }}
      >
        <div
          title={loading ? "Checking health…" : "Service health"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.5rem 0.9rem",
            borderRadius: 999,
            border: `1px solid ${pillColor}`,
            color: pillColor,
            fontWeight: 800,
            fontSize: 16,
            userSelect: "none",
            opacity: loading ? 0.8 : 1,
            letterSpacing: 0.2,
          }}
        >
          <span>
            {OVERALL_LABEL}: {pillLabel}
          </span>
          {latencyMs !== null && (
            <span
              style={{
                color: "#94a3b8",
                fontWeight: 700,
                fontSize: 13,
                minWidth: 48,
                textAlign: "right",
              }}
            >
              {latencyMs} ms
            </span>
          )}
        </div>

        <Row name="API" healthy={derived.server} />
        <Row name="Database" healthy={derived.db} />
        <Row name="MinIO" healthy={derived.minio} />

        <div style={{ color: "#94a3b8", fontSize: 14 }}>
          {data?.timestamp ? new Date(data.timestamp).toLocaleString() : "—"}
        </div>
      </div>

      {error ? (
        <div
          className="errorText"
          style={{
            marginTop: "0.2rem",
            padding: "0.4rem 0.65rem",
            borderRadius: 8,
            border: "1px solid #7f1d1d",
            background: "rgba(127,29,29,0.25)",
            color: "#fecaca",
            fontSize: 13,
            lineHeight: 1.2,
            maxWidth: 700,
            pointerEvents: "auto",
          }}
          aria-live="polite"
          role="status"
        >
          {error}
        </div>
      ) : friendlyLine ? (
        <div
          style={{
            marginTop: "0.2rem",
            color: pillHealthy ? "#86efac" : "#fca5a5",
            fontSize: 20,
            fontWeight: 700,
            pointerEvents: "auto",
          }}
        >
          {friendlyLine}
        </div>
      ) : null}
    </div>
  );
}
