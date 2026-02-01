let humanScore = 0
let computerScore = 0


// Returns random choice of Rock, Paper, or Scissors for the computer
function getComputerChoice() {
    const randNum = Math.floor(Math.random() * 3)
    let choice

    switch (randNum) {
        case 0:
            choice = "rock"
            break
        case 1:
            choice = "paper"
            break
        case 2:
            choice = "scissors"
            break
    }

    return choice
}

// Gets users choice
function getHumanChoice() {
    let input = prompt("Please Enter: Rock, Paper, or Scissors")

    return input
}


// Plays the game using user input and computer choice
function playGame(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase()

    if (humanChoiceLower == computerChoice) {
        console.log("Its a tie")
    } else {
        switch (humanChoiceLower) {
            case "rock":
                if(computerChoice === "scissors") {
                    winnerOutput("You win", "human")
                } else {
                    winnerOutput("You lose", "computer")
                }
                break

            case "paper":
                if(computerChoice === "rock") {
                    winnerOutput("You win", "human")
                } else {
                    winnerOutput("You lose", "computer")
                }
                break
            
            case "scissors":
                if(computerChoice === "paper") {
                    winnerOutput("You win", "human")
                } else {
                    winnerOutput("You lose", "computer")
                }
                break

            default:
                console.log("Please input either Rock, Paper, or Scissors")
        }
    }

    console.log(`Scores: \n You: ${humanScore} \n Computer: ${computerScore}`)

    function winnerOutput(message, player) {
        console.log(message)
        
        if (player === "human") {
            humanScore++
        } else if (player === "computer") {
            computerScore++
        }

    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()


playGame(humanSelection, computerSelection)

