import { UserProps } from './User';
export class Attributes<T extends Object> {
  constructor(private data: T) {}

  // K extends keyof T: we are saying that the value of K or the type of K can only ever be one of the keys of T. we can treat strings as these strings right here('name', 'id','age') on this object as though they were types.
  // T[K] : our return type annotation is essentially the same as a normal object lookup. we are saying take that type T, whatever we passed in when we are referencing attributes and look up the type K inside there.

  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

const attrs = new Attributes<UserProps>({
  id: 1,
  name: 'Junaid',
  age: 40,
});

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');

const wrongType = attrs.get('jsdbfjs');
