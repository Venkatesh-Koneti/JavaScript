/*
=========================================
  JavaScript Generators
=========================================

  JavaScript Generators are special functions that allow pausing and resuming execution.
  - Defined using the `function*` syntax.
  - Use the `yield` keyword to pause execution.
  - The `next()` method resumes execution until the next `yield`.

  Generators are useful for handling asynchronous tasks, iterators, and infinite sequences.

*/

/*
-----------------------------------------
  1. JavaScript Generator() Constructor
-----------------------------------------

  - There is no built-in `Generator` constructor in JavaScript.
  - Instead, generators are created using `function*` syntax.
*/

// Example of a generator function
function* myGenerator() {
    yield "Hello";
    yield "World";
    yield "!";
}

// Creating a generator object
let gen = myGenerator();

// Calling `next()` to get values
console.log(gen.next()); // { value: "Hello", done: false }
console.log(gen.next()); // { value: "World", done: false }
console.log(gen.next()); // { value: "!", done: false }
console.log(gen.next()); // { value: undefined, done: true } (Generator is finished)

/*
-----------------------------------------
  2. JS Generator Constructor Property
-----------------------------------------

  - Every generator function instance has a `constructor` property.
  - It refers to the `GeneratorFunction` constructor.
*/

console.log(myGenerator.constructor.name); // "Function"
console.log(gen.constructor.name); // "GeneratorFunction" (In older JavaScript environments)

/*
-----------------------------------------
  3. JS Generator next() Method
-----------------------------------------

  - The `next()` method resumes execution of the generator.
  - It returns an object `{ value, done }`.
  - `value` is the yielded value.
  - `done` is `true` if the generator has finished execution.
*/

// Example with values
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let numGen = numberGenerator();

console.log(numGen.next()); // { value: 1, done: false }
console.log(numGen.next()); // { value: 2, done: false }
console.log(numGen.next()); // { value: 3, done: false }
console.log(numGen.next()); // { value: undefined, done: true }

/*
-----------------------------------------
  4. JS Generator return() Method
-----------------------------------------

  - The `return()` method stops the generator execution.
  - It forces the generator to return a specific value and mark it as `done: true`.
*/

function* sampleGen() {
    yield "A";
    yield "B";
    yield "C";
}

let g = sampleGen();
console.log(g.next());       // { value: "A", done: false }
console.log(g.return("End"));// { value: "End", done: true }
console.log(g.next());       // { value: undefined, done: true } (Cannot yield further)

/*
-----------------------------------------
  5. JS Generator throw() Method
-----------------------------------------

  - The `throw()` method throws an error inside the generator.
  - If not caught, it stops execution.
*/

function* errorGen() {
    try {
        yield 1;
        yield 2;
    } catch (err) {
        console.log("Caught error:", err);
    }
    yield 3;
}

let errGen = errorGen();
console.log(errGen.next());  // { value: 1, done: false }
console.log(errGen.throw(new Error("Something went wrong!"))); 
// Logs: "Caught error: Error: Something went wrong!" 
// Continues execution
console.log(errGen.next());  // { value: 3, done: false }
console.log(errGen.next());  // { value: undefined, done: true }

/*
-----------------------------------------
  6. JavaScript Generator Reference
-----------------------------------------

  - Generators provide these key methods:
      - `next()`: Resumes execution and returns the next value.
      - `return(value)`: Stops execution and returns a final value.
      - `throw(error)`: Throws an error inside the generator.

  - Useful for:
      - Lazy evaluation
      - Infinite sequences
      - Asynchronous iteration (e.g., `async generators`)
*/

// Infinite sequence generator
function* infiniteCounter() {
    let i = 1;
    while (true) {
        yield i++;
    }
}

let counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3 (Can continue infinitely)

// Asynchronous generator example
async function* asyncGen() {
    yield await Promise.resolve("Async 1");
    yield await Promise.resolve("Async 2");
}

(async () => {
    let aGen = asyncGen();
    console.log(await aGen.next()); // { value: "Async 1", done: false }
    console.log(await aGen.next()); // { value: "Async 2", done: false }
    console.log(await aGen.next()); // { value: undefined, done: true }
})();

