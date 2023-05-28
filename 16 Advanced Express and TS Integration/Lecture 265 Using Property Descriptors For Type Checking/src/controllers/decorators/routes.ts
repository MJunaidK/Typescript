import 'reflect-metadata';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const put = routeBinder('get');
export const post = routeBinder('get');
export const del = routeBinder('get');
export const patch = routeBinder('get');
