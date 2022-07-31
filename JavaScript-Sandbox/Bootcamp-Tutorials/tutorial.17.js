///// Continue last lesson /////

let spaceship = {
  homePlanet: "Earth",
  color: "red",
};
let tryReassignment = (obj) => {
  obj = {
    identified: false,
    "transport type": "flying",
  };
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'}
};
tryReassignment(spaceship); // The attempt at reassignment does not work.
spaceship; // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified: false,
  "transport type": "flying",
}; // Regular reassignment still works.

/// /// /// /// /// ///

let spaceship1 = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship1);
remotelyDisable(spaceship1);
console.log(spaceship1);

///// Looping Through Objects with for...in /////

let spaceship2 = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewMember in spaceship2.crew) {
  console.log(`${crewMember}: ${spaceship2.crew[crewMember].name}`)
};

for (let crewMember in spaceship2.crew) {
  console.log(`${spaceship2.crew[crewMember].name}: ${spaceship2.crew[crewMember].degree}`)
};

///// Advanced Objects Introduction /////

// How to use the "this" keyword.
// Conveying privacy in JavaScript methods.
// Defining "getters" and "setters" in objects.
// Creating factory functions.
// Using destructuring techniques.