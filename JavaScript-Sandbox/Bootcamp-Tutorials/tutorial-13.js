///// Introduction to Iterators ////////////////////////////////////////////////////////////

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(item => console.log("I want to eat a " + item));
// or
fruits.forEach(function(item) {
  console.log(`I want to eat a ${item}`);
});

///// The .map() Method ////////////////////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 100 + 10 - 2;
});

console.log(numbers);
console.log(bigNumbers);

/// /// ///

