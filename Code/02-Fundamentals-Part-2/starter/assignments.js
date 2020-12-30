'use strict';

//                  Functions

function describeCountry(country, population, capitalCity) {
    return (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
}

const mexico = describeCountry("Mexico", 126, "CDMX");
console.log(mexico);
const usa = describeCountry("United States", 328, "Washington D.C.")
console.log(usa);

const canada = describeCountry("Canada", 37, "Ottawa");
console.log(canada);


//             Function declarations vs Expressions


console.log("\nFunction declaration");
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}
const mexicoPer = percentageOfWorld1(126);
console.log(mexicoPer);

const usaPer = percentageOfWorld1(328);
console.log(usaPer);

const canadaPer = percentageOfWorld1(37);
console.log(canadaPer);

console.log("\nFunction expression");
const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}
const mexicoPer2 = percentageOfWorld2(126);
console.log(mexicoPer2);

const usaPer2 = percentageOfWorld2(328);
console.log(usaPer2);

const canadaPer2 = percentageOfWorld2(37);
console.log(canadaPer2);


//                      Arrow functions

console.log("\nArrow functions")
const percentageOfWorld3 = (population) => {
    return (population / 7900) * 100;
}
const mexicoPer3 = percentageOfWorld3(126);
console.log(mexicoPer3);

const usaPer3 = percentageOfWorld3(328);
console.log(usaPer3);

const canadaPer3 = percentageOfWorld3(37);
console.log(canadaPer3);

//              Functions calling other functions

const describePopulation = (country, population) => {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(126)}% of the world.`;
}

console.log(describePopulation("Mexico", 126));
console.log(describePopulation("USA", 328));
console.log(describePopulation("Canada", 37));

//                 Introduction to arrays

const populations = [126, 328, 37, 1393];
console.log("The array has at least 4 countries populations? ", populations.length == 4 ? true : false);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];

console.log(percentages);

//               Introduction to objects
const myCountry = {
    country: "Mexico",
    capital: "CDMX",
    language: "Spanish",
    population: 126,
    neighbours: ["USA", "Guatemala", "Belice"],
    describe: function () {
        return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    },

    checkIsland: function () {
        this.isIsland = this.neighbours <= 0 ? true : false;
    }
}
console.log(myCountry);

//               Dot vs Bracket notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);
myCountry['population'] -= 2;
console.log(myCountry.population);


//              Object methods

// const myCountry = {
//     country: "Mexico",
//     capital: "CDMX",
//     language: "Spanish",
//     population: 126,
//     neighbours: ["USA", "Guatemala", "Belice"],
//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours <= 0 ? true : false;
//     }
// }

console.log(myCountry.describe());

myCountry.checkIsland()
console.log(`Does ${myCountry.country} is an island? ${myCountry.isIsland}`);


//                 Iteration: the for loop

for (let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting.`);
}


//       Looping arrays, breaking and continuing

const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}

console.log(percentages2);
console.log(percentages);

//      Looping backwards and loops in loops

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbours.length; i++) {
    for (let j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(`Neighbour: ${listOfNeighbours[i][j]}`)
    }
}


//              The while loop

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}

console.log(percentages2);
console.log(percentages3);