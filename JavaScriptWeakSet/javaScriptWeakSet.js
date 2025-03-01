// JavaScript WeakSet - In-Depth Explanation

/*
WeakSet is a special kind of Set that:
  - Allows only objects as elements.
  - Does not prevent garbage collection of its objects.
  - Does not have size, keys, values, or entries methods.
  - Is useful for storing weakly held object references.
*/

// 1. JS WeakSet

console.log("\n=== JS WeakSet ===");

/*
WeakSet is similar to Set but with some differences:
  - Only objects can be stored (no primitives).
  - WeakSet objects are weakly held, meaning they can be garbage collected.
  - No iteration methods like `keys()`, `values()`, or `entries()`.
*/

let weakSet = new WeakSet();

let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// If obj1 is set to null, it becomes eligible for garbage collection.

// 2. JS WeakSet() Constructor

console.log("\n=== JS WeakSet() Constructor ===");

/*
The WeakSet constructor creates a new WeakSet instance.
Syntax: new WeakSet([iterable])
*/

let weakSet2 = new WeakSet([
  { key: "obj1" }, // Invalid: temporary object
  { key: "obj2" }
]);

// This will throw an error because `{ key: "obj1" }` is a temporary object

// Correct way:
let key1 = { id: 1 };
let key2 = { id: 2 };

let weakSet3 = new WeakSet([key1, key2]);

console.log(weakSet3.has(key1)); // true
console.log(weakSet3.has(key2)); // true

// 3. JS WeakSet constructor Property

console.log("\n=== JS WeakSet constructor Property ===");

/*
Every WeakSet instance has a constructor property referring to WeakSet itself.
*/

console.log(weakSet.constructor === WeakSet); // true

// 4. JS weakSet add() Method

console.log("\n=== JS weakSet.add() Method ===");

/*
The add() method adds an object to the WeakSet.
Syntax: weakSet.add(object)
Returns: The WeakSet itself (allows chaining).
*/

let weakSet4 = new WeakSet();
let obj3 = { id: 42 };

weakSet4.add(obj3);
console.log(weakSet4.has(obj3)); // true

// 5. JS weakSet delete() Method

console.log("\n=== JS weakSet.delete() Method ===");

/*
The delete() method removes an object from the WeakSet.
Syntax: weakSet.delete(object)
Returns: true if deleted, false otherwise.
*/

let weakSet5 = new WeakSet();
let obj4 = { name: "test" };

weakSet5.add(obj4);
console.log(weakSet5.has(obj4)); // true

weakSet5.delete(obj4);
console.log(weakSet5.has(obj4)); // false

// 6. JS weakSet has() Method

console.log("\n=== JS weakSet.has() Method ===");

/*
The has() method checks if an object exists in the WeakSet.
Syntax: weakSet.has(object)
Returns: true if the object exists, false otherwise.
*/

let weakSet6 = new WeakSet();
let obj5 = { key: "example" };

weakSet6.add(obj5);

console.log(weakSet6.has(obj5)); // true
console.log(weakSet6.has({})); // false (because it's a new object)

// 7. JS WeakSet Reference

console.log("\n=== JS WeakSet Reference ===");

/*
Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
- WeakSets are useful for:
  - Keeping track of objects without preventing garbage collection.
  - Associating private data with objects.
  - Avoiding memory leaks.
*/

console.log("WeakSet API examples completed.");
