// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU TOGGLE
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// LAZY SCROLL ANIMATION
const lazyItems = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

lazyItems.forEach((el) => observer.observe(el));
// LAZY SCROLL ANIMATION
const lazyItems2 = document.querySelectorAll(".lazy");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

lazyItems2.forEach((el) => observer2.observe(el));
// Observe each box
const chooseBoxes = document.querySelectorAll(".choose-box");

const chooseObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

chooseBoxes.forEach((box) => chooseObserver.observe(box));
// Smooth reveal on scroll
const storyBox = document.querySelector(".our-story-box");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      storyBox.classList.add("visible");
    }
  });
});

revealObserver.observe(storyBox);
// Fade-in for all elements
const fadeElements = document.querySelectorAll(".fade-element");

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

fadeElements.forEach((el) => fadeObserver.observe(el));
// Floating button toggle
const floatingBtn = document.querySelector(".floating-btn");
const mainBtn = floatingBtn.querySelector(".main-btn");
mainBtn.addEventListener("click", () => {
  floatingBtn.classList.toggle("active");
});
