const fibonacci = function(n) { 
    if((n==1) || (n==0))
    {
        return n;
    }
    else
    {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

};

// Do not edit below this line
module.exports = fibonacci;
