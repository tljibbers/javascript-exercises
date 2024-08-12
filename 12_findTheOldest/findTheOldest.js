const findTheOldest = function(arr) {
    const sortAge = arr.sort(function(a, b){
        let ageA;
        let ageB;
        if(!arr[a].includes(yearOfDeath))
        {
            const date = new Date()
            let year = date.getFullYear();
            ageA = year - a.yearOfBirth;
        }
        if(!arr[b].includes(yearOfDeath))
        {
            const date2 = new Date()
            let year2 = date2.getFullYear();
            ageB = year2 - b.yearOfBirth;
        }
        else{
            ageA = a.yearOfDeath - a.yearOfBirth; 
            ageB = b.yearOfDeath - a.yearOfBirth;
        }
        
        if(ageA > ageB)
        {
            return 1;
        }
        else
        {
            return -1
        }
    })
    const sortAgeSingle = sortAge[0]
    return sortAgeSingle;

};

// Do not edit below this line
module.exports = findTheOldest;
