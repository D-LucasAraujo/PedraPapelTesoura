let playerPoints = 0;
let ComputerPoints = 0;

function getComputerChoice() {
    const gameTools = ["Pedra", "Papel", "Tesoura"];
    let computerResponse = gameTools[Math.floor(Math.random() * gameTools.length)]
    return computerResponse
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'PEDRA' && computerSelection == 'TESOURA') ||
        (playerSelection == 'TESOURA' && computerSelection == 'PAPEL') ||
        (playerSelection == 'PAPEL' && computerSelection == 'PEDRA')) {
            playerPoints += 1;
            console.log("Voce venceu. " + playerSelection + " vence " + computerSelection)
            console.log("Jogador: " + playerPoints + " Bot: " + ComputerPoints)

    } else if (playerSelection == computerSelection) {
            console.log("Empate -> " + playerSelection + ' - ' + computerSelection)

    } else {
        ComputerPoints += 1;
        console.log("Voce perdeu. " + computerSelection + " vence " + playerSelection)
        console.log("Jogador: " + playerPoints + " Bot: " + ComputerPoints)
    }
    
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Escolha: ");
        const computerSelection = getComputerChoice();

        console.log('Sua escolha: ' + playerSelection.toUpperCase());
        console.log('Computador: ' + computerSelection.toUpperCase());
        
        console.log(playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase()));
    }
    
}

game()