import { User } from './models/User';

const user = new User({ name: 'Mohammad', age: 41 });

user.on('change', () => {
  console.log('user was changed');
});
