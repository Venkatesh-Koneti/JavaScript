
// ====================================================================================
// 🎯 JavaScript Type Coercion - Full In-Depth Explanation
// ====================================================================================

// ====================================================================================
// 🔹 What is Type Coercion?
// ====================================================================================
// 🏆 **Definition:** 
// - Type coercion is the process where JavaScript **automatically** converts a value 
//   from one data type to another when necessary.  
// - It happens in **mathematical operations, comparisons, and function calls**.  
// - JavaScript is a **dynamically typed language**, meaning variables **don’t have fixed types**.
//
// 📌 **Types of Type Coercion:**
// ✅ Implicit Type Coercion (Automatic conversion by JS)
// ✅ Explicit Type Coercion (Manual conversion using functions like `String()`, `Number()`, etc.)


// ====================================================================================
// 🔹 1. Implicit Type Coercion (Automatic Conversion)
// ====================================================================================
// - JS converts values **automatically** when used in operations.
// - It mostly happens in **arithmetic operations** and **comparisons**.

// 🛠 **Common Implicit Conversions:**
//   📌 String + Number → String
//   📌 String - Number → Number
//   📌 Boolean to Number
//   📌 Null to Number
//   📌 Undefined to NaN
//   📌 Object to Primitive (via `toString` or `valueOf`)


// ====================================================================================
// 🔸 Implicit Type Coercion: String Concatenation
// ====================================================================================

console.log("10" + 5);  // "105" (Number 5 is converted to String and concatenated)
console.log("10" + true); // "10true" (Boolean `true` is converted to String)
console.log("10" + null); // "10null" (null is converted to String)
console.log("10" + undefined); // "10undefined" (undefined is converted to String)

// Why? Because `+` favors string concatenation when one operand is a string.


// ====================================================================================
// 🔸 Implicit Type Coercion: Arithmetic Operations
// ====================================================================================
// - If the operation is **not** `+`, JS **prefers numbers**.

console.log("20" - 5); // 15  ("20" is converted to Number)
console.log("4" * "2"); // 8  (Both Strings converted to Numbers)
console.log("6" / "3"); // 2  (Both Strings converted to Numbers)
console.log("10" - true); // 9  (`true` converts to `1`)
console.log("10" - false); // 10 (`false` converts to `0`)
console.log("10" - null); // 10 (`null` converts to `0`)
console.log("10" - undefined); // NaN (`undefined` converts to NaN)


// ====================================================================================
// 🔸 Implicit Type Coercion: Boolean to Number
// ====================================================================================

console.log(true + 1); // 2 (`true` → 1)
console.log(false + 1); // 1 (`false` → 0)
console.log(true * 5); // 5 (`true` → 1)

// ⚠ Be careful when using Booleans in mathematical expressions.


// ====================================================================================
// 🔸 Implicit Type Coercion: Null and Undefined
// ====================================================================================

console.log(5 + null); // 5 (`null` → 0)
console.log(5 + undefined); // NaN (`undefined` → NaN)


// ====================================================================================
// 🔹 2. Explicit Type Coercion (Manual Conversion)
// ====================================================================================
// - When developers **manually** convert values using built-in functions.
//
// ✅ Convert to String: `String(value)`, `.toString()`
// ✅ Convert to Number: `Number(value)`, `parseInt()`, `parseFloat()`
// ✅ Convert to Boolean: `Boolean(value)`

// ====================================================================================
// 🔸 Converting to String
// ====================================================================================

console.log(String(123)); // "123"
console.log((123).toString()); // "123"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"

// ====================================================================================
// 🔸 Converting to Number
// ====================================================================================

console.log(Number("123")); // 123
console.log(Number("")); // 0
console.log(Number(" ")); // 0
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// Using `parseInt` and `parseFloat`
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.34em")); // 12.34

// ====================================================================================
// 🔸 Converting to Boolean
// ====================================================================================
// ✅ **Falsy Values (Convert to `false`)**:  
//    `0`, `""`, `null`, `undefined`, `NaN`, `false`
//
// ✅ **Truthy Values (Convert to `true`)**:  
//    Everything else! (Even empty arrays and objects)

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
// 🔹 Edge Cases and Unexpected Behavior in Type Coercion
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

// 📌 5. `{}` and `[]` behave differently
console.log({} + []); // "[object Object]"
console.log([] + {}); // "[object Object]"

// 📌 6. Comparing Strings and Numbers
console.log("5" > 4); // true
console.log("5" < "10"); // false (String comparison: "5" is greater than "1")


// ====================================================================================
// 🎯 Summary & Best Practices
// ====================================================================================
// ✅ JavaScript **automatically** converts types when needed (Type Coercion).
// ✅ Be careful with **implicit coercion**, especially in comparisons and arithmetic operations.
// ✅ Use **explicit type conversion** (`String()`, `Number()`, `Boolean()`) for clarity.
// ✅ Avoid tricky cases like `null`, `undefined`, and `NaN` in comparisons.


// ====================================================================================
// 🎯 End of Type Coercion Explanation
// ====================================================================================
