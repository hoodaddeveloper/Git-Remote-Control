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
console.log(person.work());

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


