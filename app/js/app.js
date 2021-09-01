let rpsGame = () => {
    let playerDiv = document.getElementById("player");
    let computerDiv = document.getElementById("computer");
    let finalText = document.getElementById("finalText");
    let rock = document.querySelector(".rock");
    let paper = document.querySelector(".paper");
    let scissors = document.querySelector(".scissors");
    let userChoices = [rock, paper, scissors];
    let Computerchoices = ['rock', 'paper', 'scissors'];
    let player;

    let randomNum = () => Math.floor(Math.random() * 3);
    let computer = Computerchoices[randomNum()];

    const data = {
        rock: `<div class="rock">
        <img src="images/icon-rock.svg" alt="rock">
        </div>`,
        paper: `<div class="paper">
        <img src="images/icon-paper.svg" alt="paper">
        </div>`,
        scissors: `<div class="scissors">
        <img src="images/icon-scissors.svg" alt="scissors">
        </div>`
    }

    userChoices.forEach(action => {
        action.addEventListener("click", () => {
            player = action.className;
            console.log(computer, player, checkWinner());
            console.log(data[`${player}`])
            playerDiv.style.display = "block";
            playerDiv.innerHTML = data[`${player}`];
            computerDiv.style.display = "block";
            computerDiv.innerHTML = data[`${computer}`];
            paper.remove();
            scissors.remove();
            rock.remove();
        });
    });

    const checkWinner = () => {
        if (computer === player) {
            finalText.innerText = "You tied";
        } else if (computer === "scissors") {
            if (player === "paper") {
                finalText.innerText = "Computer Won";
            } else {
                finalText.innerText = "You Won";
            }
        } else if (computer === "rock") {
            if (player === "scissors") {
                finalText.innerText = "Computer Won";
            } else {
                finalText.innerText = "You Won";
            }
        } else if (computer === "paper") {
            if (player === "rock") {
                finalText.innerText = "Computer Won";
            } else {
                finalText.innerText = "You Won";
            }
        }
        return finalText.innerText;
    }
}

rpsGame();