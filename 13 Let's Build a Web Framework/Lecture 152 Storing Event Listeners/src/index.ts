import { User } from './models/User';

const user = new User({ name: 'Junaid', age: 40 });
user.set({ name: 'Mohammad', age: 42 });
user.set({ name: 'khan' });
user.set({});

console.log(user.get('name'));
console.log(user.get('age'));
