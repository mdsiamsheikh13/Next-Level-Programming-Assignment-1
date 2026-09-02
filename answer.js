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
};

function describeValue(value) {
    return `${typeOfValue(value)} | ${checkTruthyFalsy(value)}`;
};



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
};




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
};



// Question 4: Dhaka CNG Fare Meter

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let minimumFare = 50;
    let nightFare = 0;
    let waitingFare = 0;

    if (distance > 2) {
        minimumFare += (distance - 2) * 15;
    }

    if (waitingMinutes > 0) {
        waitingFare = waitingFare + waitingMinutes * 2;
    }

    if (isNight === true) {
        nightFare = (minimumFare + waitingFare) * 0.2;
    }

    return minimumFare + nightFare + waitingFare;
};



// Question 5: Run Chase Commentator

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }

    if (ballsLeft <= 0) {
    return "Lost";
    }

  let requiredRate = (runsNeeded / ballsLeft) * 6;

    const requireResult = (requiredRate<=6)? "Comfortable" : requiredRate<=12 ? "Tough" : "Almost Impossible";

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${requireResult}`;
};

