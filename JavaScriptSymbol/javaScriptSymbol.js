// JavaScript Symbol API - In-Depth Explanation

/*
The Symbol type in JavaScript represents unique, immutable values. 
Symbols are often used as object property keys to avoid name collisions.
They are not enumerable by default, making them useful for defining hidden properties.
*/

// 1. JS Symbol() Constructor

console.log("\n=== JS Symbol() Constructor ===");

/*
The Symbol() function returns a new unique symbol.
Syntax: Symbol([description])
*/

const sym1 = Symbol("identifier");
const sym2 = Symbol("identifier");

console.log(sym1 === sym2); // false (each symbol is unique)

// 2. JS Symbol constructor Property

console.log("\n=== JS Symbol constructor Property ===");

/*
Every symbol instance has a constructor property that refers to the Symbol function.
*/

console.log(sym1.constructor === Symbol); // true

// 3. JS Symbol asyncIterator Property

console.log("\n=== JS Symbol.asyncIterator Property ===");

/*
Symbol.asyncIterator is a built-in symbol used to define an object's asynchronous iteration behavior.
It is used in async generators and for-await-of loops.
*/

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        if (i < 3) {
          return Promise.resolve({ value: i++, done: false });
        }
        return Promise.resolve({ done: true });
      }
    };
  }
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num); // 0, 1, 2
  }
})();

// 4. JS Symbol description Property

console.log("\n=== JS Symbol.description Property ===");

/*
The description property returns the optional description of a symbol.
*/

const descSym = Symbol("mySymbol");
console.log(descSym.description); // "mySymbol"

// 5. JS Symbol hasInstance Property

console.log("\n=== JS Symbol.hasInstance Property ===");

/*
Symbol.hasInstance allows custom behavior for the instanceof operator.
*/

class CustomClass {
  static [Symbol.hasInstance](instance) {
    return instance.custom === true;
  }
}

const obj1 = { custom: true };
const obj2 = { custom: false };

console.log(obj1 instanceof CustomClass); // true
console.log(obj2 instanceof CustomClass); // false

// 6. JS Symbol isConcatSpreadable Property

console.log("\n=== JS Symbol.isConcatSpreadable Property ===");

/*
Symbol.isConcatSpreadable determines whether an object should be flattened when used with concat().
*/

const arr1 = [1, 2, 3];
const arr2 = { 0: "a", 1: "b", length: 2, [Symbol.isConcatSpreadable]: true };

console.log([].concat(arr1, arr2)); // [1, 2, 3, "a", "b"]

// 7. JS Symbol iterator Property

console.log("\n=== JS Symbol.iterator Property ===");

/*
Symbol.iterator defines an object's default iteration behavior.
*/

const iterableObj = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => ({
        value: this.data[index],
        done: index++ >= this.data.length
      })
    };
  }
};

for (const num of iterableObj) {
  console.log(num); // 10, 20, 30
}

// 8. JS Symbol() Method

console.log("\n=== JS Symbol() Method ===");

/*
The Symbol() method creates unique values that can be used as object property keys.
*/

const uniqueSym = Symbol();
const obj = { [uniqueSym]: "hidden value" };

console.log(obj[uniqueSym]); // "hidden value"

// 9. JS Symbol keyFor() Method

console.log("\n=== JS Symbol.keyFor() Method ===");

/*
Symbol.keyFor() returns the key for a global symbol from the Symbol registry.
Only works for symbols created with Symbol.for().
*/

const globalSym = Symbol.for("sharedKey");

console.log(Symbol.keyFor(globalSym)); // "sharedKey"

// 10. JS Symbol toString() Method

console.log("\n=== JS Symbol.toString() Method ===");

/*
Symbol.toString() returns a string representation of the symbol.
*/

const symString = Symbol("example");
console.log(symString.toString()); // "Symbol(example)"

// 11. JS Symbol Reference

console.log("\n=== JS Symbol Reference ===");

/*
Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- Symbols are used to:
  - Define unique object keys.
  - Prevent accidental property name clashes.
  - Customize object behaviors (e.g., iteration, instanceof checks).
*/

console.log("Symbol API examples completed.");
