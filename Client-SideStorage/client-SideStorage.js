// === Client-Side Storage in JavaScript ===

console.log("\n=== Client-Side Storage in JavaScript ===");

/*
Client-Side Storage allows storing data in the user's browser.
Common types of storage:
1. Local Storage - Stores data with no expiration.
2. Session Storage - Stores data for a single session (until tab is closed).
3. Cookies - Stores small amounts of data with an expiration date.
4. JSON Web Token (JWT) - A secure way to store user authentication data.
*/

// === 1. Local Storage in JavaScript ===

console.log("\n=== Local Storage in JavaScript ===");

/*
- Local Storage allows storing data with no expiration.
- Data remains even after the browser is closed or reloaded.
- Only stores data as strings.
- Max storage: ~5MB per domain.
*/

localStorage.setItem("username", "Venkatesh");
console.log("Local Storage Set: username = Venkatesh");

const storedUsername = localStorage.getItem("username");
console.log("Retrieved from Local Storage:", storedUsername);

localStorage.removeItem("username"); // Remove a specific key
console.log("Local Storage Item Removed.");

localStorage.clear(); // Clears all local storage data
console.log("All Local Storage Items Cleared.");


// === 2. Session Storage in JavaScript ===

console.log("\n=== Session Storage in JavaScript ===");

/*
- Session Storage stores data for a single session.
- Data is removed when the tab or browser is closed.
- Stores data as strings.
*/

sessionStorage.setItem("sessionUser", "JohnDoe");
console.log("Session Storage Set: sessionUser = JohnDoe");

const sessionUser = sessionStorage.getItem("sessionUser");
console.log("Retrieved from Session Storage:", sessionUser);

sessionStorage.removeItem("sessionUser"); // Remove a specific key
console.log("Session Storage Item Removed.");

sessionStorage.clear(); // Clears all session storage data
console.log("All Session Storage Items Cleared.");


// === 3. Difference between Local Storage, Session Storage, and Cookies ===

console.log("\n=== Difference Between Local Storage, Session Storage, and Cookies ===");

/*
| Feature         | Local Storage      | Session Storage   | Cookies           |
|----------------|-------------------|------------------|------------------|
| Expiration     | Never              | Until tab closes | Custom (expiry set) |
| Storage Limit  | ~5MB               | ~5MB             | ~4KB               |
| Data Type      | String only        | String only      | String (key-value)  |
| Accessibility  | Same origin only   | Same origin only | Sent with HTTP requests |

Cookies are commonly used for authentication, while Local and Session Storage are used for storing application data.
*/


// === 4. JSON Web Token (JWT) ===

console.log("\n=== JSON Web Token (JWT) ===");

/*
- JWT is used for secure authentication.
- It is a self-contained token that contains user information.
- A JWT consists of three parts:
  1. Header (Algorithm & Token Type)
  2. Payload (User Information)
  3. Signature (Ensures Data Integrity)
*/

// Example JWT format:
const exampleJWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJWZW5rYXRlc2giLCJpYXQiOjE2Mzg5MzEyMzcsImV4cCI6MTYzODkzNDgzN30.2R8v_xFL4CZv6QJu-JbpZ9CIt4ocymfJYXKm8HIGYdc";

console.log("Example JWT:", exampleJWT);

/*
How JWT Works:
1. User logs in with a username and password.
2. The server generates a JWT and sends it to the client.
3. The client stores the JWT (usually in Local Storage).
4. The client sends the JWT with every request.
5. The server verifies the JWT before processing the request.
*/

// Store JWT in Local Storage
localStorage.setItem("token", exampleJWT);
console.log("JWT Stored in Local Storage.");

// Retrieve JWT
const retrievedToken = localStorage.getItem("token");
console.log("Retrieved JWT from Local Storage:", retrievedToken);

// Remove JWT
localStorage.removeItem("token");
console.log("JWT Removed from Local Storage.");


// === Summary ===
console.log("\n=== Summary of Client-Side Storage ===");

/*
✅ Local Storage: Stores data permanently (until manually cleared).
✅ Session Storage: Stores data until the tab is closed.
✅ Cookies: Small data storage sent with HTTP requests.
✅ JWT: Secure authentication token stored in local storage or cookies.

Reference:
- MDN Docs: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
*/

console.log("Client-Side Storage in JavaScript Explained!");
