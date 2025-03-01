// JavaScript HTTP Methods - Full Explanation

console.log("\n=== JavaScript HTTP Methods Explained ===");

/*
HTTP (HyperText Transfer Protocol) methods are used for communication between a client and a server.

Common HTTP Methods:
1. GET - Retrieve data from a server
2. POST - Send data to a server (create a resource)
3. PUT - Update an entire resource
4. PATCH - Update a specific part of a resource
5. DELETE - Remove a resource

Now, let's explore these methods with examples.
*/


// 1. PUT vs PATCH

console.log("\n=== PUT vs PATCH ===");

/*
Both PUT and PATCH are used to update resources, but they work differently.

- PUT: Replaces the entire resource with a new one.
- PATCH: Partially updates a resource.

Example:
1. A user object before update:
   { "name": "Alice", "age": 25, "city": "New York" }

2. PUT Request → Replaces the entire object:
   { "name": "Alice", "age": 26, "city": "Los Angeles" }

3. PATCH Request → Updates only specific fields:
   { "age": 26 } → Only the age changes.

*/

async function updateUserWithPUT() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Alice", age: 26, city: "Los Angeles" }),
  });

  const data = await response.json();
  console.log("PUT Response:", data);
}

async function updateUserWithPATCH() {
  const url = "https://jsonplaceholder.typicode.com/users/1";

  const response = await fetch(url, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ age: 26 }), // Only updating the age
  });

  const data = await response.json();
  console.log("PATCH Response:", data);
}

// updateUserWithPUT();
// updateUserWithPATCH();


// 2. Fetch API in JavaScript

console.log("\n=== Fetch API in JavaScript ===");

/*
The Fetch API is used to make HTTP requests in JavaScript.
- `fetch()` returns a Promise.
- We use `.then()` or `await` to handle the response.
*/

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json()) // Convert response to JSON
  .then(data => console.log("Fetch API Data:", data))
  .catch(error => console.log("Fetch API Error:", error));


// 3. Use JavaScript Fetch API to Get Data

console.log("\n=== Using Fetch API to Get Data ===");

/*
To get data from an API, we use:
- `fetch()`
- `await response.json()`
*/

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    console.log("Fetched Data:", data.slice(0, 5)); // Show only first 5 posts
  } catch (error) {
    console.log("Fetch Error:", error.message);
  }
}

fetchData();


// 4. Make AJAX Call from JavaScript

console.log("\n=== Making AJAX Call from JavaScript ===");

/*
AJAX (Asynchronous JavaScript and XML) allows updating parts of a webpage without refreshing.

- Older method: `XMLHttpRequest`
- Modern method: `fetch()`
*/

function makeAjaxCall() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("AJAX Response:", JSON.parse(xhr.responseText));
    }
  };
  xhr.send();
}

makeAjaxCall();


// 5. Wait for an API Request to Return in JavaScript

console.log("\n=== Waiting for an API Request to Return ===");

/*
To ensure an API call completes before using its data, we use:
- `async/await`
- `.then()`
*/

async function getPost() {
  const url = "https://jsonplaceholder.typicode.com/posts/1";

  console.log("Fetching post...");
  const response = await fetch(url);
  const data = await response.json();
  console.log("Received Post:", data);
}

getPost();


// === Summary ===
console.log("\n=== Summary of JavaScript HTTP Methods ===");

/*
✅ PUT vs PATCH - PUT replaces, PATCH updates partially.
✅ Fetch API - Modern way to make HTTP requests.
✅ Fetch API GET - Retrieve data using `fetch()`.
✅ AJAX Calls - Older way using `XMLHttpRequest`.
✅ Waiting for API Response - Use `await fetch()`.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*/

console.log("JavaScript HTTP Methods Explained!");
