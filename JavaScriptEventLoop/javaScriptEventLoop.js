// JavaScript Event Loop - In-Depth Explanation

console.log("\n=== JavaScript Event Loop ===");

/*
JavaScript is single-threaded, meaning it can only execute one task at a time.
To handle multiple operations efficiently, it uses the Event Loop.

The Event Loop allows JavaScript to:
- Process synchronous code first.
- Handle asynchronous operations (like I/O, timers, fetch requests).
- Execute tasks in the correct order using queues (Microtasks and Macrotasks).

Key Concepts:
- Call Stack
- Web APIs
- Callback Queue
- Microtasks vs Macrotasks
*/

// 1. Understanding the Event Loop

console.log("\n=== Understanding the Event Loop ===");

/*
The event loop constantly checks the Call Stack and Callback Queue.
If the Call Stack is empty, it moves pending tasks from the Callback Queue to the Call Stack for execution.
*/

// Example: Synchronous Code
console.log("1. Start");
console.log("2. Middle");
console.log("3. End");

/*
Output:
1. Start
2. Middle
3. End
*/

// 2. Call Stack, Web APIs, Callback Queue

console.log("\n=== Call Stack, Web APIs, Callback Queue ===");

/*
The Call Stack executes functions in a Last In, First Out (LIFO) order.
Web APIs handle asynchronous tasks like setTimeout, fetch, or event listeners.
Callback Queue stores tasks waiting to execute.
*/

// Example: Asynchronous Code with setTimeout
console.log("A. Start");

setTimeout(() => {
  console.log("C. Timeout Callback");
}, 0);

console.log("B. End");

/*
Output:
A. Start
B. End
C. Timeout Callback
*/

// Explanation: `setTimeout` is handled by Web APIs, then moved to the Callback Queue, 
// and executed after synchronous code finishes.

// 3. Microtasks vs Macrotasks

console.log("\n=== Microtasks vs Macrotasks ===");

/*
Microtasks:
- Higher priority than Macrotasks.
- Include Promises, MutationObserver, and process.nextTick (Node.js).
- Executed right after the current execution completes.

Macrotasks:
- Include setTimeout, setInterval, setImmediate (Node.js), and I/O operations.
- Executed only after Microtasks are completed.
*/

// Example: Microtasks (Promise) vs Macrotasks (setTimeout)

console.log("1. Start");

setTimeout(() => console.log("4. setTimeout (Macrotask)"), 0);

Promise.resolve().then(() => console.log("3. Promise (Microtask)"));

console.log("2. End");

/*
Output:
1. Start
2. End
3. Promise (Microtask)
4. setTimeout (Macrotask)
*/

// Explanation: Microtasks run before Macrotasks after synchronous code finishes.

// 4. SetTimeout, SetInterval, and Their Effects on the Event Loop

console.log("\n=== SetTimeout, SetInterval, and Their Effects ===");

/*
- `setTimeout(callback, delay)`: Executes the callback after at least `delay` ms.
- `setInterval(callback, delay)`: Repeatedly executes the callback every `delay` ms.
- The actual execution time may vary due to event loop delays.
*/

// Example: setTimeout and setInterval
console.log("Timer starts...");

setTimeout(() => {
  console.log("Executed once after 2 seconds (setTimeout)");
}, 2000);

let counter = 0;
let interval = setInterval(() => {
  counter++;
  console.log(`Executed ${counter} times (setInterval)`);
  if (counter === 3) clearInterval(interval); // Stop after 3 times
}, 1000);

/*
Output:
Timer starts...
Executed 1 times (setInterval)  <-- after 1 sec
Executed 2 times (setInterval)  <-- after 2 sec
Executed once after 2 seconds (setTimeout)
Executed 3 times (setInterval)  <-- after 3 sec
*/

// Explanation: `setTimeout` runs once, while `setInterval` runs repeatedly until cleared.

console.log("\n=== JavaScript Event Loop Reference ===");

/*
Summary:
1. Call Stack - Executes functions synchronously.
2. Web APIs - Handle asynchronous operations like timers, fetch, and events.
3. Callback Queue - Stores macrotasks (setTimeout, setInterval, etc.).
4. Microtasks - Include Promises, process.nextTick (Node.js).
5. Event Loop - Moves tasks from the queue to the stack when it's empty.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- Node.js Event Loop: https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/
*/

console.log("JavaScript Event Loop Explained!");
