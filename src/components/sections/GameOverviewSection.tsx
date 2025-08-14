export default function GameOverviewSection() {
  return (
    <section
      style={{
        textAlign: "center",
        width: "100%",
        maxWidth: "1400px", 
        margin: "0 auto",
        padding: "2rem 4rem",
        backgroundColor: "rgba(33, 150, 243, 0.05)",
        border: "1px solid #2196f3",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        color: "#a8d9ff",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)", 
          marginBottom: "0.5rem",
          textTransform: "uppercase",
          color: "#a8d9ff",
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        Game Overview
      </h1>

      <div
        style={{
          height: "3px",
          width: "80px",
          background: "#2196f3",
          margin: "0 auto 1.5rem auto",
          borderRadius: "2px",
        }}
      ></div>

      <h2
        style={{
          fontSize: "clamp(1.25rem, 2vw, 1.5rem)",
          marginBottom: "1.5rem",
          fontWeight: "400",
          fontStyle: "italic",
          color: "#a8cfff",
        }}
      >
        Survive. Explore. Dominate.
      </h2>

      <p
        style={{
          fontSize: "1.125rem",
          lineHeight: "1.8",
          padding: "0 1rem",
          color: "#d0e8ff",
        }}
      >
        <strong>Exovitae</strong> is a multiplayer survival game set on a
        mysterious, Earth-like world inhabited by dinosaurs and original,
        otherworldly creatures. Players must gather resources, craft tools and
        shelters, and tame powerful beasts to thrive in both PvE and PvP
        scenarios. The game features a vibrant, animated visual style and blends
        tribal survival elements with futuristic lore. Explore diverse biomes,
        forge alliances, and carve your path in a dynamic, living world where
        survival is only the beginning.
      </p>
    </section>
  );
}
