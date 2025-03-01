/* 
==================================================
    JavaScript Arrays - In-Depth Explanation
==================================================

    - Arrays in JS
    - Create an array of a given size in JS
    - Get the first and last item in an array using JS
    - How to append an element in an array in JS?
    - Remove elements from a JS Array
    - JS Basic Array Methods
    - Best-Known JS Array Methods
    - What are the Important Array Methods of JS?
    - JS Array Reference
    - Remove Duplicate Elements From JS Array
    - Filter Object Array Based On Attributes
    - Add an Object to JS Array
    - JS Multidimensional Array
    - JS Array forEach() Method
    - ArrayMap() Method In JS
    - ArrayFilter() Method In JS
    - ArrayReduce() Method In JS
*/

/* 
============================
    1. Arrays in JavaScript
============================

- Arrays in JavaScript are used to store multiple values in a single variable.
- JavaScript arrays are dynamic, meaning they can grow and shrink as needed.
- They can store elements of any type: numbers, strings, objects, functions, and even other arrays.

*/

// Example of an array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits);

/* 
===================================
    2. Create an Array of a Given Size
===================================

There are different ways to create an array of a fixed size.
*/

// Method 1: Using `new Array(size)`
const arr1 = new Array(5); // Creates an empty array of size 5
console.log(arr1); // [ <5 empty items> ]

// Method 2: Using `Array.fill()`
const arr2 = new Array(5).fill(0); // Creates an array with all elements set to 0
console.log(arr2); // [0, 0, 0, 0, 0]

// Method 3: Using `Array.from()`
const arr3 = Array.from({ length: 5 }, (_, i) => i + 1); // Creates [1, 2, 3, 4, 5]
console.log(arr3);

/* 
=========================================
    3. Get the First and Last Item in an Array
========================================= 
*/

const numbers = [10, 20, 30, 40, 50];

// First element
console.log(numbers[0]); 

// Last element
console.log(numbers[numbers.length - 1]);

/* 
======================================
    4. Append an Element in an Array
====================================== 
*/

// Using `push()` (adds element at the end)
fruits.push("Pineapple");
console.log(fruits);

// Using `unshift()` (adds element at the beginning)
fruits.unshift("Grapes");
console.log(fruits);

/* 
=======================================
    5. Remove Elements from an Array
=======================================
*/

// Using `pop()` (removes the last element)
fruits.pop();
console.log(fruits);

// Using `shift()` (removes the first element)
fruits.shift();
console.log(fruits);

// Using `splice(index, count)` (removes elements at a specific index)
fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits);

/* 
===========================
    6. Basic Array Methods
===========================
*/

const arr = [1, 2, 3, 4, 5];

// Reverse an array
console.log(arr.reverse());

// Concatenate two arrays
const moreNumbers = [6, 7, 8];
console.log(arr.concat(moreNumbers));

/* 
=================================
    7. Best-Known JS Array Methods
=================================
*/

const words = ["apple", "banana", "cherry", "date", "elderberry"];

// `indexOf()`: Find index of an element
console.log(words.indexOf("cherry"));

// `includes()`: Check if an element exists
console.log(words.includes("banana"));

// `slice()`: Get a portion of an array
console.log(words.slice(1, 3)); // ["banana", "cherry"]

/* 
========================================
    8. Remove Duplicate Elements from JS Array
========================================
*/

// Using `Set`
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(duplicates)];
console.log(uniqueArray);

/* 
===============================================
    9. Filter Object Array Based on Attributes
===============================================
*/

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
];

// Filter users by age
const filteredUsers = users.filter(user => user.age === 25);
console.log(filteredUsers);

/* 
=======================================
    10. Add an Object to a JS Array
=======================================
*/

users.push({ name: "David", age: 35 });
console.log(users);

/* 
==================================
    11. JS Multidimensional Array
==================================
*/

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // Access element at row 1, column 2

/* 
==============================
    12. JS Array forEach() Method
==============================
*/

const numbersArray = [1, 2, 3, 4, 5];

numbersArray.forEach(num => {
    console.log(num * 2);
});

/* 
=================================
    13. ArrayMap() Method in JS
=================================
*/

const doubledNumbers = numbersArray.map(num => num * 2);
console.log(doubledNumbers);

/* 
===================================
    14. ArrayFilter() Method in JS
===================================
*/

const evenNumbers = numbersArray.filter(num => num % 2 === 0);
console.log(evenNumbers);

/* 
====================================
    15. ArrayReduce() Method in JS
====================================
*/

// Sum all elements in an array
const sum = numbersArray.reduce((acc, num) => acc + num, 0);
console.log(sum);

/* 
=======================================
    Summary
=======================================

- Arrays in JavaScript are dynamic and can store multiple types of data.
- You can create arrays using `[]`, `new Array()`, `Array.from()`, and `Array.fill()`.
- `push()` and `unshift()` add elements, while `pop()`, `shift()`, and `splice()` remove them.
- Common methods include `map()`, `filter()`, `reduce()`, `forEach()`, `slice()`, and `indexOf()`.
- Objects can be stored inside arrays and filtered based on attributes.
- `Set` helps remove duplicate elements from an array.
- Multidimensional arrays can be used for grid-based data.
- Understanding array methods is crucial for effective JavaScript development.

*/

