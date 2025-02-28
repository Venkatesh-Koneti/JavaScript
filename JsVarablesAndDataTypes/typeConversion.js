
// ====================================================================================
// 🎯 JavaScript Type Conversion (Type Casting) - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 What is Type Conversion?
// ====================================================================================
// In JavaScript, values can be **converted from one type to another** either automatically
// (implicit conversion) or manually (explicit conversion).
//
// JavaScript is a **loosely typed language**, meaning a variable can hold different types
// at different times, and conversions happen automatically in many cases.


// ====================================================================================
// 🔹 Types of Type Conversion in JavaScript
// ====================================================================================
//
// ✅ **1. Implicit Type Conversion (Type Coercion)**
//    - JavaScript automatically converts values **when necessary**.
//
// ✅ **2. Explicit Type Conversion (Type Casting)**
//    - Developers manually convert values using built-in functions like `String()`, `Number()`, etc.


// ====================================================================================
// 🔹 1. Implicit Type Conversion (Type Coercion) - JS Converts Automatically
// ====================================================================================
// 🏆 **Definition:**
// - When JavaScript **automatically** converts a value from one type to another.
// - This happens during **mathematical operations** or **comparisons**.
//
// 🛠 **Common Implicit Conversions:**
//   📌 Number to String
//   📌 String to Number
//   📌 Boolean to Number
//   📌 Null to Number
//   📌 Undefined to Number
//   📌 Object to Primitive

// Example 1: Number + String → String (Concatenation)
console.log(5 + "10"); // Output: "510"  (Number is converted to String)

// Example 2: String - Number → Number (Subtraction)
console.log("20" - 5); // Output: 15  (String is converted to Number)

// Example 3: Boolean to Number (true = 1, false = 0)
console.log(true + 1); // Output: 2
console.log(false + 10); // Output: 10

// Example 4: `null` converts to `0`
console.log(5 + null); // Output: 5  (null becomes 0)

// Example 5: `undefined` converts to `NaN`
console.log(5 + undefined); // Output: NaN (undefined cannot be converted to a number)

// Example 6: Object to Primitive (Uses `toString` or `valueOf`)
let obj = { valueOf: () => 10 };
console.log(obj + 5); // Output: 15 (Object converts to a number)


// ====================================================================================
// 🔹 2. Explicit Type Conversion (Type Casting) - Developer Controls It
// ====================================================================================
// 🏆 **Definition:**
// - When developers **manually** convert a value to another type using built-in functions.
//
// 🛠 **Common Explicit Conversions:**
//   📌 Convert to String → `String(value)` or `.toString()`
//   📌 Convert to Number → `Number(value)` or `parseInt()`, `parseFloat()`
//   📌 Convert to Boolean → `Boolean(value)`

// ====================================================================================
// 🔸 Converting to String
// ====================================================================================
let num = 123;
console.log(String(num)); // "123"
console.log(num.toString()); // "123"

// Special Cases:
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String([1, 2, 3])); // "1,2,3"

// ====================================================================================
// 🔸 Converting to Number
// ====================================================================================
console.log(Number("123")); // 123
console.log(Number("123.45")); // 123.45
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("abc")); // NaN (Not a Number)
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// 🛠 Using `parseInt` and `parseFloat` (Better for Strings)
console.log(parseInt("100px")); // 100 (Extracts number)
console.log(parseFloat("12.34em")); // 12.34 (Extracts floating-point number)

// ====================================================================================
// 🔸 Converting to Boolean
// ====================================================================================
// - **Falsy values (convert to `false`)**:  `0`, `""`, `null`, `undefined`, `NaN`, `false`
// - **Truthy values (convert to `true`)**:  Everything else!

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("Hello")); // true
console.log(Boolean("")); // false
console.log(Boolean([])); // true (empty array is truthy!)
console.log(Boolean({})); // true (empty object is truthy!)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// ====================================================================================
// 🔹 Edge Cases and Unexpected Behavior in Type Conversion
// ====================================================================================

// 📌 1. Adding an Empty Array Converts to an Empty String
console.log([] + []); // Output: "" (Empty string)

// 📌 2. `null` and `undefined` in Comparisons
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true  (Special case: null is treated as 0)

// 📌 3. `NaN` is not equal to anything, even itself!
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// 📌 4. Empty Array and Boolean Conversion
console.log([] == false); // true
console.log([] == 0); // true

// 📌 5. `[]` and `{}` behave differently in type conversion
console.log({} + []); // "[object Object]"  (Object converts to string)
console.log([] + {}); // "[object Object]"  (Concatenation of empty array with object)

// 📌 6. Comparing Strings and Numbers
console.log("5" > 4); // true (String "5" is converted to Number 5)
console.log("5" < "10"); // false (String comparison: "5" is greater than "1")


// ====================================================================================
// 🎯 Summary & Key Takeaways
// ====================================================================================
// ✅ **Type Conversion is Automatic (Implicit) or Manual (Explicit).**
// ✅ **Implicit Conversion (Type Coercion) happens in operations like +, -, *, /.**
// ✅ **Explicit Conversion (Type Casting) is done using `String()`, `Number()`, `Boolean()`.**
// ✅ **Falsy values:** `0`, `""`, `null`, `undefined`, `NaN`, `false` → Convert to `false` in Boolean.
// ✅ **Truthy values:** Everything else is `true` (Even empty arrays `[]` and empty objects `{}`).  
// ✅ **Watch out for weird JavaScript quirks in type conversion!**


// ====================================================================================
// 🎯 End of Type Conversion Explanation
// ====================================================================================

