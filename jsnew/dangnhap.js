function KiemTra() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  document.getElementById("error").textContent = "";

  if (email === "") {
    document.getElementById("error").textContent =
      "Vui lòng nhập email của bạn.";
    return false;
  }

  if (password === "") {
    document.getElementById("error").textContent =
      "Vui lòng nhập mật khẩu của bạn.";
    return false;
  }

  return true;
}

document.getElementById("customer_login").onsubmit = function (event) {
  if (!validateLoginForm()) {
    event.preventDefault();
  }
};
