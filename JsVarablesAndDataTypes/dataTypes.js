// ========================================================================
// 🎯 Understanding Primitive and Non-Primitive Data Types in JavaScript
// ========================================================================

// ====================================================================================
// 🔹 What are Data Types?
// ====================================================================================
// In JavaScript, a **data type** defines the type of value a variable can hold.
// JavaScript is **dynamically typed**, meaning we don’t have to specify a type when declaring variables.
// The interpreter determines the type at runtime.


// ====================================================================================
// 🔹 JavaScript Data Types: Categorized into Two Groups
// ====================================================================================
//
// ✅ **1. Primitive Data Types** - Stored **by value** (immutable)
// ✅ **2. Non-Primitive Data Types** - Stored **by reference** (mutable)

// ====================================================================================
// 🔹 1. Primitive Data Types (Immutable, Stored by Value)
// ====================================================================================
// 🏆 **Definition:**
// - **Primitive values are simple and immutable (cannot be changed).**
// - **Stored in stack memory (small, fixed-size memory).**
// - **When you assign a primitive value to a new variable, a new copy is created.**
//
// 🛠 **Primitive Types in JavaScript:**
//   📌 String
//   📌 Number
//   📌 Boolean
//   📌 Undefined
//   📌 Null
//   📌 Symbol
//   📌 BigInt

// Example:
let a = 10;
let b = a; // A copy of `a` is created
b = 20; // Changing `b` does NOT affect `a`

console.log(a); // Output: 10
console.log(b); // Output: 20

// 🎯 Explanation:
// - The value `10` is **stored in the stack memory**.
// - When we assign `a` to `b`, a **new copy** of `10` is created for `b`.
// - Changing `b` does **not** affect `a`, because they are separate copies.


// ====================================================================================
// 🔹 2. Non-Primitive Data Types (Mutable, Stored by Reference)
// ====================================================================================
// 🏆 **Definition:**
// - **Non-primitive values are complex and mutable (can be changed).**
// - **Stored in heap memory (larger, dynamic memory).**
// - **When you assign a non-primitive value to a new variable, it references the same memory location.**
//
// 🛠 **Non-Primitive Types in JavaScript:**
//   📌 Objects
//   📌 Arrays
//   📌 Functions

// Example:
let obj1 = { name: "Alice" };
let obj2 = obj1; // Both variables now reference the same object

obj2.name = "Bob"; // Changing obj2 also changes obj1!

console.log(obj1.name); // Output: Bob
console.log(obj2.name); // Output: Bob

// 🎯 Explanation:
// - The object `{ name: "Alice" }` is **stored in the heap memory**.
// - `obj1` holds a **reference** to that memory location.
// - When we assign `obj1` to `obj2`, they both point to the **same memory location**.
// - Changing `obj2.name` **also affects** `obj1.name`, since they share the same reference.


// ====================================================================================
// 🔹 Key Differences Between Primitive and Non-Primitive Data Types
// ====================================================================================
/*
| Feature            | Primitive Data Types          | Non-Primitive Data Types        |
|--------------------|-----------------------------|--------------------------------|
| Storage           | Stored in Stack (fast)       | Stored in Heap (dynamic)       |
| Value Type        | Immutable (cannot be changed) | Mutable (can be changed)      |
| Assignment        | Creates a copy               | References same object        |
| Example Types     | String, Number, Boolean, etc. | Object, Array, Function, etc. |
*/

// ====================================================================================
// 🔹 Why is it Important to Understand Primitive vs Non-Primitive?
// ====================================================================================
//
// ✅ **Memory Efficiency:**
//   - Primitive values are stored in the stack, making them **fast and efficient**.
//   - Objects are stored in the heap, making them **flexible but slower**.
//
// ✅ **Avoiding Unwanted Side Effects:**
//   - When modifying an object, you need to be careful because **changes affect all references**.
//   - If you want to create a **true copy of an object**, use **spread operator** or **structuredClone**.


// ====================================================================================
// 🔹 Creating Copies of Non-Primitive Values
// ====================================================================================
// ❌ Incorrect way (Both variables reference the same object)
let person1 = { name: "John", age: 25 };
let person2 = person1; // References same memory location

person2.age = 30;
console.log(person1.age); // Output: 30 (Changes person1 too!)

// ✅ Correct way (Cloning the object)
let person3 = { ...person1 }; // Spread operator creates a shallow copy
person3.age = 40;

console.log(person1.age); // Output: 30 (Not affected)
console.log(person3.age); // Output: 40 (Independent copy)


// ====================================================================================
// 🔹 Special Cases and Edge Cases
// ====================================================================================

// 📌 `typeof null` is "object" (JavaScript bug)
console.log(typeof null); // Output: "object" (historical mistake)

// 📌 Functions are objects
function sayHello() {
    return "Hello!";
}
console.log(typeof sayHello); // Output: "function" (but technically an object)

// 📌 Arrays are also objects
let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"

// 📌 Symbols are unique (cannot be duplicated)
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log(sym1 === sym2); // Output: false


// ====================================================================================
// 🎯 Summary and Key Takeaways
// ====================================================================================
// ✅ **Primitive Data Types:**
//    - Stored in stack memory
//    - Immutable (cannot be changed)
//    - A copy is created when assigned to another variable
//
// ✅ **Non-Primitive Data Types:**
//    - Stored in heap memory
//    - Mutable (can be changed)
//    - Assigned by reference (modifying one affects all references)
//
// ✅ **Why It Matters?**
//    - Helps manage memory efficiently
//    - Prevents unexpected modifications
//    - Understanding references helps avoid bugs in complex applications


// ====================================================================================
// 🎯 End of Primitive and Non-Primitive Data Types Explanation
// ====================================================================================
