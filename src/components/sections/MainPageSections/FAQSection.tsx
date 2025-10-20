// --- FAQ ---
export default function FAQSection() {
  const answerStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: "1.125rem",
    lineHeight: 1.8,
    color: "#d0e8ff",
    margin: 0,
  };

  const headerWrapStyle: React.CSSProperties = {
    justifyContent: "center",
    marginBottom: "0.75rem",
  };

  const questionStyle: React.CSSProperties = {
    fontSize: "1.35rem",
    color: "#d0e8ff",
    margin: 0,
    textAlign: "center",
    fontWeight: 600,
  };

  return (
    <section className="sectionShell">
      <div className="sectionCard">
        <h1 className="pageTitle">Frequently Asked Questions</h1>
        <p className="pageSubtitle">A few things people usually wonder about</p>
        <div className="accentDivider" />

        <div className="card">
          <div className="cardHeader" style={headerWrapStyle}>
            <h3 style={questionStyle}>Is this a solo project?</h3>
          </div>
          <div className="cardBody metaSubtle">
            <p style={answerStyle}>
              Yes. Everything from code and design to infrastructure is being
              built by one developer in spare time. Progress may be slower, but
              the goal is to learn along the way.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="cardHeader" style={headerWrapStyle}>
            <h3 style={questionStyle}>When will the project be finished?</h3>
          </div>
          <div className="cardBody metaSubtle">
            <p style={answerStyle}>
              There’s no release date. Development happens in short bursts
              between life and work. The focus is on building something
              meaningful and fun, not rushing it.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="cardHeader" style={headerWrapStyle}>
            <h3 style={questionStyle}>What’s the goal of all this?</h3>
          </div>
          <div className="cardBody metaSubtle">
            <p style={answerStyle}>
              To learn, create, and share. This project started as a personal
              challenge and slowly turned into a playground for design,
              gameplay, and backend ideas.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="cardHeader" style={headerWrapStyle}>
            <h3 style={questionStyle}>Why are accounts disabled?</h3>
          </div>
          <div className="cardBody metaSubtle">
            <p style={answerStyle}>
              The game is in very early development and there isn’t much to show
              yet. Accounts will open to the public as more features land. Stay
              tuned for testing and contribution opportunities.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="cardBody metaSubtle" style={{ fontStyle: "italic" }}>
            <p style={{ textAlign: "center", margin: 0 }}>
              More questions will spawn here over time — thanks for reading and
              for being part of this journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
