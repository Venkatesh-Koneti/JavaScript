/**
 * JavaScript JSON Full Guide
 * 
 * This file covers:
 * - JS JSON Basics
 * - JS JSON Objects
 * - JS JSON parse() Method
 * - JS JSON stringify() Method
 * - Pretty Print JSON in JS
 * - Add Element to JSON Object in JS
 * - Read JSON File in JS
 * - JS JSON Complete Reference
 * - Convert JSON data to HTML Table using jQuery
 * - Check if a Key Exists Inside a JSON Object
 */

// =========================
// 1. JavaScript JSON Basics
// =========================

// JSON (JavaScript Object Notation) is a lightweight format for storing and transporting data.
// It is often used when data is sent between a client and a server.

let jsonData = '{ "name": "John", "age": 30, "city": "New York" }';
console.log("JSON String:", jsonData);

// =========================
// 2. JavaScript JSON Objects
// =========================

// JSON is written in key/value pairs, similar to JavaScript objects.
let jsObject = {
    "name": "Alice",
    "age": 25,
    "city": "Los Angeles"
};
console.log("JavaScript Object:", jsObject);

// =========================
// 3. JavaScript JSON parse() Method
// =========================

// JSON.parse() is used to convert a JSON string into a JavaScript object.
let parsedData = JSON.parse(jsonData);
console.log("Parsed JSON:", parsedData);

// =========================
// 4. JavaScript JSON stringify() Method
// =========================

// JSON.stringify() is used to convert a JavaScript object into a JSON string.
let stringifiedData = JSON.stringify(jsObject);
console.log("Stringified JSON:", stringifiedData);

// =========================
// 5. Pretty Print JSON in JS
// =========================

// Adding indentation for better readability
console.log("Pretty Printed JSON:", JSON.stringify(jsObject, null, 4));

// =========================
// 6. Add Element to JSON Object in JS
// =========================

parsedData.country = "USA";
console.log("Updated JSON Object:", parsedData);

// =========================
// 7. Read JSON File in JS
// =========================

// Using fetch API (for browsers)
// fetch("data.json")
//     .then(response => response.json())
//     .then(data => console.log("JSON File Data:", data))
//     .catch(error => console.error("Error loading JSON file:", error));

// Using Node.js (for server-side)
// const fs = require("fs");
// fs.readFile("data.json", "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
//     const jsonData = JSON.parse(data);
//     console.log("JSON File Data:", jsonData);
// });

// =========================
// 8. JavaScript JSON Complete Reference
// =========================

// JSON Methods:
// - JSON.parse() -> Convert JSON string to JS object
// - JSON.stringify() -> Convert JS object to JSON string
// - JSON.stringify(obj, null, spacing) -> Pretty print JSON
// - JSON.parse(jsonString, reviverFunction) -> Custom parsing

// =========================
// 9. Convert JSON Data to HTML Table using jQuery
// =========================

/* Uncomment and use this in an HTML file with jQuery included

$(document).ready(function () {
    let jsonData = [
        { "name": "John", "age": 30, "city": "New York" },
        { "name": "Alice", "age": 25, "city": "Los Angeles" }
    ];

    let table = "<table border='1'><tr><th>Name</th><th>Age</th><th>City</th></tr>";
    jsonData.forEach(obj => {
        table += `<tr><td>${obj.name}</td><td>${obj.age}</td><td>${obj.city}</td></tr>`;
    });
    table += "</table>";
    $("#jsonTable").html(table);
});

*/

// =========================
// 10. Check if a Key Exists Inside a JSON Object
// =========================

let keyToCheck = "age";
if (keyToCheck in parsedData) {
    console.log(`Key '${keyToCheck}' exists in the JSON object.`);
} else {
    console.log(`Key '${keyToCheck}' does NOT exist in the JSON object.`);
}

// Alternative method using hasOwnProperty()
if (parsedData.hasOwnProperty(keyToCheck)) {
    console.log(`Key '${keyToCheck}' exists using hasOwnProperty.`);
}
