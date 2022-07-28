///// filter() method /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanFive = numbers.filter((value) => value > 5);
console.log(greaterThanFive);

/// /// /// /// /// ///

const names = [
  "Ali",
  "Hassan",
  "Hamed",
  "Reza",
  "Sara",
  "Akbar",
  "Hoodad",
  "Sue",
  "Clair",
  "Leon",
];
const longerThanFour = names.filter((value) => value.length > 4);
console.log(longerThanFour);

/// /// /// /// /// ///

const users = [
  { name: "Albert Wesker", age: 36 },
  { name: "Leon S. Kennedy", age: 27 },
  { name: "Jill Valentine", age: 33 },
  { name: "Chris Redfield", age: 35 },
  { name: "Hoodad Wesker", age: 27 },
];

const agePlus30 = users.filter(user => user.age > 30); // filter the users with age greater than 30
const ageUnder30 = users.filter(user => user.age < 30); // filter the users with age less than 30

console.log(agePlus30);
console.log(ageUnder30);

///// map() method /////