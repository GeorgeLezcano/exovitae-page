export default function AboutSection() {
  return (
    <div className="sectionShell flushTop">
      <section
        className="sectionCard"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <h1 className="pageTitle">About</h1>
        <div className="accentDivider" />
        <h2 className="pageSubtitle">
          Built by one developer, slow and steady, fueled by curiosity.
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#d0e8ff",
            margin: "0 auto",
            maxWidth: 1000,
          }}
        >
          This website and its connected projects, including the game, are being
          built by a solo developer in spare hours: no studio, no deadlines, and
          no funding. It’s a personal space to experiment with design, gameplay
          concepts, and technology while documenting progress along the way.
        </p>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#d0e8ff",
            margin: "1.25rem auto 0",
            maxWidth: 1000,
          }}
        >
          Everything you see is evolving in real time. Features get added,
          adjusted, or replaced as ideas grow. It’s not about perfection; it’s
          about creating, learning, and keeping the spark alive.
        </p>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#d0e8ff",
            margin: "1.25rem auto 0",
            maxWidth: 1000,
            fontStyle: "italic",
          }}
        >
          Thanks for checking it out. More to come as the journey continues.
        </p>
      </section>
    </div>
  );
}
