# AIS website redesign: handoff for Claude Code

This folder holds a working prototype of the redesigned AIS site (UT Dallas Artificial Intelligence Society) in a single file, `index.html`. Open it in a browser and it runs as is. This guide explains how it's built, so it can be merged into the real repo or ported into the repo's framework.

## What's in the prototype

Eight pages, switched by the URL hash. Each page is a different time of day, with its own sky and its own animated sky creature.

| Page | Hash | Time of day | Sky creature | Notes |
|---|---|---|---|---|
| Home | `#home` (default) | Whole day: scrolling moves morning → noon → afternoon → sunset → twilight → night | Changes with the time of day | Sun arcs across the sky (`HOME_SUN`); top of page is always morning; "day dial" on the right edge |
| Events | `#events` | Golden afternoon | Kites | Paper plane + dotted contrail over the title; boarding-pass cards; past events with filters |
| Programs | `#programs` | Noon | Round dandelion puffballs | Build → Grow → Launch path with a loopy "pipe" that draws on scroll |
| AI Academy | `#academy` | Dawn | Origami cranes | Varsity title (Graduate font), spinning seal, pennant bunting, "No/No/No" banner, workshop flyers |
| AIM | `#aim` | Night | Sparkle stars, constellations, shooting stars | Dark navy sections, mentor/mentee cards |
| Innovation Lab | `#lab` | Twilight | Fireflies that link into a network | Typing terminal hero, Design → Build → Deploy, project board |
| Our Team | `#team` | Morning (portal sun) | Paper-plane flock | 9 teams; sticky team filter that scrolls to each team; quote popups; teams with more than 4 people use two rows; Innovation Lab scrolls sideways |
| HackAI | `#hackai` | Sunset | Sky lanterns | Fanned photo stack, photo + winners carousels, sponsors marquee, FAQ accordion, link out to the hackathon site |

Shared on every page: the floating glass nav (logo → Home, Programs dropdown), the footer, and the **Pause motion** button.

## Design system

- **Colors:** blue `#3b5bff`, violet `#9a7cff`, peach `#f6b896`, navy `#141a5c`, cream `#f7f5ee`. They're CSS variables at the top of the `<style>` block.
- **Fonts (Google Fonts):**
  - Archivo (wide, heavy): headings.
  - Inter: body text.
  - Graduate: AI Academy's varsity title only.
  - The real AIS fonts weren't known. Swap the `--display` and `--body` variables if the brand uses others.
- **Content sections:** they sit on tinted "sheets" (`.stack > section:not(.bare)`).
  - The tint follows the time of day through the `--sheet` variable per page, and per section on Home.
  - Night pages (AIM, Lab) use navy sheets.
  - Sections marked `.bare` sit directly on the sky (galleries, the Programs pipe, big CTA banners).
- **Labels:** small bold blue caps (`.eyebrow`, `.kicker`), matching the original "OUR MISSION" style.
- **Home title:** uses the logo colors: ARTIFICIAL navy, INTELLIGENCE blue, SOCIETY orange.
- **Nothing is tilted** except the HackAI photo fan and the spinning seals, both on purpose.

## How it's built (search for these names in `index.html`)

| System | Where | What it does |
|---|---|---|
| Sky | `THE PORTAL SKY` (WebGL shader on `#sky`) | Draws the sky, clouds, sun/moon, light rays and stars. Each look is an entry in **`MOODS`** (colors, sun position `p`, `stars`, `rays`, `cloud`). `setMood(name)` fades to a mood; `setMoodMix(a, b, f, sunXY)` blends two moods (Home uses this on scroll). The sun does **not** follow the mouse. |
| Sky creatures | `SKY CREATURES` (2D canvas `#flock`) | `setCritters(page)` picks the creature: planes (boids flocking), lanterns, puffballs, cranes, stars, fireflies, kites. They keep to the side margins below the hero and react to the cursor and scroll speed. |
| Cloud bands | `paintBand()` | The soft cloud strip under each hero. `data-tone` = `dawn` / `twilight` / `night` recolors it. |
| Routing | `function show(name)` | Hash router: shows one `<main class="view" data-view="…">`, sets the mood and creature, and runs each page's `setup()` once. |
| Home day scroll | `setupHome()` + `HOME_SUN` | Each Home section has `data-mood`. Scroll position blends between neighboring moods, and the sun follows the `HOME_SUN` arc. |
| Scroll animations | `setup()` / `intro()` | GSAP + ScrollTrigger: headings blur in word by word, sections rise in, counters count up, and the Programs pipe draws as you scroll. |

**Libraries:** GSAP 3.13 + ScrollTrigger, loaded from cdnjs. Everything else is hand-written. The page works without GSAP too, just without the scroll animations.

**Accessibility:** `prefers-reduced-motion` turns off ambient motion, and the Pause motion button stops it on demand. Interactive elements are real buttons and links.

## Content to edit

- **Team members:** the `TEAMS` array. Links use `m` (email), `g` (GitHub), `w` (website) and `q` (quote).
  - Only Technology has real names. The other teams use generated placeholders ("Finance Member 2").
- **Events:** the `EVENTS` array. Home and Events both read from it, so each event is entered once. `cat` drives the Events filters (`workshops` / `socials` / `others`).
- **Placeholders still to fill:**
  - All photos (the `.ph` boxes).
  - Event gate and boarding times, and the second upcoming event.
  - AI Academy workshops 2–4.
  - AIM Pride projects and Innovation Lab projects.
  - The Lab's step text and terminal lines (draft copy).
  - Two HackAI FAQ answers.
  - Links: the portal, RSVP, apply, and the HackAI website button (`#hackSite`).
  - The AIM Pride stats (80+ / 72 / 16) and Home stats (150+ / 25+ / 40+ / 12+) came from the original designs. Confirm they're current.

## Bringing it into the repo

**If the site is plain HTML/static:** drop `index.html` in. Optionally split the inline `<style>` and `<script>` into `styles.css` and `main.js`. Nothing else is needed.

**If the site is React / Next.js / Vite:** port it into components rather than pasting the file:
1. `<Sky mood={…} />`: move the WebGL shader and `MOODS` into a component. Render it once in the root layout, fixed behind everything, and change the mood on route change.
2. `<SkyCreatures mode={…} />`: the canvas creatures, also in the root layout.
3. One route per page (`/`, `/events`, `/programs`, `/programs/academy`, `/programs/aim`, `/programs/lab`, `/team`, `/hackai`). Use real routes instead of the hash router.
4. Move `TEAMS` and `EVENTS` into data files (or the CMS/portal API if one exists).
5. `npm i gsap` and use `@gsap/react`'s `useGSAP` for the scroll animations.
6. Keep the CSS variables and section "sheet" classes as the shared design layer.

## Prompt to give Claude Code

> I'm redesigning our club website (AIS, the Artificial Intelligence Society at UT Dallas). A working prototype is in `ais-site/index.html`, and `ais-site/HANDOFF.md` explains how it's built. Read both, then look at how this repo is structured. Port the prototype into this repo's framework and conventions, page by page, starting with the shared pieces (sky background, sky creatures, nav, footer, design variables), then Home, then the rest. Keep the look and animations the same as the prototype, keep `prefers-reduced-motion` support, and move the TEAMS and EVENTS data into data files. Before changing anything, tell me your plan and which existing files you'll touch.
