/* 
==================================================
    JavaScript Objects - In-Depth Explanation
==================================================

    - JS Objects
    - Creating Objects in JS (4 Different Ways)
    - JS JSON Objects
    - JS Object Reference
    - Push an Array into Object in JS
    - Check a Key Exists in JS Object
*/

/* 
============================
    1. JavaScript Objects
============================

An object in JavaScript is a collection of key-value pairs where:
- Keys (also called properties) are strings (or Symbols).
- Values can be any data type (numbers, strings, arrays, functions, other objects, etc.).
- Objects allow us to store and manipulate structured data.

*/

// Example of a basic object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isMarried: false,
    hobbies: ["reading", "traveling", "gaming"],
    address: {
        city: "New York",
        country: "USA"
    },
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
};

console.log(person);
console.log(person.greet()); // Calling the method

/* 
=====================================
    2. Creating Objects in JS 
=====================================

There are multiple ways to create objects in JavaScript. Below are the four main methods:

*/

// 1️⃣ Object Literal (Recommended for simple objects)
const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022
};

console.log(car);

// 2️⃣ Using `new Object()` Constructor
const book = new Object();
book.title = "JavaScript Guide";
book.author = "Mozilla";
book.year = 2023;

console.log(book);

// 3️⃣ Using a Constructor Function (Good for creating multiple similar objects)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    };
}

const person1 = new Person("Alice", 25);
console.log(person1.sayHello());

// 4️⃣ Using ES6 Classes (Modern approach)
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return `${this.name} makes a sound.`;
    }
}

const dog = new Animal("Buddy", "Dog");
console.log(dog.makeSound());

/* 
==================================
    3. JavaScript JSON Objects
==================================

- JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data.
- JSON objects follow the same syntax as JavaScript objects but are used mainly for data exchange.

*/

// Example of a JSON object
const jsonData = `{
    "name": "Alice",
    "age": 28,
    "city": "London"
}`;

// Convert JSON string to JavaScript Object
const parsedData = JSON.parse(jsonData);
console.log(parsedData);

// Convert JavaScript Object to JSON string
const jsonString = JSON.stringify(parsedData);
console.log(jsonString);

/* 
===========================
    4. JS Object Reference
===========================

JavaScript objects are stored and assigned by reference, not by value.
This means that if you assign an object to another variable, both variables point to the same memory location.

*/
const obj1 = { name: "Alice" };
const obj2 = obj1; // obj2 is a reference to obj1

obj2.name = "Bob"; // Changing obj2 also affects obj1
console.log(obj1.name); // Output: "Bob" (because objects are reference types)

// To create a copy without reference issues, use Object.assign() or spread operator:
const obj3 = Object.assign({}, obj1);
obj3.name = "Charlie";
console.log(obj1.name); // Still "Bob", because obj3 is a separate object

const obj4 = { ...obj1 }; // Spread operator method
obj4.name = "David";
console.log(obj1.name); // Still "Bob"

/* 
=======================================
    5. Push an Array into an Object
=======================================

To add an array into an object, simply assign it to a key.

*/

const student = {
    name: "Emma",
    grades: []
};

// Adding values to the array inside the object
student.grades.push(90, 85, 88);
console.log(student);

/* 
=========================================
    6. Check if a Key Exists in an Object
=========================================

There are multiple ways to check if a key exists in an object.

*/

// Method 1: Using `in` Operator
console.log("name" in student); // true
console.log("age" in student); // false

// Method 2: Using `hasOwnProperty()`
console.log(student.hasOwnProperty("grades")); // true
console.log(student.hasOwnProperty("address")); // false

// Method 3: Checking if property is `undefined`
console.log(student.address !== undefined); // false

/* 
=======================================
    Summary
=======================================

- Objects store key-value pairs and allow structured data storage.
- Objects can be created using object literals, constructor functions, `new Object()`, or ES6 classes.
- JSON is a data format that is widely used for storing and transferring data.
- Objects are stored by reference, not by value.
- Arrays can be stored inside objects.
- To check if a key exists in an object, use the `in` operator, `hasOwnProperty()`, or check for `undefined`.

*/

