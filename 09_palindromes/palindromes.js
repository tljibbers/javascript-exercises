const palindromes = function (string) {
    const reverseString = string.split("").reverse().join("");

    if(string == reverseString)
    {
        return true;
    }
};

// Do not edit below this line
module.exports = palindromes;
