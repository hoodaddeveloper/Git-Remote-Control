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

friends[3] = "Hoodad"; // Hoodad
console.log(friends); // ["Kalagar", "Ali", "Sara", "Hoodad"]
console.log(friends.length); // 4
