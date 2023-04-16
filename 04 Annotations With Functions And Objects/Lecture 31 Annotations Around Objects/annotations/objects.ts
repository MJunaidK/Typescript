const profile = {
  name: 'Junaid',
  age: 40,
  coords: {
    lat: 0,
    lng: 15,
  },
  // function being defined inside of an object with the function annotation on it.
  setAge(age: number) {
    this.age = age;
  },
};

// Destructuring without annotation
//const { age } = profile;

// Destructuring with annotation: Destructuring only age from profile object and adding its type annotation
const { age }: { age: number } = profile;

// Destructuring without annotation
/*const {
  coords: { lat, lng },
} = profile;*/

// Destructuring with annotation: Destructuring only coords from profile object and adding its type annotation

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
