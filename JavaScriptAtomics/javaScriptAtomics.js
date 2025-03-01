/**
 * JavaScript Atomics 
 * ------------------------------------------
 * Atomics is a global object in JavaScript that provides atomic operations
 * on SharedArrayBuffer. It ensures safe concurrent programming by allowing
 * multiple threads to manipulate shared memory without race conditions.
 * 
 * Atomics operations are synchronous and thread-safe.
 * They do not require explicit locks.
 */

// Importing Worker Threads for demonstration (Node.js environment)
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");

// Creating a SharedArrayBuffer (32 bytes -> 8 integers of 4 bytes each)
const sharedBuffer = new SharedArrayBuffer(4 * Int32Array.BYTES_PER_ELEMENT);
const sharedArray = new Int32Array(sharedBuffer);

/**
 * Atomics.and()
 * --------------
 * Performs bitwise AND operation atomically.
 */
sharedArray[0] = 5; // 5 -> 101 (Binary)
console.log("Before AND:", sharedArray[0]);
Atomics.and(sharedArray, 0, 3); // 3 -> 011 (Binary)
console.log("After AND:", sharedArray[0]); // 101 & 011 = 001 (1 in decimal)

/**
 * Atomics.or()
 * ------------
 * Performs bitwise OR operation atomically.
 */
sharedArray[1] = 5; // 5 -> 101 (Binary)
console.log("Before OR:", sharedArray[1]);
Atomics.or(sharedArray, 1, 2); // 2 -> 010 (Binary)
console.log("After OR:", sharedArray[1]); // 101 | 010 = 111 (7 in decimal)

/**
 * Atomics.xor()
 * -------------
 * Performs bitwise XOR operation atomically.
 */
sharedArray[2] = 5; // 5 -> 101 (Binary)
console.log("Before XOR:", sharedArray[2]);
Atomics.xor(sharedArray, 2, 3); // 3 -> 011 (Binary)
console.log("After XOR:", sharedArray[2]); // 101 ^ 011 = 110 (6 in decimal)

/**
 * Atomics.add()
 * -------------
 * Atomically adds a given value to an element.
 */
sharedArray[3] = 10;
console.log("Before Add:", sharedArray[3]);
Atomics.add(sharedArray, 3, 5);
console.log("After Add:", sharedArray[3]); // 10 + 5 = 15

/**
 * Atomics.compareExchange()
 * --------------------------
 * If the current value is equal to the expected value, it replaces it with a new value.
 */
sharedArray[4] = 20;
console.log("Before compareExchange:", sharedArray[4]);
Atomics.compareExchange(sharedArray, 4, 20, 50); // Replaces 20 with 50
console.log("After compareExchange:", sharedArray[4]); // 50

/**
 * Atomics.store()
 * ---------------
 * Stores a value in the array at a specific index atomically.
 */
console.log("Before Store:", sharedArray[5]);
Atomics.store(sharedArray, 5, 100);
console.log("After Store:", sharedArray[5]); // 100

/**
 * Multithreading Demonstration using Atomics
 */
if (isMainThread) {
    const worker = new Worker(__filename, { workerData: sharedBuffer });
    worker.on("exit", () => console.log("Worker finished execution."));
} else {
    const workerArray = new Int32Array(workerData);
    console.log("Worker modifying shared memory...");
    Atomics.add(workerArray, 3, 10);
    Atomics.store(workerArray, 6, 200);
    parentPort.close();
}

/**
 * Atomics Reference:
 * -------------------
 * Atomics provides multiple methods:
 * - Atomics.add() -> Adds a value atomically.
 * - Atomics.and() -> Bitwise AND operation.
 * - Atomics.or() -> Bitwise OR operation.
 * - Atomics.xor() -> Bitwise XOR operation.
 * - Atomics.compareExchange() -> Conditional value replacement.
 * - Atomics.store() -> Stores a value.
 * - Atomics.load() -> Retrieves a value.
 * - Atomics.wait() / Atomics.notify() -> Synchronization methods.
 */
