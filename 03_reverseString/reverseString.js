const reverseString = function(string) {
    let stringSplit = string.split("");
    stringSplit.reverse();
    let newString = stringSplit.join("");
 
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
