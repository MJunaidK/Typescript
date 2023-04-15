import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
    The todo with ID: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished} 
  `);
});

// RUN the following command
// tsc index.ts followed by node index.js
// OR one command for both: ts-node index.ts
