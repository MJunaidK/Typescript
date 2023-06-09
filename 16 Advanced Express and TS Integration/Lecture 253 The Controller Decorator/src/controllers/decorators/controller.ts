import 'reflect-metadata';

export function controller(routePrefix: string) {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHanlder = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
    });
  };
}
