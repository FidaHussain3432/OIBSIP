// ---------- State ----------
let currentInput = "0";   // jo screen pe dikh raha hai
let previousValue = null; // pichla number
let currentOperator = null;
let waitingForOperand = false; // operator dabane ke baad naya number lene ka wait

const display = document.getElementById("display");

// ---------- Display update ----------
function updateDisplay() {
  display.textContent = currentInput;
}

// ---------- Number input ----------
function inputNumber(num) {
  if (waitingForOperand) {
    currentInput = num === "." ? "0." : num;
    waitingForOperand = false;
  } else {
    if (num === "." && currentInput.includes(".")) return; // ek hi decimal
    currentInput = currentInput === "0" && num !== "." ? num : currentInput + num;
  }
  updateDisplay();
}

// ---------- Calculation (no eval) ----------
function calculate(a, op, b) {
  const x = parseFloat(a);
  const y = parseFloat(b);
  if (isNaN(x) || isNaN(y)) return "Error";

  let result;
  switch (op) {
    case "+": result = x + y; break;
    case "−": result = x - y; break;
    case "×": result = x * y; break;
    case "÷":
      if (y === 0) return "Error"; // division by zero
      result = x / y;
      break;
    default: return "Error";
  }
  // floating point cleanup (e.g. 0.1+0.2 = 0.30000000000000004)
  return String(Math.round(result * 1e10) / 1e10);
}

// ---------- Operator ----------
function handleOperator(op) {
  if (currentInput === "Error") return;

  // Agar pehle se operator pending hai aur user ne naya number type kiya hai
  if (previousValue !== null && currentOperator !== null && !waitingForOperand) {
    const result = calculate(previousValue, currentOperator, currentInput);
    if (result === "Error") {
      currentInput = "Error";
      previousValue = null;
      currentOperator = null;
      updateDisplay();
      return;
    }
    currentInput = result;
    previousValue = result;
    updateDisplay();
  } else {
    previousValue = currentInput;
  }

  currentOperator = op;
  waitingForOperand = true;
}

// ---------- Equals ----------
function handleEquals() {
  if (currentOperator === null || previousValue === null || currentInput === "Error") return;

  const result = calculate(previousValue, currentOperator, currentInput);
  currentInput = result;
  previousValue = null;
  currentOperator = null;
  waitingForOperand = true;
  updateDisplay();
}

// ---------- Clear ----------
function handleClear() {
  currentInput = "0";
  previousValue = null;
  currentOperator = null;
  waitingForOperand = false;
  updateDisplay();
}

// ---------- Backspace ----------
function handleBackspace() {
  if (currentInput === "Error" || waitingForOperand) return;
  currentInput = currentInput.length > 1 ? currentInput.slice(0, -1) : "0";
  updateDisplay();
}

// ---------- Event listeners ----------
document.querySelectorAll("button").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const num = btn.dataset.number;
    const op = btn.dataset.operator;
    const action = btn.dataset.action;

    if (num !== undefined) inputNumber(num);
    else if (op !== undefined) handleOperator(op);
    else if (action === "equals") handleEquals();
    else if (action === "clear") handleClear();
    else if (action === "backspace") handleBackspace();
  });
});

// ---------- Keyboard support (bonus) ----------
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (/^[0-9.]$/.test(key)) inputNumber(key);
  else if (key === "+") handleOperator("+");
  else if (key === "-") handleOperator("−");
  else if (key === "*") handleOperator("×");
  else if (key === "/") { e.preventDefault(); handleOperator("÷"); }
  else if (key === "Enter" || key === "=") handleEquals();
  else if (key === "Backspace") handleBackspace();
  else if (key === "Escape") handleClear();
});

updateDisplay();