const reverseString = function(string) {
    finalString = '';

    for (let index = (string.length - 1); index > -1; index--) {
        finalString = finalString.concat(string[index]);
    }

    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
