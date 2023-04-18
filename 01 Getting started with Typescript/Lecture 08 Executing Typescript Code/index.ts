import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  console.log(response.data);
});

// RUN the following command
// tsc index.ts followed by node index.js
// OR one command for both: ts-node index.ts
