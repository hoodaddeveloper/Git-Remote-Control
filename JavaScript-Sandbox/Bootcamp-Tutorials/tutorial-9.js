///// ES6 Modern JavaScript /////

// Compare Scopes of the var and let Keywords

function checkScope() {
  let i = "function scope"; // var i
  if (true) {
    let i = "block scope"; // var i
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

// Write Arrow Functions with Parameters 1.1:

const doubler = (item) => item * 2; // ES6 Arrow Function
console.log(doubler(4)); // 8

// Write Arrow Functions with Parameters 1.2:

function doubler2(i1, i2) {
  // ES5 Function
  return i1 * i2;
}

console.log(doubler2(3, 4)); // 12

// Write Arrow Functions with Parameters 2:

const multiplier = (item2, multi) => item2 * multi; // ES6 Arrow Function
console.log(multiplier(5, 2)); // 10

// Write Arrow Functions with Parameters 3.1:

var myConcat = function (arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

// Write Arrow Functions with Parameters 3.2:

const myConcat2 = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat2([1, 2], [3, 4, 5]));

// Set Default Parameters for Your Functions

// 1:

const greeting = (name = "Anonymous") => "Hello " + name; // ES6 Default Parameter

console.log(greeting("John")); // Hello John
console.log(greeting()); // "Hello Anonymous"

// 2:

const increment = (number, value = 1) => number + value; 

console.log(increment(5, 2)); // 7
console.log(increment(5)); // 6

// Use the Rest Parameter with Function Parameters

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6

///// Blocks and Scope /////

const logSkyColor = () => {
  let color = 'lightblue'; 
  console.log(color); // blue 
}

logSkyColor();

//////////////////////////////////////////////////////////////////////////////////////////////

const city = 'New York City';

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return `The stars over the ${skyscraper} in ${city}`;
}

console.log(logCitySkyline());

///// Global Scope /////

const color = 'blue'; // global scope
 
//1:

const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue

// 2:

const returnSkyColor2 = () => {
  return color; // blue 
};

console.log(returnSkyColor2()); // blue