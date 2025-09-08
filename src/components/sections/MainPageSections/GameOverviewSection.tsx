export default function GameOverviewSection() {
  return (
    <div className="sectionShell flushTop">
      <section
        className="sectionCard"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        <h1 className="pageTitle">Game Overview</h1>
        <div className="accentDivider" />
        <h2 className="pageSubtitle">Survive. Explore. Dominate.</h2>

        <p
          style={{
            fontSize: "1.125rem",
            lineHeight: 1.8,
            color: "#d0e8ff",
            margin: "0 auto",
            maxWidth: 1000,
          }}
        >
          <strong>Exovitae</strong> is a multiplayer survival game set on a
          mysterious, Earth-like world inhabited by dinosaurs and original,
          otherworldly creatures. Players must gather resources, craft tools and
          shelters, and tame powerful beasts to thrive in both PvE and PvP
          scenarios. The game features a vibrant, animated visual style and
          blends tribal survival elements with futuristic lore. Explore diverse
          biomes, forge alliances, and carve your path in a dynamic, living
          world where survival is only the beginning.
        </p>
      </section>
    </div>
  );
}
