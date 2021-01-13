'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring an object
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // Rest
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
/*

// Destructuring objects. We use '{}' to destructure.

// We need to write the exact property names to extract variables from an object.
console.log('\n');
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Different variable names
console.log('\n');
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values. Useful when we dont have data hard-coded.
console.log('\n');
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
console.log('\n');
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
console.log('\n');
const {
  fri: { open: fridayOpen, close: fridayClose },
} = openingHours;
console.log(fridayOpen, fridayClose);

// Calling a function with an object to destructure it
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

console.log('\n');
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// Destructuring arrays. We use '[]' to destructure.

const arrayEx = [2, 3, 4];
const a = arrayEx[0];
const b = arrayEx[1];
const c = arrayEx[2];

// Destructuring an array. When JS see the brackets in the left side, it knows it should do destructuring
const [x, y, z] = arrayEx;
console.log(a, b, c);
console.log(x, y, z);
console.log(arrayEx); // Destrunturing doesn't affect the original array.

// If we want to skip an element we only need to leave a space.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
const temp = main;
main = secondary;
secondary = temp;
console.log('\nSwitching');
console.log(main, secondary);

// Switching variables with destructuring
[main, secondary] = [secondary, main];
console.log('\nSwitching with destructuring');
console.log(main, secondary);

console.log('\nTaking order');
const [starterOrder, mainOrder] = restaurant.order(2, 0);
console.log(starterOrder, mainOrder);

// Destructuring nested array elements
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log('\n', i, j, k);

// Set default values when destructuring. Useful when we dont know the lenght of an array or object.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log('\n', p, q, r); // r takes the default value


// The spread operator
// Spread operator: takes all the elements from an array and it also doesn't create a new variable.
// It works on all so-called iterables.
// We can only use the spread operator when building an array or when we pass values into a function.

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// Using spread operator ('...'). It takes all the elements from an array and then it write them individually
const newArr = [1, 2, ...arr];
console.log(newArr);

// Example of printing the individual elements of an array
console.log(...newArr);

// Creating a new array from an existing one taking all the elements inside with the spread operator
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Two important uses of the spread operator

// Create a shallow copy of an array
const mainMenuCopy = [...restaurant.mainMenu];

// Join two or more arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT Objects.
const str = 'Jonas';
const letter = [...str, ' ', 'S,'];
console.log(letter);
console.log(...str); // Expangind a string

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1: "),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3'),
// ];
// restaurant.orderPasta(...ingredients);

// The spread operator works in objects since ES6

const newRestaurant = {
  foundingYear: 1998,
  ...restaurant,
  founder: 'Guiseppe',
};
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
console.log(restaurantCopy);
restaurantCopy.name = 'Ristorante di Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);

//               Rest pattern and parameters

// The rest pattern collect multiple items and collect them into an array. Its main function its to pack elements.

// Destructuring
// Spread, because on the right side of '='
const arr = [1, 2, ...[3, 4]];

// Rest in arrays
// Rest, because on the left side of '='
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Rest in objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

// Functions
// Packing arguments.
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

// Rest parameters in our restaurant example. With Rest, we can pass from 1 to N parameters into a function.
restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//          Short circuiting

// Properties about logical operators
// Use any data type
// Return any data type
// Do short-circuting

// OR short-circuting. If the first value is a truthy value it will immediatly be returned
console.log('-----OR-----');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
// In this case 'Hello' is the first truthy value so it will be the one logged. Because in the OR opeartor if one of the elements is true then the result of the expression is true.
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Without short-circuting.
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// With short-circuting
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND short-circuting. When a falsy value is found it is returned immediatly.
console.log('-----AND-----');
console.log(0 && 'Jonas');
// If all the elements are truthy then the last one will be the one returned
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical example without AND short-circuting
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// Practical example with AND whort-circuting
restaurant.orderPizza &&
  restaurant.orderPizza('mushrooms', 'spinach', 'tomato');


//      The nullish coalescing operator
// It works the same way as the OR operator but it compare with nullish values insted of falsy values.
// Nullish values: null and undefined.

// OR
restaurant.numGuest = 0;
const guests = restaurant.numGuest || 10;
console.log(guests);

// Nullish coalescing operator
const guestsCorrect = restaurant.numGuest ?? 10;
console.log(guestsCorrect);
*/

//                  The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// We use entries() to get the index of each item.
for (const item of menu.entries()) {
  console.log(item);
}

console.log(...menu.entries());
