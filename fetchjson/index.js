"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";
axios_1.default.get(jsonUrl).then((res) => {
    const todo = res.data;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
});
const logTodo = (id, title, completed) => {
    console.log(`The Todo with id: ${id}
        Has a title of: ${title}
        Is it completed? ${completed}
`);
};
