const repeatString = function (word, times) {
    let i = 0;
    let response = "";
    if (times < 0) {
        return "ERROR";
    }

    for (i; i < times; i++) {
        response = response + word;
    }
    return response;
};

// Do not edit below this line
module.exports = repeatString;
