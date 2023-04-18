class Vehicle {
  //color: string = 'red';

  // public color: string in constructor argument is equivalent to defining a class field like above color:string.
  // private color: string: no longer be able to read that variable outside of our class anymore.
  // protected color: would be able to access that field from a class that extends vehicle
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

/*class Car extends Vehicle {
  private drive(): void {
    console.log('driving Car now!');
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();*/
