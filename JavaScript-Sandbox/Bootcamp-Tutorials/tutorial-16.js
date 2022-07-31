///// Accessing Properties /////

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};

console.log(spaceship.homePlanet); // 'Earth'
console.log(spaceship.color); // silver

/// /// /// /// ///

let spaceShip = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceShip.numCrew;
let planetArray = spaceShip.flightPath;

console.log(crewCount); // 5
console.log(planetArray); // ['Venus', 'Mars', 'Saturn']

///// Bracket Notation /////

