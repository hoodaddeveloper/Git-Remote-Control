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
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

console.log(dog.sayLegs());