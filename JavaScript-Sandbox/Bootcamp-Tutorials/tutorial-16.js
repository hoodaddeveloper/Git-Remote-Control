///// Accessing Properties /////

let spaceship = {
  homePlanet: "Earth",
  color: "silver",
};

console.log(spaceship.homePlanet); // 'Earth'
console.log(spaceship.color); // silver

/// /// /// /// /// ///

let spaceShip = {
  homePlanet: "Earth",
  color: "silver",
  "Fuel Type": "Turbo Fuel",
  numCrew: 5,
  flightPath: ["Venus", "Mars", "Saturn"],
};

let crewCount = spaceShip.numCrew;
let planetArray = spaceShip.flightPath;

console.log(crewCount); // 5
console.log(planetArray); // ['Venus', 'Mars', 'Saturn']

///// Bracket Notation /////

let Spaceship = {
  "Fuel Type": "Turbo Fuel",
  "Active Duty": true,
  homePlanet: "Earth",
  numCrew: 5,
};

console.log(Spaceship["Active Duty"]); // true
console.log(Spaceship["Fuel Type"]); // 'Turbo Fuel'
console.log(Spaceship["numCrew"]); // 5
console.log(Spaceship["homePlanet"]); // 'Earth'
console.log(Spaceship["!!!!!!!!!!!"]); // undefined

/// /// /// /// /// ///

let spaceSHIP = {
  "Fuel Type": "Turbo Fuel",
  "Active Mission": true,
  homePlanet: "Earth",
  numCrew: 5,
};

let fuel = spaceSHIP["Fuel Type"];
let isActive = spaceSHIP["Active Mission"];

console.log(isActive); // true
console.log(fuel); // 'Turbo Fuel'

///// Property Assignment /////

const myFriedns = {
  Tehran: "Farzin",
  Shiraz: "Yunes",
  Abadan: "Alireza",
  Kazeroon: "Hossein",
  Germany: "Peyman",
};

delete myFriedns.Abadan; // delete the property "Abadan"
myFriedns.USA = "Jack" // add a new property "USA"
myFriedns.Kazeroon = "Abbas" // update the value of the property "Kazeroon"

console.log(myFriedns);