import { User, UserProps } from '../models/User';
import { View } from './View';
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  /*onSetAgeClick(): void {
    console.log('button was clicked');
  }*/

  // Using Arrow function instead of function declaration as this keyword inside function refers to parent object. This can then be used as a handler in eventBinding.
  onSetAgeClick = () => {
    console.log(this); // UserForm
    this.model.setRandomAge();
  };

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <div>User Name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
            <input />
            <button class="set-name">Change Name</button>
            <button class="set-age">Set Random Age</button>  
        </div>
    `;
  }
}
