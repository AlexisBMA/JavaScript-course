//  Values and Variables
const country = "Mexico";
const continent = "America";
let population = 126;
console.log(country);
console.log(continent);
console.log(population);

//  Data types
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// Let, const and var 

// Changed country, continent and isIsalnd as constants.
language = 'Spanish';
// isIsland = true; This is not allowed.

// Basic Operators
const halfPop = population / 2;
console.log('Half population: ', halfPop);
population++;
console.log(population);
console.log("Mexico has a greater population that Finland? ", population > 6);
console.log("Mexico is uner average? ", population < 33);
const description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// String and Template Literals

const descriptionTL = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(descriptionTL);

// Taking decisions if / else Statements

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} population is ${33 - population} million below the average`);
}

// Type convertion and coercion

// Predict the result of the following operations

const op1 = '9' - '5';
const op2 = '19' - '13' + '17';
const op3 = '19' - '13' + 17;
const op4 = '123' < 57;
const op5 = 5 + 6 + '4' + 9 - 4 - 2;

console.log(4, op1);
console.log(617, op2);
console.log(23, op3);
console.log(false, op4);
console.log(1143, op5);

// Equality operators

// const numNeighbours = Number(prompt("How many neighbour contries does your country have?"));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders")
// }

// Logical operators

if (population < 50 && language === "english" && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria 😒`);
}

// The switch statement

switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("MOST number of native speakers!");
        break;
    case 'Spanish':
        console.log("2nd place in number of native speaker's");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("4th place");
        break;
    case 'arabic':
        console.log("5th mosth spoken language");
        break;
    default:
        console.log("Great language too! 😁");
        break;
}

// The conditional (terniary) operator

population > 33 ? console.log(`${country}'s population is above the average`) : console.log(`${country}'s population is below average`);

// or 
console.log(
    `${country}'s population is ${population > 33 ? 'above' :
        'below'} average`,
);