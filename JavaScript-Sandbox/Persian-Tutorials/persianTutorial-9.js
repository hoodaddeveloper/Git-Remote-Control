///// Kalagar Tutorials /////

// Objects

const person = {
  name: "Hossein",
  surname: "Kalagar",
  age: 20,
  hobbies: ["Sports", "Cooking"],
  work() {
    console.log("I am working...");
  },
};

let getName = person.name;
let getSurename = person["surname"];
let getAge = person.age;
let getHobbies = person["hobbies"];

console.log(getName);
console.log(getSurename);
console.log(getAge);
console.log(getHobbies);
person.work();

// Arrays

let friends = ["Hossein", "Ali", "Sara"];

console.log(friends[0]); // Hossein
console.log(friends.length); // 3

friends[0] = "Kalagar"; // Kalagar
console.log(friends); // ["Kalagar", "Ali", "Sara"]

friends[3] = 313; // 313
console.log(friends); // ["Kalagar", "Ali", "Sara", 313]
console.log(friends.length); // 4

// Fuctions

function car1(name, model) {
  console.log(`This is my ${name} ${model}.`);
}

function math(number) {
  return number * number - number + number;
}

let answer = math(10);
console.log(answer);
//or
console.log(math(10));

// Arrow Fuction

car1("BMW", "X7");

let car2 = (name, model) => console.log(`This is my other ${name} ${model}.`);
car2("Mercedes", "E-Class");

// Operators

let y = 10;
let z = 20;

console.log(++y); // 11
console.log(y++); // 11
console.log(y); // 12

console.log(y < z); // true
console.log(y == z); // false
console.log(y > z); // false

// Ternary Operator & Logical Operator

let myAge = 27;
let myMoney = 80;
let myPoints = 900;
let inBlackList = false;

let access =
  myAge >= 18 && (myMoney >= 80 || myPoints >= 1000) && inBlackList != true
    ? "You have access"
    : "You do not have access";

console.log(access);

// Switch...Case

let power = 1000;

switch (power) {
  case 10:
    console.log("Bronze");
    break;
  case 100:
    console.log("Silver");
    break;
  case 1000:
    console.log("Gold");
    break;
  default:
    console.log("Nothing");
    break;
}

// For Loop

for (let index = 12; index <= 24; index++) {
  console.log("===> " + index);
}

// for ...in

let students = ["Hossein", "Ali", "Sara", "Saman", "Sara"];

for (const key in students) {
  console.log("The person " + students[key] + " is your friend.");
}

// Objects Basics

let myPet = {
  name: "Bella",
  age: 2,
  color: "White",
  breed: "British shorthair",
  isHappy() {
    console.log("I am happy.");
  },
};

myPet.isHappy();

// Create Object

let anotherPet = new Object(); // Create Object
console.log(anotherPet); // {} __proto__: Object

let theObj = Object.create(null); // Create Object
console.log(theObj); // {} (empty object)
