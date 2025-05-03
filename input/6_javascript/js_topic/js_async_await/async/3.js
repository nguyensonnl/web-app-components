function counter() {
  return new Promise((resole, reject) => {
    resole("one");
    setTimeout(() => {
      console.log("two");
    }, 1000);
  });
}
counter().then((value) => console.log(value));
counter().then((value) => console.log(value));

function callBack() {
  for (let i = 1; i < 3; i++) {
    console.log(i);
  }
}
function couter(callback) {
  console.log("One");
  callback();
}

couter(callBack);
couter(callBack);
