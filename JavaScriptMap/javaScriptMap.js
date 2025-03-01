// =========================
// 1. JavaScript Map
// =========================

/**
 * A Map is a built-in JavaScript object that allows you to store key-value pairs.
 * Unlike objects, Maps can have keys of any type (including objects and functions).
 */

// Creating a Map
let myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Venkatesh");
myMap.set("age", 30);
myMap.set(1, "One");
console.log("Map:", myMap);

// Retrieving values from the Map
console.log("Name:", myMap.get("name"));
console.log("Age:", myMap.get("age"));
console.log("Key 1:", myMap.get(1));

// Checking if a key exists
console.log("Has 'name'?", myMap.has("name")); // true
console.log("Has 'gender'?", myMap.has("gender")); // false

// Deleting a key-value pair
myMap.delete("age");
console.log("After deleting 'age':", myMap);

// Getting the size of the Map
console.log("Size of Map:", myMap.size);

// =========================
// 3. Iterating Over Map Elements
// =========================

// Using forEach()
myMap.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));

// Using for...of loop
for (let [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Using keys() method
for (let key of myMap.keys()) {
    console.log("Key:", key);
}

// Using values() method
for (let value of myMap.values()) {
    console.log("Value:", value);
}

// Using entries() method
for (let entry of myMap.entries()) {
    console.log("Entry:", entry);
}

// =========================
// 4. JavaScript Map Reference
// =========================

/**
 * Map Methods:
 * - set(key, value) -> Adds or updates a key-value pair
 * - get(key) -> Retrieves the value for a given key
 * - has(key) -> Checks if a key exists
 * - delete(key) -> Removes a key-value pair
 * - clear() -> Clears all key-value pairs
 * - size -> Returns the number of key-value pairs
 * - forEach(callback) -> Iterates over key-value pairs
 * - keys() -> Returns an iterator with all keys
 * - values() -> Returns an iterator with all values
 * - entries() -> Returns an iterator with key-value pairs
 */

// Example usage of entries()
for (let entry of myMap.entries()) {
    console.log("Entry:", entry);
}
