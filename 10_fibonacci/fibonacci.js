const fibonacci = function(position) {
    let i = 0;
    let finalNumber;
    let x = 1;
    let y = 0;
    for (i; i<position; i++) {
        x = x + y;
        y = x - y;
        finalNumber = y;
    }

    if (position < 0) {
        return "OOPS";
    } else if (position == 0) {
        return 0;
    } 
    else {
        return finalNumber;
    }


    //console.log(finalNumber);
};

// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
