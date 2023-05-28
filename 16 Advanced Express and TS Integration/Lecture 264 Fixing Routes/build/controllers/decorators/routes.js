"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
const MetadataKeys_1 = require("./MetadataKeys");
function routeBinder(method) {
    return function get(path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routeBinder('get');
exports.put = routeBinder('get');
exports.post = routeBinder('get');
exports.del = routeBinder('get');
exports.patch = routeBinder('get');
