// Error Handling in JavaScript - Full Explanation

console.log("\n=== JavaScript Error Handling Explained ===");

/*
Error handling in JavaScript is essential to ensure that programs do not break unexpectedly.
JavaScript provides the `try...catch` mechanism to catch and handle errors gracefully.

Types of JavaScript Errors:
1. Syntax Errors - Errors in the code structure (e.g., missing brackets).
2. Reference Errors - Using an undefined variable.
3. Type Errors - Performing an invalid operation on a variable.
4. Range Errors - Using an out-of-range number.

Now, let's explore error handling in-depth:
*/


// 1. JS Errors: Throw and Try-Catch

console.log("\n=== Throw and Try-Catch in JavaScript ===");

/*
`try...catch` is used to handle errors gracefully.
- `throw` lets us create custom errors.
- `catch` catches and handles errors.
*/

function divideNumbers(a, b) {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  }
}

console.log(divideNumbers(10, 0)); // Output: Error: Division by zero is not allowed!
console.log(divideNumbers(10, 2)); // Output: 5


// 2. Console in JavaScript

console.log("\n=== Console in JavaScript ===");

/*
The `console` object helps debug and log messages.
Common methods:
- console.log()  → General logging
- console.error() → Logs errors
- console.warn()  → Logs warnings
- console.table() → Displays arrays/objects in a table
*/

console.log("Normal log message");
console.error("This is an error message");
console.warn("This is a warning message");

const obj = { name: "Alice", age: 25 };
console.table(obj);


// 3. JS Error and Exceptional Handling with Examples

console.log("\n=== JS Error and Exceptional Handling with Examples ===");

/*
Handling different types of errors:
- Try to access an undefined variable (ReferenceError)
- Performing an invalid operation (TypeError)
*/

try {
  console.log(undefinedVar); // ReferenceError
} catch (error) {
  console.log("Caught ReferenceError:", error.message);
}

try {
  null.someFunction(); // TypeError
} catch (error) {
  console.log("Caught TypeError:", error.message);
}


// 4. Debugging in JavaScript

console.log("\n=== Debugging in JavaScript ===");

/*
Debugging tools:
1. `debugger;` → Pauses execution (useful for browser dev tools).
2. Chrome DevTools → Inspect variables and set breakpoints.
*/

function debugExample() {
  let x = 10;
  let y = 20;
  debugger; // Execution pauses here in the browser console
  let sum = x + y;
  console.log(sum);
}

debugExample();


// 5. Why we cannot catch an error outside of a function in JS?

console.log("\n=== Why We Cannot Catch Errors Outside Functions? ===");

/*
JavaScript runs code sequentially. Errors in asynchronous code (like setTimeout) cannot be caught with a simple `try...catch`.
*/

try {
  setTimeout(() => {
    throw new Error("This error will not be caught by try-catch!");
  }, 1000);
} catch (error) {
  console.log("Won't execute:", error.message);
}

// Correct way:
setTimeout(() => {
  try {
    throw new Error("Handled inside setTimeout!");
  } catch (error) {
    console.log("Caught:", error.message);
  }
}, 1000);


// 6. Unexpected Token Error for Catch in JS

console.log("\n=== Unexpected Token Error in Catch Block ===");

/*
An "Unexpected Token" error in `catch` occurs if:
1. `catch` is used without `try`.
2. The `catch` block is incorrectly formatted.
*/

try {
  console.log("Executing try block");
} catch {
  console.log("This works in modern JavaScript!"); // No `error` parameter is required in ES10+
}

// Incorrect example that throws an error:
// try {
//   console.log("Hello");
// } // catch ( // SyntaxError: Unexpected token '('


// 7. How to Increase Multiple Try-Catch Readability in JS?

console.log("\n=== Increasing Try-Catch Readability ===");

/*
Use functions for better readability.
- Separate error handling logic from business logic.
- Use meaningful error messages.
*/

function processUserInput(input) {
  try {
    if (!input) throw new Error("Input cannot be empty");
    console.log("Processing:", input);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

function processPayment(amount) {
  try {
    if (amount < 0) throw new Error("Amount must be positive");
    console.log("Payment successful:", amount);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

// Calling functions:
processUserInput(""); // Error: Input cannot be empty
processPayment(-100); // Error: Amount must be positive


// 8. JS Error Handling: Unexpected Token

console.log("\n=== Unexpected Token Error Handling ===");

/*
Unexpected Token errors occur due to:
1. Missing `try` before `catch`.
2. Syntax issues like missing brackets.
*/

try {
  console.log("Correct syntax for try-catch");
} catch (error) {
  console.log("Caught error:", error.message);
}

// Example of incorrect syntax that throws an error:
// try {
//   console.log("This is wrong")
// catch (error) { // SyntaxError: Unexpected token 'catch'
//   console.log("Error occurred");
// }


// === Summary ===
console.log("\n=== Summary of JavaScript Error Handling ===");

/*
✅ Use `try...catch` to handle errors.
✅ Use `console.error()` and `console.warn()` for debugging.
✅ Handle asynchronous errors inside their functions.
✅ Use functions to improve multiple try-catch readability.
✅ Use `debugger;` for debugging in browser DevTools.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
*/

console.log("JavaScript Error Handling Explained!");
