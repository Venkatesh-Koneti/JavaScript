/*
=========================================
  JavaScript Math Object - Full Reference
=========================================

  - The `Math` object is a built-in JavaScript object.
  - Provides mathematical functions, constants, and operations.
  - It is **not a constructor**, meaning you **cannot** create an instance of `Math`.
  - All properties and methods are **static** and called using `Math.<property/method>`.

  This file covers:
  - Math constants like `Math.E`, `Math.PI`, etc.
  - Useful methods like `Math.abs()`, `Math.acos()`, `Math.atan2()`, etc.
*/

/*
-----------------------------------------
  1. Use of Math Object in JavaScript
-----------------------------------------
  
  - Used for mathematical calculations.
  - Provides constants and functions for operations like rounding, trigonometry, logarithms, etc.
  - Example:
*/

console.log(Math.sqrt(16)); // Output: 4
console.log(Math.pow(2, 3)); // Output: 8
console.log(Math.round(4.7)); // Output: 5

/*
-----------------------------------------
  2. JS Math Object
-----------------------------------------
  
  - The `Math` object itself provides multiple methods and constants.
  - Example:
*/

console.log(Math); // Output: [object Math]
console.log(typeof Math); // Output: "object"

/*
-----------------------------------------
  3. JS Math.E Property
-----------------------------------------

  - Represents Euler’s number (~2.718)
  - Base of the natural logarithm.
*/

console.log(Math.E); // Output: 2.718281828459045

/*
-----------------------------------------
  4. JS Math.LN2 Property
-----------------------------------------

  - Represents the **natural logarithm of 2** (~0.693).
*/

console.log(Math.LN2); // Output: 0.6931471805599453

/*
-----------------------------------------
  5. JS Math.LN10 Property
-----------------------------------------

  - Represents the **natural logarithm of 10** (~2.302).
*/

console.log(Math.LN10); // Output: 2.302585092994046

/*
-----------------------------------------
  6. JS Math.LOG2E Property
-----------------------------------------

  - Represents **log base 2 of Euler’s number (E)** (~1.442).
*/

console.log(Math.LOG2E); // Output: 1.4426950408889634

/*
-----------------------------------------
  7. JS Math.LOG10E Property
-----------------------------------------

  - Represents **log base 10 of Euler’s number (E)** (~0.434).
*/

console.log(Math.LOG10E); // Output: 0.4342944819032518

/*
-----------------------------------------
  8. JS Math.PI Property
-----------------------------------------

  - Represents the **mathematical constant π (pi)** (~3.14159).
  - Used in trigonometry and circle calculations.
*/

console.log(Math.PI); // Output: 3.141592653589793

/*
-----------------------------------------
  9. JS Math.abs() Method
-----------------------------------------

  - Returns the **absolute (positive) value** of a number.
*/

console.log(Math.abs(-10)); // Output: 10
console.log(Math.abs(5)); // Output: 5

/*
-----------------------------------------
  10. JS Math.acos() Method
-----------------------------------------

  - Returns the **arccosine (inverse cosine) of a number** in radians.
  - Input should be between `-1` and `1`.
*/

console.log(Math.acos(1)); // Output: 0 (in radians)
console.log(Math.acos(0)); // Output: 1.5707963267948966 (π/2 radians)

/*
-----------------------------------------
  11. JS Math.acosh() Method
-----------------------------------------

  - Returns the **inverse hyperbolic cosine** of a number.
  - The input must be `>= 1`.
*/

console.log(Math.acosh(1)); // Output: 0
console.log(Math.acosh(10)); // Output: 2.993222846126381

/*
-----------------------------------------
  12. JS Math.asin() Method
-----------------------------------------

  - Returns the **arcsine (inverse sine) of a number** in radians.
  - Input should be between `-1` and `1`.
*/

console.log(Math.asin(0)); // Output: 0
console.log(Math.asin(1)); // Output: 1.5707963267948966 (π/2 radians)

/*
-----------------------------------------
  13. JS Math.asinh() Method
-----------------------------------------

  - Returns the **inverse hyperbolic sine** of a number.
*/

console.log(Math.asinh(1)); // Output: 0.881373587019543
console.log(Math.asinh(0)); // Output: 0

/*
-----------------------------------------
  14. JS Math.atan() Method
-----------------------------------------

  - Returns the **arctangent (inverse tangent) of a number** in radians.
*/

console.log(Math.atan(1)); // Output: 0.7853981633974483 (π/4 radians)
console.log(Math.atan(0)); // Output: 0

/*
-----------------------------------------
  15. JS Math.atan2() Method
-----------------------------------------

  - Returns the **arctangent of the quotient of two numbers**.
  - The result is in radians.
  - `atan2(y, x)` calculates the angle θ between the **x-axis and the point (x, y)**.
*/

console.log(Math.atan2(1, 1)); // Output: 0.7853981633974483 (π/4 radians)
console.log(Math.atan2(0, -1)); // Output: 3.141592653589793 (π radians)

/*
-----------------------------------------
  16. JS Math Reference (Summary)
-----------------------------------------

  ✅ **Constants:**
  - `Math.E` → Euler’s number (~2.718)
  - `Math.LN2` → Natural log of 2 (~0.693)
  - `Math.LN10` → Natural log of 10 (~2.302)
  - `Math.LOG2E` → Log base 2 of E (~1.442)
  - `Math.LOG10E` → Log base 10 of E (~0.434)
  - `Math.PI` → π (3.141592653589793)

  ✅ **Useful Methods:**
  - `Math.abs(x)` → Returns the absolute value of `x`
  - `Math.acos(x)` → Returns the inverse cosine of `x` in radians
  - `Math.acosh(x)` → Returns the inverse hyperbolic cosine of `x`
  - `Math.asin(x)` → Returns the inverse sine of `x` in radians
  - `Math.asinh(x)` → Returns the inverse hyperbolic sine of `x`
  - `Math.atan(x)` → Returns the inverse tangent of `x`
  - `Math.atan2(y, x)` → Returns the arctangent of the quotient `y/x`

  ✅ **Why Use `Math`?**
  - **For calculations involving trigonometry** (e.g., angles, distances).
  - **For working with logarithms and exponents**.
  - **For finding absolute values, rounding, and mathematical operations**.

*/

