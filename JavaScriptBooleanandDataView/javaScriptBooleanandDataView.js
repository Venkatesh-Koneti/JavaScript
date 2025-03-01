/*
=========================================
  JavaScript Boolean and DataView
=========================================

In JavaScript, a Boolean represents a logical entity with two values: `true` or `false`.
Booleans are commonly used in conditional statements, comparisons, and logical operations.

The `Boolean` object is a wrapper object around the primitive boolean values `true` and `false`.

-----------------------------------------
  1. JS Boolean() Constructor
-----------------------------------------

- The `Boolean()` constructor creates a Boolean object.
- If no value is provided, it defaults to `false`.
- It converts any given value to a boolean (truthy or falsy).

*/

// Creating Boolean objects using the Boolean constructor
let bool1 = new Boolean(true);  // Boolean object holding true
let bool2 = new Boolean(false); // Boolean object holding false
let bool3 = new Boolean(0);      // Boolean object holding false (0 is falsy)
let bool4 = new Boolean(1);      // Boolean object holding true  (1 is truthy)
let bool5 = new Boolean("");     // Boolean object holding false (empty string is falsy)
let bool6 = new Boolean("Hello");// Boolean object holding true  (non-empty string is truthy)

console.log(bool1.valueOf()); // true
console.log(bool2.valueOf()); // false
console.log(bool3.valueOf()); // false
console.log(bool4.valueOf()); // true
console.log(bool5.valueOf()); // false
console.log(bool6.valueOf()); // true

// ⚠️ Warning: Boolean objects are not the same as boolean primitives
console.log(typeof bool1); // "object"
console.log(typeof true);  // "boolean"

// Using `Boolean` without `new` behaves differently
let bool7 = Boolean(0);  // Primitive boolean false
let bool8 = Boolean(1);  // Primitive boolean true

console.log(bool7); // false
console.log(bool8); // true

/*
-----------------------------------------
  2. JS Boolean Constructor Property
-----------------------------------------

- The `constructor` property returns the function that created the Boolean object's prototype.
- It points to the `Boolean` function itself.

*/

console.log(bool1.constructor === Boolean); // true

/*
-----------------------------------------
  3. JS Boolean valueOf() Method
-----------------------------------------

- The `valueOf()` method returns the primitive boolean value of a Boolean object.

*/

let boolObj = new Boolean(true);
console.log(boolObj.valueOf()); // true

let boolPrimitive = Boolean(false);
console.log(boolPrimitive.valueOf()); // false (primitives do not have object methods)

/*
-----------------------------------------
  4. JS Boolean toString() Method
-----------------------------------------

- The `toString()` method returns a string representation of the Boolean value.
- It returns `"true"` for `true` and `"false"` for `false`.

*/

let boolTrue = new Boolean(true);
let boolFalse = new Boolean(false);

console.log(boolTrue.toString());  // "true"
console.log(boolFalse.toString()); // "false"

/*
-----------------------------------------
  5. JS Boolean Reference
-----------------------------------------

- The Boolean object has the following properties and methods:
  - `Boolean.prototype.constructor`
  - `Boolean.prototype.valueOf()`
  - `Boolean.prototype.toString()`

*/

// Example reference usage
let exampleBool = new Boolean(1);
console.log(exampleBool.constructor); // Function: Boolean
console.log(exampleBool.valueOf());   // true
console.log(exampleBool.toString());  // "true"


/*
=========================================
  JavaScript DataView
=========================================

- `DataView` is a built-in JavaScript object that provides a low-level interface for reading and writing binary data in an `ArrayBuffer`.
- It allows fine-grained control over binary data manipulation.
- Unlike typed arrays (`Int8Array`, `Uint8Array`, etc.), `DataView` allows access to different types at arbitrary byte offsets.

-----------------------------------------
  1. Creating a DataView
-----------------------------------------

- First, create an `ArrayBuffer` of a specific size.
- Then, create a `DataView` to interact with the buffer.

*/

let buffer = new ArrayBuffer(16); // 16 bytes
let dataView = new DataView(buffer);

console.log(dataView.byteLength); // 16

/*
-----------------------------------------
  2. DataView Methods
-----------------------------------------

- `getInt8(byteOffset)`: Reads a signed 8-bit integer (1 byte).
- `getUint8(byteOffset)`: Reads an unsigned 8-bit integer (1 byte).
- `getInt16(byteOffset, littleEndian)`: Reads a signed 16-bit integer (2 bytes).
- `getUint16(byteOffset, littleEndian)`: Reads an unsigned 16-bit integer (2 bytes).
- `getInt32(byteOffset, littleEndian)`: Reads a signed 32-bit integer (4 bytes).
- `getUint32(byteOffset, littleEndian)`: Reads an unsigned 32-bit integer (4 bytes).
- `getFloat32(byteOffset, littleEndian)`: Reads a 32-bit floating point number (4 bytes).
- `getFloat64(byteOffset, littleEndian)`: Reads a 64-bit floating point number (8 bytes).

- `setInt8(byteOffset, value)`: Writes a signed 8-bit integer.
- `setUint8(byteOffset, value)`: Writes an unsigned 8-bit integer.
- `setInt16(byteOffset, value, littleEndian)`: Writes a signed 16-bit integer.
- `setUint16(byteOffset, value, littleEndian)`: Writes an unsigned 16-bit integer.
- `setInt32(byteOffset, value, littleEndian)`: Writes a signed 32-bit integer.
- `setUint32(byteOffset, value, littleEndian)`: Writes an unsigned 32-bit integer.
- `setFloat32(byteOffset, value, littleEndian)`: Writes a 32-bit floating point number.
- `setFloat64(byteOffset, value, littleEndian)`: Writes a 64-bit floating point number.

*/

let view = new DataView(buffer);

// Writing data
view.setInt8(0, 127);    // Stores 127 at byte 0
view.setUint8(1, 255);   // Stores 255 at byte 1
view.setInt16(2, 32000, true); // Stores 32000 at bytes 2-3 in little-endian format
view.setFloat32(4, 3.14, true); // Stores 3.14 at bytes 4-7 in little-endian format

// Reading data
console.log(view.getInt8(0));       // 127
console.log(view.getUint8(1));      // 255
console.log(view.getInt16(2, true)); // 32000
console.log(view.getFloat32(4, true)); // 3.14

/*
-----------------------------------------
  3. Why Use DataView?
-----------------------------------------

- It allows precise control over data storage and retrieval.
- It is useful for handling binary data in network protocols, file formats, and WebAssembly.

*/

