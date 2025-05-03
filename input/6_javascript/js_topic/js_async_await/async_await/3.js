function showHelo() {
  return Promise.resolve("Hello");
}
showHelo().then((data) => console.log(data));

async function showHeloAsync() {
  return "Hello";
}
showHeloAsync().then((value) => console.log(value));
