///// Introduction to Iterators ////////////////////////////////////////////////////////////

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(item => console.log("I want to eat a " + item));
// or
fruits.forEach(function(item) {
  console.log(`I want to eat a ${item}`);
});

///// The .map() Method ////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => number * 100 + 10 - 5);

console.log(numbers);
console.log(bigNumbers);

/// /// ///

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(word => word[0]);

/// /// ///

console.log(secretMessage.join(''));

const bigNumbers2 = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers2.map(number2 => number2 / 100);

console.log(smallNumbers);

///// The .filter() Method //////////////////////////////////////////////////////////////////

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length <= 4; // returns true if word is less than or equal to 4 characters
});

console.log(words);
console.log(shortWords);

/// /// ///

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNums1 = randomNumbers.filter(less => less < 250); // returns numbers less than 250
const smallNums2 = randomNumbers.filter(more => more > 250); // returns numbers less than 250

console.log(smallNums1);
console.log(smallNums2);

/// /// ///

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(more => more.length > 7); // returns words longer than 7 characters

console.log(favoriteWords);
console.log(longFavoriteWords);

///// The .findIndex() Method /////////////////////////////////////////////////////////////////

