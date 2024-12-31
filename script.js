let playerScore = 0;
let computerScore = 0;

const ROCK = 'Камень';
const SCISSORS = 'Ножницы';
const PAPER = 'Бумага';
const choices = [ROCK, SCISSORS, PAPER];

function play(playerSelection) {
    if (!choices.includes(playerSelection)) {
        document.getElementById('result').innerText = "Неверный выбор. Выберите Камень, Ножницы или Бумага.";
        return;
    }

    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    let result = playerSelection + " против " + computerSelection + ". ";

    if (playerSelection === computerSelection) {
        result += "Ничья!";
    } else if (
        (playerSelection === ROCK && computerSelection === SCISSORS) ||
        (playerSelection === SCISSORS && computerSelection === PAPER) ||
        (playerSelection === PAPER && computerSelection === ROCK)
    ) {
        result += "Вы выиграли!";
        playerScore++;
    } else {
        result += "Вы проиграли!";
        computerScore++;
    }

    document.getElementById('result').innerText = result;
    updateScores();
}

function updateScores() {
    document.getElementById('playerScore').innerText = "Счет игрока: " + playerScore;
    document.getElementById('computerScore').innerText = "Счет компьютера: " + computerScore;
}
