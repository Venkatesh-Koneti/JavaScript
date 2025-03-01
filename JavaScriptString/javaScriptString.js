/**
 * JavaScript Strings - Complete In-Depth Reference
 */

/**
 * 1. JavaScript Strings
 *
 * A string in JavaScript is a sequence of characters used to represent text.
 * Strings are immutable, meaning their content cannot be changed after creation.
 * JavaScript provides various methods to manipulate and process strings.
 */
let str = "Hello, JavaScript!";
console.log(str); // Output: Hello, JavaScript!

/**
 * 2. JavaScript String Storage
 *
 * Strings in JavaScript are stored as UTF-16 encoded sequences.
 * Each character occupies 16 bits (2 bytes), supporting various languages and symbols.
 */

/**
 * 3. String() Constructor
 *
 * The String constructor can create strings explicitly.
 */
let strObj = new String("Hello");
console.log(typeof strObj); // Output: object
console.log(strObj instanceof String); // Output: true

/**
 * 4. Built-in Strings in JavaScript
 *
 * JavaScript provides built-in string objects, including literals and template literals.
 */
let literalString = "This is a literal string";
let templateString = `This is a template literal`;

/**
 * 5. Convert String to Camel Case
 */
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""));
}
console.log(toCamelCase("hello world example")); // Output: helloWorldExample

/**
 * 6. Count String Occurrences
 */
function countOccurrences(str, subStr) {
    return str.split(subStr).length - 1;
}
console.log(countOccurrences("banana", "a")); // Output: 3

/**
 * 7. String Methods
 */
let example = "JavaScript";
console.log(example.length); // Output: 10
console.log(example.toUpperCase()); // Output: JAVASCRIPT
console.log(example.toLowerCase()); // Output: javascript
console.log(example.includes("Script")); // Output: true

/**
 * 8. Join Array Elements into String
 */
let words = ["JavaScript", "is", "awesome"];
console.log(words.join(" ")); // Output: JavaScript is awesome

/**
 * 9. Create String with Multiple Spaces
 */
let spacedString = "JavaScript".padStart(15);
console.log(spacedString); // Output: '   JavaScript'

/**
 * 10. Multi-line Strings in JavaScript
 */
let multiLine = `This is line one.
This is line two.`;
console.log(multiLine);

/**
 * 11. Generate All Combinations of a String
 */
function getAllCombinations(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}
console.log(getAllCombinations("abc"));

/**
 * 12. Create Function from String
 */
let funcString = "return a + b";
let sumFunction = new Function("a", "b", funcString);
console.log(sumFunction(5, 3)); // Output: 8

/**
 * 13. String Reference
 */
let sample = "  JavaScript Example  ";

// length - Returns the number of characters in a string.
console.log(sample.length); // Output: 22

// toUpperCase() - Converts a string to uppercase.
console.log(sample.toUpperCase()); // Output: "  JAVASCRIPT EXAMPLE  "

// toLowerCase() - Converts a string to lowercase.
console.log(sample.toLowerCase()); // Output: "  javascript example  "

// trim() - Removes whitespace from both ends of a string.
console.log(sample.trim()); // Output: "JavaScript Example"

// replace() - Replaces a substring with another substring.
console.log(sample.replace("Example", "Demo")); // Output: "  JavaScript Demo  "

// split() - Splits a string into an array based on a delimiter.
console.log(sample.split(" ")); // Output: ["", "", "JavaScript", "Example", "", ""]

// includes() - Checks if a string contains a specific substring.
console.log(sample.includes("Java")); // Output: true

// startsWith() - Checks if a string starts with a specified substring.
console.log(sample.startsWith("  Java")); // Output: true

// endsWith() - Checks if a string ends with a specified substring.
console.log(sample.endsWith("Example  ")); // Output: true

/**
 * 14. JavaScript Date
 *
 * JavaScript provides the Date object to handle dates and times.
 */
let currentDate = new Date();
console.log(currentDate.toISOString());

/**
 * 15. Remove a Character From a String in JavaScript
 */
function removeCharacter(str, charToRemove) {
    return str.split(charToRemove).join("");
}
console.log(removeCharacter("hello world", "o")); // Output: hell wrld

/**
 * 16. Extract a Number from a String using JavaScript
 */
function extractNumber(str) {
    let num = str.match(/\d+/g);
    return num ? num.map(Number) : [];
}
console.log(extractNumber("Order 123 is ready")); // Output: [123]

/**
 * 16. Extract a Number from a String using JavaScript (Using only String Methods)
 */
function extractNumber(str) {
    let digits = "";
    for (let i = 0; i < str.length; i++) {
        if ("0123456789".includes(str[i])) {
            digits += str[i];
        } else if (digits.length > 0 && str[i] === " ") {
            digits += " "; // Preserve space to separate numbers
        }
    }
    return digits.trim().split(" ").map(Number);
}

console.log(extractNumber("Order 123 is ready, invoice 4567 sent!")); // Output: [123, 4567]
