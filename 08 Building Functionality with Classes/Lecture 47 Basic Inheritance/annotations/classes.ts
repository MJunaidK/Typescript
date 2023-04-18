class Vehicle {
  drive(): void {
    console.log('driving now!');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('driving Car now!');
  }
}

const car = new Car();
car.drive();
car.honk();
