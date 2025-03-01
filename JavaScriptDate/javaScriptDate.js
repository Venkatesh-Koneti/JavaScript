/* 
=========================================
         JavaScript Date - In-Depth
=========================================

  - JS Date() Constructor
  - JS Date constructor Property
  - JS Date now() Method
  - JS Date parse() Method
  - JS Date UTC() Method
  - JS Date getDate() Method
  - JS Date getDay() Method
  - Check if Date is Today in JS
  - Check if Date is Between Two Dates in JS
  - JS Date Reference
*/

/* 
=========================================
   1. JavaScript Date() Constructor
=========================================

- JavaScript provides the `Date` object to work with dates and times.
- The `Date` constructor can be used in multiple ways.
- It returns a date object representing a point in time.

*/

// 1.1 Create a Date object with the current date and time
const currentDate = new Date();
console.log("Current Date:", currentDate);

// 1.2 Create a Date object with a specific date (YYYY-MM-DD format)
const specificDate = new Date("2024-07-01");
console.log("Specific Date:", specificDate);

// 1.3 Create a Date object using year, month (0-based), day, hours, minutes, seconds
const customDate = new Date(2024, 6, 1, 14, 30, 0); // July 1, 2024, 14:30:00
console.log("Custom Date:", customDate);

// 1.4 Passing an invalid date string results in "Invalid Date"
const invalidDate = new Date("invalid-date");
console.log("Invalid Date Example:", invalidDate);

/*
==============================================
   2. JavaScript Date constructor Property
==============================================

- The `constructor` property returns the function that created the `Date` prototype.
*/

console.log("Date Constructor:", currentDate.constructor === Date); // true

/*
==================================
   3. JavaScript Date now() Method
==================================

- `Date.now()` returns the current timestamp in milliseconds since January 1, 1970 (Unix Epoch).
*/

const timestamp = Date.now();
console.log("Current Timestamp:", timestamp);

/*
==================================
   4. JavaScript Date parse() Method
==================================

- `Date.parse(dateString)` parses a date string and returns the number of milliseconds since the Unix Epoch.
- Returns `NaN` if the date string is invalid.
*/

const millis = Date.parse("2024-07-01T12:00:00Z");
console.log("Parsed Milliseconds:", millis);

/*
==================================
   5. JavaScript Date UTC() Method
==================================

- `Date.UTC(year, month, day, hours, minutes, seconds, ms)`
- Returns the number of milliseconds since Unix Epoch for the UTC time.
*/

const utcMillis = Date.UTC(2024, 6, 1, 12, 0, 0);
console.log("UTC Milliseconds:", utcMillis);

/*
==================================
   6. JavaScript Date getDate() Method
==================================

- `getDate()` returns the **day of the month** (1-31).
*/

console.log("Day of the Month:", currentDate.getDate());

/*
==================================
   7. JavaScript Date getDay() Method
==================================

- `getDay()` returns the **day of the week** (0-6), where:
  - 0 = Sunday, 1 = Monday, ..., 6 = Saturday
*/

console.log("Day of the Week:", currentDate.getDay());

/*
==================================
   8. Check if Date is Today in JS
==================================

- This function checks if a given date is today's date.
*/

function isToday(date) {
    const today = new Date();
    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}

console.log("Is Today:", isToday(new Date())); // true
console.log("Is Today (Past Date):", isToday(new Date("2024-01-01"))); // false

/*
===============================================
   9. Check if Date is Between Two Dates in JS
===============================================

- This function checks if a date is within a given range.
*/

function isBetween(date, start, end) {
    return date >= start && date <= end;
}

const startDate = new Date("2024-01-01");
const endDate = new Date("2024-12-31");

console.log("Is Between:", isBetween(new Date(), startDate, endDate)); // true or false

/*
=========================================
   10. JavaScript Date Reference Guide
=========================================

🔹 Date Creation:
- `new Date()` → Creates a new Date object with the current date/time.
- `new Date("YYYY-MM-DD")` → Creates a date from a string.
- `new Date(year, month, day, hours, minutes, seconds, ms)` → Creates a custom date.

🔹 Date Methods:
- `Date.now()` → Returns the current timestamp.
- `Date.parse(dateString)` → Converts a date string to milliseconds.
- `Date.UTC(year, month, day, hours, minutes, seconds, ms)` → Returns UTC milliseconds.

🔹 Getting Components:
- `date.getFullYear()` → Returns the full year.
- `date.getMonth()` → Returns the month (0-11).
- `date.getDate()` → Returns the day of the month (1-31).
- `date.getDay()` → Returns the day of the week (0-6).
- `date.getHours()` → Returns the hour (0-23).
- `date.getMinutes()` → Returns the minutes (0-59).
- `date.getSeconds()` → Returns the seconds (0-59).
- `date.getMilliseconds()` → Returns the milliseconds (0-999).

🔹 Formatting:
- `date.toISOString()` → Converts the date to an ISO 8601 string.
- `date.toLocaleDateString()` → Converts the date to a readable format.
- `date.toTimeString()` → Returns the time portion of the date.

🔹 Manipulating Dates:
- `date.setFullYear(year)` → Sets the year.
- `date.setMonth(month)` → Sets the month.
- `date.setDate(day)` → Sets the day of the month.
- `date.setHours(hours)` → Sets the hours.
- `date.setMinutes(minutes)` → Sets the minutes.
- `date.setSeconds(seconds)` → Sets the seconds.
- `date.setMilliseconds(ms)` → Sets the milliseconds.

🔹 Date Comparison:
- `date1.getTime() === date2.getTime()` → Compares two dates.

Example:
```js
const date1 = new Date("2024-07-01");
const date2 = new Date("2024-07-01");
console.log(date1.getTime() === date2.getTime()); // true 

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log(isLeapYear(2024)); // true
*/

// ### 🔥 **Key Takeaways:**
// - JavaScript **Date objects** store time as milliseconds since **January 1, 1970 (UTC).**
// - `Date.now()` gives **current timestamp** in milliseconds.
// - `Date.parse()` converts date strings into **milliseconds**.
// - `getDate()` gets **day of the month**, `getDay()` gets **day of the week**.
// - Use `toISOString()`, `toLocaleDateString()` for **formatted output**.
// - Compare dates using `.getTime()`.

// This `.js` file is **fully detailed**, covers **edge cases**, and is **ready to paste** into your project! 🚀

