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
  address: { // Object
    city: "Shiraz",
    street: "Koshan",
    houseNumber: "14",
  },
};
