// ================================
// 🏆 JavaScript Loops
// ================================
// Loops are used to execute a block of code multiple times based on a condition.
// They help in reducing redundancy and improving efficiency in code execution.


// ================================
// 🔹 1. Loops in JavaScript
// ================================
// JavaScript provides multiple types of loops to handle iteration:
// - for Loop
// - while Loop
// - do...while Loop
// - for...in Loop (for objects)
// - for...of Loop (for iterable values)
// - forEach() Method (for arrays)


// ================================
// 🔹 2. JavaScript For Loop
// ================================
// The "for" loop is the most commonly used loop in JavaScript.
// It executes a block of code a fixed number of times.

// 🔹 Syntax:
// for (initialization; condition; increment/decrement) {
//     // Code to be executed
// }

console.log("🔹 For Loop Example:");
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}

// 🔹 Execution Flow:
// 1️⃣ Initialization (`let i = 1`) → Runs once before the loop starts.
// 2️⃣ Condition (`i <= 5`) → Checked before every iteration.
// 3️⃣ Code Block (`console.log(i)`) → Executes if condition is true.
// 4️⃣ Increment (`i++`) → Updates the counter.
// 5️⃣ Repeat steps 2-4 until condition becomes false.


// ================================
// 🔹 3. JavaScript While Loop
// ================================
// The "while" loop runs as long as the condition remains true.

// 🔹 Syntax:
// while (condition) {
//     // Code to execute
// }

console.log("🔹 While Loop Example:");
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++; // Increment to avoid infinite loop
}

// 🔹 When to use `while`?
// - When the number of iterations is unknown beforehand.


// ================================
// 🔹 4. JavaScript Do...While Loop
// ================================
// Similar to `while`, but executes the block **at least once** before checking the condition.

// 🔹 Syntax:
// do {
//     // Code to execute
// } while (condition);

console.log("🔹 Do While Loop Example:");
let num = 1;
do {
  console.log("Number:", num);
  num++;
} while (num <= 5);

// 🔹 Key Difference:
// - `while` checks the condition **before** executing the block.
// - `do...while` executes the block **at least once** before checking.


// ================================
// 🔹 5. JavaScript for...in Loop (for Objects)
// ================================
// Used for iterating over properties of an object (keys).

// 🔹 Syntax:
// for (let key in object) {
//     // Code to execute
// }

console.log("🔹 for...in Loop Example:");
let person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key, ":", person[key]); // Accessing values using key
}

// 🔹 Use Case:
// - Best for iterating through objects.


// ================================
// 🔹 6. JavaScript for...of Loop (for Iterables)
// ================================
// Used for iterating over iterable objects (Arrays, Strings, Maps, Sets).

// 🔹 Syntax:
// for (let value of iterable) {
//     // Code to execute
// }

console.log("🔹 for...of Loop Example:");
let numbers = [10, 20, 30, 40, 50];
for (let num of numbers) {
  console.log("Number:", num);
}

// 🔹 Use Case:
// - Best for iterating through arrays and iterable objects.


// ================================
// 🔹 7. JavaScript Continue Statement
// ================================
// The `continue` statement skips the current iteration and moves to the next one.

console.log("🔹 Continue Statement Example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping 3");
    continue; // Skips iteration when i is 3
  }
  console.log(i);
}


// ================================
// 🔹 8. JavaScript Break and Continue
// ================================
// The `break` statement stops the loop entirely.

console.log("🔹 Break Statement Example:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at 3");
    break; // Exits the loop when i is 3
  }
  console.log(i);
}

// 🔹 Difference:
// - `continue` skips only the current iteration.
// - `break` exits the entire loop.


// ================================
// 🔹 9. JavaScript Errors: Throw, Try, and Catch
// ================================
// JavaScript provides error handling using `try`, `catch`, `finally`, and `throw`.

// 🔹 Syntax:
// try {
//     // Code that may throw an error
// } catch (error) {
//     // Handle the error
// } finally {
//     // Code that runs regardless of errors
// }

console.log("🔹 Error Handling Example:");
try {
  let result = 10 / 0; // Division by zero
  console.log(result);
  throw new Error("Custom Error!");
} catch (error) {
  console.log("Caught an error:", error.message);
} finally {
  console.log("Execution completed.");
}


// ================================
// 🔹 10. Difference Between forEach and for Loop in JS
// ================================
// `forEach()` is an array method, while `for` is a general loop.

// 🔹 forEach Example:
console.log("🔹 forEach Example:");
let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => console.log(num));

// 🔹 Key Differences:
// - `for` gives full control (can use `break` and `continue`).
// - `forEach` is **functional** and better for **array traversal**.
// - `forEach` does not work with `async-await` properly.


// ================================
// 🏆 Summary
// ================================
// ✅ `for` → General-purpose loop (fixed iterations).
// ✅ `while` → Runs until a condition becomes false.
// ✅ `do...while` → Runs at least once.
// ✅ `for...in` → Iterates over object properties.
// ✅ `for...of` → Iterates over iterable values.
// ✅ `continue` → Skips the current iteration.
// ✅ `break` → Exits the loop entirely.
// ✅ `forEach()` → Array-specific loop.

console.log("✅ JavaScript Loops Explained!");
