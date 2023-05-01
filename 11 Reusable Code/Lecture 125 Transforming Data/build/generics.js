"use strict";
// NOTHING TO DO WITH GENERICS
/*const addOne = (a: number): number => {
  return a + 1;
};

const addTwo = (a: number): number => {
  return a + 2;
};

const addThree = (a: number): number => {
  return a + 3;
};*/
/*const add = (a: number, b: number): number => {
  return a + b;
};

add(10, 1);
add(10, 2);
add(10, 3);
*/
/*class HoldNumber {
  data!: number;
}

class HoldString {
  data!: string;
}

const holdNumber = new HoldNumber();
holdNumber.data = 123;

const holdString = new HoldString();
holdString.data = 'junaid'; */
class HoldAnything {
    add(a) {
        return a;
    }
}
const holdNumber = new HoldAnything();
holdNumber.data = 123;
const holdString = new HoldAnything();
holdString.data = 'Junaid';
