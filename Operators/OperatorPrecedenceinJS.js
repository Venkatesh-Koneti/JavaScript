// ====================================================================================
// 🎯 JavaScript Operator Precedence - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 1. What is Operator Precedence?
// ====================================================================================
// 🏆 **Definition:**
// - Operator precedence determines **which operator is evaluated first** in an expression.
// - Some operators are evaluated **before** others based on **precedence ranking**.
// - **Parentheses `()`** can override precedence to **explicitly control evaluation order**.

// 📌 **Example Without Parentheses:**
console.log(10 + 5 * 2); 
// ➝ 10 + (5 * 2)  ➝ 10 + 10 ➝ 20
// Multiplication (`*`) has **higher precedence** than addition (`+`).

// 📌 **Example With Parentheses:**
console.log((10 + 5) * 2); 
// ➝ (15) * 2 ➝ 30
// Parentheses override precedence, making `+` evaluate first.

// ====================================================================================
// 🔹 2. JavaScript Operator Precedence Table
// ====================================================================================
// 📌 The **higher the precedence number**, the **earlier** the operator executes.

console.log("Operator Precedence Table:");
// console.table([
//   { Precedence: 20, Operator: "()", Description: "Grouping (Parentheses)" },
//   { Precedence: 18, Operator: "new", Description: "Object Creation" },
//   { Precedence: 17, Operator: ".", "[]", "()", Description: "Member Access, Function Call, Array Indexing" },
//   { Precedence: 16, Operator: "!", "typeof", "void", "delete", Description: "Unary Operators" },
//   { Precedence: 15, Operator: "**", Description: "Exponentiation" },
//   { Precedence: 14, Operator: "*", "/", "%", Description: "Multiplication, Division, Modulus" },
//   { Precedence: 13, Operator: "+", "-", Description: "Addition, Subtraction" },
//   { Precedence: 12, Operator: "<<", ">>", ">>>", Description: "Bitwise Shift Operators" },
//   { Precedence: 11, Operator: "<", "<=", ">", ">=", "instanceof", "in", Description: "Comparison Operators" },
//   { Precedence: 10, Operator: "==", "!=", "===", "!==", Description: "Equality Operators" },
//   { Precedence: 9, Operator: "&", Description: "Bitwise AND" },
//   { Precedence: 8, Operator: "^", Description: "Bitwise XOR" },
//   { Precedence: 7, Operator: "|", Description: "Bitwise OR" },
//   { Precedence: 6, Operator: "&&", Description: "Logical AND" },
//   { Precedence: 5, Operator: "||", Description: "Logical OR" },
//   { Precedence: 4, Operator: "?:", Description: "Ternary Operator" },
//   { Precedence: 3, Operator: "=", "+=", "-=", "*=", "/=", "%=", "**=", Description: "Assignment Operators" },
//   { Precedence: 2, Operator: ",", Description: "Comma Operator" }
// ]);
console.table([
    { Precedence: 20, Operator: "()", Description: "Grouping (Parentheses)" },
    { Precedence: 18, Operator: "new", Description: "Object Creation" },
    { Precedence: 17, Operator: "., [], ()", Description: "Member Access, Function Call, Array Indexing" },
    { Precedence: 16, Operator: "!, typeof, void, delete", Description: "Unary Operators" },
    { Precedence: 15, Operator: "**", Description: "Exponentiation" },
    { Precedence: 14, Operator: "*, /, %", Description: "Multiplication, Division, Modulus" },
    { Precedence: 13, Operator: "+, -", Description: "Addition, Subtraction" },
    { Precedence: 12, Operator: "<<, >>, >>>", Description: "Bitwise Shift Operators" },
    { Precedence: 11, Operator: "<, <=, >, >=, instanceof, in", Description: "Comparison Operators" },
    { Precedence: 10, Operator: "==, !=, ===, !==", Description: "Equality Operators" },
    { Precedence: 9, Operator: "&", Description: "Bitwise AND" },
    { Precedence: 8, Operator: "^", Description: "Bitwise XOR" },
    { Precedence: 7, Operator: "|", Description: "Bitwise OR" },
    { Precedence: 6, Operator: "&&", Description: "Logical AND" },
    { Precedence: 5, Operator: "||", Description: "Logical OR" },
    { Precedence: 4, Operator: "?:", Description: "Ternary Operator" },
    { Precedence: 3, Operator: "=, +=, -=, *=, /=, %=, **=", Description: "Assignment Operators" },
    { Precedence: 2, Operator: ",", Description: "Comma Operator" }
  ]);
  

// ====================================================================================
// 🔹 3. Operator Associativity (Left-to-Right or Right-to-Left?)
// ====================================================================================
// 🔥 **Definition:** When two operators have the **same precedence**, associativity decides 
//    whether evaluation happens **left-to-right** or **right-to-left**.

// ✅ **Left-to-Right Associativity (Most Operators)**
console.log(10 - 5 - 2); 
// ➝ (10 - 5) - 2 ➝ 5 - 2 ➝ 3
// `-` operator is **left-to-right associative**.

// ✅ **Right-to-Left Associativity (Assignment & Exponentiation)**
let x = y = z = 10; 
console.log(x, y, z); 
// ➝ x = (y = (z = 10)) ➝ Right-to-left execution.

console.log(2 ** 3 ** 2); 
// ➝ 2 ** (3 ** 2) ➝ 2 ** 9 ➝ 512
// `**` operator is **right-to-left associative**.

// ====================================================================================
// 🔹 4. Real-World Examples of Operator Precedence
// ====================================================================================

// ✅ Example 1: Unexpected Behavior Due to Precedence
let result1 = 10 + 5 * 2 / 5; 
console.log(result1); 
// ➝ 10 + ((5 * 2) / 5) ➝ 10 + (10 / 5) ➝ 10 + 2 ➝ 12

// ✅ Example 2: Parentheses Fixing Order
let result2 = (10 + 5) * 2 / 5; 
console.log(result2); 
// ➝ (15 * 2) / 5 ➝ 30 / 5 ➝ 6

// ✅ Example 3: Logical Operators & Short-Circuiting
console.log(true || false && false); 
// ➝ true || (false && false) ➝ true || false ➝ true
// `&&` has higher precedence than `||`, so it runs first.

// ✅ Example 4: Using `??` (Nullish Coalescing)
let username = null ?? "Guest";
console.log(username); 
// ➝ "Guest" (Because `??` checks only for `null` or `undefined`)

// ✅ Example 5: Confusing Assignment in `if` Condition
let isAdmin = false;
if (isAdmin = true) {
  console.log("Access Granted!");
} else {
  console.log("Access Denied!");
}
// ➝ "Access Granted!" 😱 (Mistake! `=` is an assignment, not a comparison)

// **✅ Fix using `===`:**
if (isAdmin === true) {
  console.log("Access Granted!");
}

// ====================================================================================
// 🔹 5. Best Practices to Avoid Operator Precedence Bugs
// ====================================================================================
// ✅ **Use Parentheses `()` to Explicitly Define Order**
// - Don't rely on default precedence if the order is not obvious.
let total = (10 + 5) * 2; // Always use parentheses for clarity

// ✅ **Use `===` for Comparisons Instead of `=`**
if (x === 5) console.log("Equal"); // ✅ Correct
if (x = 5) console.log("Wrong");  // ❌ Mistake! This assigns 5 to x

// ✅ **Be Careful with Logical Operators (`&&`, `||`) in Conditions**
let loggedIn = false;
console.log(loggedIn || "Guest"); 
// Works but not recommended. Instead, use `??`

// ✅ **Use Parentheses for Exponentiation (`**`)**
console.log(2 ** (3 ** 2)); // ✅ Clear
console.log(2 ** 3 ** 2); // ❌ Unclear without knowing precedence

// ====================================================================================
// 🎯 Summary & Recap
// ====================================================================================
// ✅ **Operator Precedence** decides which operator executes first.
// ✅ **Parentheses `()` override precedence** and should be used for clarity.
// ✅ **Associativity** decides left-to-right (`+`, `-`, `*`, `/`) or right-to-left (`=`, `**`).
// ✅ **Logical Operators (`&&`, `||`) follow precedence rules but can be tricky (Short-circuiting).**
// ✅ **Use explicit parentheses `()` to avoid unintended behavior.**

// 🚀 **Best Practice: Always Use Parentheses When Expression Order is Unclear!**

// ====================================================================================
// 🎯 End of JavaScript Operator Precedence Explanation
// ====================================================================================
