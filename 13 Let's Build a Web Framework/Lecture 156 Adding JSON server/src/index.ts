import { User } from './models/User';

const user = new User({ name: 'Junaid', age: 40 });

user.on('change', () => {
  console.log('Change #1');
});
user.on('change', () => {
  console.log('Change #2');
});
user.on('save', () => {
  console.log('save was triggered');
});
user.trigger('change');
user.trigger('save');
user.trigger('asjuahdfuihfa');
