"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(jsonUrl).then(function (res) {
    var todo = res.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("The Todo with id: ".concat(id, "\n        Has a title of: ").concat(title, "\n        Is it completed? ").concat(completed, "\n"));
};
