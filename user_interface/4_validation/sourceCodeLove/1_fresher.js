//1. chọn element
const btnSignupSelector = document.querySelector(".btn-signup");
const inputNameSelector = document.querySelector(".name");

//2. function xử lí sự kiện + chạy ngay lần đầu khi load
function handleSignupClick(e) {
  e.preventDefault();
  //1. thực hiện validate
  let inputValueName = inputNameSelector.value;
  let errorNameSelector = inputNameSelector
    .closest(".form-group")
    .querySelector(".error_message");

  if (inputValueName === "") {
    inputNameSelector.classList.add("error");
    errorNameSelector.textContent = "Tên không được để trống";
  } else {
    inputNameSelector.classList.remove("error");
    errorNameSelector.textContent = "";
  }
}

//3. thêm sự kiện cho phần tử
btnSignupSelector.addEventListener("click", handleSignupClick);
