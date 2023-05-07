import { UserProps } from './User';
class Attributes<T extends Object> {
  constructor(private data: T) {}

  get(propName: string): number | string | boolean {
    return this.data[propName];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 5,
  name: 'Junaid',
  age: 40,
});

const id = attrs.get('id');

if (typeof id === 'number') {
  id;
} else {
  id;
}

const id1 = attrs.get('id') as number; //Type assertion
