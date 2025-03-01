/* 
=============================================
    JavaScript Numbers - In-Depth Explanation
=============================================

    - JS Numbers
    - How numbers are stored in JS?
    - How to create a Number object using JS?
    - JS Number Reference
*/

/* 
=============================
    1. JavaScript Numbers 
=============================

In JavaScript, numbers are a primitive data type used to represent both integer and floating-point values.

Key characteristics of JavaScript numbers:
- JavaScript has only one number type (Number), which includes both integers and floating-point values.
- JS numbers are 64-bit floating-point (IEEE 754 standard).
- Numbers can be written with or without decimals.
- JavaScript supports arithmetic operations like addition (+), subtraction (-), multiplication (*), and division (/).
*/

// Example:
let num1 = 42;          // Integer
let num2 = 3.14;        // Floating-point number
let num3 = -15;         // Negative number
let num4 = 1.5e5;       // Exponential notation (1.5 × 10^5 = 150000)
let num5 = 0b1010;      // Binary representation (decimal: 10)
let num6 = 0o12;        // Octal representation (decimal: 10)
let num7 = 0xFF;        // Hexadecimal representation (decimal: 255)

console.log(num1, num2, num3, num4, num5, num6, num7);

/* 
=======================================
    2. How Numbers Are Stored in JS?
=======================================

JavaScript numbers are stored using the IEEE 754 floating-point format (64-bit double precision).

64-bit representation breakdown:
---------------------------------------------------
|  1-bit sign  |  11-bit exponent  |  52-bit fraction (mantissa) |
---------------------------------------------------
- The sign bit determines if the number is positive (0) or negative (1).
- The exponent determines the power of 2 to scale the number.
- The mantissa holds the significant digits of the number.

Since JavaScript uses floating-point representation, there are certain limitations:
- Precision issues: JavaScript cannot store very large integers precisely.
- Rounding errors: Due to floating-point arithmetic, some calculations may produce unexpected results.

Example of precision issue:
*/
console.log(0.1 + 0.2); // Output: 0.30000000000000004 (not exactly 0.3)

/* 
===============================
    3. Creating a Number Object
===============================

JavaScript allows creating number objects explicitly using the `Number` constructor.
However, using `Number` objects is not recommended because it creates an object instead of a primitive value.

*/

// Creating numbers using Number constructor
let numObj1 = new Number(42);
let numObj2 = new Number(3.14);
console.log(numObj1, numObj2); 

// Checking type
console.log(typeof numObj1); // Output: "object" (not "number")

// Using Number() as a function (returns a primitive number)
let numPrimitive = Number(42);
console.log(typeof numPrimitive); // Output: "number"

/* 
==========================
    4. JS Number Reference
==========================

JavaScript provides various properties and methods related to numbers.

- Number Properties:
  - Number.MAX_VALUE    -> Largest possible number
  - Number.MIN_VALUE    -> Smallest possible number
  - Number.POSITIVE_INFINITY -> Represents Infinity
  - Number.NEGATIVE_INFINITY -> Represents -Infinity
  - Number.NaN -> Not a Number

*/
console.log(Number.MAX_VALUE); // Largest possible number in JS
console.log(Number.MIN_VALUE); // Smallest positive number in JS
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN (Not a Number)

/* 
- Number Methods:
  - toFixed()  -> Rounds the number to a fixed number of decimals.
  - toPrecision() -> Formats a number to a specified precision.
  - toString() -> Converts number to string.
  - isNaN()  -> Checks if value is NaN.
  - isFinite() -> Checks if value is a finite number.
  - parseFloat() -> Converts a string to a floating-point number.
  - parseInt() -> Converts a string to an integer.
*/

let value = 5.6789;

console.log(value.toFixed(2)); // Output: "5.68" (rounds to 2 decimal places)
console.log(value.toPrecision(3)); // Output: "5.68" (3 significant digits)
console.log(value.toString()); // Output: "5.6789"

console.log(Number.isNaN(5)); // false
console.log(Number.isFinite(100)); // true

console.log(parseFloat("3.14abc")); // Output: 3.14
console.log(parseInt("42px")); // Output: 42

/* 
=============================
    5. Special Number Cases
=============================

- NaN (Not a Number)
  - Occurs when an invalid mathematical operation is performed.
  - Any operation involving NaN results in NaN.

*/
console.log(0 / 0); // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(parseInt("hello")); // NaN

// Checking NaN
console.log(isNaN("hello")); // true

/* 
- Infinity and -Infinity
  - Infinity results when a number exceeds the max limit.
  - Division by zero in JS does not throw an error; it returns Infinity.

*/
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity

/* 
=============================
    6. BigInt (For Large Numbers)
=============================

In JavaScript, numbers beyond `Number.MAX_SAFE_INTEGER` lose precision.
To handle large integers, JavaScript introduced `BigInt` (ES11 / ES2020).

BigInt can be created by appending `n` to a number.
*/
let bigNumber = 9007199254740991n; // BigInt (note the "n" at the end)
console.log(bigNumber + 1n); // Output: 9007199254740992n

// Mixing BigInt with normal numbers results in an error
// console.log(bigNumber + 1); // TypeError: Cannot mix BigInt and other types

/* 
=======================================
    Summary
=======================================

- JavaScript uses 64-bit floating-point numbers (IEEE 754 standard).
- Precision errors can occur with floating-point arithmetic.
- Use `Number` constructor carefully (prefer primitive numbers).
- `Number` provides properties like MAX_VALUE, MIN_VALUE, and methods like `toFixed()`, `parseInt()`.
- `BigInt` is useful for very large integers but cannot be mixed with normal numbers.
*/

