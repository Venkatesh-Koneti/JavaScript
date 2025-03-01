// === JavaScript Asynchronous Programming ===

console.log("\n=== JavaScript Asynchronous Programming ===");

/*
JavaScript is single-threaded, meaning it executes code sequentially.
However, it provides mechanisms to handle asynchronous operations like:
- Callbacks
- Promises
- Async/Await
- Event Emitters
- Web Workers (for parallel processing)
*/

// === 1. Callbacks vs Promises vs Async/Await ===

console.log("\n=== Callbacks vs Promises vs Async/Await ===");

/*
1. Callbacks:
   - A function passed as an argument to another function.
   - Used to execute code after an asynchronous operation completes.
   - Can lead to "Callback Hell" (nested callbacks).

2. Promises:
   - Represent a value that might be available now, later, or never.
   - Uses `.then()` and `.catch()` methods to handle results.
   - Avoids callback hell and makes code more readable.

3. Async/Await:
   - Introduced in ES2017 (ES8).
   - Syntactic sugar over Promises.
   - Allows writing asynchronous code in a synchronous manner.
*/

// Example: Callbacks
function fetchDataCallback(callback) {
  setTimeout(() => {
    callback("Data fetched using Callback!");
  }, 2000);
}

fetchDataCallback((result) => {
  console.log(result);
});

// Example: Promises
function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched using Promise!");
    }, 2000);
  });
}

fetchDataPromise().then((result) => console.log(result));

// Example: Async/Await
async function fetchDataAsync() {
  let result = await fetchDataPromise();
  console.log(result);
}

fetchDataAsync();


// === 2. Event Emitters (Node.js Only) ===

console.log("\n=== Event Emitters (Node.js) ===");

/*
- Event Emitters are used in Node.js to handle events asynchronously.
- The 'events' module in Node.js allows creating and listening to custom events.
*/

const EventEmitter = require("events"); // Only works in Node.js
const eventEmitter = new EventEmitter();

// Define an event
eventEmitter.on("customEvent", (message) => {
  console.log("Event Triggered:", message);
});

// Emit the event
eventEmitter.emit("customEvent", "Hello from Event Emitter!");


// === 3. Web Workers (Parallel Processing in Browsers) ===

console.log("\n=== Web Workers (Parallel Processing in Browsers) ===");

/*
- Web Workers allow running scripts in background threads.
- Used for CPU-intensive tasks without blocking the main thread.
- Web Workers operate in a separate file.

How to use Web Workers:
1. Create a new file `worker.js` with the following code:

  self.onmessage = function(event) {
    let result = event.data * 2;
    self.postMessage(result);
  };

2. Use the worker in the main script:
*/

// Main thread script
if (typeof Worker !== "undefined") {
  const worker = new Worker("worker.js");

  worker.postMessage(10); // Send data to worker

  worker.onmessage = function (event) {
    console.log("Web Worker Result:", event.data);
  };
} else {
  console.log("Web Workers are not supported in this browser.");
}


// === Summary ===
console.log("\n=== Summary of JavaScript Asynchronous Programming ===");

/*
✅ Callbacks: Used in older JavaScript, but lead to callback hell.
✅ Promises: Better structure, avoids callback hell.
✅ Async/Await: Syntactic sugar for Promises, makes code readable.
✅ Event Emitters: Used in Node.js to handle events.
✅ Web Workers: Run scripts in the background to avoid blocking the UI.

References:
- MDN Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- MDN Async/Await: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises
- Node.js Event Emitters: https://nodejs.org/api/events.html
*/

console.log("JavaScript Asynchronous Programming Explained!");
