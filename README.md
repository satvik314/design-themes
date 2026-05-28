# The Design Themes Atlas

**One skeleton. Seventeen skins.**

A catalog of 17 landing-page *specimens*. Every page is built on the **same
structural skeleton** and the **same set of CSS design tokens** — the only
thing that changes between them is how far each knob is turned. A "theme",
here, is a *coordinate*, not a coincidence.

Open [`index.html`](index.html) to browse the gallery.

---

## Why this exists

You can find a thousand "30 CSS landing pages" repos that are just a pile of
unrelated files. This isn't that. The point of the Atlas is that the
differences between these pages are **principled and explainable**. If you
can describe the four rules below, you can explain every single file.

## The four rules

### 1. One skeleton
Every specimen runs the **same sections in the same order**:

```
nav → hero → social proof → features (3 cards) → showcase
    → testimonial → CTA band → footer (with specimen card)
```

Because the structure never changes, you're always comparing *style*, never
layout. The skeleton is the control variable in the experiment.

### 2. One token spine
Every page declares the **same CSS custom properties** in `:root`:

```css
--bg  --surface  --fg  --muted  --accent  --accent-2
--border  --radius  --shadow  --font-display  --font-body
--space  --maxw
```

A theme is nothing more than *those same variables set to extreme values*.
Neo-Brutalism is `--radius: 0` + a hard `--shadow` with no blur; Claymorphism
is a huge `--radius` + a soft layered `--shadow`. Same spine, opposite skin.

### 3. Three axes
Every theme is placed on three spectrums. The **footer of each page prints
its own coordinates** so the system is legible from inside any specimen.

| Axis | ← low | high → |
|------|-------|--------|
| **Structure** | rigid grid | free / organic |
| **Surface** | flat | deep / material |
| **Energy** | calm | loud |

### 4. Two families
- **Heritage** — real, named styles that already exist. The reference points
  of the map.
- **Invented** — brand-new themes that don't exist anywhere. Each one is a
  **deliberate hybrid of two Heritage parents**, and its lineage is stated on
  the page (e.g. *Brutal Garden = Neo-Brutalism × botanical illustration*).
  This is what keeps the "new" themes from being random: each is a documented
  cross, not a guess.

---

## The specimens

### Heritage (7) — styles people already know

| # | Theme | Topic | Lineage |
|---|-------|-------|---------|
| 01 | **Neo-Brutalism** | AI engineering course | punk web → David Carson → Gumroad era |
| 02 | **Corporate Memphis** | HR & payroll SaaS | Alegria/Buck → Humaaans → every 2018-22 SaaS |
| 03 | **Glassmorphism** | Music streaming app | Apple Big Sur → Microsoft Fluent Acrylic |
| 04 | **Swiss / International** | Design conference | Müller-Brockmann, Bauhaus, Helvetica |
| 05 | **Claymorphism** | Kids' learning app | 2021 clay / 3D-render UI trend |
| 06 | **Y2K / Frutiger Aero** | Cloud storage gadget | Apple Aqua → Windows Vista Aero |
| 07 | **Skeuomorphism** | Journaling app | pre-iOS 7 Apple leather & paper |

### Invented (10) — new hybrids that don't exist

| # | Theme | Topic | Lineage (parent × parent) |
|---|-------|-------|----------------------------|
| 08 | **Auroral** | Meditation app | Glassmorphism × Claymorphism |
| 09 | **Neo-Risograph** | Indie film festival | Risograph print × Swiss grid |
| 10 | **Brutal Garden** | Plant-care app | Neo-Brutalism × botanical illustration |
| 11 | **Solar Deco** | Luxury space tourism | Art Deco × Solarpunk |
| 12 | **Hearth Terminal** | Dev productivity tool | CRT terminal × cottagecore |
| 13 | **Vapor Editorial** | Digital type foundry | Vaporwave × Swiss editorial |
| 14 | **Bento Hyperphysical** | Analytics dashboard | Apple bento grid × material dark mode |
| 15 | **Magazine Punk** | Music & arts festival | Swiss editorial × Memphis maximalism |
| 16 | **Dimensional Minimal** | Smart-home app | Neumorphism × Swiss minimalism |
| 17 | **Terrarium** | Herbal tea brand | Glassmorphism × botanical realism |

Topics are deliberately all different — an AI course, a meditation app, a
festival, a tea brand, a dashboard — to prove the themes are doing the work,
not the subject matter.

---

## Reading the map: how the invented themes are derived

The invented family is the interesting part, so here's the logic spelled out.
Each new theme takes one parent's **structure** and another's **surface/feel**
and resolves the tension:

- **Auroral** — Glass gives translucency, Clay gives soft puffiness. Dial
  *both* down in energy and you get a tranquil "frosted-clay aurora" perfect
  for meditation.
- **Brutal Garden** — keep Brutalism's hard borders and offset shadows
  (rigid), but pour organic botanical content into the frames. The friction
  between hard geometry and soft nature *is* the theme.
- **Neo-Risograph** — Risograph supplies overprinting ink, grain and
  misregistration; Swiss supplies the grid that keeps it from being a mess.
- **Solar Deco** — Art Deco supplies symmetry and gilded geometry; Solarpunk
  swaps the 1920s' machine-age pessimism for sun-and-greenery optimism.
- **Hearth Terminal** — a CRT command line, but warmed from cold neon into
  amber lamplight — cottagecore comfort meets the monospace grid.
- ...and so on. Every page's footer states its own parents.

---

## Technical notes

- **17 files**, one per specimen, in [`themes/`](themes/).
- Each is a **single self-contained `.html` file**: all CSS is inline, there
  are **no external assets, no web fonts, no images and no JavaScript**. Every
  page renders fully offline. All decoration is pure CSS or inline SVG.
- Fonts are web-safe stacks chosen per theme (grotesk, Helvetica, Georgia,
  monospace, etc.) so nothing depends on the network.
- Open any file directly in a browser, or start from
  [`index.html`](index.html).

## Structure

```
.
├── index.html              # gallery + the philosophy, visualised
├── README.md               # this file
└── themes/
    ├── 01-neo-brutalism-ai-course.html
    ├── 02-corporate-memphis-payroll.html
    ├── ...
    └── 17-terrarium-herbal-tea.html
```
