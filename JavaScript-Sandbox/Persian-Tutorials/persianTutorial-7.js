///// Date Object /////

const now = new Date(); // create a new date object for the current date and time
const date1 = new Date("Feb 11, 2008, 08:00"); // create a new date object for a specific date
const date2 = new Date(2008, 1, 11, 8, 0); // create a new date object for a specific date and time

console.log(now); // print the current date and time
console.log(date1); // print the date and time for Feb 11, 2008
console.log(date2); // print the date and time for Feb 11, 2008 at 8:00

///// Find Element in an Array /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create an array of numbers

function findNumber(x) {
  if (numbers.includes(x)) {
    console.log(`The array contains the number ${x}.`);
  } else {
    console.log(`The array does not contain the number ${x}.`);
  }
}

findNumber(33);

/// /// /// /// /// /// /// /// /// ///

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // create an array of numbers
nums.forEach(num => console.log(num * 10)); // print each number in the array multiplied by 10