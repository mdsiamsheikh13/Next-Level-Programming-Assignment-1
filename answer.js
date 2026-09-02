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
