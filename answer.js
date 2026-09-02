// Question 1: Value Detective

function describeValue(value){
    // if(typeof value === "string"){
    //     return "string | truthy";
    // }
    if(typeof value === "string" && value.length === 0){
        return "string | falsy";
    }
    else{
        return "string | truthy"; 
    }
    if(typeof value === "number" && value === 0){
        return "number | falsy";
    }
    else{
        return "number | truthy";
    }
    // else if(typeof value === "undefined"){
    //     return "undefined | falsy";
    // }
    // else if(typeof value === "boolean"){
    //     return "boolean | truthy";
    // }
    // else{
    //     return "object | falsy";
    // }
};

console.log(describeValue("hello"));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(0));
// console.log(describeValue(true));
// console.log(describeValue(null));
// console.log(describeValue(undefined));


// describeValue("hello")	"string | truthy"
// describeValue("")	"string | falsy"
// describeValue(25)	"number | truthy"
// describeValue(0)	"number | falsy"
// describeValue(true)	"boolean | truthy"
// describeValue(null)	"object | falsy"
// describeValue(undefined)	"undefined | falsy"
