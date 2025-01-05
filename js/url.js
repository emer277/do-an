function copyLink() {
  // Lấy URL hiện tại của trang
  const currentUrl = window.location.href;

  // Tạo một thẻ input ẩn để chứa URL
  const input = document.createElement("input");
  input.value = currentUrl;

  // Thêm thẻ input vào DOM
  document.body.appendChild(input);

  // Chọn và sao chép giá trị của input
  input.select();
  document.execCommand("copy");

  // Xóa input sau khi sao chép
  document.body.removeChild(input);

  // Hiển thị thông báo cho người dùng
  alert("Link đã được sao chép: " + currentUrl);
}
