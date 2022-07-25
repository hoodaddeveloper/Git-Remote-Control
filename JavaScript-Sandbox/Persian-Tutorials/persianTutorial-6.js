///// Break & Continue ///////////////////////////////////////////////

let i = 0;

while (i <= 10) {
  // i = 0, i = 1, i = 2, ..., i = 10
  if (i == 5) {
    // i = 5
    break; // break from the loop
  }
  console.log(i);
  i++;
}

/// /// ///

while (i <= 20) {
  if (i == 10) {
    i++;
    continue; // continue to the next iteration of the loop
  }
  console.log(i);
  i++;
}

///// Objects /////////////////////////////////////////////////////////

// obj = {key1: value1, property2: value2};

let myFriend = {
  name: "Akbar", // String
  age: 30, // Number
  isMarried: false, // Boolean
  hobbies: ["Sports", "Cooking"], // Array
  address: {
    // Object
    city: "Shiraz",
    street: "Koshan",
    houseNumber: "14",
  },
  game: function () {
    // Function
    console.log("I love Games");
  },
};

myFriend.game();

///// Factory Fuctions /////////////////////////////////////////////////////////

function createHoodad() {
  return {
    name: "Hoodad",
    age: 27,
    isMarried: true,
    hobbies: "Game",
    address: "Shiraz",
  };
}

let object = createHoodad();
console.log(object);

///// Constructor Functions /////////////////////////////////////////////////////

function Circle(radius) {
  this.radius = radius;
  this.object = function () {
    console.log("I am a circle");
  };
}

const circle = new Circle(3);

console.log(circle);

/////////////////////////////////////////////////////////////////////////////////
console.log("//////////////////////////////");
/////////////////////////////////////////////////////////////////////////////////

const circle2 = {
  radius2: 1,
};

delete circle2.radius2;
delete circle2.draw2;

circle2.color = "red";
circle.draw2 = function () {};

console.log(circle2);
