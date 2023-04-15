"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    console.log(response.data);
});
// RUN the following command
// tsc index.ts followed by node index.js
// OR one command for both: ts-node index.ts
