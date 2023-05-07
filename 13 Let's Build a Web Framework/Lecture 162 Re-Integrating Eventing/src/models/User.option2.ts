import { Eventing } from './Eventing';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #2
// Only accept dependencies into constructor
// Define a static class method to preconfigure
// User and assign properties afterwards
export class User {
  static fromData(data: UserProps): User {
    const user = new User(new Eventing());
    user.set(data);
    return user;
  }

  static fromData(data: UserProps): User {
    const user = new User(new SuperEventing());
    user.set(data);
    return user;
  }

  private data: UserProps;

  constructor(private events: Eventing) {}
}

new User({ id: 1 }, new Eventing(), new Attributes());
