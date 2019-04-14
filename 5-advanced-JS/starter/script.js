

/

// functions. ->// an array with calcuated ages 
// functions accepting functions as arguments.

var years =[1990 , 1965, 1937, 2005, 1998];

// acts liek a machine to chun out the age results.
function arrayCalc (arr, fn){
    //  epmpty array to loop through.
    var arrRes = [];
    // starts from 0: as long as i is less than arr.lenghth: increment ++ every loop.
    for ( var i = 0; i < arr.length;
        i++) {
            // inserts an element at the end of the array
            // fn() uses the function below as a callback and claculates whats being
            // pushed onto the new arrRes array. PRETTY COOL!
            arrRes.push(fn(arr[i]));
        }
        // returns that aray with all the calculated ages.
        return arrRes;
}

// call back function fn -> meaning we will call teh function into teh function above 
// later. in the arrRes.push(fnarr[i]).
function calculateAge(el){
    return 2019 -el;
}

const isFulllAge=(el)=>{
    // are ages older than 18 
    return el >= 18;
}

// max heart rate function 
const maxHeartRate =(el)=> {

    if (el >= 18 && el <= 81){
             // rounds to the closest integer.
    // numbers are the max heart rate formula
    return Math.round (206.9 - (0.67 * el));
    } else {
        return -1;
    }
   
}

// uses calculateAge as a call back function for the fn() function in arrayCalc().
var ages = arrayCalc(years, calculateAge);

// function return an array if ages are older than 18. COOL!
var fullAges = arrayCalc(ages,isFulllAge);

// var for maxHeartrate.
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);







