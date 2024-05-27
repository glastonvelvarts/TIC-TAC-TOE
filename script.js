let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".noselect");
let clickSound = document.querySelector("#click-sound");
let resetSound = document.querySelector("#reset-sound");
let newSound = document.querySelector("#new-sound"); // Correct audio selector
let winMessage = document.querySelector("#win-message");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector("#msg-container");

// Assuming that player-1:O and player-2:X
let turnO = true;
const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        clickSound.play();
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkwin();
    });
});

// Adding reset button
reset.addEventListener("click", () => {
    resetGame();
    resetSound.play();
    msgContainer.classList.add("hide"); // Hide the message container
});

// Adding new game button
newGameBtn.addEventListener("click", () => {
    resetGame();
    newSound.play(); 
    msgContainer.classList.add("hide"); // Hide the message container
});

const showWinner = (winner) => {
    msgContainer.querySelector('#msg').innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const checkwin = () => {
    for (let pattern of win) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val === "O" && pos2Val === "O" && pos3Val === "O") {
            showWinner("O");
            boxes.forEach(box => box.disabled = true); // Disable all boxes
        } else if (pos1Val === "X" && pos2Val === "X" && pos3Val === "X") {
            showWinner("X");
            boxes.forEach(box => box.disabled = true); // Disable all boxes
        }
    }
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
};
