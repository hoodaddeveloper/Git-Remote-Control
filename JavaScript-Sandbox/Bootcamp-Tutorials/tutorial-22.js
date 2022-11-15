///// ASYNC AWAIT /////

const fs = require("fs");
const promisifiedReadfile = require("./promisifiedReadfile");

// Here we use fs.readfile() and callback functions:
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile("./file2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile("./file.txt", "utf-8")
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile("./file2.txt", "utf-8");
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  })
  .catch((err) => {
    console.log(err);
  });

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile("./file.txt", "utf-8");
  let secondSentence = await promisifiedReadfile("./file2.txt", "utf-8");
  console.log(firstSentence, secondSentence);
}

readFiles();

/// /// /// /// ///

function withConstructor(num) {
  return new Promise((resolve, reject) => {
    if (num === 0) {
      resolve("zero");
    } else {
      resolve("not zero");
    }
  });
}

withConstructor(0).then((resolveValue) => {
  console.log(
    ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
  );
});

async function withAsync(num) {
  if (num === 0) {
    return "zero";
  } else {
    return "not zero";
  }
}

withAsync(100).then((resolveValue) => {
  console.log(
    ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
  );
});

/// /// /// /// ///

const brainstormDinner = require("./library.js");

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
    console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}

announceDinner();

/// /// /// /// ///

const brainstormDinner = () => {
  return new Promise((resolve, reject) => {
    console.log(`I have to decide what's for dinner...`);
    setTimeout(() => {
      console.log("Should I make salad...?");
      setTimeout(() => {
        console.log("Should I make ramen...?");
        setTimeout(() => {
          console.log("Should I make eggs...?");
          setTimeout(() => {
            console.log("Should I make chicken...?");
            resolve("beans");
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
};

module.exports = brainstormDinner;

/// /// /// /// ///

const shopForBeans = require("./library.js");

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

module.exports = shopForBeans;

/// /// /// /// ///

