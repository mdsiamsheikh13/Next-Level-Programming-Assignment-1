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





// Question 2: Bangladesh Weekend Machine · 10 marks
// Write a function getDayType that takes a day name and returns:

// Input day	Returns
// Friday, Saturday	"Weekend"
// Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
// anything else	"Invalid Day"
// You must solve this with switch case, not with if / else.

// It must also work when the student enters the day in any letter case:

// Call	Returns
// getDayType("Friday")	"Weekend"
// getDayType("friday")	"Weekend"
// getDayType("MONDAY")	"Working Day"
// getDayType("Bandarban")	"Invalid Day"
// Hint: two case lines can share one result if you do not put break between them. And a string method can fix the letter case before the switch starts.


// -----------------------------------------------------------Solution------------------------------------------



// function converToLowerCase(day){
//         let lowerCaseDay = day.toLowerCase();
//         if(lowerCaseDay === "sunday" || "monday" || "tuesday" || "wednesday" || "thursday" || "friday" || "saturday" ){
//             return lowerCaseDay
//         }
//         else{
//             return "Invalid Day";
//         }
//     };

// function getDayType(day){
    
//         let lowerCaseDay = day.toLowerCase();
//             switch (lowerCaseDay) {
//             case "friday":
//             case "saturday":
//                 return "Weekend";
//             case "sunday":
//             case "monday":
//             case "tuesday":
//             case "wednesday":
//             case "thursday":
//                 return "Working Day";
//             default: 
//                 return "Invalid Day";
//         };
// }

// // console.log(converToLowerCase("Hello"));
// // console.log(converToLowerCase("SaTurday"));
// console.log(getDayType("staturday"));
// console.log(getDayType("staturdy"));
// console.log(getDayType("sunday"));





































// Question 3: Username Gatekeeper · 10 marks
// Write a function validateUsername that takes a username and checks it against these rules, in this order:

// Shorter than 4 characters → return "Too Short"
// Contains a space → return "No Space Allowed"
// Contains the word admin anywhere, in any letter case → return "Reserved Word"
// Otherwise → return "Available"
// The order matters. Look at the third example carefully.

// Call	Returns	Why
// validateUsername("rahim123")	"Available"	passes every rule
// validateUsername("ab")	"Too Short"	only 2 characters
// validateUsername("a b")	"Too Short"	it has a space, but the length rule is checked first
// validateUsername("abcd")	"Available"	exactly 4 is allowed
// validateUsername("rahim islam")	"No Space Allowed"	
// validateUsername("superadmin99")	"Reserved Word"	admin is in the middle
// validateUsername("Admin_Rahim")	"Reserved Word"	capital A must also be caught
// Hint: .length, .includes(), and .toLowerCase().

// ----------------------------------------------Solution------------------------------------------

function validateUsername(username){
    let lowerCase = username.toLowerCase();
    if(username.length < 4){
        return "Too Short";
    }
    else if(username.includes(" ")){
        return "No Space Allowed";
    }
    else if(lowerCase.includes("admin")){
        return "Reserved Word";
    }
    else{
        return "Available";
    }
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

