// navbar toggle button
const toggleBtn = document.querySelector(".toggle-nav-button");
const toggleBtnIcon = document.querySelector(".toggle-nav-button i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  // Toggle the 'open' class on the dropdown menu
  dropDownMenu.classList.toggle("open");

  // Check if dropdown menu has 'open' class
  const isOpen = dropDownMenu.classList.contains("open");

  // Toggle icon based on the dropdown state
  toggleBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// photos slider

// const initSlider = () => {
//   const imageList = document.querySelector(".slider-wrapper .image-list");
//   const slideButtons = document.querySelectorAll(
//     ".slider-wrapper .slide-button"
//   );
//   const slideScrollbar = document.querySelector(
//     ".photos-container .slider-scrollbar"
//   );
//   const scrollbarThumb = slideScrollbar.querySelector(".scrollbar-thumb");
//   const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

//   scrollbarThumb.addEventListener("mousedown", (e) => {
//     const startX = e.clientX;
//     const thumbPosition = scrollbarThumb.offsetLeft;
//     const handleMouseMove = (e) => {
//       const deltaX = e.clientX - startX;
//       const newThumbPosition = thumbPosition + deltaX;
//       const maxThumbPosition =
//         slideScrollbar.getBoundingClientRect().width -
//         scrollbarThumb.offsetWidth;
//       const boundedPosition = Math.max(
//         0,
//         Math.min(maxThumbPosition, newThumbPosition)
//       );
//       const scrollPosition =
//         (boundedPosition / maxThumbPosition) * maxScrollLeft;

//       scrollbarThumb.style.left = `${boundedPosition}px`;
//       imageList.scrollLeft = scrollPosition;
//     };

//     const handleMouseup = () => {
//       document.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("mouseup", handleMouseup);
//     };

//     document.addEventListener("mousemove", handleMouseMove);
//     document.addEventListener("mouseup", handleMouseup);
//   });

//   slideButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const direction = button.id === "prev-slide" ? -1 : 1;
//       const scrollAmount = imageList.clientWidth * direction;
//       imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     });
//   });

//   const handleSlideButtons = () => {
//     slideButtons[0].style.display =
//       imageList.scrollLeft <= 0 ? "none" : "block";
//     slideButtons[1].style.display =
//       imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//   };

//   const updateScrollThumbPosition = () => {
//     const scrollPosition = imageList.scrollLeft;
//     const thumbPosition =
//       (scrollPosition / maxScrollLeft) *
//       (slideScrollbar.clientWidth - scrollbarThumb.offsetWidth);
//     scrollbarThumb.style.left = `${thumbPosition}px`;
//   };

//   imageList.addEventListener("scroll", () => {
//     handleSlideButtons();
//     updateScrollThumbPosition();
//   });
// };

// window.addEventListener("load", initSlider);
