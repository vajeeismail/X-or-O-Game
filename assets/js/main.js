window.addEventListener("DOMContentLoaded", () => {
    const greet = document.querySelector(".start-greet");
    const mainBody = document.querySelector(".main-body");

    // Wait for fade-out animation to complete (2s total)
    setTimeout(() => {
        greet.style.display = "none";       // Remove greet section
        mainBody.style.display = "block";   // Show main section

        setTimeout(() => {
            mainBody.style.opacity = "1";   // Fade it in
        }, 50);
    }, 2000); // Match animation duration
});

const registerForm = document.querySelector(".register-form");
const gameArea = document.querySelector(".game-area");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent page reload

  // Hide registration form
  document.querySelector(".players-register").style.display = "none";

  // Show game area
  gameArea.style.display = "block";
});