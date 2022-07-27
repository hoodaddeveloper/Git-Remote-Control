///// Make Code More Reusable with the this Keyword /////

let myDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  sayName: function () {
    console.log(`My name is ${myDog.name}`);
  },
};

myDog.sayName();

/// /// /// /// /// /// /// /// /// /// ///

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

console.log(dog.sayLegs());

///// Define a Constructor Function /////

const constructor = (Bird = () => {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
});

let blueBird = new Bird(); //// Creates a new instance of the Bird constructor function

/// /// /// /// /// ///

function Dog() {
  this.name = "Woofoo";
  this.color = "white";
  this.numLegs = 2;
}

///// Use a Constructor to Create an Objects /////

