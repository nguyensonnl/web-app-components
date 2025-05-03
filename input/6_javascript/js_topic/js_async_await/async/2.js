//asyn = blocking
// console.log("Process 1");

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// console.log("Process 2");

//async = non-blocking
console.log("Process 1");

setTimeout(() => {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}, 1000);

console.log("Process 2");
