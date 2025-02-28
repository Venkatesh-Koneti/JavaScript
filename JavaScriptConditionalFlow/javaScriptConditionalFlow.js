// JavaScript Conditional Flow - Full Explanation & Examples

// Conditional flow in JavaScript controls how the program executes different parts of the code based on conditions.
// JavaScript provides multiple ways to handle conditions: if, if-else, if-else if, switch, ternary operator, and logical operators.

console.log("✅ JavaScript Conditional Flow Examples");

// ==========================================
// 1️⃣ if Statement
// ==========================================
// The `if` statement executes a block of code only if the condition is TRUE.

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote."); // This will be printed
}

// ==========================================
// 2️⃣ if-else Statement
// ==========================================
// The `if-else` statement executes different blocks based on the condition.

let temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day.");
} else {
  console.log("It's a cool day.");
}

// ==========================================
// 3️⃣ if-else if-else Ladder
// ==========================================
// When multiple conditions need to be checked, use `else if`.

let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B"); // This will be printed
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F (Fail)");
}

// ==========================================
// 4️⃣ Nested if Statements
// ==========================================
// `if` statements can be nested inside another `if`.

let username = "John";
let password = "12345";

if (username === "John") {
  if (password === "12345") {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("User not found");
}

// ==========================================
// 5️⃣ Ternary Operator (? :)
// ==========================================
// A shorthand way to write an `if-else` statement.

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Even"

// ==========================================
// 6️⃣ switch Statement
// ==========================================
// The `switch` statement is used when checking a variable against multiple values.

let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Tuesday":
    console.log("It's Tuesday."); // This will be printed
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  default:
    console.log("Invalid day");
}

// ==========================================
// 7️⃣ Logical Operators in Conditional Flow
// ==========================================
// Logical operators (`&&`, `||`, `!`) are used to combine multiple conditions.

let isRaining = true;
let isCold = false;

// Logical AND (&&) - Both conditions must be true
if (isRaining && isCold) {
  console.log("Wear a raincoat and a jacket.");
} else if (isRaining && !isCold) {
  console.log("Wear a raincoat."); // This will be printed
}

// Logical OR (||) - At least one condition must be true
let hasUmbrella = false;
if (isRaining || hasUmbrella) {
  console.log("You are prepared for the rain.");
}

// Logical NOT (!) - Reverses the condition
if (!isCold) {
  console.log("It's not cold outside."); // This will be printed
}

// ==========================================
// 8️⃣ Truthy and Falsy Values in JavaScript
// ==========================================
// Any value in JavaScript can be either `truthy` or `falsy` when evaluated in a boolean context.

let value1 = ""; // Empty string is falsy
let value2 = "Hello"; // Non-empty string is truthy
let value3 = 0; // Zero is falsy
let value4 = 42; // Any non-zero number is truthy
let value5 = null; // null is falsy
let value6 = undefined; // undefined is falsy
let value7 = []; // An empty array is truthy
let value8 = {}; // An empty object is truthy

if (value2) {
  console.log("value2 is truthy"); // This will be printed
}

if (!value1) {
  console.log("value1 is falsy"); // This will be printed
}

// ==========================================
// 9️⃣ Short-Circuit Evaluation
// ==========================================
// JavaScript uses short-circuit evaluation with `&&` and `||`.

let usernameInput = "";
let displayName = usernameInput || "Guest"; // If usernameInput is falsy, "Guest" is assigned
console.log(displayName); // Output: "Guest"

let isUserLoggedIn = true;
isUserLoggedIn && console.log("User is logged in"); // Since true, the message is printed

// ==========================================
// 🔟 Nullish Coalescing Operator (??)
// ==========================================
// The `??` operator returns the right-hand value if the left-hand value is `null` or `undefined`.

let userProfile = null;
let defaultProfile = userProfile ?? "Default Profile"; // If userProfile is null, use "Default Profile"
console.log(defaultProfile); // Output: "Default Profile"

// ==========================================
// 🔥 Final Notes on Conditional Flow
// ==========================================
// - Always use `if-else` when checking a condition that has two possibilities.
// - Use `if-else if` for multiple conditions.
// - Use `switch` when checking a single variable against multiple possible values.
// - Use ternary operator for short and simple conditions.
// - Use logical operators (`&&`, `||`, `!`) to simplify conditional statements.
// - Be aware of **truthy** and **falsy** values in JavaScript.

console.log("✅ JavaScript Conditional Flow Examples Completed");
