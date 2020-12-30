'use strict'; // Activate the strict mode, help us write more secure code. Make's easier to avoid accidental errors
/*

//                      Strict mode

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive 😁");

// const interface = "Audio"; 'interface' is the name of a feature that will be implemented in the future.

// const private = 534; 'private' is the name of a feature that will be implemented in the future.

// const if = 23; The last two exampleas are as we try to use if as name of a constant


//                      Functions

// A function is a simple piece of code that we can reuse over and over again in our code. Can hold 1 or more complete lines of code.

// Basic structure of a function.
function logger() {
    // This is called the function body.
    console.log('My name is Alexis');
}

// To use a function we write 'functionName()'. This is called calling/running/inoking the function.
logger();
logger();
logger();

// Receiving parameters in a function. The parameters goes inside the parenthesis.
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    // We can return anything from the function
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


//             Function declarations vs Expressions

// We can call a function declaration before it is defined
const age = calcAge1(1991);

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

console.log("Your age is ", age);

// A function without a name is called an anonymous function
// We can store an anonymous function on a variable.

// Function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1999)
console.log("Alexis your age is ", age2)



//                      Arrow functions

// Arrow function
// Parameters => return VALUES; (Simpliest form)
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1999);
console.log("Alexis age: ", age3);

// Multiple lines of code inside the return part and also multiple parameters
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement}`;
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1999, "Alexis"));


//              Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//              Reviewing functions

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return 0;
    }

}

console.log(yearsUntilRetirement(1999, "Alexis"));
console.log(yearsUntilRetirement(1970, "Leo"));




//                      Arrays

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1994, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

// We can get the lenght of an array by using 'array.length'
console.log(friends.length);
// We use - 1 because lenght is not 0 based. It start in 1.
console.log(friends[friends.length - 1]);

// Only primitive variables are immutable, an array is not primitive so we can change values inside an array.
friends[friends.length - 1] = "Alexis";
console.log(friends);
// But we cannot replace the entire variable.
// friends = ['Bob', 'Alice'];

const firstName = 'Alexis';
// The arrays in JavaScript can contain different type of data.
// In this case it contains: string, num and array
const alexis = [firstName, 'Monroy', 2037 - 1999, 'student', friends];

console.log(alexis);
console.log(alexis.length);

// Exercise

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);



//               Basic array operations (methods)


const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// The push method adds element to the end of an array. It returns the length of the new array.
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// The unshift method adds elements to the beggining of an array. It returns the length of the new array.
friends.unshift("John");
console.log(friends);

// The pop method remove the last element from the array. It returns the removed element.
friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends);

// The shift method remove the first element from the array. It returns the removed element.
friends.shift();
console.log(friends);

// If we want to know the index of an specific element we can use indexOf to get it.
console.log(friends.indexOf("Steven"));
// When the element it's not in the array it returns a -1
console.log(friends.indexOf("Bob"));

// If we want to check if an element is in an array we can use the includes() method. It returns true or false depending if the element exists or not. It test with strict comparison.
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
} else {
    console.log(`You don't have any friend called Peter`);
}


//              Introduction to objects

// To define an object we use the curly braces
// We can say that the alexis object has 5 properties.
const alexis = {
    firstName: "Alexis",
    lastName: "Monroy",
    age: 2037 - 1999,
    occupation: "student",
    friends: ['Michael', 'Steven', 'Peter']
}



//              Dot vs bracket notation
const alexis = {
    firstName: "Alexis",
    lastName: "Monroy",
    age: 2037 - 1999,
    occupation: "student",
    friends: ['Michael', 'Steven', 'Peter']
}
console.log(alexis);

// Getting a property from an object with point notation
// object.property
console.log(alexis.lastName);

// Getting a property from an object with bracket notation
// object['property/expression']
// Property
console.log(alexis['lastName']);
// Expression
const nameKey = 'Name';
console.log(alexis['first' + nameKey]);
console.log(alexis['last' + nameKey]);


const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, occupation and friends.");

if (alexis[interestedIn]) {
    console.log(alexis[interestedIn]);
} else {
    console.log("Invalid option");
}

// Add new properties to the object
// Dot notation
alexis.location = 'Mexico';
alexis['instagram'] = '@alexisbma';

console.log(alexis);

// Mini challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Steven', 'Peter']
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



//                  Object methods

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ['Michael', 'Steven', 'Peter'],
    hasDriversLicence: true,
    // We can also store functions inside objects
    // By declaring them as an expression

    // Without this.
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // this is equal to object on which the method is called

    // calcAge: function () {
    //     // this points to the jonas object
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        // We can use the this keyword to store a new property
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age} year old ${this.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} driver's licence.`;
    }
};
console.log(jonas.calcAge());

// Challenge
// 'Jonas is a 46 year old teacher, and he has a driver's licence.'
// 'Jonas is a 46 year old teacher, and he has no driver's licence.'
console.log(jonas.getSummary());



//                  Iteration: The for loop

console.log("Reptions with the for loop");
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}



//          Looping arrays, breaking and continuing

const jonasArray = [
    'Jonas',
    'Schemdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof (jonasArray[i]));
    // filling the types array using a for loop
    // types[i] = typeof (jonasArray[i]);
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

// continue and break
// continue pass to the next iteration without finishing the loop
console.log("Only strings with 'continue' inside for");
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(jonasArray[i], typeof (jonasArray[i]));
}

// break finishes the loop
console.log("Printing strings until number with 'break'")
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(jonasArray[i], typeof (jonasArray[i]));
}


//       Looping backwards and loops in loops

const jonasArray = [
    'Jonas',
    'Schemdtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// Looping backwards
for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(i, jonasArray[i]);
}

// Loops inside loops
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`----STARTING EXERCISE ${exercise}----`);
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Lifting weigth repetition ${rep} of the exercise ${exercise}! 🏋️‍♂`);
    }
}



//               The while loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// Implementing the same but with a while loop
console.log("\nSame exercise with while loop\n")
let i = 1;
while (i <= 10) {
    console.log(`Lifting weights repetition ${i} 🏋️‍♂️`);
    i++;
}

// Example that does not depend on a counter

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log("Loop is about to end...");
    }
}
*/