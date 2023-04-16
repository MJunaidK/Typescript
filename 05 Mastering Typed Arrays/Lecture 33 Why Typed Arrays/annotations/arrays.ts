const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values :  If we ever pull an element out of this array, either by using, say, the pop method or by direct index access, TypeScript will know that we are going to be pulling out a string and help us with type inference with the new variable that we're assigning this this value to.

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent Incompatible values
carMakers.push(100);

// Help with map, forEach, reduce functions : TypeScript is going to make sure that the value that we are putting into this function right here will be a string.
carMakers.map((car: string): string => {
  return car;
});
