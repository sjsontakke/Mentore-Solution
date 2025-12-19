// NAVBAR SCROLL
// CHANGE NAVBAR BACKGROUND ON SCROLL
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

// SCROLL ANIMATION FOR SERVICE BOXES
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".service-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  boxes.forEach((box) => observer.observe(box));
});
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".why-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  boxes.forEach((box) => {
    box.style.opacity = "0";
    box.style.transform = "translateY(30px)";
    box.style.transition = "all 0.5s ease";
    observer.observe(box);
  });
});
// Floating button toggle
const floatingBtn = document.querySelector(".floating-btn");
const mainBtn = floatingBtn.querySelector(".main-btn");
mainBtn.addEventListener("click", () => {
  floatingBtn.classList.toggle("active");
});
