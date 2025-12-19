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
  lucide.createIcons();
  


const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.querySelector(".close");

/* IMAGE CLICK */
document.querySelectorAll(".image-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalContent.innerHTML = `<img src="${img.src}" />`;
  });
});

/* VIDEO CLICK */
document.querySelectorAll(".video-item").forEach(item => {
  item.addEventListener("click", () => {
    const videoSrc = item.getAttribute("data-video");
    modal.style.display = "flex";

    if (videoSrc.includes("youtube")) {
      modalContent.innerHTML = `
        <iframe src="${videoSrc}" frameborder="0" allowfullscreen></iframe>
      `;
    } else {
      modalContent.innerHTML = `
        <video src="${videoSrc}" controls autoplay></video>
      `;
    }
  });
});

/* CLOSE */
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalContent.innerHTML = "";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }
});
 // Placeholder for future lightbox, modal, or animation logic
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      console.log("Gallery item clicked");
    });
  });
  
  const track = document.querySelector('.carousel-track');

  track.addEventListener('mouseenter', () => {
    track.style.animationPlayState = 'paused';
  });

  track.addEventListener('mouseleave', () => {
    track.style.animationPlayState = 'running';
  });
// Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });

