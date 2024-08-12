const getTheTitles = function(arrayThing) {
    const titleFilter = arrayThing.filter(function(arrayThing){
        return arrayThing.title;
    })
    return titleFilter;

};

// Do not edit below this line
module.exports = getTheTitles;
