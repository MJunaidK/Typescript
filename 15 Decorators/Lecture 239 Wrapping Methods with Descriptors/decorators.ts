class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function logError(target: any, key: any, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, boat was sunk ');
    }
  };
}

new Boat().pilot();
