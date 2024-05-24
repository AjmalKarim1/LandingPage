// navbar toggle button
const toggleBtn = document.querySelector(".toggle-nav-button");
const toggleBtnIcon = document.querySelector(".toggle-nav-button i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");

  // Check if dropdown menu has 'open' class
  toggleBtnIcon.classList.toggle("fa-xmark");

  // Toggle icon based on the dropdown state
};

var swiper = new Swiper(".swiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  slidesPerGroup: 6,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      slidesPerGroup: 6,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 3,
      slidesPerGroup: 6,
      spaceBetween: 40,
    },
    1050: {
      slidesPerView: 4,
      slidesPerGroup: 6,
      spaceBetween: 40,
    },
  },
});

// indudial products
var swiper = new Swiper(".mtSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  slidesPerGroup: 6,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
    320: {
      slidesPerView: 2,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});
// brands logo js
var swiper = new Swiper(".brSwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    300: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 30,
    },
  },
});
