///// Function Expressions /////

const plantNeedsWater = function (day) {
  if (day === "Wednesday") {
    return true;
  } else {
    return false;
  }
};

plantNeedsWater();
console.log(plantNeedsWater("Wednesday")); // "true"

///// ES6 Arrow Functions /////

const newFunction = () => {
  return "Hello ES6 World";
};

console.log(newFunction()); // "Hello ES6 World"

// Concise Body Arrow Functions

const arrowFunction1 = () => {}; // Zero Parameter
const arrowFunction2 = (parameter) => {}; // One Parameter
const arrowFunction3 = (parameter1, parameter2, parameter3) => {}; // Two or more Parameters
const arrowFunction4 = (number) => number + number; // Single line function does not need curly braces

// Example:
const arrowFunction5 = (day) => (day === "Wednesday" ? true : false);

console.log(arrowFunction5("Wednesday")); // "true"
console.log(arrowFunction5("sunday")); // "false"

///// Profile Lookup /////

const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },

  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },

  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },

  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such Property";
    }
  }
  return "No such Contact";
}

let data = lookUpProfile("Kristian", "likes");

console.log(data);

///// Use Recursion to Create a Countdown /////

