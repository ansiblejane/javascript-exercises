const removeFromArray = function(initialArray, ...argsToRemove) {

    // for item in args to Remove, see if item is in initialArray; if item is in initialArray, splice it out

    for (let i = 0; i < argsToRemove.length; i++) {
        for (let j = 0; j < initialArray.length;) {
            if (argsToRemove[i] === initialArray[j]) {
                initialArray.splice(j, 1);
            } else {
                j++; 
            }
        }
    }

    return initialArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
