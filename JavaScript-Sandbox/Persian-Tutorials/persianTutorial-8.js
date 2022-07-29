///// filter() method /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThanFive = numbers.filter((value) => value > 5);
console.log(greaterThanFive);

/// /// /// /// /// ///

const names = [
  "Ali",
  "Hassan",
  "Hamed",
  "Reza",
  "Sara",
  "Akbar",
  "Hoodad",
  "Sue",
  "Clair",
  "Leon",
];
const longerThanFour = names.filter((value) => value.length > 4);
console.log(longerThanFour);

/// /// /// /// /// ///

const users = [
  { name: "Albert Wesker", age: 36 },
  { name: "Leon S. Kennedy", age: 27 },
  { name: "Jill Valentine", age: 33 },
  { name: "Chris Redfield", age: 35 },
  { name: "Hoodad Wesker", age: 27 },
];

const agePlus30 = users.filter((user) => user.age > 30); // filter the users with age greater than 30
const ageUnder30 = users.filter((user) => user.age < 30); // filter the users with age less than 30

console.log(agePlus30);
console.log(ageUnder30);

///// map() method /////

const arr = [10, 20, 30];

twice = arr.map((value) => value * 2); // multiply each value by 2

console.log(twice);

/// /// /// /// /// ///

const products = ["Apple", "Orange", "Banana", "Pear"];
const items = products.map((product) => `<li>${product}</li>`); // create a list of products with <li> tag
console.log(items);

const html = items.join(" "); // join the items into a string with space
console.log(html);

/// /// /// /// /// ///

const myFriends = ["Sue", "Amanda", "Victoria", "Bob", "Tom"];
const myFriendsOjbect = myFriends.map((friends) => ({ value: friends })); // create an object for each friend
console.log(myFriendsOjbect);

///// What is "this" /////

// method => A function that is attached to an object
// This => The object that the function is attached to

const video = {
  title: "The Lord of the Rings",
  play() {
    console.log(this);
  },
};

video.play();

/// /// /// /// /// ///

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("The Lord of the Rings");

///// Function declaration /////

function walk() {
  console.log("walk");
}

walk();

///// Function expression /////

const run = function () {
  console.log("run");
};

run();


/// /// /// /// /// ///

