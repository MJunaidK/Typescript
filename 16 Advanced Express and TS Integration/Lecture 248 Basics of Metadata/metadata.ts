import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);
Reflect.defineMetadata('prop', 'red color property metadata', plane, 'color');
console.log(plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const property = Reflect.getMetadata('prop', plane, 'color');
console.log(note);
console.log(height);
console.log(property);
