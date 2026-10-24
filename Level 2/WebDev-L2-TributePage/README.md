# 📄 README.md — Tribute Page (Dr. Abdul Qadeer Khan)

<h1 align="center">
  🇵🇰 Dr. Abdul Qadeer Khan — A Tribute
</h1>

<h3 align="center">
  The Father of Pakistan's Nuclear Programme · 1936–2021
</h3>

<p align="center">
  A visually engaging, fully responsive tribute page dedicated to <strong>Dr. Abdul Qadeer Khan</strong> — built with semantic HTML5, modern CSS3, Tailwind CSS, and GSAP-powered morph transitions. Zero <code>&lt;div&gt;</code>, zero <code>&lt;span&gt;</code>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-completed-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
  <img src="https://img.shields.io/badge/semantic-HTML5-orange" alt="Semantic HTML5" />
  <img src="https://img.shields.io/badge/zero-div%20%7C%20zero-span-red" alt="Zero div span" />
  <img src="https://img.shields.io/badge/animations-GSAP%20%2B%20Tailwind-9cf" alt="Animations" />
  <img src="https://img.shields.io/badge/made%20with-%E2%9D%A4%20By%20Fida%20Hussain-red" alt="Made by Fida Hussain" />
</p>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screens & Workflow](#-screens--workflow)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [How It Works](#-how-it-works)
- [Semantic HTML](#-semantic-html)
- [Animations](#-animations)
- [Getting Started](#-getting-started)
- [Test Cases](#-test-cases)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)
- [Credits](#-credits)

---

## 🌟 Overview

This tribute page honours **Dr. Abdul Qadeer Khan**, the metallurgical engineer who led Pakistan's uranium enrichment programme and became a national symbol of scientific self-reliance.

The page presents his life in four parts — a hero portrait, a four-paragraph biography, an eight-point timeline, and a signature quote — all wrapped in a clean, book-like layout with smooth scroll-driven animations.

It comes with:

- 📜 A **cinematic hero** with a glowing portrait and animated rings
- 📖 A **four-paragraph biography** written in original words
- 🕰️ An **eight-item timeline** with gold markers and year stamps
- 💬 A **styled quote block** in Pakistan-green with a gold accent
- 🎞️ **PPTX-style morph transitions** powered by GSAP ScrollTrigger
- ♿ **Fully semantic HTML5** — zero `<div>`, zero `<span>`
- 📱 **Responsive** — mobile, tablet, desktop
- ⚡ **Zero build step** — just open `index.html`

---

## ✨ Features

### 🎨 Design

- **Pakistan-inspired palette** — deep green (`#01411c`), gold (`#c9a227`), cream (`#f8f5ef`)
- **Cinzel + Inter** font pairing — serif headings, sans body
- **Animated concentric rings** behind the hero portrait
- **Gold-glow portrait frame** with hover scale
- **Two alternating section backgrounds** — cream and cream-dark
- **Dark green quote block** with gold left border
- **Fully responsive** with `clamp()` typography

### 🎞️ Animations (GSAP + ScrollTrigger)

- **Hero entrance timeline** — nav slides down, portrait morphs in with `back.out(1.7)`, name and tagline follow
- **Section headings** — slide in from the left on scroll
- **Biography paragraphs** — staggered fade-up
- **Timeline items** — staggered slide-in from the left
- **Quote block** — 3D morph (`rotationX`) with `back.out` ease
- **Footer** — fade-up on scroll
- **Portrait parallax** — subtle scale + translate on scroll (scrubbed)

### ♿ Accessibility & Semantics

- **Zero `<div>`, zero `<span>`** — everything is semantic
- **`aria-labelledby`** on every section
- **`<time datetime="">`** for every timeline year
- **`<figure>` + `<figcaption>`** for the portrait
- **`<blockquote>` + `<footer>`** for the quote
- **Keyboard-accessible navigation** with visible focus

---

## 🖼 Screens & Workflow

### Page Flow

| Section        | Purpose                                     |
| -------------- | ------------------------------------------- |
| **Navigation** | Fixed top bar — Biography, Timeline, Legacy |
| **Hero**       | Portrait + name + tagline, animated rings   |
| **Biography**  | Four original paragraphs                    |
| **Timeline**   | Eight key milestones (1936 → 2021)          |
| **Quote**      | Signature quote in a styled block           |
| **Footer**     | Track, task, and author info                |

### Content — Timeline Milestones

| Year | Event                                                         |
| ---- | ------------------------------------------------------------- |
| 1936 | Born in Bhopal, British India                                 |
| 1947 | Family migrates to Pakistan                                   |
| 1960 | Completes metallurgical engineering in Karachi                |
| 1972 | Studies uranium centrifuge technology in the Netherlands      |
| 1976 | Returns to Pakistan; establishes Kahuta Research Laboratories |
| 1998 | Pakistan conducts nuclear tests in Chagai                     |
| 2004 | Faces government inquiry; later pardoned                      |
| 2021 | Passes away in Islamabad; state funeral                       |

---

## 🛠 Tech Stack

| Layer            | Technology                                   |
| ---------------- | -------------------------------------------- |
| **Markup**       | Semantic HTML5 — zero `<div>`, zero `<span>` |
| **Styling**      | Modern CSS3 + Tailwind CSS (CDN)             |
| **Logic**        | Vanilla JavaScript (ES2020+)                 |
| **Animation**    | GSAP 3.12 + ScrollTrigger                    |
| **Fonts**        | Cinzel + Inter (Google Fonts)                |
| **Dependencies** | CDN-only — no build step                     |
| **Hosting**      | Any static host / open directly in browser   |

---

## 📂 Project Structure

```text
Task 2-Tribute Page/
├── index.html      # Semantic HTML5 structure
├── style.css       # Green + gold theme, responsive
├── script.js       # GSAP entrance + scroll animations
├── README.md       # You are here
└── screenshots/    # Project screenshots
```

---

## 🧠 How It Works

The page is a **single-scroll narrative** with no JavaScript state. Every animation is declarative and bound to either:

1. **Page load** — the hero entrance timeline fires once.
2. **Scroll position** — ScrollTrigger watches each section and plays its animation when it enters the viewport.

### Hero Entrance Timeline

The GSAP timeline runs in order:

1. `nav` slides down from `y: -100` to `y: 0`
2. Portrait scales from `0.6` → `1` with a slight rotation and `back.out(1.7)` bounce
3. Name slides up from `y: 80`
4. Tagline slides up from `y: 40`

### Scroll Animations

| Element              | Animation                                    |
| -------------------- | -------------------------------------------- |
| `main section h2`    | Slide from `x: -40`                          |
| `article p`          | Staggered fade-up (`y: 40`, 0.15s stagger)   |
| `.timeline li`       | Staggered slide-in (`x: -60`, 0.12s stagger) |
| `blockquote`         | 3D morph (`scale 0.9`, `rotationX 10`)       |
| `body > footer`      | Fade-up                                      |
| `.hero-portrait img` | Scrubbed parallax (`y: 80`, `scale 0.9`)     |

---

## ♿ Semantic HTML

**Zero `<div>`. Zero `<span>`.** Every element carries meaning.

| Need             | Semantic Element Used                 |
| ---------------- | ------------------------------------- |
| Navigation bar   | `<nav>` + `<ul>` + `<li>` + `<a>`     |
| Hero section     | `<header>`                            |
| Portrait         | `<figure>` + `<img>` + `<figcaption>` |
| Page title       | `<h1>`                                |
| Main content     | `<main>`                              |
| Biography        | `<section>` + `<article>` + `<p>`     |
| Section headings | `<h2>`                                |
| Timeline         | `<ol>` + `<li>` + `<time>`            |
| Quote            | `<blockquote>` + `<footer>`           |
| Page footer      | `<footer>`                            |

---

## 🎞 Animations

### Entrance (GSAP timeline)

```javascript
gsap.set(".hero-portrait img", { scale: 0.6, opacity: 0, rotation: -15 });
gsap.set(".hero-name", { y: 80, opacity: 0 });
gsap.set(".hero-tagline", { y: 40, opacity: 0 });
gsap.set("nav", { y: -100 });

const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
heroTl
  .to("nav", { y: 0, duration: 0.8 })
  .to(".hero-portrait img", { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }, "-=0.4")
  .to(".hero-name", { y: 0, opacity: 1, duration: 0.9 }, "-=0.6")
  .to(".hero-tagline", { y: 0, opacity: 1, duration: 0.7 }, "-=0.4");
```

### Scroll-driven (ScrollTrigger)

```javascript
gsap.from(".timeline li", {
  scrollTrigger: {
    trigger: ".timeline",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  x: -60,
  opacity: 0,
  duration: 0.6,
  stagger: 0.12,
  ease: "power3.out"
});
```

---

## 🚀 Getting Started

### Prerequisites

- Any modern browser (Chrome, Firefox, Edge, Safari)
- Internet connection (for CDN libraries: Tailwind, GSAP, Google Fonts)

### 1. Clone or Download

```bash
git clone https://github.com/FidaHussain3432/OIBSIP.git
cd "OIBSIP/Level 2/Task 2-Tribute Page"
```

### 2. Open

Double-click `index.html` **or** right-click → _Open with_ → your browser.

### 3. Explore

Scroll through the page — every section animates in as it enters the viewport.

---

## 🧪 Test Cases

| Test                | Expected                                   | Result |
| ------------------- | ------------------------------------------ | ------ |
| Page loads          | Hero portrait morphs in with bounce        | ✅     |
| Nav bar             | Slides down on load                        | ✅     |
| Scroll to Biography | Heading slides left, paragraphs stagger up | ✅     |
| Scroll to Timeline  | Items slide in from left, one by one       | ✅     |
| Scroll to Quote     | Block scales + tilts into view             | ✅     |
| Scroll back up      | Animations reverse (toggleActions)         | ✅     |
| Mobile view (375px) | Layout stacks, text readable               | ✅     |
| Image fails to load | Alt text displays                          | ✅     |
| Keyboard Tab        | Nav links reachable, visible focus         | ✅     |
| View source         | Zero `<div>`, zero `<span>`                | ✅     |

---

## 🎨 Customization

### Change Theme Colours

In `style.css`, edit the CSS variables:

```css
:root {
  --cream: #f8f5ef;
  --green: #01411c;
  --gold: #c9a227;
  --text: #2b2418;
}
```

### Change the Portrait

Replace the `src` in `index.html`:

```html
<img src="your-portrait.jpg" alt="Portrait of Dr. Abdul Qadeer Khan" />
```

### Change Animation Speed

In `script.js`, adjust the `duration` values inside the `heroTl` timeline or the `ScrollTrigger` blocks.

### Disable Parallax

Remove or comment out the final `gsap.to(".hero-portrait img", { ... })` block in `script.js`.

---

## 🐛 Troubleshooting

### Animations Don't Play

**Cause:** GSAP or ScrollTrigger CDN blocked.
**Fix:** Check internet connection. Open DevTools (`F12`) → Console for errors.

### Portrait Image Doesn't Load

**Cause:** Wikimedia URL blocked or changed.
**Fix:** Download the image manually, place it in `screenshots/`, and update the `src` in `index.html`.

### Page Scrolls Horizontally

**Cause:** An animation element overflows.
**Fix:** Ensure `body { overflow-x: hidden; }` is present in `style.css` (it is by default).

### Nav Bar Overlaps Content

**Cause:** Fixed nav height not accounted for.
**Fix:** The hero section has `padding-top: 6rem` — increase if your nav is taller.

### Animations Feel Jerky on Mobile

**Cause:** Heavy ScrollTrigger work on low-end devices.
**Fix:** Reduce `stagger` values or remove the parallax block.

---

## 📄 License

This project is part of the **Oasis Infobyte AICTE Internship Program** and is provided for educational and evaluation purposes.

---

## 💛 Credits

- **Author:** Fida Hussain ([@FidaHussain3432](https://github.com/FidaHussain3432))
- **Subject:** Dr. Abdul Qadeer Khan (1936–2021)
- **Portrait:** Wikimedia Commons (public domain / CC-licensed)
- **Fonts:** [Cinzel](https://fonts.google.com/specimen/Cinzel) + [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Animation:** [GSAP](https://greensock.com/gsap/) + ScrollTrigger
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Internship:** [Oasis Infobyte](https://www.oasisinfobyte.com/) — AICTE Program

---

## 📞 Support

- 🐛 **Bug reports:** [Open an issue](https://github.com/FidaHussain3432/OIBSIP/issues)
- 💡 **Feature requests:** [Open an issue](https://github.com/FidaHussain3432/OIBSIP/issues)

---

<div align="center">

### ⭐ If this project helped you, please give it a star!

**Track:** Web Development & Design · **Level:** 2 · **Task:** 2 — Tribute Page

Made with ❤️ by **Fida Hussain**

</div>
