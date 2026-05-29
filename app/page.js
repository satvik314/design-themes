// The Design Themes Atlas — home / gallery.
// Every specimen below is a self-contained static HTML page served from
// /public/themes. This page is just the index/map over them.

const HERITAGE = [
  { no: "01", slug: "01-neo-brutalism-ai-course", name: "Neo-Brutalism", topic: "AI engineering course", lineage: "punk web → David Carson → Gumroad", chips: ["Rigid", "Flat", "Loud"] },
  { no: "02", slug: "02-corporate-memphis-payroll", name: "Corporate Memphis", topic: "HR & payroll SaaS", lineage: "Alegria → Humaaans → every SaaS", chips: ["Loose", "Flat", "Friendly"] },
  { no: "03", slug: "03-glassmorphism-music-app", name: "Glassmorphism", topic: "Music streaming app", lineage: "Big Sur → Fluent Acrylic", chips: ["Loose", "Deep", "Vivid"] },
  { no: "04", slug: "04-swiss-international-conference", name: "Swiss / International", topic: "Design conference", lineage: "Müller-Brockmann → Helvetica", chips: ["Rigid", "Flat", "Calm"] },
  { no: "05", slug: "05-claymorphism-kids-learning", name: "Claymorphism", topic: "Kids' learning app", lineage: "2021 clay/3D-render UI trend", chips: ["Loose", "Deep", "Playful"] },
  { no: "06", slug: "06-y2k-frutiger-aero-cloud", name: "Y2K / Frutiger Aero", topic: "Cloud storage gadget", lineage: "Apple Aqua → Vista Aero", chips: ["Loose", "Deep", "Glossy"] },
  { no: "07", slug: "07-skeuomorphism-journal-app", name: "Skeuomorphism", topic: "Journaling app", lineage: "pre-iOS7 Apple leather & paper", chips: ["Rigid", "Deep", "Calm"] },
];

const INVENTED = [
  { no: "08", slug: "08-auroral-meditation", name: "Auroral", topic: "Meditation & breathing app", lineage: "Glassmorphism × Claymorphism", chips: ["Loose", "Deep", "Calm"] },
  { no: "09", slug: "09-neo-risograph-film-festival", name: "Neo-Risograph", topic: "Indie film festival", lineage: "Risograph print × Swiss grid", chips: ["Rigid", "Flat", "Punchy"] },
  { no: "10", slug: "10-brutal-garden-plant-care", name: "Brutal Garden", topic: "Plant-care app", lineage: "Neo-Brutalism × botanical", chips: ["Rigid", "Flat", "Organic"] },
  { no: "11", slug: "11-solar-deco-space-tourism", name: "Solar Deco", topic: "Luxury space tourism", lineage: "Art Deco × Solarpunk", chips: ["Rigid", "Deep", "Opulent"] },
  { no: "12", slug: "12-hearth-terminal-dev-tool", name: "Hearth Terminal", topic: "Dev productivity tool", lineage: "CRT terminal × cottagecore", chips: ["Rigid", "Flat", "Cozy"] },
  { no: "13", slug: "13-vapor-editorial-type-foundry", name: "Vapor Editorial", topic: "Digital type foundry", lineage: "Vaporwave × Swiss editorial", chips: ["Rigid", "Flat", "Cool-retro"] },
  { no: "14", slug: "14-bento-hyperphysical-analytics", name: "Bento Hyperphysical", topic: "Analytics dashboard SaaS", lineage: "Apple bento × material dark", chips: ["Rigid", "Deep", "Sleek"] },
  { no: "15", slug: "15-magazine-punk-arts-festival", name: "Magazine Punk", topic: "Music & arts festival", lineage: "Swiss editorial × Memphis", chips: ["Mixed", "Flat", "Maximal"] },
  { no: "16", slug: "16-dimensional-minimal-smart-home", name: "Dimensional Minimal", topic: "Smart-home app", lineage: "Neumorphism × Swiss minimal", chips: ["Rigid", "Deep", "Quiet"] },
  { no: "17", slug: "17-terrarium-herbal-tea", name: "Terrarium", topic: "Herbal tea brand", lineage: "Glassmorphism × botanical", chips: ["Loose", "Deep", "Serene"] },
];

const PRINCIPLES = [
  { n: "01", title: "One skeleton", body: "Every specimen runs the same sections in the same order: nav → hero → proof → features → showcase → quote → CTA → footer. Differences are never structural." },
  { n: "02", title: "One token spine", body: "Each page declares the same CSS variables — --bg --fg --accent --border --radius --shadow --font-*. A theme is those knobs at an extreme." },
  { n: "03", title: "Three axes", body: "Every theme is placed on Structure (rigid↔free), Surface (flat↔deep) and Energy (calm↔loud). The footer of each page prints its coordinates." },
  { n: "04", title: "Two families", body: "Heritage = real, named styles. Invented = new hybrids, each a documented cross of two Heritage parents (e.g. Brutalism × botanical)." },
];

const AXES = [
  { label: "Structure", lo: "Rigid grid", hi: "Free / organic" },
  { label: "Surface", lo: "Flat", hi: "Deep / material" },
  { label: "Energy", lo: "Calm", hi: "Loud" },
];

function Card({ s }) {
  return (
    <a className="card" href={`/themes/${s.slug}.html`}>
      <div className={`swatch s${s.no}`}>
        <span className="no">{s.no}</span>
      </div>
      <div className="body">
        <h3>{s.name}</h3>
        <div className="topic">{s.topic}</div>
        <div className="lineage">{s.lineage}</div>
        <div className="chips">
          {s.chips.map((c) => (
            <span className="chip" key={c}>{c}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="top">
        <div className="mesh" />
        <div className="wrap">
          <div className="kicker">◈ The Design Themes Atlas</div>
          <h1>One skeleton. <em>Seventeen skins.</em></h1>
          <p className="lede">
            A catalog of landing-page specimens. Every page is built on the exact same
            structural skeleton and the same set of CSS design tokens — the only thing
            that changes is how far each knob is turned. A “theme”, here, is a
            coordinate, not a coincidence.
          </p>
        </div>
      </header>

      <main className="wrap">
        <section>
          <div className="principles">
            {PRINCIPLES.map((p) => (
              <div className="principle" key={p.n}>
                <div className="n">{p.n}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="axes-legend">
            {AXES.map((a) => (
              <div className="axis" key={a.label}>
                <b>{a.label}</b>
                <div className="track" />
                <div className="scale">
                  <span>{a.lo}</span>
                  <span>{a.hi}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <div>
              <h2>Heritage</h2>
              <p>Seven real, named styles people already know — the reference points of the map.</p>
            </div>
            <div className="count">07 specimens</div>
          </div>
          <div className="grid">
            {HERITAGE.map((s) => <Card s={s} key={s.no} />)}
          </div>
        </section>

        <section className="band">
          <div className="band-head">
            <div>
              <h2>Invented</h2>
              <p>Ten new themes that don&apos;t exist anywhere — each a deliberate cross of two Heritage parents.</p>
            </div>
            <div className="count">10 specimens</div>
          </div>
          <div className="grid">
            {INVENTED.map((s) => <Card s={s} key={s.no} />)}
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <p>
            The Design Themes Atlas — 17 landing-page specimens, one skeleton, one token
            spine. Read the full philosophy in{" "}
            <a href="https://github.com/satvik314/design-themes#readme">README.md</a>. Every
            specimen is a single self-contained HTML file with no external dependencies.
          </p>
        </div>
      </footer>
    </>
  );
}
