// JavaScript Expressions - In-Depth Explanation

/*
JavaScript expressions evaluate to a value. They include:
  - `this` keyword
  - Async/Await function
  - Object initializers
  - Grouping operator
  - Async function expression
  - Regular expressions (RegExp)
  - Generator function* expression
  - Function expressions
  - Class expressions
  - Asynchronous JS concepts
  - Promises in JS
*/

// 1. JS this Keyword

console.log("\n=== JS this Keyword ===");

/*
The `this` keyword refers to different objects depending on the execution context:
  - In a global scope, `this` refers to the global object (`window` in browsers, `global` in Node.js).
  - In a function, `this` depends on how the function is called.
  - In an object method, `this` refers to the object.
  - In a constructor, `this` refers to the new instance.
  - In an arrow function, `this` is lexically inherited.
*/

// Global context
console.log(this); // Window (in browser) or global (in Node.js)

// Object method
const obj = {
  name: "Venkatesh",
  showName: function () {
    console.log(this.name); // "Venkatesh"
  },
};
obj.showName();

// Arrow function (lexical `this`)
const obj2 = {
  name: "JavaScript",
  showName: () => {
    console.log(this.name); // undefined (lexical `this` refers to global scope)
  },
};
obj2.showName();

// 2. JS Async/Await Function

console.log("\n=== JS Async/Await Function ===");

/*
Async/Await is a modern way to handle asynchronous code.
- `async` makes a function return a Promise.
- `await` pauses the execution until the Promise is resolved.
*/

async function fetchData() {
  return "Data Fetched!";
}
fetchData().then(console.log); // "Data Fetched!"

async function delayedMessage() {
  console.log("Start...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("End after 2 seconds");
}
delayedMessage();

// 3. JS Object Initializer

console.log("\n=== JS Object Initializer ===");

/*
Object initializers allow creating objects using `{}` notation.
*/

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName()); // "John Doe"

// 4. JS Grouping Operator

console.log("\n=== JS Grouping Operator ===");

/*
The grouping operator `()` controls the precedence of evaluation.
*/

let result = (2 + 3) * 5;
console.log(result); // 25 (Addition happens before multiplication)

// 5. JS async function expression

console.log("\n=== JS async function expression ===");

/*
An async function expression is assigned to a variable.
*/

const asyncFunc = async () => {
  return "Async Function Expression!";
};
asyncFunc().then(console.log);

// 6. JS RegExp (Regular Expression)

console.log("\n=== JS RegExp (Regular Expression) ===");

/*
RegExp is used to match patterns in strings.
*/

let pattern = /\d+/; // Matches one or more digits
console.log(pattern.test("123abc")); // true
console.log(pattern.test("abc")); // false

let regex = /hello/i; // Case-insensitive match
console.log("Hello, world!".match(regex)); // ["Hello"]

// 7. JS function* expression (Generator Function)

console.log("\n=== JS function* expression (Generator Function) ===");

/*
Generator functions use `function*` and `yield` to control execution flow.
*/

function* generatorFunction() {
  yield "Hello";
  yield "World";
}
let gen = generatorFunction();
console.log(gen.next().value); // "Hello"
console.log(gen.next().value); // "World"

// 8. JS Function Expression

console.log("\n=== JS Function Expression ===");

/*
A function expression is assigned to a variable.
*/

const square = function (num) {
  return num * num;
};
console.log(square(4)); // 16

// 9. JS Class Expression

console.log("\n=== JS Class Expression ===");

/*
A class expression allows defining classes inside variables.
*/

const Person = class {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
};
let p = new Person("Alice");
console.log(p.greet()); // "Hello, Alice!"

// 10. Asynchronous JS

console.log("\n=== Asynchronous JS ===");

/*
Asynchronous JS executes non-blocking code using:
  - Callbacks
  - Promises
  - Async/Await
*/

setTimeout(() => console.log("This runs after 2 seconds"), 2000);

// 11. Promises in JS

console.log("\n=== Promises in JS ===");

/*
Promises represent an eventual completion of an async task.
*/

let promise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    success ? resolve("Task completed") : reject("Task failed");
  }, 1000);
});
promise
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err));

// 12. JS Expressions Complete Reference

console.log("\n=== JS Expressions Complete Reference ===");

/*
JavaScript Expressions Summary:
  - this: Refers to the execution context.
  - Async/Await: Handles asynchronous operations.
  - Object Initializer: Creates objects using `{}`.
  - Grouping Operator: Controls precedence with `()`.
  - Async Function Expression: Declares async functions in expressions.
  - RegExp: Defines pattern matching rules.
  - function* Expression: Creates generator functions.
  - Function Expression: Assigns functions to variables.
  - Class Expression: Defines class inside an expression.
  - Asynchronous JS: Handles non-blocking operations.
  - Promises: Represents future completion of async tasks.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
*/

console.log("JavaScript Expressions Explained!");
