/**
 * JavaScript BigInt
 * BigInt is a built-in object in JavaScript that represents integers larger than 2^53 - 1.
 * It allows precise integer calculations beyond the Number type's limit.
 */

// Creating a BigInt
const bigInt1 = 1234567890123456789012345678901234567890n; // Using 'n' suffix
const bigInt2 = BigInt("1234567890123456789012345678901234567890"); // Using BigInt() constructor

console.log(bigInt1);
console.log(bigInt2);

/**
 * JS BigInt() Constructor
 * The BigInt constructor is used to create BigInt values.
 */
const fromNumber = BigInt(9007199254740991); // From a number
const fromString = BigInt("9007199254740991999999999999999"); // From a string
console.log(fromNumber, fromString);

/**
 * JS BigInt Constructor Property
 * The constructor property returns the function that created the BigInt prototype.
 */
console.log(bigInt1.constructor === BigInt); // true

/**
 * JS BigInt asIntN() Method
 * asIntN(bits, BigInt) limits the BigInt to a signed integer with 'bits' length.
 */
const intNExample = BigInt(-42);
console.log(BigInt.asIntN(8, intNExample)); // -42 (fits in 8-bit signed integer)
console.log(BigInt.asIntN(4, intNExample)); // 6 (truncation occurs)

/**
 * JS BigInt asUintN() Method
 * asUintN(bits, BigInt) limits the BigInt to an unsigned integer with 'bits' length.
 */
console.log(BigInt.asUintN(8, intNExample)); // 214 (fits in 8-bit unsigned integer)
console.log(BigInt.asUintN(4, intNExample)); // 6 (truncation occurs)

/**
 * JS BigInt toLocaleString() Method
 * Converts BigInt to a string, formatted according to the locale.
 */
const localeString = BigInt("123456789012345678901234567890").toLocaleString("en-US");
console.log(localeString); // "123,456,789,012,345,678,901,234,567,890"

/**
 * JS BigInt toString() Method
 * Converts BigInt to a string, optionally with a specified radix (base).
 */
const toStringExample = BigInt(255).toString(16); // Hexadecimal representation
console.log(toStringExample); // "ff"

/**
 * JS BigInt valueOf() Method
 * Returns the primitive BigInt value.
 */
const bigIntValue = BigInt("12345");
console.log(bigIntValue.valueOf()); // 12345n

/**
 * JS BigInt Reference
 * - Cannot mix BigInt and Number types in operations (must convert explicitly).
 * - Supports arithmetic operations (+, -, *, /, %, **).
 * - Cannot use with Math functions (e.g., Math.sqrt(BigInt(9)) throws an error).
 * - Comparisons (e.g., >, <, >=, <=, ==, ===) work with Number types.
 */
const sum = BigInt(10) + BigInt(20);
console.log(sum); // 30n
console.log(BigInt(5) > 2); // true
console.log(BigInt(5) === 5); // false (strict comparison checks type)
console.log(BigInt(5) == 5); // true (loose comparison converts Number to BigInt)

// Note: BigInt cannot be used with floating-point numbers.
// console.log(BigInt(10) + 5.5); // Throws TypeError
