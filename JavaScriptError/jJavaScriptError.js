// JavaScript Errors - In-Depth Explanation

console.log("\n=== JavaScript Errors Explained ===");

/*
JavaScript errors occur when the code encounters an issue during execution.
Errors can be categorized into:

- Syntax Errors: Issues with the code structure.
- Reference Errors: Using an undefined variable.
- Type Errors: Performing an invalid operation on a variable.
- Range Errors: A number or array index out of range.

Let's explore some common JavaScript errors:
*/


// 1. Invalid Date

console.log("\n=== Invalid Date Error ===");

/*
An "Invalid Date" error occurs when you try to create a Date object with an incorrect format.
*/

const invalidDate = new Date("invalid-date-string");
console.log(invalidDate); // Output: Invalid Date

// Correct way:
const validDate = new Date("2024-03-01");
console.log(validDate); // Output: Fri Mar 01 2024 ...


// 2. Repeat Count Must Be Non-Negative

console.log("\n=== Repeat Count Must Be Non-Negative Error ===");

/*
This error occurs when you use `repeat()` with a negative number.
*/

try {
  console.log("Hello".repeat(-1)); // Throws RangeError
} catch (error) {
  console.log("Error:", error.message); // Output: Repeat count must be non-negative
}

// Correct way:
console.log("Hello".repeat(3)); // Output: HelloHelloHello


// 3. Can’t Access Lexical Declaration `variable` Before Initialization

console.log("\n=== Can't Access Lexical Declaration Before Initialization Error ===");

/*
This error happens when you try to access `let` or `const` before they are declared.
*/

try {
  console.log(myVar); // Throws ReferenceError
  let myVar = 10;
} catch (error) {
  console.log("Error:", error.message);
}

// Correct way:
let myVar2 = 20;
console.log(myVar2); // Output: 20


// 4. Invalid Assignment Left-Hand Side

console.log("\n=== Invalid Assignment Left-Hand Side Error ===");

/*
This error occurs when trying to assign a value to an invalid expression.
*/

try {
  5 = x; // Throws SyntaxError
} catch (error) {
  console.log("Error:", error.message);
}

// Correct way:
let x = 5;
console.log(x); // Output: 5


// 5. Assignment to Undeclared Variable

console.log("\n=== Assignment to Undeclared Variable Error ===");

/*
If you assign a value to a variable without declaring it (in strict mode), you get this error.
*/

"use strict"; // Enforces strict mode

try {
  undeclaredVar = 50; // Throws ReferenceError in strict mode
  console.log(undeclaredVar);
} catch (error) {
  console.log("Error:", error.message);
}

// Correct way:
let declaredVar = 50;
console.log(declaredVar); // Output: 50


// 6. Reference to Undefined Property “x”

console.log("\n=== Reference to Undefined Property Error ===");

/*
This error occurs when you try to access a non-existing property of an object.
*/

const person = { name: "Alice" };
console.log(person.age); // Output: undefined (No error, but property does not exist)

// Correct way:
person.age = 25;
console.log(person.age); // Output: 25


console.log("\n=== JavaScript Error Handling Complete Reference ===");

/*
Errors are common in JavaScript, and they can be handled using try-catch blocks.
Best practices:
1. Validate input before using it.
2. Use try-catch for error handling.
3. Check for undefined properties before accessing them.
4. Use strict mode (`"use strict"`) to catch undeclared variable assignments.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
*/

console.log("JavaScript Errors Explained!");
