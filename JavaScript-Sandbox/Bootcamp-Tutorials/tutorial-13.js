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