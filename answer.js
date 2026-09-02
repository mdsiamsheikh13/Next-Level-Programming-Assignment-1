// Question 1: Value Detective

function typeOfValue(value) {
    return typeof value;
}

function checkTruthyFalsy(value) {
    if (value) {
        return "truthy";
    } else {
        return "falsy";
    }
}

function describeValue(value) {
    return `${typeOfValue(value)} | ${checkTruthyFalsy(value)}`;
}



// Question 2: Bangladesh Weekend Machine

function getDayType(day) {
    let lowerCaseDay = day.toLowerCase();
    switch (lowerCaseDay) {
    case "friday":
    case "saturday":
        return "Weekend";
    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
        return "Working Day";
    default:
        return "Invalid Day";
    }
}
