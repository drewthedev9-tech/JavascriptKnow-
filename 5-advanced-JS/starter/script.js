//  creating funnction constructor . lesson 61.

var john ={
    name: "john",
    yearOfBirth: 1990,
    job: "teacher"
}

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function (){
    //     console.log(2016 - this.yearOfBirth);
    // }
}

// instatantiation = new instances of the Person object
var john = new Person('John', 1990, 'teacher');
// "new" operator creates a new empty object - unique does all this.
// also sets the "this" keyword to the new current empty object
// person is then callled which is a function, 
// functions have the this keyword point to the global object ( not helpful in this case).
// but new operator has helped by pointing teh this key word to the current obect created.
// could get the calculateAge();

// Inheritance - crating instances of this object from the constructor to minimise code.
// Adding teh caculateAge to the prototype property to be inherited
Person.prototype.calculateAge = function (){
         console.log(2016 - this.yearOfBirth);
     }

// Here the nw object have it because its part of the this.calculateAge().
var jane = new Person('Jane', 1969,'designer');
var Mark = new Person('Mark', 1948,'designer')

// Here the new object "jane" instances are inheriting 
// calculateAge through the protype property ="inheritance"

jane.calculateAge();

// Practice my own code ///////////////

// Constructor
var Car = function(year, make, engine){
    this.year = year;
    this.make =  make;
    this.engine = engine;
    this.nos = function(){
        console.log("I have the NOS")
    }
}

// Car.prototype.nos = function (){
//     console.log("I have nos")
// }

let evo = new Car("2006","evoIX","mivec");
// evo has access to nos frothe prototype.
evo.nos();
evo

// Objects and functions
// type jane into console and youw ill see all the properties of it
// john.hasOwnproperty("job")->checks the oject if it has property.
// john imstanceof Person -> checks to see if john is instance of Person constructor.
// console.info(jane)_> will gove you all the info on the jane object.

// creating objects////////////
/*var personProto={
    calculateAge: function(){
        console.log(2020 - this.yearOfBirth);
    }
}

// inheriting the personproto properties and methods
// with object.create. creates and object and inherits from
// personProto.
// Object.create easier to do inheritance 
var john = Object.create(personProto);
// filling the objects.
john.name ='john';
john.yearOfBirth =1990;
john.job -"teacher";

john.calculateAge();


// my own code.///////
const JohnyDad = {
    name: "john",
    job: "teacher",
    jobIntro: function(){
        console.log("my job is a teacher");
    }
}

const johnSon = Object.create(JohnyDad);

johnSon.name ="Jono";
johnSon.birth = 1990;

johnSon.jobIntro();*/
///////////////////////////////////
// primitives vs objects/////
// primitives create a new copy of memroy when being created
// objects just create a refeance to that varuable not a new object

// First class Functions passing functions as params -> functions are just objects

let years = [1990, 1965, 1937,2005, 1998];
//  fn will be a call back function called later in the function.
function arrayCalc(arr, fn){
    // have an empty array
    var arrRes =[];
    for (var i = 0; i < arr.length; i++){
        // function then runs and pushes onto the new array.
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
// call back function.
function calculateAge (el){
    return 2020 - el;
}

// Another call back function
function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18  && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }

 
}

// calculateAge is just a refernce to the call back function above.
var ages =arrayCalc(years, calculateAge);
// testing second call back function. just a referenceas above.
var fullAges = arrayCalc(years, isFullAge)
// using heart rate function, function  a refernce. using ages variable above.
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

// functions returning functions -> First class functions.

function interviewQuestion(job){
    return function(name) {
        if (job ==='designer'){
          console.log( name + 'Can you plesase explain what UX design is ');
         } else if ( job ==='teacher'){
            console.log(name + "what subect do you teach" + name + "?" );
        }else{
          console.log("hello" + name + " what is your job ?");
            }
             
        }
    }

  

var teacherQuestions = interviewQuestion('teacher');
teacherQuestions('john');
teacherQuestions('mark');
// funny sybtax to call the function but it still works.
interviewQuestion('teacher')('Mark'); // what subject do you teach mark

// IIFE immediatley Invoked function expressions.

//  Popping and pushing - The pop() method removes the last element from an array:
 const fruits = ["Banana", "Orange", "Apple", "Mango"]
// removes last element
 console.log(fruits.pop());
//  push method does the opposite adds an elmnt onto the end of an array.

 const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits2.push("kiwi"))
// shifting
// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits3.shift()); 

// splice adding elements
// The first parameter (2) defines the position where new elements should be added (spliced in).

// The second parameter (0) defines how many elements should be removed.

// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

// The splice() method returns an array with the deleted items:
 const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(2, 2, "Lemon", "Kiwi");

// concat() joining arrays

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys); 

// slice() The slice() method slices out a piece of an array into a new array.
 
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

// This example slices out a part of an array starting from array element 3 ("Apple"):
// The slice() method can take two arguments like slice(1, 3).

// The method then selects elements from the start argument, and up to (but not including) the end argument.
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);

// sorting arrays


