// drink object
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

//  alternatively try to represent this with a tuple.

const pepsi = ['brown', true, 40]; // here's the only issue. What we just defined right here is an array

/* if we start to break that order, our data model completely breaks down.
pepsi[0] = 40;
pepsi[2] = 'brown'; */

// Adding type annotation: by putting on this different looking type annotation right here we are turning this array into a tuple.
const pepsi1: [string, boolean, number] = ['brown', true, 40];
//pepsi1[0] = 40;

//  rather than putting the type directly in line as an annotation would be to create something called a type alias.

type Drink = [string, boolean, number];
const pepsi2: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
