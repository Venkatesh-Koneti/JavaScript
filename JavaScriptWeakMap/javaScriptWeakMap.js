// JavaScript WeakMap

/*
WeakMap is a special kind of Map that:
  - Allows only objects as keys.
  - Does not prevent garbage collection of keys.
  - Does not have size, keys, values, or entries methods.
  - Is useful for managing private data.
*/

// 1. JS WeakMap

console.log("\n=== JS WeakMap ===");

/*
WeakMap is similar to Map but with some differences:
  - Keys must be objects (not primitive values).
  - WeakMap keys are weakly held, meaning they can be garbage collected.
  - No iteration methods like `keys()`, `values()`, or `entries()`.
*/

let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {};

weakMap.set(obj1, "value1");
weakMap.set(obj2, "value2");

console.log(weakMap.get(obj1)); // "value1"
console.log(weakMap.get(obj2)); // "value2"

// If obj1 is set to null, it becomes eligible for garbage collection.

// 2. JS WeakMap() Constructor

console.log("\n=== JS WeakMap() Constructor ===");

/*
The WeakMap constructor creates a new WeakMap instance.
Syntax: new WeakMap([iterable])
*/

let weakMap2 = new WeakMap([
  [{ key: "obj1" }, "value1"], // Invalid: keys must be objects
  [{}, "value2"]
]);

// This will throw an error because `{ key: "obj1" }` is a temporary object

// Correct way:
let key1 = {};
let key2 = {};

let weakMap3 = new WeakMap([
  [key1, "Hello"],
  [key2, "World"]
]);

console.log(weakMap3.get(key1)); // "Hello"
console.log(weakMap3.get(key2)); // "World"

// 3. JS WeakMap constructor Property

console.log("\n=== JS WeakMap constructor Property ===");

/*
Every WeakMap instance has a constructor property referring to WeakMap itself.
*/

console.log(weakMap.constructor === WeakMap); // true

// 4. JS weakMap delete() Method

console.log("\n=== JS weakMap.delete() Method ===");

/*
The delete() method removes a key-value pair from the WeakMap.
Syntax: weakMap.delete(key)
Returns: true if deleted, false otherwise.
*/

let weakMap4 = new WeakMap();
let obj3 = { name: "test" };

weakMap4.set(obj3, "some value");
console.log(weakMap4.has(obj3)); // true

weakMap4.delete(obj3);
console.log(weakMap4.has(obj3)); // false

// 5. JS weakMap get() Method

console.log("\n=== JS weakMap.get() Method ===");

/*
The get() method retrieves the value associated with a key.
Syntax: weakMap.get(key)
Returns: The value if the key exists, otherwise undefined.
*/

let weakMap5 = new WeakMap();
let obj4 = { id: 42 };

weakMap5.set(obj4, "data for obj4");

console.log(weakMap5.get(obj4)); // "data for obj4"
console.log(weakMap5.get({})); // undefined (because the key is not the same object)

// 6. JS weakMap has() Method

console.log("\n=== JS weakMap.has() Method ===");

/*
The has() method checks if a key exists in the WeakMap.
Syntax: weakMap.has(key)
Returns: true if the key exists, false otherwise.
*/

let weakMap6 = new WeakMap();
let obj5 = { key: "example" };

weakMap6.set(obj5, "value here");

console.log(weakMap6.has(obj5)); // true
console.log(weakMap6.has({})); // false (because it's a new object)

// 7. JS weakMap set() Method

console.log("\n=== JS weakMap.set() Method ===");

/*
The set() method adds or updates a key-value pair in the WeakMap.
Syntax: weakMap.set(key, value)
Returns: The WeakMap itself (allows chaining).
*/

let weakMap7 = new WeakMap();
let obj6 = {};

weakMap7.set(obj6, "stored data").set({}, "another value"); // Only obj6 will persist

console.log(weakMap7.get(obj6)); // "stored data"

// 8. JS WeakMap Reference

console.log("\n=== JS WeakMap Reference ===");

/*
Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap
- WeakMaps are useful for:
  - Storing private data.
  - Avoiding memory leaks.
  - Associating metadata with objects.
*/

console.log("WeakMap API examples completed.");
