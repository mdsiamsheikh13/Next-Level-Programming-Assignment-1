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




// Question 3: Username Gatekeeper

function validateUsername(username) {
    let lowerCase = username.toLowerCase();
    if (username.length < 4) {
        return "Too Short";
    } else if (username.includes(" ")) {
        return "No Space Allowed";
    } else if (lowerCase.includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}
