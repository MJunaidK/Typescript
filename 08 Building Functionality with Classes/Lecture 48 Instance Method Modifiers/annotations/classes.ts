// public: This method can be called anywhere, any time. This is the default modifier if we do not specify any.
// private: This method can be called by other methods in this class
// protected: This method can be called by other methods in this class, or by other methods in child classes.

class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
//vehicle.honk(); not be allowed to call honk as it is protected

class Car extends Vehicle {
  private drive(): void {
    console.log('driving Car now!');
  }

  startDrivingProcess() {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
// car.honk(); not be allowed to call honk as it is protected
