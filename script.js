const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("#generate")
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e) => {
 userChoice = e.target.id 
 userChoiceDisplay.innerHTML = userChoice 
 generateComputerChoice()
 getResult()
}))

function generateComputerChoice() {
    // const randomNumber = Math.floor(Math.random() * 547824156) + "&5$#@TDX" use this to create a password generator software
    const randomNumber = Math.floor(Math.random() * 95420148623104) + "#@TD"





computerChoiceDisplay.innerHTML = randomNumber
}



/*
function getResult() {
    if (computerChoice  === userChoice){
        result = "it's a draw!"
    }

    if (computerChoice  === "rock" && userChoice === "paper"){
        result  = "You win!"
    }


    if (computerChoice  === "rock" && userChoice === "scissors"){
        result  = "You lost!"
    }

    if (computerChoice  === "paper" && userChoice === "scissors"){
        result  = "You win!"
    }

    if (computerChoice  === "paper" && userChoice === "rock"){
        result  = "You lose!"
    }

    if (computerChoice  === "scissors   " && userChoice === "rock   "){
        result  = "You win!"
    }


    if (computerChoice  === "scissors" && userChoice === "paper"){
        result  = "You lose!"
    }

    resultDisplay.innerHTML = result    
}

*/