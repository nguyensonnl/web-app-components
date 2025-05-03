//Resoure: Youtube: Henry web dev

//blocking
function xinSDTBlocking() {
  let sdt = 123456;
  console.log("Gọi điện cho thàng Hiếu: Cho tao xin SĐT thằng Nam");
  console.log("Thằng Hiếu đang tìm SĐT thằng Nam");
  for (let i = 0; i < 100; i++) {
    console.log(i);
  }
  console.log("Đợi tao tý tao đang tìm");
  console.log(`Tìm thấy rồi, SĐT thằng Nam là: ${sdt}`);
}
xinSDTBlocking();

function xinSDTNonBlocking() {
  let sdt = 123456;
  console.log("Gọi điện cho thàng Hiếu: Cho tao xin SĐT thằng Nam");
  console.log("Thằng Hiếu đang tìm SĐT thằng Nam");
  setTimeout(() => {
    for (let i = 0; i < 100; i++) {
      console.log(i);
    }
  }, 0);
  console.log("Đợi tao tý tao đang tìm");
  console.log(`Tìm thấy rồi, SĐT thằng Nam là: ${sdt}`);
}
xinSDTNonBlocking();

function xinSDT() {
  let sdt;

  console.log("Gọi điện cho thang bạn: Cho tao xin sđt thang Nam");

  console.log("Thang ban dang tim sdt thang Nam");

  setTimeout(() => {
    sdt = 123456;
    console.log(`Đợi tý tao đang tìm`);
  }, 0);

  setTimeout(() => {
    console.log(`Tìm thấy rồi, SDT của thằng NAM là: ${sdt}`);
  }, 0);
}

xinSDT();
