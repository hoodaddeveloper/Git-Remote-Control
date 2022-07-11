///// ES6 Modern JavaScript /////

// Compare Scopes of the var and let Keywords

function checkScope() {
  let i = 'function scope'; // var i
  if (true) {
  let i = 'block scope'; // var i
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

// Write Arrow Functions with Parameters 1.1:

const doubler = (item) => item * 2; // ES6 Arrow Function
console.log(doubler(4)); // 8

// Write Arrow Functions with Parameters 1.2:

function doubler2(i1, i2) { // ES5 Function
return i1 * i2;
}

console.log(doubler2(3, 4)); // 12

// Write Arrow Functions with Parameters 2:

const multiplier = (item2, multi) => item2 * multi; // ES6 Arrow Function
console.log(multiplier(5, 2)); // 10

// Write Arrow Functions with Parameters 3.1:

var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));