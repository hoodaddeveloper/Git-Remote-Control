///// var /////

function start() {
  for (var i = 0; i < 5; i++) {}
  console.log(i);
}

start();

///// Programming types /////

let money = 7000;
let energie = 99;
let chance = 90;

function buyMercedes1() {
  return "You have " + (money * 2 + energie + chance) + " Euro!";
}

console.log(buyMercedes1()); // 

/// / /// / ///

let buyingCar = {
  money: 7000,
  energie: 99,
  chance: 90,
  buyMercedes2() {
    return "You have " + (money * 2 + energie + chance) + " Euro!";
  }
}

console.log(buyingCar.buyMercedes2());