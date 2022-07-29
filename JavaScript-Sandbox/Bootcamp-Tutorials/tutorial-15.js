///// The .reduce() Method /////

const numbers = [1, 2, 4, 10];

const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator * currentValue; // multiply each value in the array
});

console.log(summedNums); // 80

/// /// /// /// /// ///

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  // reduce the array to a single value
  console.log("The value of accumulator: ", accumulator); // the value of accumulator is the value of the previous iteration
  console.log("The value of currentValue: ", currentValue); // the value of currentValue is the value of the current iteration
  return accumulator + currentValue; // add each value to the accumulator
}, 10); // second argument is the initial value of the accumulator

console.log(newSum); // 24

///// Iterator Documentation /////

const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  words.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = words.filter((word) => {
  return word.length > 5;
});

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);
