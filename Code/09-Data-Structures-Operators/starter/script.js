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


//                Maps fundamentals
// Is a data structure to map values to keys. In the maps, the keys can be of any type.

const rest = new Map(); // Creating an empty map

// Adding elements to sets. It returns a new set.
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

// Chain the set method.
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open 😁')
  .set(false, 'We are closed 😪')
  .set(false, 'We are closed 😪');

// Get an element from a map
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

// Since we can have boolean keys
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// Methods available on maps

// Check if a map has a certain element
console.log(rest.has('categories'));
console.log(rest.has('pizza'));

// Delete elements from a map
rest.delete(2);
console.log(rest);

// Size of a map
console.log(rest.size);

// Remove all the elements from the map
rest.clear();
console.log(rest);

// Arrays or objects as keys in maps
const arr = [1, 2];
rest.set(arr, 'goodTest');

// Retrieve an element when using an array
console.log(rest.get(arr));

// Object as a key in a map.
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);


//                  Maps iterations

// Another way to create a map
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 😋'],
  [false, 'Try again... 😪'],
]);
console.log(question);

// Convert object to map.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Iteration in maps.
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert a map to an array
console.log([...question]);
// console.log(question.entries);
console.log(...question.keys());
console.log(...question.values());

//                Working with Strings Part 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Indexing a string
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log('B737'[0]);

// Length of a string
console.log(airline.length);
console.log('B737'.length);

// Methods in strings

// First occurrence of a certain character
console.log(airline.indexOf('r'));
// Last occurrence of a certain character
console.log(airline.lastIndexOf('r'));
// Ocurrance of a certain word. Is case sensitive.
console.log(airline.indexOf('Portugal'));

// Slice method. Pass as parameter the beggining pos. It return a new string.

console.log(airline.slice(4));
// slice(beggining, ending)
console.log(airline.slice(4, 7)); // 7 - 4 = 3

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2)); // Last two characters
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const row = seat.slice(-1);
  if (row === 'B' || row === 'E') {
    console.log(`You got the middle seat 🤐`);
  } else {
    console.log(`You got lucky 🍀!`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


//                          Working with strings - part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name

const passenger = 'jOnAs'; // should look Jonas

const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const correctFormat = function (name) {
  const nameLower = name.toLowerCase();
  const nameCorrect = nameLower[0].toUpperCase() + nameLower.slice(1);
  return nameCorrect;
};

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// trim() removes the white spaces from a string
// We can chain methods.
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

// replace only replace the first ocurrance
console.log(announcement.replace('door', 'gate'));

// replaceAll replaces all the ocurrences
console.log(announcement.replaceAll('door', 'gate'));

// Using regular expressions to replace all the ocurrences
console.log(announcement.replace(/door/g, 'gate'));

// Booleans, includes()
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

// Starts with
console.log(plane.startsWith('Air'));
console.log(plane.startsWith('A3'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the new Airbus family');

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun'))
    console.log('You are not allowed on board!');
  else console.log('Welcome aboard!');
};
console.log('\n');
checkBaggage('I have a laptod, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//            Working with string part 3

// Split method. Divides a string by an specific separator.
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// Join method. Adds a specific separator between variables.
const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const splitedName = name.split(' ');
  const namesUpper = [];
  for (const n of splitedName) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    // Another way using replace
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('bryan monroy');

// Padding a string (to add a number of characters to the stirng until the string has a certaing decired lenght)
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));

// Real life example
const maskCreditCard = function (number) {
  // const str = String(number);
  // or
  const str = number + '';
  const lastNumbers = str.slice(-4);
  return lastNumbers.padStart(str.length, '*');
};

console.log(maskCreditCard(1234567891012131));
console.log(maskCreditCard('1234567891011234'));

// Repeat method. Allows us to repeat the same sting multiple times.

const message2 = 'Bad waether... All departures Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
