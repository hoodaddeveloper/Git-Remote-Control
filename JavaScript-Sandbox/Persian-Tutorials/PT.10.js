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

/// /// /// /// /// ///

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

/// /// /// /// /// ///

let f = 0;

for (let f = 0; f < 30; f++) {
  if (f == 10) {
    continue; // continue skips the rest of the code in the loop and goes to the next iteration
  }

  if (f == 21) {
    break; // break skips the rest of the code in the loop and goes to the next iteration
  }

  console.log(f + 0.5);
}

///// Project /////

let n = 10000000000109;
let isPrime = true;

for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}

console.log(n, isPrime);

/// /// /// /// /// ///

let n2 = 1000000007;
let i = 2;
let isPrime2 = true;

while (i < parseInt(n2 ** 0.5) + 1) {
  if (n2 % i == 0) {
    isPrime2 = false;
    break;
  }
  i++;
}

console.log(n2, isPrime2);
