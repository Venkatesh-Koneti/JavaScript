/**
 * JavaScript Functions - Complete In-Depth Reference
 */

/**
 * 1. Functions in JavaScript
 *
 * Functions are reusable blocks of code designed to perform a specific task.
 * They help in code modularity, reusability, and maintainability.
 * In JavaScript, functions can be declared, assigned to variables, passed as arguments, and returned from other functions.
 */

// Example of a simple function declaration:
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Venkatesh")); // Output: Hello, Venkatesh!

/**
 * 2. How to Write a Function in JavaScript
 *
 * A function is defined using the `function` keyword, followed by a name, parentheses (), and a block {}.
 */

function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8

/**
 * 3. JavaScript Function Call
 *
 * Functions are executed when they are invoked (called). A function call includes the function name followed by parentheses ().
 */

// Calling a function
console.log(greet("User")); // Output: Hello, User!

/**
 * 4. Different Ways of Writing Functions in JavaScript
 */

// Function Declaration
function multiply(x, y) {
    return x * y;
}

// Function Expression (Anonymous function assigned to a variable)
const divide = function(x, y) {
    return x / y;
};

// Arrow Function (ES6)
const subtract = (x, y) => x - y;

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE executed!");
})();

/**
 * 5. Difference Between Methods and Functions
 *
 * A function is a standalone block of code, whereas a method is a function associated with an object.
 */

const obj = {
    value: 10,
    method() {
        return this.value;
    }
};
console.log(obj.method()); // Output: 10 (Method in an object)

/**
 * 6. Different Function States in JavaScript
 *
 * Functions have different states such as:
 * - Declared but not executed
 * - Executing
 * - Completed (with or without returning a value)
 */
function example() {
    console.log("Function execution");
    return "Completed";
}
example();

/**
 * 7. Pass by Value and Pass by Reference in JavaScript
 *
 * - Primitive types (Numbers, Strings, Booleans) are passed by value.
 * - Objects, Arrays, and Functions are passed by reference.
 */

let num = 10;
function changeValue(x) {
    x = 20;
}
changeValue(num);
console.log(num); // Output: 10 (Unchanged - Pass by Value)

let objRef = { value: 10 };
function changeReference(obj) {
    obj.value = 20;
}
changeReference(objRef);
console.log(objRef.value); // Output: 20 (Modified - Pass by Reference)

/**
 * 8. Call by Value vs Call by Reference
 *
 * - Call by Value applies to primitive types, where changes inside the function don’t affect the original variable.
 * - Call by Reference applies to objects, where changes inside the function modify the original object.
 */

/**
 * 9. JavaScript return Statement
 *
 * The `return` statement stops function execution and returns a value.
 */

function square(n) {
    return n * n;
}
console.log(square(5)); // Output: 25

/**
 * 10. JavaScript Nested Functions
 *
 * Functions defined inside another function are called nested functions.
 */

function outerFunction(outerVar) {
    function innerFunction(innerVar) {
        return outerVar + innerVar;
    }
    return innerFunction;
}
const inner = outerFunction(5);
console.log(inner(10)); // Output: 15

/**
 * 11. JavaScript Rest Parameter
 *
 * The rest parameter allows a function to accept an indefinite number of arguments as an array.
 */

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

/**
 * 12. JavaScript Anonymous Functions
 *
 * Functions without a name are called anonymous functions.
 */

const greetUser = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetUser("John"));

/**
 * 13. Understanding Recursion in JavaScript
 *
 * A recursive function is a function that calls itself to solve a problem.
 */

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

/**
 * 14. Arrow Functions in JavaScript
 *
 * Arrow functions provide a shorter syntax and don’t bind `this`.
 */

const double = num => num * 2;
console.log(double(4)); // Output: 8

/**
 * 15. JavaScript Function Complete Reference
 *
 * - Function Declaration
 * - Function Expression
 * - Arrow Functions
 * - IIFE
 * - Methods in Objects
 * - Nested Functions
 * - Callback Functions
 * - Higher Order Functions
 * - Recursion
 * - Rest Parameters
 * - Default Parameters
 * - Closures
 */

/**
 * 15. JavaScript Function Complete Reference
 */

/**
 * - Function Declaration (Already Covered)
 * - Function Expression (Already Covered)
 * - Arrow Functions (Already Covered)
 * - IIFE (Already Covered)
 * - Methods in Objects (Already Covered)
 * - Nested Functions (Already Covered)
 */

/**
 * - Callback Functions
 *
 * A callback function is a function passed as an argument to another function.
 * It is commonly used in asynchronous programming, event handling, and array methods.
 */

// Example: Callback Function
function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}
processUserInput(name => console.log(`Hello, ${name}!`));

/**
 * - Higher-Order Functions
 *
 * Higher-Order Functions take other functions as arguments or return functions.
 * Examples: `map`, `filter`, `reduce`, and custom functions.
 */

// Example: A Higher-Order Function
function operate(x, y, operation) {
    return operation(x, y);
}
const addition = (a, b) => a + b;
console.log(operate(5, 3, addition)); // Output: 8

/**
 * - Default Parameters
 *
 * Default parameters allow functions to have default values if no argument is passed.
 */

function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("Venkatesh"); // Output: Hello, Venkatesh!

/**
 * - Closures
 *
 * A closure is a function that retains access to its parent function's scope even after the parent function has finished executing.
 */

function outerFunction(outerVar) {
    return function innerFunction(innerVar) {
        return `Outer: ${outerVar}, Inner: ${innerVar}`;
    };
}
const closureExample = outerFunction("Hello");
console.log(closureExample("World")); // Output: Outer: Hello, Inner: World
