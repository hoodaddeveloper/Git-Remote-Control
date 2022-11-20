myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError

const myRandomNumber = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError

function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;

  if (sum > total) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log("isSumBigger(1, 3, 2) returns: " + isSumBigger(1, 3, 2));

// Should return false
console.log("isSumBigger(1, 3, 5) returns: " + isSumBigger(1, 3, 5));

function capitalizeASingleWord(word) {
  // console.log(word);
  if (word.match(" ")) {
    console.log("Word value inside of if statement: " + word);
    return null;
  }

  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);

  firstLetter = firstLetter.toUpperCase();

  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log(
  "capitalizeASingleWord('hey') returns: " + capitalizeASingleWord("hey")
);

// Should return null
console.log(
  "capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord("hey ho")
);
