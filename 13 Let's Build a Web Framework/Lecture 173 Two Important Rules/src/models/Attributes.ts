import { UserProps } from './User';
class Attributes<T extends Object> {
  constructor(private data: T) {}

  get(propName: string): number | string | boolean {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  name: 'Junaid',
  age: 40,
});

const id = attrs.get('id');

if (typeof id === 'number') {
  id;
} else {
  id;
}

const id1 = attrs.get('id') as number; //Type assertion

// 1. In Typescript, strings can be types

//  even though it looks like we are doing a variable declaration here, we are actually creating a type.

type BestName = 'Junaid';

const printName = (name: BestName): void => {};

printName('test');
printName('khan');

printName('Junaid');

// 2. In JS(and therefore TS),all object keys are strings
const colors = {};
colors.red = 'red';
colors[5] = 'red';
console.log(colors[5]);
console.log(colors['5']);
