/// Classes ///

let myPolygon1 = class polygon1 {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};

// Or:

class polygon2 {
  // this is a block scope
  constructor(width, height) {
    // this is a constructor
    this.width = width;
    this.height = height;
  }
  answer() {
    console.log(`Polygon's width is: ${this.width}.`); // this is a method
    console.log(`Polygon's height is: ${this.height}.`); // this is a method
  }
}

let myPolygon2 = new polygon2(20, 40); // this is an instance of the class
myPolygon2.answer();

console.log(myPolygon2 instanceof polygon2); // this is a instanceof operator

/// /// /// /// ///

class shape {
  constructor(num) {
    this.area = num;
  }
}

class rectangle extends shape {
  ShowDetails() {
    console.log(`The area of the rectangle is: ${this.area}.`);
  }
}

let rect = new rectangle(35);
rect.ShowDetails();

/// Objects ///

const obj = {
  name: "Hoodad",
  age: 30,
  isMarried: false,
  "likes cats": false,
  isHungry() {
    console.log(obj.name + " is hungry.");
  },
};

obj.isHungry();

// Or:

const person = new Object();

person.name = "reza";
person.age = 43;
person.isMarried = false;
person.site = function () {
  return "umbrella.com";
};

console.log(person);

// Or:

function friend() {
  this.name = "Ali";
  this.age = 30;
  this.email = "google.com";
}

let friend_obj = new friend();
friend_obj.car = "Ford";
// delete friend_obj.car;

console.log(friend_obj.name);
console.log(friend_obj.age);
console.log(friend_obj.email);
console.log(friend_obj.car);

/// Arrays in ES6 ///

