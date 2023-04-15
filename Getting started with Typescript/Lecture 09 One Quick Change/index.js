"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("\n    The todo with ID: ".concat(ID, "\n    Has a title of: ").concat(title, "\n    Is it finished? ").concat(finished, " \n  "));
});
// RUN the following command
// tsc index.ts followed by node index.js
// OR one command for both: ts-node index.ts
