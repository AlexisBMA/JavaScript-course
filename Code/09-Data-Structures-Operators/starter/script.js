'use strict';

// Compute enhanced
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 Enhanced object literals
  openingHours,

  // Functions in ES6 Enhanced object literals
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Destructuring an object
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // Rest
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
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

//                  The for-of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// We use entries() to get the index of each item.
for (const [i, el] of menu.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`);
  console.log(`${i + 1}: ${el}`); // Using destructuring
}
// console.log(...menu.entries());



//                Enhanced object literals

// All changes done to the original object
console.log(restaurant);


//                      Optional chaining(?.)

// Without optional chaining
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// With optional chaining we use '?.'
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On day ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exits');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exits');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array empty');
console.log(users[3]?.name ?? 'User array empty');


//      Looping objects: object keys,Values and entries

// Property NAMES (Object.keys(object))
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values (Object.values(object))
const values = Object.values(openingHours);
console.log(values);

// Property Entries (Object.entries(object))
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
*/

//                    Sets
// Is basically a collection of unique values. They are also iterable.
// In sets there are actually no indexes. In fact there is no way of getting values of a set.

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissotto',
  'Pasta',
  'Pizza',
]);

// It doesn't log the duplicated values, because all the duplicates are all gone.
console.log(ordersSet);

// We can pass any iterable to a set.
console.log(new Set('Jonas'));

// It also could be empty
console.log(new Set());

// Get the size of a Set
console.log(ordersSet.size);

// Check if a certaing element is in a set
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Add new elements to a set
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread'); // It only adds it one time
console.log(ordersSet);

// Deleting elements
ordersSet.delete('Rissotto');
console.log(ordersSet);

// Looping over a set
for (const order of ordersSet) {
  console.log(order);
}

// Delete all of th elements of a set
console.log('\n');
ordersSet.clear();
console.log(ordersSet);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// We can use the sets to instantly know how many unique elements are in a certain iterable.
console.log(new Set(staff).size);
console.log(new Set('jonasschmedtmann').size);
