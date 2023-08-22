const sumAll = function(num1, num2) {
    let finalSum = 0; 

    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 > 0 && num2 > 0){
        if (num2 > num1){
            for (let num = num1; num <= num2; num++) {
                finalSum += num;
            }
        } else {
            for (let num = num2; num <= num1; num++) {
                finalSum += num;
            }          
        }
    } else {
        return "ERROR";
    }


    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
