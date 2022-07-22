/* // First way to get elements:

let pageBanner = document.getElementById('page-banner'); // get element by id
let titles = document.getElementsByClassName('title'); // get element by class
let lis = document.getElementsByTagName('li');  // get element by tag

for (let element of lis) { // get elements of list by tag
  console.log(element);
}

// Second way to get elements:

let qSelector1 = document.querySelector("#page-banner"); // get element by id
console.log(qSelector1);

let qSelector2 = document.querySelector(".title"); // get only the first element by class
console.log(qSelector2);

let qSelector3 = document.querySelectorAll(".title"); // get all of the elements by class
console.log(qSelector3);

let qSelector4 = document.querySelectorAll("li"); // get all of the elements by tag
console.log(qSelector4);

for (let element of lis) { // get elements of list by tag
  console.log(qSelector1);
}

let qSelector5 = document.querySelectorAll("#book-list li .name")[2];
console.log(qSelector5);

let qSelector6 = document.querySelectorAll("#search-books");
console.log(qSelector6); */

let result;
const list = document.querySelector("ul");
const li = document.querySelector("li");

result = li;
console.log(result);