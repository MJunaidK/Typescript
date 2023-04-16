// The one big difference with arrays in TypeScript is that generally we only stick elements with a very consistent type into the array except few exception scenarios.

// type inference will guess this is array of string: TypeScript determines the type of a variable at the point where it's initialized.
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
// Still we can define the type annotation
const carMakers1: string[] = ['ford', 'toyota', 'chevy'];
const dates1: Date[] = [new Date(), new Date()];

// sometimes we want to add in type annotations when we are working with the arrays e.g initialize the array as an empty array
const carMakers2 = []; // never[]
const carMakers3: string[] = []; // string[]

// Two dimensional arrays
const carsByMake = [['Fiesta'], ['Camry'], ['Cruz']];
const carsByMake1: string[][] = [];
