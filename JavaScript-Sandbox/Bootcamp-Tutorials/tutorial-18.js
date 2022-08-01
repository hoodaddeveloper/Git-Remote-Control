///// Factory Functions /////

const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(name);
      console.log(age);
      console.log(energySource);
      console.log(catchPhrase);
    },
  };
};

const monster = monsterFactory("Nemesis", 12, "X-Virus", "S.T.A.R.S");
monster.scare();

/// / /// / /// / /// / ///

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();

///// Property Value Shorthand /////
