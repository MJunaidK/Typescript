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
  console.log('Target: ', target);
  console.log('Key: ', key);
}
