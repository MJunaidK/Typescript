import { Eventing } from './Eventing';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #3
// Only accept properties into constructor
// Hardcode dependencies as class properties

export class User {
  events: Eventing = new Eventing(); //lose out on some of the benefits of composition. Essentially right now, every time we create a user, we're going to have the same exact class serving as our events sub module inside of here.

  constructor(private data: UserProps) {}
}

const user = new User({});
user.events;
