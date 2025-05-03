let fileData = null;

console.log("B1: bắt đầu đọc file dữ liệu, dự kiến tốn mất 3s...");

console.log(
  "B2: Giả lập đang đọc file dữ liệu, bắt đầu thực thi hàm readFileData..."
);

const readFileData = (callback) => {
  setTimeout(() => {
    console.log("B3: Đọc file dữ liệu xong, gán dữ liệu vào biến fileData");
    fileData = "Hello world";

    callback(fileData);
  }, 3000);
};

readFileData(() => {
  console.log(
    "B4: Kết thúc quá trình đọc file thành công với data nhận được là",
    fileData
  );
});
