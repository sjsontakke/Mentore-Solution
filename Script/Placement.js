// NAVBAR SCROLL
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// MOBILE MENU
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  });

  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }
  
  const counters = document.querySelectorAll(".stat-box h2");

  const animateCounter = (el) => {
    const rawValue = el.getAttribute("data-count");

    // Extract number (supports decimals)
    const number = parseFloat(rawValue.replace(/[^\d.]/g, ""));
    const suffix = rawValue.replace(/[\d.]/g, "");

    let start = 0;
    const duration = 1200; // animation speed
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const value = (progress * number).toFixed(number % 1 !== 0 ? 1 : 0);

      el.innerText = value + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  // Run counter on scroll
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));

 window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  });

  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }
  window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
    }
  });

  function toggleTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  }
  
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".slide-track");

  // Clone logos for seamless infinite scroll
  track.innerHTML += track.innerHTML;

  let speed = 0.5; // pixels per frame
  let position = 0;

  const animate = () => {
    position -= speed;
    if (position <= -track.scrollWidth / 2) {
      position = 0; // reset to start
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  };

  animate();

  // Pause on hover
  const slider = document.querySelector(".partners-slider");
  slider.addEventListener("mouseenter", () => { speed = 0; });
  slider.addEventListener("mouseleave", () => { speed = 0.5; });
});
// Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });


