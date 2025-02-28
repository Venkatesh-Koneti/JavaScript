// ===============================
// An Introduction to JavaScript
// ===============================

// - Introduction to JS
/*
JavaScript is a lightweight, interpreted programming language primarily used to make web pages interactive. 
It runs in the browser and is widely used for front-end as well as back-end development (Node.js).
JavaScript can manipulate HTML and CSS, handle events, and interact with APIs.
*/

// - JS Syntax
/*
JavaScript syntax is the set of rules that define how JavaScript programs are written.
Basic syntax elements include:
1. Variables: var, let, const
2. Data Types: Number, String, Boolean, Object, Undefined, Null, Symbol, BigInt
3. Operators: +, -, *, /, %, ++, --, &&, ||, !
4. Functions: function myFunction() { return "Hello"; }
5. Objects: { key: "value" }
*/

// Example:
let message = "Hello, JavaScript!";
console.log(message); // Output: Hello, JavaScript!


// - Adding a JS File in an HTML Document
/*
JavaScript can be included in an HTML document in two ways:
1. Inline within <script> tags.
2. As an external file linked via <script src="script.js"></script>.
*/

// Example: Adding an external JS file in an HTML document
/*
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <h1>Welcome to JavaScript</h1>
</body>
</html>
*/


// - JS Versions and Output Methods
/*
JavaScript has evolved over time with different versions:
1. ES5 (2009)
2. ES6 (2015) - Major update (let, const, arrow functions, classes, template literals, etc.)
3. ES7, ES8, ES9, ES10, ES11... (Continuous improvements)

Output Methods:
1. console.log() - Logs output to the console.
2. alert() - Displays an alert box.
3. document.write() - Writes output to the HTML document.
4. innerHTML - Modifies an element’s content dynamically.
*/

// Example:
console.log("This is logged in the console!");
alert("Hello, User!");
document.write("<p>This is written in the HTML document.</p>");


// - JS Comments
/*
JavaScript supports two types of comments:
1. Single-line comments: // This is a comment
2. Multi-line comments: /* This is a multi-line comment */
// */

// Example:
let x = 10; // This is a single-line comment
/*
console.log(x);  // This is a multi-line comment
*/


// - JS Statements
/*
JavaScript programs are made up of statements.
Each statement is an instruction that a browser executes.
Statements are separated by semicolons (;), though it's optional.
*/

// Example:
let a = 5;
let b = 10;
let sum = a + b;
console.log(sum); // Output: 15


// - JS Events
/*
Events are actions that occur when a user interacts with a webpage.
Common events:
1. onClick - Fires when an element is clicked.
2. onMouseOver - Fires when the mouse hovers over an element.
3. onLoad - Fires when the page has loaded.

We can attach event handlers using:
1. HTML attributes (inline events).
2. JavaScript event listeners.
*/

// Example:
document.getElementById("btn").addEventListener("click", function () {
    alert("Button Clicked!");
});

/*
HTML:
<button id="btn">Click Me</button>
*/

// ===============================
// End of JavaScript Introduction
// ===============================
