// Lấy đối tượng của nút và danh sách
const button = document.getElementById("danhmucsanpham");
const menu = document.getElementById("main1");

// Thêm sự kiện click vào nút
button.addEventListener("click", function () {
  // Kiểm tra nếu danh sách đang ẩn, hiển thị nó, ngược lại ẩn nó đi
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block"; // Hiển thị danh sách
  } else {
    menu.style.display = "none"; // Ẩn danh sách
  }
});
