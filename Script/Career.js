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
  hamburger.classList.toggle("active");
});

// CLOSE MOBILE MENU WHEN CLICKING LINKS
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// FLOATING BUTTON TOGGLE
const floatingBtn = document.querySelector(".floating-btn");
if (floatingBtn) {
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });
}

// APPLY NOW BUTTONS - OPEN EMAIL
const applyButtons = document.querySelectorAll(".apply-btn");
applyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const jobTitle = button.closest(".job-box").querySelector("h3").textContent;
    const subject = encodeURIComponent(`Job Application: ${jobTitle}`);
    const body = encodeURIComponent(
      `Dear HR Team,\n\nI am writing to apply for the ${jobTitle} position at Mentore Solution. Please find my resume attached.\n\nRegards,\n[Your Name]`
    );
    window.location.href = `mailto:mentoresolution@gmail.com?subject=${subject}&body=${body}`;
  });
});

// EMAIL CTA BUTTON
const emailBtn = document.querySelector("#requestCallback");
if (emailBtn) {
  emailBtn.addEventListener("click", () => {
    window.location.href = "mailto:mentoresolution@gmail.com";
  });
}

// SEND RESUME BUTTON
const sendResumeBtn = document.querySelector(".learning-cta .call-btn");
if (sendResumeBtn) {
  sendResumeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Job Application - My Resume");
    const body = encodeURIComponent(
      "Dear HR Team,\n\nPlease find my resume attached for consideration.\n\nRegards,\n[Your Name]"
    );
    window.location.href = `mailto:mentoresolution@gmail.com?subject=${subject}&body=${body}`;
  });
}
