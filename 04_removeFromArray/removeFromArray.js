const removeFromArray = function(array, ...target) {
    for(element in array)
    {
        for(part in target)
        {
            if(array[element] == target[part])
            {
                array.splice(element, 1); 
            }
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
