//promise
let newPromise = new Promise((resolve, reject) => {
  resolve("HEllo world");
});

newPromise.then((value) => console.log(value));

//async await
async function asyncAwait() {
  let isValid = false;
  if (isValid) {
    return "Hello async await";
  }
  return "Error your system";
}

async function newAsync() {
  try {
    const res = await asyncAwait();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

newAsync();
