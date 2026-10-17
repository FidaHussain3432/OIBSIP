Bilkul! Ye raha **professional README.md** template aapke Calculator ke liye — jaise evaluators expect karte hain (GitHub pe achha dikhega, aur submission ke liye ready hoga).

---

## 📄 File: `WebDev-L2-Calculator/README.md`

```markdown
# Calculator — Web Development & Design (Level 2, Task 1)

A fully functional browser-based calculator built with **HTML5, CSS3, and Vanilla JavaScript**. No frameworks, no libraries, and no `eval()` — all arithmetic logic is hand-written.

---

## 👤 Author

**Fida Hussain**
Web Development & Design Intern — Oasis Infobyte (AICTE Internship Program)

---

## 🎯 Objective

Build a browser-based calculator capable of performing basic arithmetic operations with a clean, user-friendly button interface, using only core web technologies.

---

## 🛠️ Tech Stack

| Technology         | Purpose                                          |
| ------------------ | ------------------------------------------------ |
| HTML5 (semantic)   | Structure — no `<div>` or `<span>` used anywhere |
| CSS3 (Grid)        | Layout and styling                               |
| Vanilla JavaScript | All calculator logic — no `eval()`               |

---

## ✨ Features Implemented

- ✅ **Display screen** showing current input and result (`<output>` element)
- ✅ **Numeric buttons** (0–9) and a decimal point
- ✅ **Operator buttons:** addition (`+`), subtraction (`−`), multiplication (`×`), division (`÷`)
- ✅ **Equals (`=`) button** to evaluate the expression
- ✅ **Clear (`C`) button** to reset the display
- ✅ **Backspace (`⌫`) button** to remove the last entered character
- ✅ **Division-by-zero handling** — shows `Error` instead of crashing
- ✅ **Operator chaining** — supports `5 + 3 × 2` without requiring a reset
- ✅ **CSS Grid** used for button layout alignment
- ✅ **Event listeners on all buttons** — no inline `onclick` attributes
- ✅ **Floating-point cleanup** — `0.1 + 0.2` correctly displays `0.3`
- ✅ **Keyboard support** (bonus) — number keys, `+ - * /`, `Enter`, `Backspace`, `Esc`
- ✅ **Semantic HTML5 only** — zero `<div>` and zero `<span>` elements

---

## 🧠 How It Works (Architecture)

The calculator uses a **three-state model**:

1. `currentInput` — the number currently shown on the display
2. `previousValue` — the stored value from the last calculation
3. `currentOperator` — the pending operator (`+`, `−`, `×`, `÷`)

When a user presses an operator:

- If a previous operation is pending, it is **evaluated immediately** (this is what enables chaining like `5 + 3 × 2`).
- The result becomes the new `previousValue`, and the pressed operator is stored.

The `calculate(a, op, b)` function uses a `switch` statement to perform arithmetic — **`eval()` is deliberately not used** for security and clarity.

### Semantic HTML — Zero `<div>` and `<span>`

| Need                 | Semantic Element Used                       |
| -------------------- | ------------------------------------------- |
| Page header          | `<header>`                                  |
| Main content area    | `<main>`                                    |
| Calculator container | `<section aria-label="Calculator">`         |
| Keypad layout        | `<section aria-label="Calculator Buttons">` |
| Display screen       | `<output>`                                  |
| Buttons              | `<button>`                                  |
| Footer               | `<footer>`                                  |

---

## 🧪 Test Cases Verified

| Test                     | Expected                   | Result |
| ------------------------ | -------------------------- | ------ |
| `5 + 3 =`                | `8`                        | ✅     |
| `5 + 3 × 2 =`            | `16` (sequential chaining) | ✅     |
| `10 ÷ 0 =`               | `Error`                    | ✅     |
| `0.1 + 0.2 =`            | `0.3`                      | ✅     |
| `C` pressed              | Display resets to `0`      | ✅     |
| Backspace on `123`       | `12`                       | ✅     |
| `1..2` (double decimal)  | Rejected                   | ✅     |
| Keyboard `+ - * / Enter` | Works                      | ✅     |

---

## 📁 Project Structure
```

WebDev-L2-Calculator/
├── index.html # Semantic HTML5 structure
├── style.css # Grid layout + styling
├── script.js # Calculator logic (no eval)
├── README.md # This file
└── screenshots/ # Project screenshots

```

---

## 🚀 How to Run

1. Clone or download this folder.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge).
3. No server, no build step, no dependencies required.

---

## 📸 Screenshots

![Calculator UI](screenshots/calculator.png)

*(Replace with your actual screenshot filename)*

---

## 🧩 Key Implementation Notes

- **No `eval()`**: Arithmetic is performed via a custom `calculate()` function using `parseFloat()` and a `switch` statement.
- **No inline handlers**: All events are attached via `addEventListener` in `script.js`.
- **Semantic-first**: The display uses the native `<output>` element, which is designed exactly for computed results and is screen-reader friendly (`aria-live="polite"`).
- **Accessibility**: Each `<button>` has an accessible label via its text content or `data-*` attributes; the display announces updates via `aria-live`.

---

## 📝 License

This project was created as part of the **Oasis Infobyte AICTE Internship Program** for educational and evaluation purposes.

---

## 🔗 Connect

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Fida Hussain](https://linkedin.com/in/yourprofile)

---

**Track:** Web Development & Design
**Level:** 2
**Task:** 1 — Calculator
**Internship:** Oasis Infobyte (AICTE)
```
