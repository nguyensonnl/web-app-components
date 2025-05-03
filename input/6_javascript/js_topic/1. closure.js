//lexical scope: phạm vi biến lexical: nhóm 1 nhóm hàm lồng nhau, các hàm bên trong có quyền
//truy cập vào các biến và tài nguyên khác trong phạm vi cha của chúng

function foo() {
  const a = 1;
  function bar() {
    console.log(a);
  }

  bar();
}
foo();

/*
CLOSURE;
- Khả năng lưu trư trạng thái của biến bên trong nó
- Khi trả về hàm hoặc gán một hàm cho biến thì nó sẽ mang theo giá trị của tât cả các biến mà nó phụ thuộc
- Một hàm ghi nhớ phạm vi tại thời điểm nó được tạo, ngay cả khi phạm vi nó đã kết thúc
*/

function add(x) {
  return function addTo(y) {
    return x + y;
  };
}
const addFine = add(5);
const addTen = addFine(10);
console.log(addTen);

//using closure
function logValue(j) {
  setTimeout(() => {
    console.log(j);
  }, 0);
}

for (var i = 0; i < 5; i++) {
  logValue(i);
}
