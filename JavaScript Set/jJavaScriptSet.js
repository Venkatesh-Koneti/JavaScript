/**
 * JavaScript Set Full Guide
 * 
 * This file covers:
 * - Sets in JS
 * - How are elements ordered in a Set in JS
 * - How to iterate over Set elements in JS
 * - How to sort a Set in JS
 * - JS Set Reference
 */

// =========================
// 1. Sets in JavaScript
// =========================

/**
 * A Set is a built-in JavaScript object that allows you to store unique values.
 * It removes duplicate values automatically and maintains insertion order.
 */

// Creating a Set
let mySet = new Set([1, 2, 3, 4, 5, 5, 2]); // Duplicate values are removed
console.log("Set:", mySet); // Output: Set {1, 2, 3, 4, 5}

// Adding elements to the Set
mySet.add(6);
mySet.add(3); // This won't be added as 3 already exists
console.log("After adding 6:", mySet);

// Deleting elements from the Set
mySet.delete(2);
console.log("After deleting 2:", mySet);

// Checking if an element exists in the Set
console.log("Has 4?", mySet.has(4)); // true
console.log("Has 10?", mySet.has(10)); // false

// Getting the size of the Set
console.log("Size of Set:", mySet.size);

// Clearing the Set
// mySet.clear();
// console.log("After clearing:", mySet);

// =========================
// 2. How Are Elements Ordered in a Set in JS?
// =========================

/**
 * Elements in a Set maintain the order in which they were inserted.
 * Even though duplicate values are removed, the insertion order of unique elements is preserved.
 */

let orderedSet = new Set(["banana", "apple", "grape", "banana", "orange"]);
console.log("Ordered Set:", orderedSet); // Output: Set { 'banana', 'apple', 'grape', 'orange' }

// =========================
// 3. How to Iterate Over Set Elements in JS?
// =========================

/**
 * You can iterate over Set elements using different methods.
 */

// Using forEach()
mySet.forEach(value => console.log("forEach Value:", value));

// Using for...of loop
for (let value of mySet) {
    console.log("for...of Value:", value);
}

// Using spread operator to convert Set to Array
let setArray = [...mySet];
console.log("Set as Array:", setArray);

// Using values() method
for (let value of mySet.values()) {
    console.log("Using values() method:", value);
}

// Using entries() method
for (let entry of mySet.entries()) {
    console.log("Entry:", entry); // Each entry is [value, value] in Set
}

// =========================
// 4. How to Sort a Set in JS?
// =========================

/**
 * Sets in JavaScript do not have a built-in sort method.
 * To sort a Set, you need to convert it into an array first.
 */

// Sorting a Set in ascending order
let sortedSet = [...mySet].sort((a, b) => a - b);
console.log("Sorted Set (Ascending):", sortedSet);

// Sorting a Set in descending order
let sortedSetDesc = [...mySet].sort((a, b) => b - a);
console.log("Sorted Set (Descending):", sortedSetDesc);

// =========================
// 5. JavaScript Set Reference
// =========================

/**
 * Set Methods:
 * - add(value) -> Adds a value to the Set
 * - delete(value) -> Removes a value from the Set
 * - has(value) -> Checks if a value exists
 * - clear() -> Clears all values from the Set
 * - size -> Returns the number of elements in the Set
 * - forEach(callback) -> Iterates over the Set elements
 * - values() -> Returns an iterator with the values
 * - keys() -> Same as values() in Set (for compatibility with Map)
 * - entries() -> Returns an iterator with [value, value] pairs
 */

// Example usage of entries()
for (let entry of mySet.entries()) {
    console.log("Entry:", entry);
}
