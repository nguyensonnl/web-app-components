//promise
function hello() {
  return new Promise((resolve, reject) => {
    resolve("hello");
  });
}

hello().then((value) => console.log(value));

const promise1 = Promise.resolve("Hello");
promise1.then((value) => console.log(value));

//async await
async function hello2() {
  return "Hello";
}
//hello2().then((value) => console.log(value));

async function hi() {
  try {
    const res = await hello2();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

hi();

async function getName() {
  return { id: 1, name: "Ngọc Huyền" };
}
async function showName() {
  try {
    const res = await getName();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
showName();
