
// ====================================================================================
// 🎯 JavaScript Hoisting - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 What is Hoisting?
// ====================================================================================
// 🏆 **Definition:** 
// - Hoisting is JavaScript’s default behavior of **moving variable and function declarations
//   to the top of their containing scope** (before code execution).
// - This means you can use functions and variables **before they are declared** in the code.
// - Hoisting **only moves declarations** (not initializations).
// - It applies to **var, function declarations, and class declarations (with a twist)**.

// 📌 **How does hoisting work?**
// - JavaScript **allocates memory** for variables and functions in the **creation phase** 
//   before executing the code.
// - This means declarations are **registered in memory**, but their values are not assigned 
//   until execution.

// ====================================================================================
// 🔹 1. Hoisting in Variables
// ====================================================================================

// ❌ Using a variable before declaring it (with `var`)
console.log(myVar); // Output: undefined
var myVar = 10; 

// ✅ Equivalent to:
var myVar;
console.log(myVar); // undefined
myVar = 10;

// 📌 Why `undefined`?  
// - `var` is **hoisted** but its **assignment is NOT** hoisted.  
// - The declaration (`var myVar;`) is moved to the top,  
//   but `myVar = 10;` remains in place.


// ====================================================================================
// 🔸 `let` and `const` are Hoisted Differently!
// ====================================================================================

// console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 20;

// console.log(myConst); // ❌ ReferenceError: Cannot access 'myConst' before initialization
const myConst = 30;

// ✅ `let` and `const` **are hoisted**, but they stay in the **Temporal Dead Zone (TDZ)**  
//    - The TDZ exists from the start of the function or block **until the variable is declared**.
//    - Accessing a `let` or `const` before declaration results in a **ReferenceError**.


// ====================================================================================
// 🔹 2. Hoisting in Functions
// ====================================================================================

// ✅ Function Declarations Are Fully Hoisted!
sayHello(); // Output: Hello, World!

function sayHello() {
    console.log("Hello, World!");
}

// 📌 Why does this work?
// - Function declarations are **completely hoisted**,  
//   meaning both their **name and body** are moved to the top.


// ====================================================================================
// 🔸 Function Expressions Are Not Fully Hoisted
// ====================================================================================

// console.log(sayHi()); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi there!");
};

// ✅ Equivalent to:
var sayHi;
console.log(sayHi); // undefined
sayHi = function() { console.log("Hi there!"); };

// 📌 Why does this fail?
// - `var sayHi` is hoisted as `undefined`,  
//   but the function **assignment** is not hoisted.


// ====================================================================================
// 🔸 Arrow Functions Follow the Same Hoisting Rules as Function Expressions
// ====================================================================================

// console.log(greet()); // ❌ TypeError: greet is not a function
var greet = () => console.log("Hey!");

// ✅ Equivalent to:
var greet;
console.log(greet); // undefined
greet = () => console.log("Hey!");

// 📌 Why does this fail?
// - `greet` is hoisted as `undefined`, but the function **assignment** is not hoisted.


// ====================================================================================
// 🔹 3. Hoisting in Classes
// ====================================================================================

// console.log(new Person()); // ❌ ReferenceError: Cannot access 'Person' before initialization
class Person {
    constructor(name) {
        this.name = name;
    }
}

// ✅ Equivalent to:
let Person;
console.log(new Person()); // ❌ ReferenceError
Person = class {
    constructor(name) {
        this.name = name;
    }
};

// 📌 Why does this fail?
// - Classes **are hoisted** but stay in the **Temporal Dead Zone (TDZ)**,
//   similar to `let` and `const`.


// ====================================================================================
// 🔹 4. Hoisting in Different Scopes
// ====================================================================================

// 🔸 Function Scope Hoisting
function testHoisting() {
    console.log(innerVar); // undefined
    var innerVar = "I'm inside a function!";
    console.log(innerVar); // "I'm inside a function!"
}
testHoisting();

// 🔸 Block Scope Hoisting (with `let` and `const`)
{
    // console.log(blockVar); // ❌ ReferenceError: Cannot access 'blockVar' before initialization
    let blockVar = "I'm inside a block!";
    console.log(blockVar); // ✅ Works inside the block
}

// 📌 `let` and `const` are hoisted within the block but remain in the **Temporal Dead Zone**.


// ====================================================================================
// 🔹 5. Real-World Example of Hoisting Issues
// ====================================================================================

// 🔸 Problem: Using `var` inside loops
console.log("Loop Issue:");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 3, 3, 3 (Instead of 0, 1, 2)

// ✅ Fix using `let`
console.log("Fixed with let:");
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000);
}
// Output: 0, 1, 2 (Each `i` gets a separate scope)


// ====================================================================================
// 🎯 Summary & Best Practices
// ====================================================================================
// ✅ JavaScript **hoists variable and function declarations** to the top before execution.
// ✅ **Function declarations** are fully hoisted (name + body).
// ✅ **var** is hoisted but initialized to `undefined`.
// ✅ **let, const, and class** are hoisted but stay in the **Temporal Dead Zone (TDZ)**.
// ✅ **Function expressions and arrow functions** behave like variables (`undefined` before initialization).
// ✅ Prefer `let` or `const` to avoid issues with hoisting.
// ✅ Avoid relying on hoisting for cleaner and predictable code.


// ====================================================================================
// 🎯 End of Hoisting Explanation
// ====================================================================================