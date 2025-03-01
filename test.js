// let abc = "Venka tesh ";
// let result = ""
// for (let a = 0; a < abc.length; a++){
//     // console.log(a)
//         console.log(abc[a])
//     if(!(isNaN(abc[a])) && !(abc[a]?.trim() === "")){
//         result += abc[a]
//     }
// }
// console.log("result", result);

// if(abc?.trim() === result){
//     console.log(true)
// } else {
//     console.log(false)   
// }

// let abc = "Venka tesh ";
// let result = "";

// for (let a = 0; a < abc.length; a++) {
//     console.log(abc[a]); // Logs each character of the string
    
//     if (!(isNaN(abc[a])) && !(abc[a]?.trim() === "")) {
//         result += abc[a]; // Adds only non-whitespace, non-NaN characters
//     }
// }

// console.log("result", result);

// // Comparing trimmed `abc` with `result`
// if (abc?.trim() === result) {
//     console.log(true);
// } else {
//     console.log(false);
// }

let abc = "Venka tesh 111";
let result = "";
console.log("Venka tesh ".trim())
for (let a = 0; a < abc.length; a++) {
    if (abc[a].trim() !== "" && isNaN(abc[a].trim())) { // Keep all characters except spaces
        result += abc[a];
    }
}

console.log("result", result);
// console.log("Venka tesh ".split(" ").join(""));
// Output: "Venkatesh"
console.log(result?.split("").reverse().join(""));

if (abc.split(" ").join("") === result) {
    console.log(true);
} else {
    console.log(false);
}
