// ====================================================================================
// 🎯 JavaScript Variables - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 1. What Are Variables in JavaScript?
// ====================================================================================
// 🏆 **Definition:**
// - A variable is a **named storage location** in memory that holds data.
// - JavaScript variables allow you to store, modify, and retrieve values during program execution.

// 🛠 **How JavaScript Variables Work:**
// 1️⃣ Declare a variable using `var`, `let`, or `const`.
// 2️⃣ Assign a value to the variable.
// 3️⃣ Use the variable in expressions and functions.


// ====================================================================================
// 🔹 2. Declaring Variables in JavaScript
// ====================================================================================

// 🎯 JavaScript provides three ways to declare variables:
// ✅ `var`   → Function-scoped (older, avoid using it in modern code)
// ✅ `let`   → Block-scoped (preferred for mutable values)
// ✅ `const` → Block-scoped and **immutable** (preferred for constants)

// ====================================================================================
// 🔹 3. Understanding `var` Keyword (Function-scoped)
// ====================================================================================

var a = 10; // ✅ Variable declaration and initialization
console.log(a); // Output: 10

// ✅ `var` allows redeclaration
var a = 20; 
console.log(a); // Output: 20

// ✅ `var` allows reassignment
a = 30; 
console.log(a); // Output: 30

// 🔸 `var` is function-scoped (NOT block-scoped)
function testVar() {
    var x = 100;
    if (true) {
        var x = 200; // Overrides the previous x
        console.log(x); // Output: 200
    }
    console.log(x); // Output: 200
}
testVar();

// 📌 **Problems with `var`:**
// - It does NOT have block scope, leading to unintended variable modifications.
// - It is hoisted but initialized to `undefined`, causing bugs.


// ====================================================================================
// 🔹 4. Understanding `let` Keyword (Block-scoped)
// ====================================================================================

let b = 10; // ✅ Variable declaration and initialization
console.log(b); // Output: 10

// ❌ Redeclaration is NOT allowed
// let b = 20; // SyntaxError: Identifier 'b' has already been declared

// ✅ Reassignment is allowed
b = 20;
console.log(b); // Output: 20

// 🔸 `let` is block-scoped
function testLet() {
    let y = 50;
    if (true) {
        let y = 100; // New variable in a separate block scope
        console.log(y); // Output: 100
    }
    console.log(y); // Output: 50
}
testLet();

// 📌 **Why use `let`?**
// - Prevents accidental redeclaration of variables.
// - Avoids hoisting issues because it's in the **Temporal Dead Zone (TDZ)**.


// ====================================================================================
// 🔹 5. Understanding `const` Keyword (Block-scoped & Immutable)
// ====================================================================================

const c = 10;
console.log(c); // Output: 10

// ❌ Redeclaration is NOT allowed
// const c = 20; // SyntaxError: Identifier 'c' has already been declared

// ❌ Reassignment is NOT allowed
// c = 20; // TypeError: Assignment to constant variable

// ✅ `const` is block-scoped like `let`
function testConst() {
    const z = 100;
    if (true) {
        const z = 200; // New variable in a separate block scope
        console.log(z); // Output: 200
    }
    console.log(z); // Output: 100
}
testConst();

// 📌 **Key Takeaways of `const`:**
// - **Must be initialized** during declaration.
// - Prevents **accidental reassignment** of variables.
// - Can be used for **constants, configurations, and immutable data**.


// ====================================================================================
// 🔹 6. Difference Between `var`, `let`, and `const`
// ====================================================================================

// ┌────────────┬───────────────┬─────────────┬─────────────┐
// │ Feature    │ var           │ let         │ const       │
// ├────────────┼───────────────┼─────────────┼─────────────┤
// │ Scope      │ Function      │ Block       │ Block       │
// │ Hoisting   │ Hoisted       │ Hoisted (TDZ) │ Hoisted (TDZ) │
// │ Redeclare  │ ✅ Yes        │ ❌ No       │ ❌ No       │
// │ Reassign   │ ✅ Yes        │ ✅ Yes      │ ❌ No       │
// │ Use Case   │ ❌ Avoid      │ ✅ Use       │ ✅ Use for constants │
// └────────────┴───────────────┴─────────────┴─────────────┘


// ====================================================================================
// 🔹 7. Global & Local Variables in JavaScript
// ====================================================================================

// 🎯 Global variables (accessible anywhere)
var globalVar = "I am global!";
function exampleGlobal() {
    console.log(globalVar); // ✅ Accessible
}
exampleGlobal();

// 🎯 Local variables (accessible only within a function)
function exampleLocal() {
    var localVar = "I am local!";
    console.log(localVar); // ✅ Accessible here
}
// console.log(localVar); // ❌ ReferenceError: localVar is not defined


// ====================================================================================
// 🔹 8. Accessing Variables from Another File in JavaScript
// ====================================================================================

// 🚀 In a **Node.js environment**, we use `module.exports` and `require()`

// file1.js
const myValue = "Exported Value";
module.exports = myValue;

// file2.js
const importedValue = require("./file1");
console.log(importedValue); // Output: "Exported Value"

// 🚀 In a **browser environment**, we use `<script>` tags
// <script src="file1.js"></script>
// <script src="file2.js"></script>


// ====================================================================================
// 🔹 9. Variable Hoisting in JavaScript
// ====================================================================================

// ✅ `var` is hoisted but initialized as `undefined`
console.log(hoistedVar); // undefined
var hoistedVar = 50;

// ❌ `let` and `const` are hoisted but stay in the **Temporal Dead Zone (TDZ)**
// console.log(hoistedLet); // ❌ ReferenceError
let hoistedLet = 60;


// ====================================================================================
// 🔹 10. Best Practices for Declaring Variables
// ====================================================================================

// ✅ 1. Prefer `const` for values that should not change
const PI = 3.14159;

// ✅ 2. Use `let` for mutable values
let counter = 0;

// ❌ 3. Avoid `var` (use `let` or `const` instead)

// ✅ 4. Use meaningful variable names
let userAge = 25;  // ✅ Good
let x = 25;        // ❌ Bad

// ✅ 5. Use camelCase for variable names in JavaScript
let firstName = "John";  // ✅ Good
let first_name = "John"; // ❌ Avoid (snake_case is for Python)

// ✅ 6. Declare all variables at the **beginning of the scope**
function example() {
    let name = "Alice"; // ✅ Good
    let age = 30;       // ✅ Good
}

// ✅ 7. Group `const`, `let`, and function declarations separately
const MAX_USERS = 100;
let currentUser = "John";

function sayHello() {
    console.log("Hello, World!");
}


// ====================================================================================
// 🎯 Summary & Final Thoughts
// ====================================================================================
// ✅ `var` → Function-scoped, hoisted (avoid using it in modern code).
// ✅ `let` → Block-scoped, mutable, prevents hoisting issues (preferred).
// ✅ `const` → Block-scoped, immutable, prevents reassignment (best for constants).
// ✅ Avoid using `var` due to scope and hoisting issues.
// ✅ Always use meaningful variable names and follow best practices.


// ====================================================================================
// 🎯 End of JavaScript Variables Explanation
// ====================================================================================
