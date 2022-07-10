///// More of functions and variables /////

function myFunction(name, age) {
  console.log(`Hello ${name}, you are ${age} years old.`);
}

console.log(myFunction('John', 30)); // "Hello John, you are 30 years old."

//////////////////////////////////////////////////////////////////////////////////////////////

function myFunction2(name2, age2) {
  let message = `Hello ${name2}, you are ${age2} years old.`;
  return message;
}

let message = myFunction2('Ali', 20);
console.log(message); // "Hello Ali, you are 20 years old."

//////////////////////////////////////////////////////////////////////////////////////////////

let number1 = 8;
let number2 = 20;

console.log(number1++);
console.log(number1);

//////////////////////////////////////////////////////////////////////////////////////////////

function myFunction3(num3, num4) {
  var num3 = 2;
  var num4 = 4;
  console.log(num3 === num4);
}

myFunction3();