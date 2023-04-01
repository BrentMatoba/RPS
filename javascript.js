function getComputerChoice(){
    //Randomly choose 1, 2, or 3
    let randfloat = Math.random() * 4
    let randint = Math.floor(randfloat)
    //Accounts for 0
    if (randint <= 1) {
        randint += 1
    }


    //set variable to result
    const choices = ["rock", "paper", "scissors"]
    let computer_choice = choices[randint - 1]

    //return result
    return computer_choice;

}

function playRound(playerSelection, computerSelection){

    //makes function not case sensitive
    let playerlowered = playerSelection.toLowerCase();
    
    if (playerlowered == "rock"){
        if (computerSelection == "paper"){
            console.log("lose");
            return "loss";
        }
        else if(computerSelection == "rock"){
            console.log("tie");
            return "tie";
        }
        else if(computerSelection == "scissors"){
            console.log("win");
            return "win";
            
        }
    }


    else if (playerlowered== "paper"){
        if (computerSelection == "paper"){
            console.log("tie");
            return "";
        }
        else if(computerSelection == "rock"){
            console.log("win");
            return "";
        }
        else if(computerSelection == "scissors"){
            console.log("loss");
            return "loss";
        }
    }


    else if (playerlowered == "scissors"){
        if (computerSelection == "paper"){
            console.log("win");
            return "win";
        }
        else if(computerSelection == "rock"){
            console.log("loss");
            return "loss";
        }
        else if(computerSelection == "scissors"){
            console.log("tie");
            return "tie";
        }
    }
    
}


function game(){
    let playerPoints = 0
    let computerPoints = 0

    for (let i=0; i<5; i++){


        let computerSelection = getComputerChoice();
        let playerSelection = prompt()


        let result = playRound(playerSelection, computerSelection)

        if (result == "win"){
            playerPoints+=1
        }
        else if (result == "loss"){
            computerPoints +=1
        }
    }
    

    if (playerPoints > computerPoints){
        alert("You win!")
    }
    else if(playerPoints < computerPoints){
        alert("You lose!")
    }
    else{
        alert("You tie!")
    }


}
game()