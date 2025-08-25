// 🚀 Assignment Script
// Each part is clearly commented

// -------------------------------
// Part 1: JavaScript Basics
// -------------------------------
function checkNumber() {
  let number = 5; // Example number
  let output = (number > 0) 
      ? "The number is positive ✅" 
      : "The number is not positive ❌";
  document.getElementById("basic-output").textContent = output;
}

// -------------------------------
// Part 2: Functions
// -------------------------------
function greetUser(name) {
  let message = `Hello, ${name}! 👋`;
  document.getElementById("greeting").textContent = message;
}

// Example of a reusable function
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total = " + calculateTotal(100, 3)); // Testing in console

// -------------------------------
// Part 3: Loops
// -------------------------------
function showNumbers() {
  let list = document.getElementById("number-list");
  list.innerHTML = ""; // Clear old list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Number: " + i;
    list.appendChild(li);
  }
}

// Another loop example: while loop
let countdown = 3;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// -------------------------------
// Part 4: DOM Manipulation
// -------------------------------
document.getElementById("change-text").addEventListener("click", function () {
  document.getElementById("text-target").textContent = "✨ Text has been changed!";
});

document.getElementById("toggle-color").addEventListener("click", function () {
  document.getElementById("color-target").classList.toggle("highlight");
});

document.getElementById("add-item").addEventListener("click", function () {
  let list = document.getElementById("dynamic-list");
  let newItem = document.createElement("li");
  newItem.textContent = "New item added at " + new Date().toLocaleTimeString();
  list.appendChild(newItem);
});
