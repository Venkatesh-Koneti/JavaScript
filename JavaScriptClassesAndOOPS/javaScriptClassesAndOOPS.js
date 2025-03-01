// JavaScript Classes and Object-Oriented Programming (OOP)

console.log("\n=== JavaScript Classes and OOP ===");

/*
JavaScript supports Object-Oriented Programming (OOP) principles such as:
- Encapsulation
- Inheritance
- Polymorphism (via method overriding)
- Abstraction

JS OOP revolves around Objects and Classes.

Objects: An object is a collection of properties and methods.
Classes: A class is a blueprint for creating objects.

ES6 introduced the `class` keyword to make working with OOP in JS more structured.
*/

// 1. Classes In JS

console.log("\n=== Classes In JavaScript ===");

/*
A class is a template for creating objects.
It defines properties and methods that objects created from the class will have.
*/

class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} makes a ${this.sound} sound!`);
  }
}

// Creating Objects from the Class
const dog = new Animal("Dog", "Bark");
const cat = new Animal("Cat", "Meow");

dog.makeSound(); // Output: Dog makes a Bark sound!
cat.makeSound(); // Output: Cat makes a Meow sound!


// 2. Classes and Objects in JS

console.log("\n=== Classes and Objects in JavaScript ===");

/*
- An object is an instance of a class.
- Each object can have its own properties and methods.
*/

class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showDetails() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

// Creating Objects
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("BMW", "X5");

car1.showDetails(); // Output: Car: Tesla Model S
car2.showDetails(); // Output: Car: BMW X5


// 3. How to create a JS class in ES6

console.log("\n=== Creating a Class in ES6 ===");

/*
A class is defined using the `class` keyword followed by a constructor and methods.
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 25);
person1.introduce(); // Output: Hi, I'm Alice and I'm 25 years old.


// 4. this Keyword in JS

console.log("\n=== this Keyword in JavaScript ===");

/*
The `this` keyword refers to the object that is calling the method.
*/

class Bike {
  constructor(name) {
    this.name = name;
  }

  showBike() {
    console.log(`This bike is a ${this.name}`);
  }
}

const myBike = new Bike("Ducati");
myBike.showBike(); // Output: This bike is a Ducati


// 5. New Keyword in JS

console.log("\n=== new Keyword in JavaScript ===");

/*
The `new` keyword is used to create an instance of a class.
*/

const bike2 = new Bike("Yamaha");
bike2.showBike(); // Output: This bike is a Yamaha


// 6. Object Constructor in JS

console.log("\n=== Object Constructor in JavaScript ===");

/*
Objects can also be created using constructors.
*/

function Laptop(brand, model) {
  this.brand = brand;
  this.model = model;
}

const laptop1 = new Laptop("Apple", "MacBook Pro");
console.log(laptop1); // Output: Laptop { brand: 'Apple', model: 'MacBook Pro' }


// 7. Inheritance in JS

console.log("\n=== Inheritance in JavaScript ===");

/*
Inheritance allows one class to inherit properties and methods from another class.
*/

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  showDetails() {
    console.log(`${this.name} earns $${this.salary}`);
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  showManagerDetails() {
    console.log(`${this.name} manages the ${this.department} department.`);
  }
}

const manager1 = new Manager("John", 80000, "IT");
manager1.showDetails(); // Output: John earns $80000
manager1.showManagerDetails(); // Output: John manages the IT department.


// 8. Encapsulation in JS

console.log("\n=== Encapsulation in JavaScript ===");

/*
Encapsulation means keeping data safe by restricting direct access.
*/

class Account {
  #balance = 0; // Private field (ES2020+)

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: $${amount}, Balance: $${this.#balance}`);
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account();
myAccount.deposit(100);
console.log(myAccount.getBalance()); // Output: 100
// console.log(myAccount.#balance); // Error: Private field


// 9. Static Methods in JS

console.log("\n=== Static Methods in JavaScript ===");

/*
Static methods belong to the class itself, not an instance.
*/

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8


// 10. OOP in JS

console.log("\n=== OOP in JavaScript ===");

/*
OOP allows for better code organization and reusability.
It follows the principles of:
- Encapsulation
- Abstraction
- Inheritance
- Polymorphism
*/


// 11. Getter and Setter in JS

console.log("\n=== Getter and Setter in JavaScript ===");

/*
Getters and Setters allow controlled access to properties.
*/

class Student {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.length < 3) {
      console.log("Name must be at least 3 characters long.");
    } else {
      this._name = newName;
    }
  }
}

const student1 = new Student("Mike");
console.log(student1.name); // Output: Mike
student1.name = "Jo"; // Output: Name must be at least 3 characters long.
student1.name = "John";
console.log(student1.name); // Output: John


// 12. JS Event

console.log("\n=== JavaScript Events ===");

/*
Events allow us to handle user interactions.
Common events:
- click
- mouseover
- keydown
*/

document.body.innerHTML = '<button id="myBtn">Click Me</button>';

document.getElementById("myBtn").addEventListener("click", () => {
  console.log("Button Clicked!");
});

/*
Click the button in the browser to trigger the event.
*/

console.log("\n=== JavaScript OOP Complete Reference ===");

/*
Summary:
1. Class: Blueprint for objects.
2. Object: Instance of a class.
3. Inheritance: Extending properties from a parent class.
4. Encapsulation: Hiding data.
5. Static Methods: Methods that belong to a class.
6. Getters & Setters: Control access to properties.
7. Events: Handling user interactions.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/

console.log("JavaScript OOP Explained!");
