//                  Challenge #1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Data 1
const dolphinsAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);

// Data 2
const dolphinsAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

function checkWinner(dolphinAvg, koalasAvg) {
    if (dolphinAvg >= (koalasAvg * 2)) {
        console.log(`Dolphins win! (${dolphinAvg} vs ${koalasAvg})`);
    } else if (koalasAvg >= (dolphinAvg * 2)) {
        console.log(`Koalas win! (${koalasAvg} vs ${dolphinAvg})`);
    } else {
        console.log(`No team win (${koalasAvg} vs ${dolphinAvg})😒`);
    }
}

console.log("Data 1");
console.log(`Dolphins: ${dolphinsAvg1}`);
console.log(`Koalas: ${koalasAvg1}`);
checkWinner(dolphinsAvg1, koalasAvg1);
console.log("\nData 2");
console.log(`Dolphins: ${dolphinsAvg2}`);
console.log(`Koalas: ${koalasAvg2}`);
checkWinner(dolphinsAvg2, koalasAvg2);


//                  Challenge #2
const bills = [125, 555, 44];

function calcTip(bill) {
    if ((bill >= 50) && (bill <= 300)) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];
console.log(tips);

const total = [
    bills[0] + tips[0],
    bills[1] + tips[1],
    bills[2] + tips[2]
]
console.log(total);


//                  Challenge #3

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    }
}

console.log("Mark BMI:", mark.calcBMI());
console.log("John BMI:", john.calcBMI());

console.log(mark.BMI > john.BMI ? `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})` : `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);


//                  Challenge #4

function calcTips(bill) {
    if ((bill >= 50) && (bill <= 300)) {
        return bill * .15;
    } else {
        return bill * .20;
    }
}

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips2 = [];
let totals2 = [];

for (let i = 0; i < bills2.length; i++) {
    temporalTip = calcTips(bills2[i]);
    tips2.push(temporalTip);
    totals2.push(temporalTip + bills2[i]);
}
console.log("The tips");
console.log(tips2);
console.log("The total");
console.log(totals2);

// Bonus.

function calcAverageTotal(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
    return sum / arr.length;
}

avg = calcAverageTotal(totals2);
console.log(avg);