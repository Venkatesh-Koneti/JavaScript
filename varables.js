// // Declaration and Initialization
// // user=5;//?
// // var user=10;//?
// // let user2=20;//?
// // const user3=30;//?
// // console.log(user3);

// // Scope (Local, Global , Block)
// // var test=20;
// // let sample="check";
// // const sample2="check2";
// // function variableTest(){
// //     let sample="checking";
// //     var test=10;
// //     let test2=30;
// //     if(test===10){
// //         let test4=40;
// //         var test5=20;
// //         const test6="ok";
// //         // console.log(test);
// //     }
// //     test3=40;
// //     console.log(test5,test6);
// //     console.log(sample,sample2);
// // }
// // variableTest();
// // console.log(test,test3);

// // Redeclaration
// // var declare="sample";
// // var declare="value changed";
// // declare="again changed";
// // let declare=5;
// // const declare=10;
// // console.log(declare);






// // Reinitialization for primitive data types
// // var add=10;
// // add=20;
// // add=30;
// // let minus=20;
// // minus=40;
// // const pi=3.14;
// // pi=10;
// // console.log(pi);













// // Reinitialization for reference data types
// const students=[1,2,3,4,5];
// students.push(6);
// const teachers=[...students];
// teachers.push(7);
// console.log(teachers);
// console.log(students);



// const user={name:"Venkatesh"};
// user.age=20;
// const admin=JSON.parse(JSON.stringify(user));
// admin.age=30;
// console.log(admin);
// console.log(user);


// var student = "Venkatesh";
// let mobile="Redme Note7";

// // data_type     variable      value
// // var           student       Venkatesh
// // let           mobile        Redme Note7
// // const        students       10001
// // const         user          10002
// // const        teachers       10001

// // reference_number     value
// // 10001                [1,2,3,4,5]
// // 10002                {name:"Venkatesh"}

/*
============================================
  JavaScript Variables - Complete Explanation
============================================
*/

// 1️⃣ Declaration and Initialization

// Declaration (variable is created but not assigned a value)
let d; // undefined
var e; // undefined
// const z; ❌ Error: 'const' variables must be initialized

// Initialization (assigning a value)
let a = 10; // Number
var b = "Hello"; // String
const c = true; // Boolean


// 2️⃣ Scope (Local, Global, Block)

// Global Scope (Accessible anywhere)
var globalVar = "I am global";

function test() {
  console.log(globalVar); // ✅ Accessible
}
test();
console.log(globalVar); // ✅ Accessible

// Local Scope (Function Scope)
function demo() {
  let localVar = "I am local";
  console.log(localVar); // ✅ Accessible inside function
}
demo();
// console.log(localVar); ❌ Error: localVar is not defined

// Block Scope (Only for `let` and `const`)
{
  let blockVar = "Inside Block";
  const blockConst = "Constant Inside Block";
  console.log(blockVar); // ✅ Accessible inside block
}
// console.log(blockVar); ❌ Error: blockVar is not defined


// 3️⃣ Redeclaration

// `var` allows redeclaration
var x = 10;
var x = 20; // ✅ No error
console.log(x); // 20

// `let` and `const` do not allow redeclaration
let y = 30;
// let y = 40; ❌ Error: Identifier 'y' has already been declared

const z = 50;
// const z = 60; ❌ Error: Identifier 'z' has already been declared


// 4️⃣ Reinitialization for Primitive Data Types

// `var` and `let` can be reinitialized
let num = 10;
num = 20;  // ✅ Allowed
console.log(num); // 20

// `const` cannot be reinitialized
const numConst = 100;
// numConst = 200; ❌ Error: Assignment to constant variable


// 5️⃣ Reinitialization for Reference Data Types

// `var` and `let` allow reinitialization
let arr = [1, 2, 3];
arr = [4, 5, 6]; // ✅ Allowed
console.log(arr); // [4, 5, 6]

// `const` does not allow reassignment, but allows modification
const obj = { name: "John" };
// obj = { name: "Doe" }; ❌ Error: Assignment to constant variable

obj.name = "Doe"; // ✅ Allowed (modifying the property)
console.log(obj); // { name: "Doe" }


/*
============================================
  Summary Table
============================================

| Feature            | var  | let  | const |
|--------------------|------|------|-------|
| Global Scope      | ✅   | ✅   | ✅    |
| Function Scope    | ✅   | ✅   | ✅    |
| Block Scope       | ❌   | ✅   | ✅    |
| Redeclaration     | ✅   | ❌   | ❌    |
| Reinitialization  | ✅   | ✅   | ❌    |
| Mutable Objects   | ✅   | ✅   | ✅    |
| Reassign Objects  | ✅   | ✅   | ❌    |

*/


// 🎯 Key Takeaways
// 1. Use `let` for variables that change over time.
// 2. Use `const` for constants and objects that don’t need reassignment.
// 3. Avoid `var` because it has function scope and allows redeclaration, leading to potential bugs.

console.log("JavaScript Variables Explanation Completed ✅");