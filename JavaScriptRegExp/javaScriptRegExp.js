/*
=========================================
  JavaScript RegExp (Regular Expressions)
=========================================

  - Regular Expressions (RegExp) are patterns used for **pattern matching** in strings.
  - They can be used for searching, replacing, and validating text.
  - The `RegExp` object provides various properties and methods to work with regex.

  This file covers:
  - RegExp constructor
  - RegExp properties like `dotAll`, `flags`, `global`, `hasIndices`
  - RegExp methods like `exec()`, `test()`, and `toString()`
  - Complete reference guide
*/

/*
-----------------------------------------
  1. JS RegExp() Constructor
-----------------------------------------

  - Used to create a regular expression.
  - Syntax:
    `new RegExp(pattern, flags)` OR `/pattern/flags`
*/

const regex1 = new RegExp("hello", "gi"); // Constructor method
const regex2 = /hello/gi; // Literal method

console.log(regex1.test("Hello world")); // Output: true
console.log(regex2.test("HELLO WORLD")); // Output: true

/*
-----------------------------------------
  2. JS RegExp constructor Property
-----------------------------------------

  - The `.constructor` property returns the function that created the RegExp instance.
*/

console.log(regex1.constructor === RegExp); // Output: true
console.log(regex2.constructor === RegExp); // Output: true

/*
-----------------------------------------
  3. JS RegExp dotAll Property
-----------------------------------------

  - The `.dotAll` property (introduced in ES2018) determines if the `s` flag is set.
  - The `s` flag allows the dot (`.`) to match newlines (`\n`).
*/

const regexDotAll = /hello.world/s;
console.log(regexDotAll.dotAll); // Output: true

const text = "hello\nworld";
console.log(regexDotAll.test(text)); // Output: true

/*
-----------------------------------------
  4. JS RegExp flags Property
-----------------------------------------

  - The `.flags` property returns all flags of the regular expression as a string.
*/

const regexFlags = /abc/gi;
console.log(regexFlags.flags); // Output: "gi"

/*
-----------------------------------------
  5. JS RegExp global Property
-----------------------------------------

  - The `.global` property returns `true` if the `g` flag is set, otherwise `false`.
*/

const regexGlobal = /test/g;
console.log(regexGlobal.global); // Output: true

const regexWithoutGlobal = /test/;
console.log(regexWithoutGlobal.global); // Output: false

/*
-----------------------------------------
  6. JS RegExp hasIndices Property
-----------------------------------------

  - The `.hasIndices` property (introduced in ES2022) returns `true` if the `d` flag is set.
  - The `d` flag enables match indices (`matchIndices`).
*/

const regexWithIndices = /hello/d;
console.log(regexWithIndices.hasIndices); // Output: true

/*
-----------------------------------------
  7. JS RegExp exec() Method
-----------------------------------------

  - The `.exec()` method tests a string for a match and returns an array with details.
  - If no match is found, it returns `null`.
*/

const regexExec = /(\d{3})-(\d{2})-(\d{4})/;
const match = regexExec.exec("My number is 123-45-6789");

console.log(match);
// Output: [ '123-45-6789', '123', '45', '6789', index: 13, input: 'My number is 123-45-6789', groups: undefined ]

/*
-----------------------------------------
  8. JS RegExp test() Method
-----------------------------------------

  - The `.test()` method checks if a pattern exists in a string.
  - Returns `true` if found, `false` otherwise.
*/

const regexTest = /hello/i;
console.log(regexTest.test("Hello world")); // Output: true
console.log(regexTest.test("Hi there")); // Output: false

/*
-----------------------------------------
  9. JS RegExp toString() Method
-----------------------------------------

  - The `.toString()` method returns the string representation of a regex.
*/

const regexToString = /pattern/gi;
console.log(regexToString.toString()); // Output: "/pattern/gi"

/*
-----------------------------------------
  10. JS RegExp Reference (Summary)
-----------------------------------------

  ✅ **RegExp Properties:**
  - `constructor` → Returns function that created the regex
  - `dotAll` → Checks if `s` flag is enabled (matches newlines)
  - `flags` → Returns all flags as a string
  - `global` → Checks if `g` flag is enabled (global match)
  - `hasIndices` → Checks if `d` flag is enabled (match indices)

  ✅ **RegExp Methods:**
  - `exec(str)` → Returns detailed match array or `null`
  - `test(str)` → Returns `true` if a match is found, otherwise `false`
  - `toString()` → Returns string representation of regex

  ✅ **Common Flags in RegExp:**
  - `g` (global) → Find **all** matches, not just the first
  - `i` (ignoreCase) → Match **case insensitive**
  - `m` (multiline) → `^` and `$` match start/end of lines
  - `s` (dotAll) → `.` matches newlines (`\n`)
  - `u` (unicode) → Enables Unicode matching
  - `y` (sticky) → Match only at exact `lastIndex`
  - `d` (indices) → Return match positions

  ✅ **Examples:**
  - `/hello/gi` → Match "hello" globally, case insensitive
  - `/^start/` → Match if string **starts with** "start"
  - `/end$/` → Match if string **ends with** "end"
  - `/\d+/` → Match **one or more** digits
  - `/\s+/` → Match **whitespace characters**
*/

