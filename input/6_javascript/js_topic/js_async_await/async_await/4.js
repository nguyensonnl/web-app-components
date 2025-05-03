const getDataPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("OK");
  });
};

getDataPromise().then((value) => console.log(value));

const getDataAsyncAwait = async () => {
  return "OK";
};

getDataAsyncAwait().then((value) => console.log(value));
