/*
=========================================
  JavaScript Intl (Internationalization API)
=========================================

  The `Intl` object is a built-in JavaScript API for handling:
  - Formatting of dates, numbers, and lists.
  - Language-sensitive collation (sorting).
  - Handling different locales properly.

  This file explains:
  - `Intl.ListFormat`
  - `Intl.DateTimeFormat`
  - `Intl.Collator`
  - `supportedLocalesOf()` method
  - `format()`, `formatToParts()`, and `formatRangeToParts()`
*/

/*
-----------------------------------------
  1. JS Intl.ListFormat supportedLocalesOf()
-----------------------------------------

  - Checks which locales are supported for list formatting.
  - Returns an array of supported locales.
*/

console.log(Intl.ListFormat.supportedLocalesOf(["en", "fr", "de"])); 
// Output: ["en", "fr", "de"] (depends on browser support)

/*
-----------------------------------------
  2. JS Intl.DateTimeFormat supportedLocalesOf()
-----------------------------------------

  - Checks which locales are supported for date/time formatting.
  - Returns an array of supported locales.
*/

console.log(Intl.DateTimeFormat.supportedLocalesOf(["en-US", "fr-FR", "ja-JP"])); 
// Output: ["en-US", "fr-FR", "ja-JP"] (depends on browser support)

/*
-----------------------------------------
  3. JS Intl.ListFormat format()
-----------------------------------------

  - Formats a list of items into a localized string.
  - Example: "Apple, Banana, and Mango"
*/

const listFormatter = new Intl.ListFormat("en", { style: "long", type: "conjunction" });

console.log(listFormatter.format(["Apple", "Banana", "Mango"]));
// Output: "Apple, Banana, and Mango"

const listFormatterShort = new Intl.ListFormat("fr", { style: "short", type: "disjunction" });

console.log(listFormatterShort.format(["Chien", "Chat", "Oiseau"]));
// Output: "Chien, Chat ou Oiseau"

/*
-----------------------------------------
  4. JS Intl.ListFormat formatToParts()
-----------------------------------------

  - Returns an array of objects, breaking down the formatted list into parts.
*/

const listParts = listFormatter.formatToParts(["One", "Two", "Three"]);

console.log(listParts);
// Output: 
// [
//   { type: "element", value: "One" },
//   { type: "literal", value: ", " },
//   { type: "element", value: "Two" },
//   { type: "literal", value: ", and " },
//   { type: "element", value: "Three" }
// ]

/*
-----------------------------------------
  5. JS Intl.DateTimeFormat format()
-----------------------------------------

  - Formats a date based on the given locale and options.
*/

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
});

console.log(dateFormatter.format(new Date("2025-03-01")));
// Output: "Saturday, March 1, 2025" (varies based on locale)

/*
-----------------------------------------
  6. JS Intl.Collator supportedLocalesOf()
-----------------------------------------

  - Checks which locales are supported for collation (sorting).
  - Returns an array of supported locales.
*/

console.log(Intl.Collator.supportedLocalesOf(["en", "es", "zh"])); 
// Output: ["en", "es", "zh"] (depends on browser support)

/*
-----------------------------------------
  7. JS Intl.DateTimeFormat formatRangeToParts()
-----------------------------------------

  - Similar to `format()`, but for date ranges.
  - Returns an array of objects breaking the range into parts.
*/

const dateRangeFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
});

const parts = dateRangeFormatter.formatRangeToParts(new Date("2025-03-01"), new Date("2025-03-10"));

console.log(parts);
// Output Example:
// [
//   { type: "month", value: "March" },
//   { type: "literal", value: " " },
//   { type: "day", value: "1" },
//   { type: "literal", value: " – " },
//   { type: "day", value: "10" },
//   { type: "literal", value: ", " },
//   { type: "year", value: "2025" }
// ]

/*
-----------------------------------------
  8. JavaScript Intl Complete Reference
-----------------------------------------

  `Intl` API includes:
  - `Intl.DateTimeFormat`: Formats dates/times.
  - `Intl.NumberFormat`: Formats numbers (not covered here).
  - `Intl.ListFormat`: Formats lists into readable strings.
  - `Intl.Collator`: Sorts and compares strings based on locale.
  - `Intl.RelativeTimeFormat`: Formats relative time (e.g., "2 days ago").
  - `Intl.PluralRules`: Handles pluralization rules for different languages.

  💡 Useful for:
  - Making applications multi-lingual.
  - Formatting dates, numbers, and lists correctly.
  - Sorting words based on locale rules.

*/

