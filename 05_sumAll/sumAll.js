const sumAll = function(number1, number2) { // -10, 4
    let biggerNumber;
    let smallerNumber;
    let result = 0;

    if (number1 < number2) { // -10 < 4 PRAVDA
        smallerNumber = number1; // -10
        biggerNumber = number2; // 4
    } else {
        biggerNumber = number1;
        smallerNumber = number2;
    }

    if (number1 < 0 || number2 < 0 || !Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }

    for (smallerNumber; smallerNumber <= biggerNumber; smallerNumber++) { // -10; -10 <= 4; -10++
        result = result + smallerNumber; // 0 + 
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
