/*
=========================================
  Advanced JavaScript - Promises
=========================================

  - A Promise in JavaScript represents a value that may be available now, in the future, or never.
  - It helps handle asynchronous operations without callback hell.
  - Promises have three states:
    1. Pending → Initial state, neither resolved nor rejected.
    2. Fulfilled → Operation completed successfully.
    3. Rejected → Operation failed.

  This file covers:
  - JS Promises
  - Methods like `resolve()`, `reject()`, `all()`, `any()`, `race()`, `then()`
  - Comparison: Promise vs Callback
  - Complete reference guide
*/

/*
-----------------------------------------
  1. JS Promise - Creating a Basic Promise
-----------------------------------------

  - A Promise is created using the `new Promise()` constructor.
  - It takes a function with `resolve` and `reject` as arguments.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true; // Change this to `false` to see rejection
      if (success) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected!");
      }
    }, 2000);
  });
  
  // Handling promise
  myPromise
    .then((message) => console.log("✅ Success:", message))
    .catch((error) => console.log("❌ Error:", error));
  
  /*
  -----------------------------------------
    2. JS Promise resolve() Method
  -----------------------------------------
  
    - `Promise.resolve(value)` creates a resolved Promise immediately.
  */
  
  const resolvedPromise = Promise.resolve("Instantly resolved!");
  resolvedPromise.then(console.log); // Output: Instantly resolved!
  
  /*
  -----------------------------------------
    3. JS promise reject() Method
  -----------------------------------------
  
    - `Promise.reject(value)` creates a rejected Promise immediately.
  */
  
  const rejectedPromise = Promise.reject("Instantly rejected!");
  rejectedPromise.catch(console.log); // Output: Instantly rejected!
  
  /*
  -----------------------------------------
    4. JS Promise all() Method
  -----------------------------------------
  
    - `Promise.all([p1, p2, p3])` runs all promises in parallel.
    - Resolves if **all promises** succeed, otherwise **rejects** if one fails.
  */
  
  const p1 = new Promise((resolve) => setTimeout(() => resolve("Task 1"), 1000));
  const p2 = new Promise((resolve) => setTimeout(() => resolve("Task 2"), 2000));
  const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Task 3 Failed!"), 1500));
  
  Promise.all([p1, p2])
    .then(console.log) // Output: ["Task 1", "Task 2"] (when all succeed)
    .catch(console.log); // If any fails, it stops and logs error
  
  Promise.all([p1, p2, p3])
    .then(console.log)
    .catch(console.log); // Output: Task 3 Failed! (p3 failed, so all failed)
  
  /*
  -----------------------------------------
    5. JS Promise any() Method
  -----------------------------------------
  
    - `Promise.any([p1, p2, p3])` resolves with **the first fulfilled promise**.
    - Rejects only if **all promises** fail.
  */
  
  Promise.any([p1, p2, p3])
    .then(console.log) // Output: Task 1 (whichever resolves first)
    .catch(console.log); // Only fails if ALL promises fail
  
  /*
  -----------------------------------------
    6. JS Promise race() Method
  -----------------------------------------
  
    - `Promise.race([p1, p2, p3])` resolves/rejects with the **first settled promise**.
    - Whichever promise resolves or rejects first, the race ends.
  */
  
  Promise.race([p1, p2, p3])
    .then(console.log) // Output: Task 1 (whichever settles first)
    .catch(console.log);
  
  /*
  -----------------------------------------
    7. JS Promise then() Method
  -----------------------------------------
  
    - `then()` is used to handle the resolved value of a Promise.
    - It can also take a second argument to handle errors.
  */
  
  const samplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched successfully!"), 1000);
  });
  
  samplePromise.then(
    (result) => console.log("✅ Result:", result), // Success handler
    (error) => console.log("❌ Error:", error) // Error handler (optional)
  );
  
  /*
  -----------------------------------------
    8. Promise vs Callback in JS
  -----------------------------------------
  
    - **Callbacks** lead to nested code ("callback hell"), which is hard to read and maintain.
    - **Promises** provide a cleaner approach with `.then()`, `.catch()`, and `.finally()`.
  
    ✅ Callback Hell Example:
  */
  
  function getUserData(callback) {
    setTimeout(() => {
      console.log("Fetched User");
      callback();
    }, 1000);
  }
  
  function getOrders(callback) {
    setTimeout(() => {
      console.log("Fetched Orders");
      callback();
    }, 1000);
  }
  
  function getPaymentStatus(callback) {
    setTimeout(() => {
      console.log("Fetched Payment Status");
      callback();
    }, 1000);
  }
  
  // Nested callbacks (callback hell)
  getUserData(() => {
    getOrders(() => {
      getPaymentStatus(() => {
        console.log("Process Complete");
      });
    });
  });
  
  /*
  ✅ Using Promises Instead:
  */
  
  function getUserDataPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched User");
        resolve();
      }, 1000);
    });
  }
  
  function getOrdersPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched Orders");
        resolve();
      }, 1000);
    });
  }
  
  function getPaymentStatusPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Fetched Payment Status");
        resolve();
      }, 1000);
    });
  }
  
  // Promise chaining (cleaner code)
  getUserDataPromise()
    .then(getOrdersPromise)
    .then(getPaymentStatusPromise)
    .then(() => console.log("Process Complete"))
    .catch(console.log);
  
  /*
  -----------------------------------------
    9. JS Promise Reference (Summary)
  -----------------------------------------
  
    ✅ **Promise Basics:**
    - `new Promise((resolve, reject) => {...})` → Creates a promise.
    - `.then(success, error)` → Handles success and optional error.
    - `.catch(error)` → Handles errors.
    - `.finally()` → Runs whether success or failure.
  
    ✅ **Promise Methods:**
    - `Promise.resolve(value)` → Creates resolved promise.
    - `Promise.reject(error)` → Creates rejected promise.
    - `Promise.all([p1, p2])` → Resolves if **all** succeed; rejects if **one** fails.
    - `Promise.any([p1, p2])` → Resolves if **one** succeeds; rejects only if **all** fail.
    - `Promise.race([p1, p2])` → Settles (resolve/reject) with **first promise**.
  
    ✅ **Comparison:**
    - Callbacks: ❌ Nested, difficult to maintain.
    - Promises: ✅ Cleaner, easier debugging, better error handling.
  */
  
  