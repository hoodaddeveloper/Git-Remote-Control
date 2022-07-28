///// filter() method /////

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(function (value) {
  return value > 5;
});

console.log(numbers);