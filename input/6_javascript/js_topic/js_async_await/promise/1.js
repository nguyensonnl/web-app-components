console.log("process1");
const promise1 = new Promise((resole, reject) => {
  let valid = true;
  if (valid) {
    resole("Hợp lệ");
  } else {
    reject("Không hợp lệ");
  }
});
console.log("process2");
promise1.then((data) => console.log(data)).catch((error) => console.log(error));
