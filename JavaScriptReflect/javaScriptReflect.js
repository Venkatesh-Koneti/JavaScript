// JavaScript Reflect API - In-Depth Explanation

/*
The Reflect API in JavaScript provides methods for interceptable object operations, 
similar to those found in Object and Proxy. Unlike the global Object methods, 
Reflect methods return a Boolean or value instead of throwing an error.
*/

// 1. JS Reflect

console.log("\n=== JS Reflect ===");

/*
Reflect is a built-in object that provides utility methods for interacting with objects, 
such as property access, prototype management, function application, and object construction.
It makes operations more predictable compared to Object methods and aligns well with Proxy handlers.
*/

// Example: Checking if Reflect is available
console.log(typeof Reflect); // "object"

// 2. JS Reflect get() Method

console.log("\n=== JS Reflect get() Method ===");

/*
The Reflect.get() method retrieves the value of a property from an object.
Syntax: Reflect.get(target, propertyKey[, receiver])
- target: The object to get the property from.
- propertyKey: The name of the property.
- receiver (optional): The value of `this` when getting the property (used for proxies).
*/

const person = { name: "John", age: 30 };
console.log(Reflect.get(person, "name")); // "John"

const user = {
  firstName: "Alice",
  get fullName() {
    return this.firstName + " Doe";
  }
};
console.log(Reflect.get(user, "fullName", { firstName: "Bob" })); // "Bob Doe"

// 3. JS Reflect getPrototypeOf() Method

console.log("\n=== JS Reflect getPrototypeOf() Method ===");

/*
Reflect.getPrototypeOf() returns the prototype of a given object.
Syntax: Reflect.getPrototypeOf(target)
*/

const obj = {};
const proto = Object.create(obj);

console.log(Reflect.getPrototypeOf(proto) === obj); // true
console.log(Reflect.getPrototypeOf({})); // Object.prototype

// 4. JS Reflect isExtensible() Method

console.log("\n=== JS Reflect isExtensible() Method ===");

/*
Reflect.isExtensible() checks if an object can have new properties added.
Syntax: Reflect.isExtensible(target)
Returns:
- true if the object is extensible.
- false otherwise.
*/

const extensibleObject = {};
console.log(Reflect.isExtensible(extensibleObject)); // true

Object.preventExtensions(extensibleObject);
console.log(Reflect.isExtensible(extensibleObject)); // false

// 5. JS Reflect getOwnPropertyDescriptor() Method

console.log("\n=== JS Reflect getOwnPropertyDescriptor() Method ===");

/*
Reflect.getOwnPropertyDescriptor() returns the property descriptor of an object’s own property.
Syntax: Reflect.getOwnPropertyDescriptor(target, propertyKey)
*/

const book = { title: "JavaScript Guide", pages: 350 };
console.log(Reflect.getOwnPropertyDescriptor(book, "title"));
/*
{
  value: 'JavaScript Guide',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 6. JS Reflect construct() Method

console.log("\n=== JS Reflect construct() Method ===");

/*
Reflect.construct() is used to create a new instance of a constructor function.
Syntax: Reflect.construct(target, argumentsList[, newTarget])
*/

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = Reflect.construct(Car, ["Toyota", "Corolla"]);
console.log(myCar); // Car { brand: 'Toyota', model: 'Corolla' }

// 7. JS Reflect apply() Method

console.log("\n=== JS Reflect apply() Method ===");

/*
Reflect.apply() is used to invoke a function with a specified `this` value and arguments.
Syntax: Reflect.apply(target, thisArgument, argumentsList)
*/

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(Reflect.apply(greet, null, ["Alice"])); // "Hello, Alice!"

const mathMax = Reflect.apply(Math.max, null, [10, 20, 30]);
console.log(mathMax); // 30

// 8. JS Reflect Reference

console.log("\n=== JS Reflect Reference ===");

/*
Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
- The Reflect API is useful for:
  - Improving consistency with Proxy handlers.
  - Avoiding try/catch when performing operations on objects.
  - Simplifying metaprogramming in JavaScript.
*/

console.log("Reflect API examples completed.");
