///// Learn Intermediate JavaScript /////
///// Introduction to Classes /////

let halley = {
  _name: "Halley",
  _behavior: "Kind",

  get name() {
    return this._name;
  },

  get behavior() {
    return this._behavior;
  },

  incrementBehavior() {
    this._behavior++;
  },
};

/// / /// / ///

class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = "Hungry";
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior() {
    this._behavior++;
  }
}

const Huppy = new Dog("Huppy");
console.log(Huppy.name); // Print name value to console
console.log(Huppy.behavior); // Print behavior value to console

///// Constructor /////

class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

console.log(new Surgeon("Bob", "Cardiology")); // Prints object to console

///// Instance /////

