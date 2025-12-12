// Back to top button

const backToTopBtn = document.getElementById("backToTop");

// Show/hide the button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

// Scroll smoothly to top when the button is clicked
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Konami Code Easter Egg
const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

let konamiPosition = 0;

document.addEventListener("keydown", function (e) {
  if (e.key === konamiCode[konamiPosition]) {
    konamiPosition++;

    if (konamiPosition === konamiCode.length) {
      activateKonami();
      konamiPosition = 0;
    }
  } else {
    konamiPosition = 0;
  }
});

function activateKonami() {
  alert("Konami Code Activated! 🎉");

  //  toggle a secret mode
  document.body.classList.toggle("konami-mode");
}
function activateKonami() {
  document.getElementById("secret").style.display = "block";
}

// Typing Animation for Title
const titleText = "TrustSec AI Lab";
let index = 0;

function typeTitle() {
  const titleElement = document.getElementById("typingTitle");

  if (index < titleText.length) {
    titleElement.textContent += titleText.charAt(index);
    index++;
    setTimeout(typeTitle, 120); // typing speed
  } else {
    // Stop cursor animation after typing finishes
    titleElement.classList.add("finished");
  }
}

window.addEventListener("DOMContentLoaded", typeTitle);
