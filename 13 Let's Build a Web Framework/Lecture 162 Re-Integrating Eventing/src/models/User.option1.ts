import { Eventing } from './Eventing';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

// Option #1
// Accept dependencies as second constructor argument
export class User {
  constructor(private data: UserProps, private events: Eventing) {}
}

new User({ id: 1 }, new Eventing(), new Attributes());
