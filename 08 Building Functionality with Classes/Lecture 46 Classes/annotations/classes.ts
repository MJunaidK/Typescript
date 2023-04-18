// Classes are blueprint or a model of sorts that we're going to use to create an object that has some different fields and methods
class Vehicle {
  drive(): void {
    console.log('driving now!');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
