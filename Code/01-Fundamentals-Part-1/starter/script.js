/*
//                      Values and Variables

// We can comment lines by using the shortcut ctrl+/
// The semicolon at the final of a line is not mandatory but it is a good practice.
let js = "amazing";
// The console.log command help us display results in the console from the browser.
console.log(40 + 8 + 23 - 10);
console.log("Alexis");
console.log(23);

// We use let to declare variables.
// The standard to declare ariables in JavaScript is using camel case.
let firstName = "Bryan Alexis";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions.
let jonas_matilda = 'JM';

// For declaring a constant we write the full name of the variable in upper case.
let PI = 3.1416;
let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob)


//                      Data types

let javaScriptIsFun = true;
console.log(javaScriptIsFun);
// We can use typeof to determine the type of a variable.
// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Alexis');

javaScriptIsFun = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year); // this one prints the value
console.log(typeof year); // prints the type of the variable

year = 1999;
console.log(year);
console.log(typeof year);

console.log(typeof null); // This prints object because its an error


//                      Let, const and var

// By default it is a good practice to use const all the time and only use let when we are sure that the value will change at some point.

// We use let to declare variables that can change later in the execution. In javaScript reasign a value to a variable is called mutate the variable. It is bloc scoped.

let age = 30;
age = 31;


// We use const to declare variables that are not supposed to change at any point. We cannot declare empty const variables.

const birthYear = 1999;
// This is not possible:
// birthYear = 1990;
// const job;


// Using var it is not recommended. It is function scoped.
var job = 'programmer';
job = 'teacher';


//                      Basic Operators

// Math operators
const now = 2037;
const ageAlexis = now - 1999;
const ageSarah = now - 2020;
// We can print multiple values by using a ',' between them.
console.log(ageAlexis, ageSarah);
console.log(ageAlexis * 2, ageAlexis / 10, 2 ** 3);
// 2 *** 3 means 2 to the power of 3

const firstName = 'Bryan';
const lastName = 'Monroy';

// We can concatenate string by using '+'
console.log(firstName + ' ' + lastName);

// typeof it is also an operator

// The '=' symbol it is also an operator
let x = 10 + 5;

// Assignment operators
x += 10; // += --> x = x + 10 = 25
x *= 4; // *= --> x = x * 4 = 100
x++; //     ++ --> x = x + 1 = 101
x--; //     -- --> x = x - 1 = 100
x--; //     = 99
console.log(x);

// Comparison operators: >, <, >=, <=
console.log(ageAlexis > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// JavaScript first do the operators and then do the comparison because of the operator precedance
console.log(now - 1999 > now - 2018);



//                      Operator precedence

const now = 2037;
const ageAlexis = now - 1999;
const ageSarah = now - 2020;
console.log(now - 1999 > now - 2018);

// We can delcare multiple variables by separating them with a ','

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageAlexis + ageSarah) / 2
console.log(ageAlexis, ageSarah, averageAge);

//                  Strings and Template Literals

const firstName = 'Alexis';
const job = 'teacher';
const birthYear = 1999;
const year = 2037;

const alexs = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(alexs);

// We need to use the backticks to indicate JavaScript we are writting a template string
const alexisNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(alexisNew);

// We also can use the back ticks to write normal strings.
console.log(`Just a regular string...`);

// We also can create multiline string using the backticks
console.log('String with \n\
multiple\n\
lines!')

console.log(`String with
multiple
lines!`)



//            Taking decisions if / else Statements

const age = 18;

if (age >= 18) {
    console.log("Alexis can start driving. 👽");
} else {
    const yearsLeft = 18 - age;
    console.log(`Alexis is too young. Wait another ${yearsLeft} years. 😭`);
}

const birthYear = 1999;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



//           Type convertion and Coercion.
// JavaScript only can convert between 3 types: number, string and boolean.

//             Type convertion

// Type convertion is when we manually conver from one type to antoher
// Type coercion is when JavaScript autmoatycally converts behind the scenes for us.

const inputYear = '1991';
// We are converting a string to a number by using 'Number()'
console.log(Number(inputYear), inputYear);
// We can sum 18 to a string so we need to cervert the variable frist
console.log(Number(inputYear) + 18);

// We cannot convert letters into a numbers, so the result will be 'NaN' which is 'not a number'
console.log(Number('Jonas'));
console.log(typeof NaN) // it will still be a number, but a invalid one.

// We can use the funtion 'String()' if we want to convert a number to a string.
console.log(String(1991), 1991);

//              Type coercion

// Every time there is an operation between a number and a string the number will be converted to a string.
console.log('I am ' + 23 + ' years old.');

// In this cases strings are converted into numbers.
console.log('23' - '10' - 3);
console.log('23' * '2');
console.log('23' / '2');
console.log('23' > '18');

// This is the only case where the number is converted into a string. (+)
console.log('23' + '10' + 3);

let n = '1' + 1;
n = n - 1;
console.log(n)  // 10


//              Truthy and Falsy values

// These are values that when we try to convert them from another type to boolen they will take the value of true or false.
// 5 falsy values: 0, '', undefined, null, NaN
// Every other value different from the 5 falsy are converted into true.

// We can convert any type to boolean with 'Boolean()'
//Type convertion

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Alexis'));
console.log(Boolean({}));
console.log(Boolean(''));

//Type coercion

const money = 01;
if (money) {
    console.log("Don't spend it up! 🤬");
} else {
    console.log("You should get a job! 🤬")
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is not defined");
}


//            Equality operators
const age = '18';

// The '===' help us determine if something is strictly equal to another value, it returns a boolean value. Does not perform type coercion.

// The '==' help us determine if something is equal to another value, it returns a boolean. It performs type coercion.

// If the if statement only have 1 line we don't need to open curly braces. We must use this one.
if (age === 18) console.log("You just became an adult! (strict)");
if (age == 18) console.log("You just became an adult! (loose)");

// We can easily get a value from the user with prompt()
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
// All the inputs received will be stored as strings
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool!");
} else if (favorite === 7) {
    console.log("7 is also a cool number!");
} else if (favorite === 9) {
    console.log("9 is also a cool number!");
} else {
    console.log("I don't like your number");
}

if (favorite !== 23) {
    console.log("But why not 23?");
}


//            Logical operators
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

// We can use && as an 'AND' operator
console.log(hasDriversLicence && hasGoodVision);

// We can use '||' as an 'OR' operator
console.log(hasDriversLicence || hasGoodVision);

// Not operator is '!'
console.log(!hasDriversLicence);


// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...")
// }

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...")
}


//            The switch statement

const day = 's';

switch (day) {
    case 'monday':  // day === 'monday' it does a strict comparison
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        // It is important to write 'break' otherwise the code will continiue executing
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    // we can execute a piece of code for more than one case
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekeng 😁");
        break;
    default:
        console.log("Not a valid day!");
        break;
}

if (day === 'monday') {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if (day === 'tuesday') {
    console.log("Prepare theory videos");
} else if (day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");
} else if (day === 'friday') {
    console.log("Record videos");
} else if (day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekeng 😁");
} else {
    console.log("Not a valid day!");
}


//            Statements and expressions


// An expression produces a value
// A statement is a piece of code that doesn't produce a value. Are full sentences that translate our actions. They finish with ';'

// Examples of expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    // Example of an statement with an expression inside
    const str = '23 is bigger';
}

// There are some places where JavaScript expect an expression and not an statement.


//            The conditional (Terniary) operator

const age = 23;
// The conditional is represented by '?' it is like an if-else statement. CONDITION ? IF-PART : ELSE-PART
age >= 18 ? console.log("I like to drink wine! 😜") : console.log("I like to drink water...");

const drink = age >= 18 ? 'wine!!' : 'water...';
console.log(drink);

// It is the same as do this
let drink2;
if (age >= 18) {
    drink2 = 'wine!!';
} else {
    drink2 = 'water...';
}
console.log(drink2);

// Since the terniary operator is an expression we can use it in a template literal
console.log(`I like to drink ${age >= 18 ? 'wine!!' : 'water...'}`);

*/