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
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10,y: 20};
//coordinates.jagfeygfuyewgfyuewgf;
