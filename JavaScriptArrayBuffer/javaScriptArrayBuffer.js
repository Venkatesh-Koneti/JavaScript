// /**
//  * ArrayBuffer in JavaScript - In-depth Explanation
//  * 
//  * ArrayBuffer is a fixed-length binary buffer that represents a chunk of memory.
//  * It is primarily used to work with binary data and is often used with TypedArrays and DataView.
//  */

// // Creating an ArrayBuffer of 16 bytes
// let buffer = new ArrayBuffer(16);
// console.log(buffer.byteLength); // 16

// /**
//  * ArrayBuffer itself does not allow direct manipulation of its contents.
//  * Instead, we use TypedArray views or DataView to read/write data.
//  */

// // Creating a TypedArray (Uint8Array) to work with buffer
// let uint8View = new Uint8Array(buffer);
// uint8View[0] = 255; // Setting the first byte to 255
// console.log(uint8View[0]); // 255

// // Another TypedArray (Int16Array) sharing the same buffer
// let int16View = new Int16Array(buffer);
// console.log(int16View[0]); // -1 (if interpreting 255 as signed 16-bit int)

// /**
//  * TypedArrays available for use with ArrayBuffer:
//  * - Int8Array, Uint8Array, Uint8ClampedArray
//  * - Int16Array, Uint16Array
//  * - Int32Array, Uint32Array
//  * - Float32Array, Float64Array
//  */

// // Writing values using different views
// let float32View = new Float32Array(buffer);
// float32View[0] = 3.14;
// console.log(float32View[0]); // 3.14

// /**
//  * DataView allows fine-grained control over reading and writing data,
//  * including endianness (big-endian or little-endian).
//  */
// let dataView = new DataView(buffer);
// dataView.setUint8(1, 127); // Set byte at index 1 to 127
// console.log(dataView.getUint8(1)); // 127

// // Reading and writing multi-byte values with specific endianness
// dataView.setUint16(2, 1024, true); // Little-endian
// console.log(dataView.getUint16(2, true)); // 1024

// /**
//  * Slicing an ArrayBuffer
//  * - The slice method creates a new ArrayBuffer from an existing one.
//  */
// let slicedBuffer = buffer.slice(4, 8);
// console.log(slicedBuffer.byteLength); // 4

// /**
//  * Copying an ArrayBuffer (since ArrayBuffers are not directly copyable)
//  */
// function copyArrayBuffer(buffer) {
//     let copy = new ArrayBuffer(buffer.byteLength);
//     new Uint8Array(copy).set(new Uint8Array(buffer));
//     return copy;
// }

// let copiedBuffer = copyArrayBuffer(buffer);
// console.log(copiedBuffer.byteLength); // 16

// /**
//  * Sharing Memory Between Workers (SharedArrayBuffer)
//  * - Similar to ArrayBuffer but allows shared memory access across threads.
//  */
// // let sharedBuffer = new SharedArrayBuffer(16); // Uncomment to use in a Worker environment

// /**
//  * Summary:
//  * - ArrayBuffer is a fixed-length raw binary data buffer.
//  * - It requires TypedArray or DataView for reading/writing data.
//  * - DataView provides finer control over byte-level manipulation.
//  * - Slicing and copying techniques allow buffer management.
//  * - SharedArrayBuffer enables multi-threaded memory sharing (in Workers).
//  */


/**
 * JavaScript ArrayBuffer - Full In-Depth Explanation
 * 
 * ArrayBuffer represents a fixed-length binary buffer in memory.
 * It is used for handling raw binary data and is commonly used with TypedArrays and DataView.
 */

// --- JS ArrayBuffer() Constructor ---
// Creates a new ArrayBuffer of a given size in bytes.
let buffer = new ArrayBuffer(16);
console.log(buffer.byteLength); // 16

// --- JS ArrayBuffer byteLength Property ---
// The `byteLength` property returns the size of the ArrayBuffer in bytes.
console.log(buffer.byteLength); // 16

// --- JS ArrayBuffer slice() Method ---
// Creates a new ArrayBuffer from a portion of an existing one.
let slicedBuffer = buffer.slice(4, 8);
console.log(slicedBuffer.byteLength); // 4

// --- JS ArrayBuffer isView() Method ---
// Checks if an object is a TypedArray or DataView view of an ArrayBuffer.
console.log(ArrayBuffer.isView(new Uint8Array(buffer))); // true
console.log(ArrayBuffer.isView(new DataView(buffer))); // true
console.log(ArrayBuffer.isView(buffer)); // false

// --- JS ArrayBuffer maxByteLength Property (Only for Resizable ArrayBuffers) ---
// maxByteLength defines the maximum size a resizable ArrayBuffer can grow to.
let resizableBuffer = new ArrayBuffer(16, { maxByteLength: 32 });
console.log(resizableBuffer.byteLength); // 16
console.log(resizableBuffer.maxByteLength); // 32

// --- JS ArrayBuffer resize() Method (Only for Resizable ArrayBuffers) ---
// Resizes the ArrayBuffer to a new byte length within maxByteLength.
resizableBuffer.resize(24);
console.log(resizableBuffer.byteLength); // 24

// --- JS ArrayBuffer Reference ---
/**
 * - Use TypedArrays (e.g., Uint8Array, Int16Array) or DataView to read/write data.
 * - Use slice() to extract a portion of an ArrayBuffer.
 * - Use isView() to check if an object is a valid view of an ArrayBuffer.
 * - Use resizable ArrayBuffers for dynamic memory allocation.
 */
