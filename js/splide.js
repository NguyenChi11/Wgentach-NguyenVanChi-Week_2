import products from "./data.js";
//phần splide
function createSplideProduct(product) {
  return `
      <li class="splide__slide">  
        <div class="product__slider">
        <img class="slider__image" src="${product.image}" alt="">
        <div class="category">${product.category}</div>
        <div class="slider__name">${product.product__name}</div>
        <div class="slider__price">${product.product__price}</div>
        </div>
      </li>
    `;
}
const splideProduct = document.getElementById("splide__list");
splideProduct.innerHTML = products.map(createSplideProduct).join("");

// product

// const voucher = document.querySelectorAll(".voucher");
// voucher.forEach((item) => {
//   const selling = item.querySelector(".voucher__sell");
//   const productVoucher = item.querySelector(".product__voucher");
//   const voucherNew = item.querySelector(".voucher__new");

// console.log(selling);
// if (selling.textContent.trim() === "") {
//   selling.style.display = "none";
// }
// });

//slide
// const mediaQuery = window.innerWidth;
// var splide = new Splide(".splide", {
//   perPage: 4,
//   rewind: true,
//   gap: 10,
// });

function checkScreenSize() {
  const width = window.innerWidth;

  const splide = new Splide(".splide", {
    perPage: 4,
    rewind: true,
    gap: 10,
  });

  const splide_1 = new Splide(".splide", {
    perPage: 2,
    rewind: true,
    gap: 10,
  });
  const splide_2 = new Splide(".splide", {
    perPage: 3,
    rewind: true,
    gap: 10,
  });

  if (width <= 768) {
    splide_1.mount();
  } else if (width <= 1500 && width >= 769) {
    splide_2.mount();
  } else {
    splide.mount();
  }
}

// Gọi hàm ngay khi trang tải
checkScreenSize();

// Theo dõi sự thay đổi kích thước
window.addEventListener("resize", checkScreenSize);
