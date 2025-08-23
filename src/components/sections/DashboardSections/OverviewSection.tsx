type OverviewSectionProps = {
  username: string | null;
};

export default function OverviewSection({username = ""}: OverviewSectionProps) {
  return (
    <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Welcome {username}</h1>

      <p style={{ color: "#94a3b8", marginBottom: "1.5rem", fontSize: "1rem" }}>
        A quick look at your system stats. This section will show basic counts
        like files, feedback, and usage totals.
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
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>—</div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Files</div>
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
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>—</div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Feedback</div>
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
          <div style={{ fontSize: "1.6rem", fontWeight: 700 }}>—</div>
          <div style={{ color: "#94a3b8", fontSize: "0.9rem" }}>Users</div>
        </div>
      </div>
      <div
        style={{
          marginTop: "1rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#94a3b8",
          fontStyle: "italic",
        }}
      >
        Under Construction
      </div>
    </div>
  );
}
