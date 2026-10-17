# 📄 `README.md` — Calculator Documentation

<h1 align="center">
  <br>
  🧮 Calculator
  <br>
</h1>

<h3 align="center">
  Fast · Accurate · Accessible
</h3>

<p align="center">
  A fully functional browser-based calculator built with pure HTML5, CSS3, and Vanilla JavaScript — no frameworks, no libraries, no <code>eval()</code>. Semantic-first, keyboard-friendly, and production-ready.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-completed-brightgreen" alt="Status" />
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License" />
  <img src="https://img.shields.io/badge/semantic-HTML5-orange" alt="Semantic HTML5" />
  <img src="https://img.shields.io/badge/vanilla-JavaScript-yellow" alt="Vanilla JS" />
  <img src="https://img.shields.io/badge/no-eval-red" alt="No eval" />
  <img src="https://img.shields.io/badge/made%20with-%E2%9D%A4%20in%20Pakistan-red" alt="Made in Pakistan" />
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
- [Getting Started](#-getting-started)
- [Test Cases](#-test-cases)
- [Keyboard Shortcuts](#-keyboard-shortcuts)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Credits](#-credits)

---

## 🌟 Overview

**Calculator** is a clean, glass-styled, browser-based calculator built as part of the **Oasis Infobyte AICTE Internship** (Web Development & Design Track — Level 2, Task 1).

It performs all four basic arithmetic operations with a friendly button interface, supports **operator chaining** (e.g. `5 + 3 × 2`), handles **division-by-zero** gracefully, and cleans up **floating-point artifacts** — all in **zero dependencies** and **zero build steps**.

It comes with:

- 🎨 A **dark, glassmorphic** interface
- 🧮 **Custom arithmetic engine** — no `eval()`, no libraries
- ⌨️ **Full keyboard support** — numbers, operators, Enter, Backspace, Escape
- ♿ **Fully semantic HTML5** — zero `<div>`, zero `<span>`
- 📱 **Responsive layout** — desktop, tablet, mobile
- ⚡ **Zero-build deployment** — just open `index.html`

---

## ✨ Features

### 🔢 Core Calculator

- **Display screen** showing current input and result (`<output>` element)
- **Numeric buttons** (0–9) and a decimal point
- **Operator buttons:** addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`)
- **Equals (`=`) button** to evaluate the expression
- **Clear (`C`) button** to reset the display
- **Backspace (`⌫`) button** to remove the last entered character

### 🛡️ Robustness

- **Division-by-zero handling** — shows `Error` instead of crashing
- **Operator chaining** — supports `5 + 3 × 2` without requiring a reset
- **Floating-point cleanup** — `0.1 + 0.2` correctly displays `0.3`
- **Double decimal prevention** — `1..2` is rejected
- **NaN-safe evaluation** — invalid input never breaks the display

### 🎨 Design & UX

- **Glassmorphic dark theme** with cyan accents
- **CSS Grid** used for perfect button alignment
- **No inline `onclick`** — all events bound via `addEventListener`
- **Responsive** — mobile, tablet, desktop
- **`prefers-reduced-motion`** respected
- **Focus-visible outlines** for keyboard users

### ⌨️ Accessibility & Input

- **Full keyboard support** — digits, `+ - * /`, Enter, Backspace, Escape
- **Semantic-first** — `<header>`, `<main>`, `<section>`, `<output>`, `<button>`, `<footer>`
- **`aria-live="polite"`** on the display so screen readers announce results
- **`aria-label`** on each section for context
- **Buttons with `data-*` attributes** so JS can bind without inline handlers

---

## 🖼 Screens & Workflow

### Main Screen

A single, centered calculator panel with:

| Section | Purpose |
|---------|---------|
| **Header** | App title + subtitle |
| **Display** | Current input / result (`<output>`) |
| **Keypad** | Numeric + operator + action buttons, in a 4-column Grid |
| **Footer** | Track / Task information |

### Keypad Layout

| Row | Buttons |
|-----|---------|
| 1 | `C` · `⌫` · `÷` · `×` |
| 2 | `7` · `8` · `9` · `−` |
| 3 | `4` · `5` · `6` · `+` |
| 4 | `1` · `2` · `3` · `=` (spans 2 rows) |
| 5 | `0` (spans 2 cols) · `.` |

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Markup** | Semantic HTML5 — no `<div>`, no `<span>` |
| **Styling** | Modern CSS3 (Grid, custom properties, transitions) |
| **Logic** | Vanilla JavaScript (ES2020+) |
| **Fonts** | System UI stack (no external requests) |
| **Dependencies** | **None** — zero libraries, zero build step |
| **Hosting** | Any static host — open `index.html` directly |

**Zero build step. Zero dependencies. Just open and use.**

---

## 📂 Project Structure

```text
WebDev-L2-Calculator/
├── index.html      # Semantic HTML5 markup
├── style.css       # Grid layout + glassmorphic styling
├── script.js       # Calculator logic (no eval, no inline handlers)
├── README.md       # You are here
└── screenshots/    # Project screenshots
