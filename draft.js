// // // Question 1: Value Detective

// ## Question 1: Value Detective · 10 marks

// [svg](https://github.com/Apollo-Level2-Web-Dev/Foundation-Program-Assignment-1#question-1-value-detective--10-marks)

// Write a function `describeValue` that takes **any value** and returns a string with two pieces of information joined by a space, a pipe, and another space:

// ```
// <type of the value> | <truthy or falsy>

// ```

// **svg**

// Examples:

// | **CallReturns**            |                        |
// | -------------------------- | ---------------------- |
// | `describeValue("hello")`   | `"string \| truthy"`   |
// | `describeValue("")`        | `"string \| falsy"`    |
// | `describeValue(25)`        | `"number \| truthy"`   |
// | `describeValue(0)`         | `"number \| falsy"`    |
// | `describeValue(true)`      | `"boolean \| truthy"`  |
// | `describeValue(null)`      | `"object \| falsy"`    |
// | `describeValue(undefined)` | `"undefined \| falsy"` |

// Watch out for these three. Think before you answer:

// - `describeValue("0")` — a string that looks like zero
// - `describeValue(NaN)` — what does `typeof NaN` give?
// - `describeValue(null)` — remember the strange thing we saw in class

// > Hint: you do not need a long `if` chain to find the type. `typeof` gives it to you. And a value can be put straight inside an `if` to test truthy or falsy.

// ---











// // function describeValue(value){
// //     // if(typeof value === "string"){
// //     //     return "string | truthy";
// //     // }
// //     if(typeof value === "string" && value.length === 0){
// //         return "string | falsy";
// //     }
// //     else{
// //         return "string | truthy"; 
// //     }
// //     if(typeof value === "number" && value === 0){
// //         return "number | falsy";
// //     }
// //     else{
// //         return "number | truthy";
// //     }
// //     // else if(typeof value === "undefined"){
// //     //     return "undefined | falsy";
// //     // }
// //     // else if(typeof value === "boolean"){
// //     //     return "boolean | truthy";
// //     // }
// //     // else{
// //     //     return "object | falsy";
// //     // }
// // };

// // console.log(describeValue("hello"));
// // console.log(describeValue(""));
// // console.log(describeValue(25));
// // console.log(describeValue(0));
// // // console.log(describeValue(true));
// // // console.log(describeValue(null));
// // // console.log(describeValue(undefined));




// function typeOfValue(value){
//     return typeof value;
// }

// function checkTruthyFalsy(value){
//     if(value){
//         return "truthy";
//     }
//     else{
//         return "falsy";
//     }
// }

// function describeValue(value){
//     return `${typeOfValue(value)} | ${checkTruthyFalsy(value)}`;
// }

// console.log(describeValue("hello"));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(0));
// console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));
// console.log(describeValue(NaN));
// // console.log(describeValue(1));

// // // describeValue("hello")	"string | truthy"
// // // describeValue("")	"string | falsy"
// // // describeValue(25)	"number | truthy"
// // // describeValue(0)	"number | falsy"
// // // describeValue(true)	"boolean | truthy"
// // // describeValue(null)	"object | falsy"
// // // describeValue(undefined)	"undefined | falsy"





