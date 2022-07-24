///// Set timeout function to run after 3 seconds /////

console.log(1);
console.log(2);

setTimeout(function () {
  console.log("Some Data"); // This will be printed after 3 seconds
}, 3000); // 3 seconds

console.log(3);
console.log(4);

/////////////////////////////////////////////////////////////////////////

let timeNow = 20; // Set timeNow to 20

if (timeNow >= 5 && timeNow <= 12) {
  // If timeNow is greater than or equal to 5 and less than or equal to 12
  console.log("Good Morning"); // Print "Good Morning"
} else if (timeNow >= 13 && timeNow <= 18) {
  // If timeNow is greater than or equal to 13 and less than or equal to 18
  console.log("Good Afternoon"); // Print "Good Afternoon"
} else {
  console.log("Good Night"); // Print "Good Night"
}

/////////////////////////////////////////////////////////////////////////

