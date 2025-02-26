const reverseString = function(string) {
    let i = string.length;
    let response = "";
    for (i; i>=0; i--) {
        response = response + string.charAt(i);
    }
    return response;
};

// Do not edit below this line
module.exports = reverseString;
