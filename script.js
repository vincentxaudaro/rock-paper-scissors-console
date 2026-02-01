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

console.log(getHumanChoice())