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

// function validateUsername(username){
//     let lowerCase = username.toLowerCase();
//     if(username.length < 4){
//         return "Too Short";
//     }
//     else if(username.includes(" ")){
//         return "No Space Allowed";
//     }
//     else if(lowerCase.includes("admin")){
//         return "Reserved Word";
//     }
//     else{
//         return "Available";
//     }
// }

// console.log(validateUsername("rahim123"));
// console.log(validateUsername("ab"));
// console.log(validateUsername("a b"));
// console.log(validateUsername("abcd"));
// console.log(validateUsername("rahim islam"));
// console.log(validateUsername("superadmin99"));
// console.log(validateUsername("Admin_Rahim"));



















// Question 4: Dhaka CNG Fare Meter · 15 marks
// Write a function getCngFare(distance, isNight, waitingMinutes) that returns the total fare in taka.

// Fare rules:

// The minimum fare is 50 taka, and it covers the first 2 km.
// Every km after the first 2 km costs 15 taka.
// Waiting charge: 2 taka for every waiting minute.
// At night, the driver adds 20% on the whole fare — that means on the distance charge and the waiting charge together.
// isNight should default to false and waitingMinutes should default to 0, so getCngFare(5) must work on its own.
// Return the number, do not round it and do not add the word "taka".

// Call	Returns	Working
// getCngFare(2)	50	minimum fare
// getCngFare(1)	50	still the minimum, never less
// getCngFare(5)	95	50 + (3 × 15)
// getCngFare(10)	170	50 + (8 × 15)
// getCngFare(5, false, 10)	115	95 + (10 × 2)
// getCngFare(5, true)	114	95 + 20%
// getCngFare(5, true, 10)	138	115 + 20%
// Hint: build the fare step by step in a let variable, then apply the night charge at the very end.

// ----------------------------------------------------------Solution------------------------------------------

function getCngFare(distance, isNight=false, waitingMinutes=0){
    let minimumFare = 50;
    let nightFare = 0;
    let waitingFare = 0;

    if(distance>2){
         minimumFare += (distance-2) * 15;
    }

    if(waitingMinutes>0){
        waitingFare = waitingFare + waitingMinutes*2
    }

    if(isNight === true){
        nightFare = (minimumFare + waitingFare) *.20;
    }

    return minimumFare+nightFare+waitingFare;
}

console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true));
console.log(getCngFare(5, true,10));