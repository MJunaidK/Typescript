class Boat {
  @testDecorator
  color: string = 'red';

  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  @logError('Something Bad')
  pilot(): void {
    throw new Error();
    console.log('swish');
  }
}

function testDecorator(target: any, key: any): void {
  console.log(target[key]);
  console.log(target.color);
}

function logError(errorMessage: string) {
  return function (target: any, key: any, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
