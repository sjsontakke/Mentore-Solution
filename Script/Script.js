
/* =====================================
   TYPING ANIMATION
===================================== */

  document.addEventListener(

            "DOMContentLoaded",

            () => {


                const typingText =

                    document.getElementById(

                        "typing-text"

                    );


                const text =

                    "Mentore Solution";


                let characterIndex = 0;


                function typeText() {


                    if (

                        characterIndex <

                        text.length

                    ) {


                        typingText.textContent +=

                            text.charAt(

                                characterIndex

                            );


                        characterIndex++;


                        setTimeout(

                            typeText,

                            120

                        );

                    }

                }


                typeText();


                /* =====================================
                   PAUSE SLIDER ON HOVER
                ===================================== */


                const sliders =

                    document.querySelectorAll(

                        ".slider"

                    );


                sliders.forEach(

                    (slider) => {


                        const track =

                            slider.querySelector(

                                ".slider-track"

                            );


                        slider.addEventListener(

                            "mouseenter",

                            () => {

                                track.style.animationPlayState =

                                    "paused";

                            }

                        );


                        slider.addEventListener(

                            "mouseleave",

                            () => {

                                track.style.animationPlayState =

                                    "running";

                            }

                        );


                        slider.addEventListener(

                            "touchstart",

                            () => {

                                track.style.animationPlayState =

                                    "paused";

                            }

                        );


                        slider.addEventListener(

                            "touchend",

                            () => {

                                track.style.animationPlayState =

                                    "running";

                            }

                        );


                    }

                );


            }

        );


        /* =====================================
           NAVBAR SCROLL
        ===================================== */


        window.addEventListener(

            "scroll",

            () => {


                const navbar =

                    document.querySelector(

                        ".navbar"

                    );


                if (!navbar) return;


                if (

                    window.scrollY > 40

                ) {


                    navbar.classList.add(

                        "scrolled"

                    );

                }

                else {


                    navbar.classList.remove(

                        "scrolled"

                    );

                }


            }

        );



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

// // SLIDER / CAROUSEL
// let currentSlide = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length;

// function showSlide(index) {
//   slides.forEach((slide) => slide.classList.remove("active"));
//   slides[index].classList.add("active");
// }

// // Manual next/prev buttons
// document.querySelector(".next").addEventListener("click", () => {
//   nextSlide();
//   resetTimer();
// });

// document.querySelector(".prev").addEventListener("click", () => {
//   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//   showSlide(currentSlide);
//   resetTimer();
// });

// // AUTO PLAY EVERY 3 SECONDS (IMPROVED)
// let autoSlide = setInterval(nextSlide, 3000);

// function nextSlide() {
//   currentSlide = (currentSlide + 1) % totalSlides;
//   showSlide(currentSlide);
// }

// function resetTimer() {
//   clearInterval(autoSlide);
//   autoSlide = setInterval(nextSlide, 3000);
// }

// COUNTER SECTION
document.addEventListener(

  "DOMContentLoaded",

  function () {


    const counters =

      document.querySelectorAll(

        ".counter-number"

      );


    const section =

      document.querySelector(

        ".impact-section"

      );


    let counterStarted = false;


    function animateCounter(counter) {


      const target =

        parseInt(

          counter.dataset.target

        );


      const duration = 2000;


      const startTime =

        performance.now();


      function updateCounter(currentTime) {


        const elapsed =

          currentTime -

          startTime;


        const progress =

          Math.min(

            elapsed /

            duration,

            1

          );


        /* Smooth ease-out */

        const easeOut =

          1 -

          Math.pow(

            1 - progress,

            3

          );


        const currentValue =

          Math.floor(

            target *

            easeOut

          );


        const formattedNumber =

          currentValue

            .toLocaleString();


        if (

          target === 100

        ) {


          counter.innerHTML =

            formattedNumber +

            "<span>%</span>";

        }

        else {


          counter.innerHTML =

            formattedNumber;

        }


        if (

          progress < 1

        ) {


          requestAnimationFrame(

            updateCounter

          );

        }


        else {


          if (

            target === 100

          ) {


            counter.innerHTML =

              target

                .toLocaleString() +

              "<span>%</span>";

          }

          else {


            counter.innerHTML =

              target

                .toLocaleString();

          }

        }

      }


      requestAnimationFrame(

        updateCounter

      );

    }


    function startCounters() {


      if (

        counterStarted

      ) return;


      counterStarted = true;


      counters.forEach(

        function (counter) {


          animateCounter(

            counter

          );

        }

      );

    }


    /*

        Counter starts automatically

        when 25% of section is visible

    */

    const observer =

      new IntersectionObserver(

        function (entries) {


          entries.forEach(

            function (entry) {


              if (

                entry.isIntersecting

              ) {


                startCounters();

              }

            }

          );

        },

        {

          threshold: 0.25

        }

      );


    observer.observe(

      section

    );

  }

);

// Trigger when visible
window.addEventListener("scroll", function () {
  const section = document.querySelector(".counter-section");
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !started) {
    started = true;
    startCounter();
  }
});


// BUTTON NAVIGATION
document.getElementById("viewMoreBtn").addEventListener("click", function () {
  window.location.href = "traninig.html"; // Change to your training page URL
});
document
  .getElementById("exploreCoursesBtn")
  .addEventListener("click", function () {
    window.location.href = "traninig.html"; // Replace with your training page URL
  });

// SUCCESS BOX ANIMATION
const boxes = document.querySelectorAll(".success-box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.3 }
);

boxes.forEach((box) => observer.observe(box));

// Optional: Smooth scroll for second button
document
  .querySelector(".secondary-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    alert("Our team will contact you shortly for your free consultation.");
  });
document.addEventListener("DOMContentLoaded", function () {
  // Floating button toggle
  const floatingBtn = document.querySelector(".floating-btn");
  const mainBtn = floatingBtn.querySelector(".main-btn");
  mainBtn.addEventListener("click", () => {
    floatingBtn.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".success-container");
  const boxes = document.querySelectorAll(".success-box");
  let currentIndex = 0;
  const totalBoxes = boxes.length;
  const slideInterval = 4000; // 4 seconds

  // Clone first few boxes for infinite loop effect
  boxes.forEach((box) => container.appendChild(box.cloneNode(true)));

  // Auto-slide function
  function autoSlide() {
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * 330}px)`;

    // Reset when end is reached
    if (currentIndex >= totalBoxes) {
      setTimeout(() => {
        container.style.transition = "none";
        currentIndex = 0;
        container.style.transform = `translateX(0)`;
        // Re-enable transition
        setTimeout(() => {
          container.style.transition = "transform 0.6s ease-in-out";
        }, 100);
      }, 600);
    }
  }

  let slideTimer = setInterval(autoSlide, slideInterval);

  // Pause on hover
  container.addEventListener("mouseenter", () => clearInterval(slideTimer));
  container.addEventListener("mouseleave", () => {
    slideTimer = setInterval(autoSlide, slideInterval);
  });
});

 document
        .getElementById("exploreCoursesBtn")
        .addEventListener("click", function () {

            window.location.href = "traninig.html";

        });
        