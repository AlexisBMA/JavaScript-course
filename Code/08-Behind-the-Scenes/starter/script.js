'use strict';
/*
// Scoping in practice

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

// Hoisting and TDZ in practice

// Hoisting variables
// console.log(me); // undefined
// console.log(job); // cannot access before initialization
// console.log(year); // cannot access before initialization

var me = 'Alexis';
let job = 'teacher';
const year = 1991;

// Hoisting functions

//console.log(addDecl(2, 3)); // We are able to call a function declaration before its declared in the code

// console.log(addExpr(2, 3)); // Cannot access expression before initialization

// console.log(addArrow(2, 3)); // Cannot access expression before initialization
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCart(); // Because of hosting numProducts is undefined.
var numProducts = 10; // This is a bad practice, we should declare the variables using const or let. Also variables should be declared at the beginning of the code

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1; // var create a property on the global window object.
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// This keyword
console.log(this); // this = window object

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // this = is undefined inside a function because we are using stict mdoe.
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // this = window becuase the arrow function does not get its own 'this' keyword. It uses the this keyword of its parent.
};
calcAgeArrow(1991);

const alexis = {
  year: 1999,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
alexis.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = alexis.calcAge; // Copiyng calcAge to matilda from alexis. This is called method borrowing.

matilda.calcAge(); // In ths case the this keyword refers to the year variable of matilda.

const f = alexis.calcAge;
console.log(f);
f(); // Undefined



// Regular functions vs arrow functions

// var firstName = 'Matilda'; // Creating a property in the window object.

const alexis = {
  // This is not a code block,it is an object literal.
  firstName: 'Bryan',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1 with an extra variable.
    // const self = this; // If we dont define self then using this inside the following function will be set to undefined and it wont have access to the alexis obj
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2 with no extra variable. Using an arrow function because it uses the this keyword of its parent scope.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  // This refers to the global scope.
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
alexis.greet();
alexis.calcAge();

// Arguments keyword.

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(1, 2, 3, 4, 5, 6);

var addArrow = (a, b) => {
  console.log(arguments); // Arrow functions doesnt have its own arguments keyword.
  a + b;
};
addArrow(2, 5, 8);


// Primitives vs Objects (Primitives vs Reference types)
// Primitives are  sotred in the call stack. Objects are stored in the heap.

// Primitive variables point to a specific address of memory
let age = 30;
let oldAge = age;
age = 31;

console.log(age, oldAge);

// References values point to the same address of memory.

const me = {
  name: 'Alexis',
  age: 30,
};

const friend = me; // This is creating a pointer to the me object
friend.age = 27; // This is changing the value in the heap so the stack address will remaing the same.
console.log(me, friend);
*/

// Primitive vs Objects in practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// Point the reference that is pointing to the jessica object
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {}; // We cannot change the address value of the stack because its constant.

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// New object with a copy of jessica2 in jessicaCopy. It only creates a shallow copy.
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2, jessicaCopy);
