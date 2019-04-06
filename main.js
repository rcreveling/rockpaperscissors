
var input = document.getElementById("input");
poi = ["Rock", "Paper", "Scissors"];
//Player 1 Input ^ //
pti = ["Rock", "Paper", "Scissors"]
// Player 2 (automated) Input ^ //
let playerChoice = 0
let computerChoice = "";
var score = 0;
var botScore = 0;
var win = false;

function winOrLose(score, botScore) {
    if (score === 3 && botScore <= 2) {
        alert("Winner");

    } else if (score <= 2 && botScore === 3) {
        alert("You Lose!");
    }
}

var scoreDisplay = document.getElementById("scoreDisplay")
function changeScore(text) {
    console.log(text);
    return scoreDisplay.innerHTML = text;
}

var botScoreDisplay = document.getElementById("botScoreDisplay")
function botChangeScore(text) {
    return botScoreDisplay.innerHTML = text;
}

function scoreCalc(s, win) {

    if (s === 0 && win === true || s === 1 && win === true || s === 2 && win === true) {
        score++;
        changeScore(score);

        console.log(score);
    } else if (s === 0 && win === false || s === 1 && win === false || s === 2 && win === false || s === 3 && win === false) {
        botScore++;
        botChangeScore(botScore);

    }

    winOrLose(score, botScore);
    console.log(score);

}



function whoWins(computerChoice, playerChoice) {
    if (computerChoice === "Rock" && playerChoice === 1 || computerChoice === "Paper" && playerChoice === 2 || computerChoice === "Scissors" && playerChoice === 3) {
        alert("Tie!");

    }
    else if (computerChoice === "Rock") {
        switch (playerChoice) {
            case (2):
                alert("You won!");
                win = true;
                scoreCalc(score, win);

                break;
            case (3):
                alert("You lost!");
                win = false;
                scoreCalc(score, win);
                break;

        }

    }
    else if (computerChoice === "Paper") {
        switch (playerChoice) {
            case (3):
                alert("You won!");
                win = true;
                scoreCalc(score, win);

                break;
            case (1):
                alert("You lost!");
                win = false;
                scoreCalc(score, win);
                break;
        }
    }
    else if (computerChoice === "Scissors") {
        switch (playerChoice) {
            case (1):
                alert("You won!");
                win = true;
                scoreCalc(score, win);

                break;
            case (2):
                alert("You lost!");
                win = false;
                scoreCalc(score, win);

                break;
        }
    }
}

function randomValue() {
    var max = 2;
    var min = 0;
    var randomArray = Math.floor((Math.random() * (3) + 0));
    var computerChoice = (pti[randomArray]);
    console.log(computerChoice);
    whoWins(computerChoice, playerChoice);
}



function gamePlayFunction(i) {
    randomValue();
    if (i === poi[0]) {
        playerChoice = 1;
        console.log(playerChoice)
    } else if (i === poi[1]) {
        playerChoice = 2;
        console.log(playerChoice)
    } else if (i === poi[2]) {
        playerChoice = 3;
        console.log(playerChoice)
    }

}


input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();

        gamePlayFunction(input.value);
    }
})



