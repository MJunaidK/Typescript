import { User } from './models/User';

const user = new User({ name: 'Mohammad', age: 41 });

user.save();

user.events.on('change', () => {
  console.log('change');
});

user.events.trigger('change');
