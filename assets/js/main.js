// Start Greet Window
window.addEventListener("DOMContentLoaded", () => {
    const greet = document.querySelector(".start-greet");
    const mainBody = document.querySelector(".main-body");

    // Wait for fade-out animation to complete (2s total)
    setTimeout(() => {
        greet.style.display = "none";
        mainBody.style.display = "block";

        setTimeout(() => {
            mainBody.style.opacity = "1";   // Fade it in
        }, 50);
    }, 2000);
});

// Register Form Submited Actions & Set Input Players into Score Board
const registerForm = document.querySelector(".register-form");
const gameArea = document.querySelector(".game-area");

const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");

const player1Set = document.querySelector(".player1-score h3");
const player2Set = document.querySelector(".player2-score h3");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    player1Set.textContent = player1Input.value.trim();
    player2Set.textContent = player2Input.value.trim();

    document.querySelector(".players-register").style.display = "none";

    gameArea.style.display = "block";

});



