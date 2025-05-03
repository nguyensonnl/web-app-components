const url = "https://jsonplaceholder.typicode.com/todos/1";
// const getPost = (url, callback) => {
//   return new Promise((resolve, reject) => {
//     const res = fetch(url).then((response) => response.json());
//     resolve(res);
//   });
// };

// getPost(url)
//   .then((value) => console.log(value))
//   .catch((err) => console.log(err));

const getPostAsyncAwait = async (url) => {
  const res = await fetch(url);
  const todos = await res.json();
  return todos;
};
getPostAsyncAwait(url).then((value) => console.log(value));
