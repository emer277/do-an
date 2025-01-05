function hienthi(id) {
  var img = document.getElementsByClassName("slider");

  img[id].style.zIndex = 10;
  for (i = 0; i < 7; i++)
    if (i != id) {
      img[i].style.zIndex = 1;
    }
}

let currentIndex = 0;
const images = document.querySelectorAll(".slider");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");

function showImage(index) {
  images.forEach((image) => {
    image.style.display = "none";
  });

  images[index].style.display = "block";
}

showImage(currentIndex);

leftArrow.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  showImage(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  showImage(currentIndex);
});

function hienthi(index) {
  currentIndex = index;
  showImage(currentIndex);
}

let amountElement = document.getElementById("quantity");
let quantity = parseInt(amountElement.value);

let render = (quantity) => {
  amountElement.value = quantity;
};

let handlePlus = () => {
  quantity++;
  render(quantity);
};
let handleMinus = () => {
  if (quantity > 1) {
    quantity--;
    render(quantity);
  }
};
amountElement.addEventListener("input", () => {
  quantity = parseInt(amountElement.value);
  if (isNaN(quantity) || quantity < 1) {
    quantity = 1;
  }
  render(quantity);
});
