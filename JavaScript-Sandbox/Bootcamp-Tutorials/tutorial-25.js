console.log("This message will be printed to the console.");

function throwError() {
  return notDefinedVar;
}

throwError();

console.log("Because of the error, this will not printed!");
console.log(Error("User missing name"));
console.log("Will logging the error stop our program from running?");

