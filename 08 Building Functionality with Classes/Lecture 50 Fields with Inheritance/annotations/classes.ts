class Vehicle {
  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

// did not put the public keyword on color property in constructor because we do not want to reassign or create a new field in car of color. The field color belongs to vehicle. So that's why I did not put on the modifier of public
class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('driving Car now!');
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
