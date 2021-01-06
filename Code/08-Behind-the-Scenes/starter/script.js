'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      output = 'NEW OUTPUT!'; // Re-assigning the value of a existing variable from the parent scope.
      const firstName = 'Steven'; // Creating a new variable with same name as outer scope's variable.
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3)); It does not run when using stict mode
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Bryan';
calcAge(1991);
