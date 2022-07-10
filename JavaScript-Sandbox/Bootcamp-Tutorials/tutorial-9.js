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

// Mutate an Array Declared with const

