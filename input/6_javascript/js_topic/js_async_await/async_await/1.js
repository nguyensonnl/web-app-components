async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const todo = await res.json();
  return todo;
}

getData().then((data) => console.log(data));
