// Lecture: Arrow fuctions.
const years = [1990, 1965, 1982,1937];

// ES6 
var ages5 = years.map(function(el){
    return 2016 - el;

});

console.log(ages5);

// ES6 
let ages6 = years.map( el => 2016 -el);
console.log(ages6);


// gives index and claculates array above.
ages = years.map((el, index)=> 
`Age element ${index + 1}:
 ${2016- el}`);
 console.log(ages);

 ages6 = years.map((el,index)=> {
     const now = new Date().getFullYear();
     const age = now -el;
     return `Age element ${index + 1}:
     ${age}.`
 });

 console.log(ages6);