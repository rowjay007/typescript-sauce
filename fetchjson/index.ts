import axios from "axios";

// This is normal javascript fetch
/* const jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(jsonUrl).then((res) => {
  console.log(res.data );
}); */

// Catching errors with typescript with interface

const jsonUrl = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

/* axios.get(jsonUrl).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  console.log(
    `The Todo with id: ${id}
        Has a title of: ${title}
        Is it completed? ${completed}
        
        `
  );
}); */
axios.get(jsonUrl).then((res) => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

// catching more errors with type annotation

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(
    `The Todo with id: ${id}
        Has a title of: ${title}
        Is it completed? ${completed}
`
  );
};
