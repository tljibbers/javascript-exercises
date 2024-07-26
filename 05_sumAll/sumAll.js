const sumAll = function(start, end) {
    total = 0;
    if(start < end){
        for(i = start; i <= end; i++)
        {
            total += i;
        }
        return total;
    }
    else if(start > end){
        for(i = start; i <= end; i--)
        {
            total += i;
        }
        return total;
    }
    else if(Math.sign(start) == -1 || Math.sign(end) == -1)
    {
        return "ERROR"
    }
    else if(!Number.isInteger(start) || !Number.isInteger(end))
    {
        return "ERROR"
    }
    else if(Array.isArray(start) || Array.isArray(end))
    {
        return "ERROR" 
    }


};

// Do not edit below this line
module.exports = sumAll;
