class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `The boat color is ${this.color}`;
  }

  pilot(): void {
    console.log('swish');
  }
}

function testDecorator(target: any, key: any): void {
  console.log('Target: ', target);
  console.log('Key: ', key);
}

testDecorator(Boat.prototype, 'pilot');
