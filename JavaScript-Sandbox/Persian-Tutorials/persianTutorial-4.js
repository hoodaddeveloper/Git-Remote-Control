// Function decration //

function sum(a, b, c) {
  return a + b - c;
}

console.log(sum(1, 2, 4));

// Function expression //

let result = function (x, y, z) {
  return x + y - z;
};

console.log(result(3, 4, 5));

//////////////////////////////////////////////////////////////////////////////////////////////

let arr = [1, 2, 3, 4, 5];

let result2 = arr.reduce(function (s, d) {
  return s + d;
});

console.log(result2); // 15 (1 + 2 + 3 + 4 + 5)

//////////////////////////////////////////////////////////////////////////////////////////////

let arr2 = [5, 7, 0, 0, 1];

console.log(
  arr2.reduce(function (e, f) {
    return e + f;
  })
);

//////////////////////////////////////////////////////////////////////////////////////////////

const summ = (...result3) => {
  let summ = 0;
  for (item of result3) {
    summ += item;
  }
  return summ;
};

console.log(summ(2.5, 2.5, 4, 6)); // 15

// / // / // More of Objects - Constructiors // / // / //

function Person() {
  this.fName = "Hoodad";
  this.lName = "Wesker";
};

let hoodad = new Person();