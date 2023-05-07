import { User } from './models/User';

const user = new User({ name: 'Mohammad', age: 41 });

user.save();
