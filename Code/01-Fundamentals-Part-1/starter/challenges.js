/*
//                          Challenge #1

let MarkWeight, MarkHeight, JohnWeight, JohnHeight, MarkBMI, JohnBMI, markHigherBMI;

//                          Data 1

console.log("Data 1")
MarkWeight = 78;
MarkHeight = 1.69;
MarkBMI = MarkWeight / MarkHeight ** 2;
console.log("Mark's BMI in data 1", MarkBMI);

JohnWeight = 92;
JohnHeight = 1.95;
JohnBMI = JohnWeight / JohnHeight ** 2;
console.log("John's BMI in data 1", JohnBMI);

markHigherBMI = MarkBMI > JohnBMI;
console.log("Mark's BMI is gratear than John's?", markHigherBMI);

//                          Data 2

console.log("Data 2")
MarkWeight = 95;
MarkHeight = 1.88;
MarkBMI = MarkWeight / MarkHeight ** 2;
console.log("Mark's BMI in data 2", MarkBMI);

JohnWeight = 85;
JohnHeight = 1.76;
JohnBMI = JohnWeight / JohnHeight ** 2;
console.log("John's BMI in data 2", JohnBMI);

markHigherBMI = MarkBMI > JohnBMI;
console.log("Mark's BMI is gratear than John's?", markHigherBMI);


//                          Challenge #2

//                          Data 1

console.log("Data 1")
MarkWeight = 78;
MarkHeight = 1.69;
MarkBMI = MarkWeight / MarkHeight ** 2;
console.log("Mark's BMI in data 1", MarkBMI)

JohnWeight = 92;
JohnHeight = 1.95;
JohnBMI = JohnWeight / JohnHeight ** 2;
console.log("John's BMI in data 1", JohnBMI);

markHigherBMI = MarkBMI > JohnBMI;
console.log("Mark's BMI is gratear than John's?", markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
} else {
    console.log(`Johns's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})`);
}

//                          Data 2

console.log("Data 2")
MarkWeight = 95;
MarkHeight = 1.88;
MarkBMI = MarkWeight / MarkHeight ** 2;
console.log("Mark's BMI in data 2", MarkBMI)

JohnWeight = 85;
JohnHeight = 1.76;
JohnBMI = JohnWeight / JohnHeight ** 2;
console.log("John's BMI in data 2", JohnBMI);

markHigherBMI = MarkBMI > JohnBMI;
console.log("Mark's BMI is gratear than John's?", markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})`);
} else {
    console.log(`Johns's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})`);
}
*/

//                          Challenge #3

const avgDolphins1 = (96 + 108 + 89) / 3;
const avgKoalas1 = (88 + 91 + 110) / 3;
console.log("1)")
console.log("Dolphins: ", avgDolphins1);
console.log("Koalas: ", avgKoalas1);
console.log("\n2)")
if (avgDolphins1 > avgKoalas1) {
    console.log("The Dolphins won the trophy!");
} else if (avgDolphins1 === avgKoalas1) {
    console.log("There has been a draw")
} else {
    console.log("The Koalas won the trophy!");
}

// Bonus 1
console.log("\nBonus 1");
const avgDolphins2 = (97 + 112 + 101) / 3;
const avgKoalas2 = (109 + 95 + 123) / 3;
console.log("Dolphins: ", avgDolphins2);
console.log("Koalas: ", avgKoalas2);

if ((avgDolphins2 > avgKoalas2) && (avgDolphins2 >= 100)) {
    console.log("The Dolphins won the trophy!");
} else if (avgDolphins2 === avgKoalas2) {
    console.log("There has been a draw")
} else if ((avgDolphins2 < avgKoalas2) && (avgKoalas2 >= 100)) {
    console.log("The Koalas won the trophy!");
} else {
    console.log("No one won")
}


// Bonus 2
console.log("\nBonus 2");
const avgDolphins3 = (97 + 112 + 101) / 3;
const avgKoalas3 = (109 + 95 + 106) / 3;
console.log("Dolphins: ", avgDolphins3);
console.log("Koalas: ", avgKoalas3);

if ((avgDolphins3 > avgKoalas3) && (avgDolphins3 >= 100)) {
    console.log("The Dolphins won the trophy!");
} else if ((avgDolphins3 === avgKoalas3) && avgDolphins3 >= 100 && avgKoalas3 >= 100) {
    console.log("There has been a draw")
} else if ((avgDolphins3 < avgKoalas3) && (avgKoalas3 >= 100)) {
    console.log("The Koalas won the trophy!");
} else {
    console.log("No one won")
}


//                          Challenge #4
let tip = 0;
const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

bill1 >= 50 && bill1 <= 300 ? console.log(`The bill was ${bill1}, the tip was ${tip = bill1 * .15}, and the total value is ${bill1 + tip}`) : console.log(`The bill was ${bill1}, the tip was ${tip = bill1 * .2}, and the total value is ${bill1 + tip}`);

bill2 >= 50 && bill2 <= 300 ? console.log(`The bill was ${bill2}, the tip was ${tip = bill2 * .15}, and the total value is ${bill2 + tip}`) : console.log(`The bill was ${bill2}, the tip was ${tip = bill2 * .2}, and the total value is ${bill2 + tip}`);

bill3 >= 50 && bill3 <= 300 ? console.log(`The bill was ${bill3}, the tip was ${tip = bill3 * .15}, and the total value is ${bill3 + tip}`) : console.log(`The bill was ${bill3}, the tip was ${tip = bill3 * .2}, and the total value is ${bill3 + tip}`);