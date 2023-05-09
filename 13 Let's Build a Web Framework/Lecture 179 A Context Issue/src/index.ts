import { User } from './models/User';

const user = new User({ name: 'Mohammad', age: 41 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User has changed');
});

user.trigger('change');
// Reminder on how 'this' works in javascript

/*const colors = {
  color: 'red',
  printColor() {
    console.log(this.color);
  },
};

const printColor = colors.printColor;
printColor();*/
