let apples: number = 5;
apples = 10;

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();
console.log(now);

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
  //a: 10,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations

// 1) Function that return the 'any' type
const json = '{"x": 10,"y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
//coordinates.jagfeygfuyewgfyuewgf;
console.log(coordinates); // {x: 10,y: 20};

// 2) When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // Have to define type here or give a default value like foundWord =false.

for (let z = 0; z < words.length; z++) {
  if (words[z] === 'green') {
    foundWord = true;
    console.log(`found at index ${z}`);
  }
}

// 3) Variables whose types cannot be inferred correct
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
