// ====================================================================================
// 🎯 JavaScript Operators - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 1. What Are Operators in JavaScript?
// ====================================================================================
// 🏆 **Definition:**
// - An **operator** is a symbol that performs operations on **operands** (values or variables).
// - Operators can be used for **arithmetic**, **assignments**, **comparisons**, **logical operations**, and more.

// 📌 **Example of an Operator:**
let sum = 5 + 10; // `+` is an arithmetic operator

// ====================================================================================
// 🔹 2. Types of Operators in JavaScript
// ====================================================================================
// ✅ Arithmetic Operators
// ✅ Assignment Operators
// ✅ Comparison Operators
// ✅ Logical Operators
// ✅ Bitwise Operators
// ✅ String Operators
// ✅ Ternary (Conditional) Operators
// ✅ Type Operators
// ✅ Nullish Coalescing Operator (`??`)

// Let's explore each one in detail 🔥

// ====================================================================================
// 🔹 3. Arithmetic Operators (Perform Mathematical Operations)
// ====================================================================================
let a = 10;
let b = 5;

// ✅ Basic Arithmetic
console.log(a + b); // ➝ 15 (Addition)
console.log(a - b); // ➝ 5 (Subtraction)
console.log(a * b); // ➝ 50 (Multiplication)
console.log(a / b); // ➝ 2 (Division)
console.log(a % b); // ➝ 0 (Modulus - Remainder)
console.log(a ** 2); // ➝ 100 (Exponentiation)

// ✅ Increment & Decrement Operators
let count = 1;
console.log(count++); // ➝ 1 (Post-increment: returns old value, then increments)
console.log(++count); // ➝ 3 (Pre-increment: increments first, then returns new value)
console.log(count--); // ➝ 3 (Post-decrement)
console.log(--count); // ➝ 1 (Pre-decrement)

// ====================================================================================
// 🔹 4. Assignment Operators (Assign Values to Variables)
// ====================================================================================
let x = 10;  // `=` assigns value
x += 5;  // ➝ x = x + 5 ➝ 15
x -= 2;  // ➝ x = x - 2 ➝ 13
x *= 2;  // ➝ x = x * 2 ➝ 26
x /= 2;  // ➝ x = x / 2 ➝ 13
x %= 4;  // ➝ x = x % 4 ➝ 1
x **= 3; // ➝ x = x ** 3 ➝ 1

// ====================================================================================
// 🔹 5. Comparison Operators (Compare Two Values and Return `true` or `false`)
// ====================================================================================
console.log(10 == "10");  // ➝ true  (Loose equality, type coercion happens)
console.log(10 === "10"); // ➝ false (Strict equality, type must match)
console.log(10 != "10");  // ➝ false (Loose inequality)
console.log(10 !== "10"); // ➝ true  (Strict inequality)

console.log(10 > 5);   // ➝ true  (Greater than)
console.log(10 < 5);   // ➝ false (Less than)
console.log(10 >= 10); // ➝ true  (Greater than or equal to)
console.log(5 <= 10);  // ➝ true  (Less than or equal to)

// ====================================================================================
// 🔹 6. Logical Operators (Combine Multiple Conditions)
// ====================================================================================
// ✅ Logical AND (`&&`) - Returns `true` if both conditions are true
console.log(true && true);   // ➝ true
console.log(true && false);  // ➝ false

// ✅ Logical OR (`||`) - Returns `true` if at least one condition is true
console.log(true || false);  // ➝ true
console.log(false || false); // ➝ false

// ✅ Logical NOT (`!`) - Inverts a Boolean value
console.log(!true);  // ➝ false
console.log(!false); // ➝ true

// ====================================================================================
// 🔹 7. Bitwise Operators (Work on 32-bit Binary Numbers)
// ====================================================================================
console.log(5 & 1);  // ➝ 1  (Bitwise AND)
console.log(5 | 1);  // ➝ 5  (Bitwise OR)
console.log(5 ^ 1);  // ➝ 4  (Bitwise XOR)
console.log(~5);     // ➝ -6 (Bitwise NOT)
console.log(5 << 1); // ➝ 10 (Bitwise Left Shift)
console.log(5 >> 1); // ➝ 2  (Bitwise Right Shift)

// ====================================================================================
// 🔹 8. String Operators (Concatenation & Template Literals)
// ====================================================================================
let firstName = "John";
let lastName = "Doe";

// ✅ Concatenation using `+`
console.log(firstName + " " + lastName); // ➝ "John Doe"

// ✅ Template Literals (Preferred)
console.log(`Hello, my name is ${firstName} ${lastName}.`);

// ====================================================================================
// 🔹 9. Ternary Operator (Shortened `if-else` Statement)
// ====================================================================================
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // ➝ "Adult"

// ====================================================================================
// 🔹 10. Type Operators (Check Data Type)
// ====================================================================================
console.log(typeof "Hello");  // ➝ "string"
console.log(typeof 42);       // ➝ "number"
console.log(typeof true);     // ➝ "boolean"
console.log(typeof {});       // ➝ "object"
console.log(typeof []);       // ➝ "object" (Array is a special type of object)
console.log(typeof function() {}); // ➝ "function"

// ✅ `instanceof` (Checks if an object is an instance of a class)
console.log([] instanceof Array); // ➝ true
console.log({} instanceof Object); // ➝ true

// ====================================================================================
// 🔹 11. Nullish Coalescing Operator (`??`) - Handles `null` and `undefined`
// ====================================================================================
let user = null;
console.log(user ?? "Guest"); // ➝ "Guest" (Returns right-hand value if left-hand is `null` or `undefined`)

// ====================================================================================
// 🎯 Summary & Best Practices
// ====================================================================================
// ✅ Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`) → For mathematical operations.
// ✅ Assignment (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`) → Assign values.
// ✅ Comparison (`==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`) → Compare values.
// ✅ Logical (`&&`, `||`, `!`) → Combine boolean expressions.
// ✅ Bitwise (`&`, `|`, `^`, `~`, `<<`, `>>`) → Work on binary numbers.
// ✅ String (`+`, `+=`, Template Literals) → Work with strings.
// ✅ Ternary (`condition ? true_value : false_value`) → Shortened `if-else`.
// ✅ Type (`typeof`, `instanceof`) → Check types.
// ✅ Nullish (`??`) → Handle `null` and `undefined` cases.

// 🚀 **Best Practices**
// 1️⃣ Always use `===` instead of `==` to avoid **type coercion bugs**.
// 2️⃣ Use template literals (`${}`) instead of concatenation (`+`) for readability.
// 3️⃣ Use the **nullish coalescing operator (`??`)** for default values instead of `||`.
// 4️⃣ Avoid **bitwise operators** unless necessary for performance optimizations.

// ====================================================================================
// 🎯 End of JavaScript Operators Explanation
// ====================================================================================
