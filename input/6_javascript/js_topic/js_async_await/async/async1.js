console.log("sync1");

function getData() {
  setTimeout(() => {
    console.log("sync2");
  }, 0);
}
getData();

const promise1 = new Promise((resole, reject) => {
  resole("sync4");
});

promise1.then((data) => console.log(data)).catch((error) => console.log(error));

function getData2() {
  let isvalid = true;
  return new Promise((resole, reject) => {
    if (isvalid) {
      resole("ssync5");
    } else {
      reject("error");
    }
  });
}
getData2().then((data) => console.log(data));

console.log("sync3");
