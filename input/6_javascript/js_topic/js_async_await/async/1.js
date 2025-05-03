console.log("Process 1");

function process2() {
  setTimeout(() => {
    for (let i = 1; i <= 1000; i++) {
      console.log(i);
    }
  }, 0);
}

function process3() {
  console.log("Process 3");
}

process2();
process3();

console.log("Process1");
function process2() {
  for (let i = 1; i <= 1000; i++) {
    console.log(i);
  }
}
function process3() {
  console.log("process3");
}
process2();
process3();
