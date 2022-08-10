///// More of loops /////

let p = 0;

while (p < 20) {
  p++;

  if (p == 10) {
    continue; // continue skips the rest of the code in the loop and goes to the next iteration
  }

  if (p % 2 === 0) {
    console.log(p);
  }
}

/// /// /// /// ///

let h = 0;

do {
  h++;

  if (h == 10) {
    break; // break skips the rest of the code in the loop and goes to the next iteration
  }

  if (h % 2 === 0) {
    console.log(h);
  }
} while (h < 20);

/// /// /// /// ///

let f = 0;

for (let f = 0; f < 30; f++) {
  if (f == 10) {
    continue; // continue skips the rest of the code in the loop and goes to the next iteration
  }

  if (f == 20) {
    break; // break skips the rest of the code in the loop and goes to the next iteration
  }

  console.log(f);
}
