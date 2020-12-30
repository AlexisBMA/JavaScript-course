console.log('This is the challenge file!');

const printForecast = function (arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `... ${arr[i]}°C in ${i + 1} days`;
  }
  return forecast;
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const test1 = printForecast(data1);
console.log(test1);
const test2 = printForecast(data2);
console.log(test2);
