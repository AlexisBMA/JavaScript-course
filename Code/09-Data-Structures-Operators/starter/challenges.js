const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
//                      Challenge #1

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5
// const [team1, draw, team2] = [game.odds];
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7
team1 < team2 && console.log(`Team one is most likely to win`);
team1 > team2 && console.log(`Team two is most likely to win`);


//                    Challenge #2

// 1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2
const globalOdds = Object.entries(game.odds);
let oddsAvg = 0;

for (const [el, val] of globalOdds) {
  oddsAvg += val;
}
// console.log(oddsAvg);
console.log('The average is: ', oddsAvg / globalOdds.length);

// 3
for (const [el, val] of globalOdds) {
  const status = el === 'x' ? 'draw' : `victory ${game[el]}`;
  console.log(`Odd of ${status} : ${val}`);
}

// Bonus
const scorers = {};
for (const player of Object.values(game.scored)) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);


//                      Challenge #3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1
// First we create a set containing the unique events, then we unpack the set to store it into an array
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2
gameEvents.delete(64);
console.log(gameEvents);

// 3
const time = [...gameEvents.keys()].pop();

console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// 4
for (const [minute, event] of gameEvents) {
  const part = minute <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${part} HALF] ${minute}: ${event}`);
}
*/

//                Coding challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const button = document.querySelector('button');

const reformatText = function () {
  // Reading the elements and splitting them into an array
  const list = document.querySelector('textarea').value;
  const elements = list.split('\n');

  // Reformating the elements
  for (const [i, pair] of elements.entries()) {
    pair;
    words = pair.toLowerCase().trim().split('_');
    console.log(
      (
        words[0] + words[1].replace(words[1][0], words[1][0].toUpperCase())
      ).padEnd(20, ' ') + '✅'.repeat(i + 1)
    );
  }
};

button.addEventListener('click', reformatText);
