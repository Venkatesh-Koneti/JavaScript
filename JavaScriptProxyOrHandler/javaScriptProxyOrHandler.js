/*
=========================================
  JavaScript Proxy & Handler
=========================================

  - A Proxy in JavaScript is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, function invocation).
  - The Proxy object allows us to intercept and redefine fundamental object operations.

  This file covers:
  - JS Proxy and Handler
  - Proxy() Constructor
  - Proxy.revocable() Method
  - Handler methods (apply, construct, defineProperty, get, set)
  - Proxy/Handler Reference
  - JS File Handling (Node.js)
*/

// 1. JS Proxy/Handler - Introduction
const targetObject = { name: "Venkatesh", age: 25 };

const handler = {
  get: (target, property) => {
    console.log(`Accessing property "${property}"`);
    return property in target ? target[property] : `Property "${property}" does not exist`;
  },
  set: (target, property, value) => {
    console.log(`Setting property "${property}" to "${value}"`);
    target[property] = value;
    return true;
  },
};

const proxy = new Proxy(targetObject, handler);
console.log(proxy.name);
proxy.age = 30;
console.log(proxy.height);

// 2. JS Proxy() Constructor
const person = { firstName: "John", lastName: "Doe" };
const personProxy = new Proxy(person, {
  get: (target, prop) => {
    return prop in target ? target[prop] : `Property "${prop}" not found`;
  },
});
console.log(personProxy.firstName);
console.log(personProxy.age);

// 3. JS Proxy revocable() Method
const { proxy: revocableProxy, revoke } = Proxy.revocable(person, {
  get: (target, prop) => target[prop] || "Property not found",
});
console.log(revocableProxy.firstName);
revoke();

// 4. JS Handler apply() Method
function greet(name) {
  return `Hello, ${name}!`;
}
const greetProxy = new Proxy(greet, {
  apply: (target, thisArg, args) => {
    console.log(`Function called with arguments:`, args);
    return target(...args).toUpperCase();
  },
});
console.log(greetProxy("Venkatesh"));

// 5. JS Handler construct() Method
class Person {
  constructor(name) {
    this.name = name;
  }
}
const PersonProxy = new Proxy(Person, {
  construct: (target, args) => {
    console.log(`Creating a new Person instance with name: ${args[0]}`);
    return new target(...args);
  },
});
const personInstance = new PersonProxy("Alice");

// 6. JS Handler defineProperty() Method
const obj = {};
const definePropertyProxy = new Proxy(obj, {
  defineProperty: (target, property, descriptor) => {
    console.log(`Defining property "${property}"`);
    return Reflect.defineProperty(target, property, descriptor);
  },
});
Object.defineProperty(definePropertyProxy, "age", { value: 30, writable: false });
console.log(obj.age);

// 7. JS Handler get() Method
const getHandlerProxy = new Proxy(person, {
  get: (target, prop) => {
    return prop in target ? target[prop] : `Property "${prop}" not found`;
  },
});
console.log(getHandlerProxy.firstName);
console.log(getHandlerProxy.age);

// 8. JS Proxy/Handler Reference
// - `new Proxy(target, handler)`: Creates a Proxy.
// - `Proxy.revocable(target, handler)`: Creates a revocable Proxy.
// - Handler Methods: get, set, apply, construct, defineProperty.

// 9. JS File Handling (Node.js)
const fs = require("fs");
fs.writeFile("example.txt", "Hello, Proxy!", (err) => {
  if (err) throw err;
  console.log("File created!");
});
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("File content:", data);
});
fs.appendFile("example.txt", "\nNew Line Added", (err) => {
  if (err) throw err;
  console.log("File updated!");
});
fs.unlink("example.txt", (err) => {
  if (err) throw err;
  console.log("File deleted!");
});
