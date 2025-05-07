//1. chọn element
const btnSignupSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");
const inputEmailSelector = document.querySelector(".email");
const inputPasswordSelector = document.querySelector(".password");
const inputConfirmPasswordSelector =
  document.querySelector(".confirm_password");

//dùng vòng lặp for lấy ra mảng tất cả ô input
const inputAllSelector = document.querySelectorAll(".form-group input");

//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();
  //1. thực hiện validate
  for (let i = 0; i < inputAllSelector.length; i++) {
    let inputSelector = inputAllSelector[i];
    let valueInput = inputSelector.value;
    let divMessageSelector = inputSelector
      .closest(".form-group")
      .querySelector(".error_message");
    let name = inputSelector.name;

    //validate not emtpy
    if (valueInput === "") {
      //thêm viền đỏ cho input
      inputSelector.classList.add("error");
      //hiển thị message lỗi
      let message = name + " không được để trống";
      divMessageSelector.textContent = message;
    } else if (name === "email") {
      //validate email tối thiểu 3 ký tự
      let minLength = inputSelector.getAttribute("min_length");
      if (valueInput.length < +minLength) {
        let message = `${name} tối thiểu ${minLength} ký tự`;
        divMessageSelector.textContent = message;
      } else {
        divMessageSelector.textContent = "";
      }
    } else if (name === "password") {
      //validate password tối thiểu 3 ký tự
      let minLength = inputSelector.getAttribute("min_length");
      if (valueInput.length < +minLength) {
        let message = `${name} tối thiểu ${minLength} ký tự`;
        divMessageSelector.textContent = message;
      } else {
        divMessageSelector.textContent = "";
      }
    } else {
      divMessageSelector.textContent = "";
      inputSelector.classList.remove("error");
    }
  }
}

//lession video 18
//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
