import { User } from './models/User';

const user = new User({ name: 'Mohammad', age: 41 });

class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('Mohammad Junaid', 'Khan');
console.log(person.fullName);
