// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
// TODO FIXME BUG
const x = '23';

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
console.log('This is a test');

// PROBLEM 1:

const temperatures = [3, -2, -6, -1, 'errpr', 9, 13, 17, 15, 14, 9, 5];

//            1) Understanding the problem

// What is temp amplitude? difference between highest and lowest temp
// How to compute the max and min temperatures?
// What's a sensor error? And what to do?

//            2) Breaking up into sub-problems

// How to ignore the errors?
// Find max value in temp array
// Fin min value in temp array
// Substract min from max (apmlitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp != 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive two arrays of temperatures.

//            1) Understanding the problem

// With 2 arrays, should we implement functionality twice? No, we just need to merge the arrays

//            2) Breaking up into sub-problems

// Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp != 'number') continue;
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // value: Number(prompt('Degrees celsius: ')),
    value: 10,
  };
  console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp != 'number') continue;
    // We can use debugger; to call it on the browser
    if (currTemp > max) max = currTemp;
    if (currTemp < min) min = currTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeNBug);
