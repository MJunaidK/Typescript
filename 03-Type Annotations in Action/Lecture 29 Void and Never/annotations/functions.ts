// Arrow function
const add = (a: number, b: number): number => {
  // a-b
  return a + b;
};

const subtract = (a: number, b: number) => {
  // a-b
  return a - b;
};

// Function declaration
function divide(a: number, b: number): number {
  return a / b;
}

// Function expression or anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// void: does not actually return any value
// function that returns void can return null or undefined
const logger = (message: string): void => {
  console.log(message);
  //return undefined;
};

// never : we are never going to reach the end of this function
// we're never going to execute the function completely at some point in time inside of here, we're going to throw an error and exit the function early without returning any value.
const throwError = function (message: string): never {
  throw new Error(message);
};

// expect it to return something eventually and only possibly throw an error the string type annotation will work
const throwErrorOnceAgain = function (message: string): string {
  if (!message) throw new Error(message);

  return message;
};

// we would still do a fallback to void because we are technically not returning anything and there's just a chance of us never reaching the end of the function.
const throwErrorAgainAgain = function (message: string): void {
  if (!message) throw new Error(message);
};
