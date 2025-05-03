/*
GLOBAL SCOPE: var
LOCAL SCOPE(FUNCTION SCOPE): fun, var
BLOCK SCOPE: let, const, {}

#var: global, function scope, không bị giới hạn bởi {}
khi sử dụng for, tất cả các lần lặp đều dùng chung 1 biến i

#let,const: {}, chỉ tồn tại trong {}
trong for, mỗi lần lặp sẽ tạo ra 1 bản sao riêng biệt của biến i
*/

//tham chiếu và giá trị

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}

for (var i = 0; i < 5; i++) {
  console.log(`Giá trị của i tại thời điểm đăng ký setTimeout: ${i}`);
  setTimeout(() => {
    console.log(`Giá trị của i khi setTimeout chạy: ${i}`);
  }, 0);
}
