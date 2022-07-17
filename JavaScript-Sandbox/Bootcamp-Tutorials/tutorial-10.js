///// Arrays /////

const hobbies = ["Ali", "Hoodad", "Akbar"];
console.log(hobbies);

///// Accessing Elements /////

const famousSayings = [
  'Fortune favors the brave.',
  'A joke is a very serious thing.',
  'Where there is love there is life.'
];

const listItem = famousSayings[0]; // 'Fortune favors the brave.'
console.log(listItem);

console.log(famousSayings[0]); // 'Fortune favors the brave.'
console.log(famousSayings[2]); // 'Where there is love there is life.'
console.log(famousSayings[2]); // undefined

///// Update Elements /////

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'; // replaces 'tomatoes' with 'avocados'
console.log(groceryList); // ['bread', 'avocados', 'milk']

///// Arrays with let and const /////

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments); // ['Mayo', 'Mustard', 'Soy Sauce', 'Sriracha']

condiments = ['Mayo']; // reassigns the array to a new array
console.log(condiments);  // ['Mayo']

utensils[3] = 'Spoon'; // reassigns the array to a new array
console.log(utensils[3]); // 'Spoon'

///// The .length property /////

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length); // 3

///// The .push() Method /////