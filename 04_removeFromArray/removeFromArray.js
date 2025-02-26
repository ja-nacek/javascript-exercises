const removeFromArray = function(array, ...args) {
    let i = 0;
    let newArray = [];

    for (i; i<array.length; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
