const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

function openMenu() {
  document.body.classList.add("show-mobile-menu");
}

function closeMenu() {
  document.body.classList.remove("show-mobile-menu");
}

// Toggle mobile menu visibility when clicking open button
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when close button is clicked
menuCloseButton.addEventListener("click", closeMenu);

// Close menu when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
