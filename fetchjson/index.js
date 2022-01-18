"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// const jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";
// axios.get(jsonUrl).then((res) => {
//   console.log(res.data );
// });
var jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(jsonUrl).then(function (res) {
    var todo = res.data;
    var ID = todo.ID;
    var title = todo.Title;
    var finished = todo.finished;
    console.log("The Todo with ID: ".concat(ID, "\n        Has a title of: ").concat(title, "\n        Is it finished? ").concat(finished, "\n        \n        "));
});
