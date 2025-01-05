function KiemTradangky() {
  var lastName = document.getElementById("lastname").value;
  var firstName = document.getElementById("firstname").value;
  var birthday = document.getElementById("birthday").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var errorMessage = document.getElementById("error");
  errorMessage.textContent = "";

  if (lastName === "") {
    errorMessage.textContent = "Vui lòng nhập họ.";
    return false;
  }
  if (firstName === "") {
    errorMessage.textContent = "Vui lòng nhập tên.";
    return false;
  }

  if (birthday === "") {
    errorMessage.textContent = "Vui lòng nhập ngày sinh.";
    return false;
  }
  if (email === "") {
    errorMessage.textContent = "Vui lòng nhập email.";
    return false;
  }
  if (password === "") {
    errorMessage.textContent = "Vui lòng nhập mật khẩu.";
    return false;
  }

  return true;
}

document.querySelector("form").onsubmit = function (event) {
  if (!validateRegistrationForm()) {
    event.preventDefault();
  }
};
