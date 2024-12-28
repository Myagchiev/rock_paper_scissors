let playerScore = 0;
let computerScore = 0;

function play(playerSelection) {
    const choices = ['Камень', 'Ножницы', 'Бумага'];
    const getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerSelection === getComputerChoice) {
        result = "Ничья! Оба выбрали " + playerSelection + ".";
    } else if (
        (playerSelection === 'Камень' && getComputerChoice === 'Ножницы') ||
        (playerSelection === 'Ножницы' && getComputerChoice === 'Бумага') ||
        (playerSelection === 'Бумага' && getComputerChoice === 'Камень')
    ) {
        result = "Вы выиграли! " + playerSelection + " побеждает " + getComputerChoice + ".";
        playerScore++;
    } else {
        result = "Вы проиграли! " + getComputerChoice + " побеждает " + playerSelection + ".";
        computerScore++;
    }

    document.getElementById('result').innerText = result;
    document.getElementById('playerScore').innerText = "Счет игрока: " + playerScore;
    document.getElementById('computerScore').innerText = "Счет компьютера: " + computerScore;
}