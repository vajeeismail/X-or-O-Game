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


const registerForm = document.querySelector(".register-form");
const gameArea = document.querySelector(".game-area");

const player1Input = document.querySelector("#player1");
const player2Input = document.querySelector("#player2");

const player1Set = document.querySelector(".player1-score h3");
const player2Set = document.querySelector(".player2-score h3");

const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");

const cells = document.querySelectorAll("[data-cell]");
const exitBtn = document.querySelector("#exit-btn");

let currentRound = 10;
const lastRounds = 1;

let scores = {X:0, O:0};
let gameActive = true;

let boardState = Array(9).fill(null);
let currentPlayer = "X";
let currentColor = "red";

// Register Form Submited Actions & Set Input Players into Score Board
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    player1Set.textContent = player1Input.value.trim();
    player2Set.textContent = player2Input.value.trim();

    document.querySelector(".players-register").style.display = "none";

    gameArea.style.display = "block";

    startNewRound();
});

// All click event to each game cell
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleMove(cell, index));
});

// Handle cells during move
function handleMove(cell, index) {
    if (!gameActive || cell.textContent !== "") return

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add(currentColor);

    if (checkWin(currentPlayer)) {
        alert(`Player ${currentPlayer} win this round`);
        scores [currentPlayer]++;
        updateScores();
        proceedToNextRound();
    }

    else {
        switchPlayer();   
    }  
}

// Score Update
function updateScores() {
    score1.textContent = scores["X"];
    score2.textContent = scores["O"];
}

// Switch Player
function switchPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O"
        currentColor = "blue";
    }
    else {
        currentPlayer = "X";
        currentColor = "red";
    }
}

// Check Win
function checkWin(player) {
    const winCombo = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winCombo.some(combo => 
        combo.every(index => boardState[index] === player)
    );
}

// Process the next round
function proceedToNextRound() {
    gameActive = false;
    currentRound--;
    console.log(currentRound);

    setTimeout(() => {
        startNewRound();
    }, 1000);    
}