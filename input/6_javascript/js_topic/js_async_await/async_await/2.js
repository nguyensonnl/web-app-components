function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((todos) => console.log(todos));
}

getTodos();

async function getTodos1(callback) {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let todos = await res.json();
    callback(todos);
  } catch (error) {
    console.log(error);
  }
}

async function formatData() {
  const todos = await getTodos1((data) => console.log(data));
  console.log(todos);
}

formatData();
