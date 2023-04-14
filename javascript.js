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
    

    //Determines if player wins/loses/ties, returns rounds result
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
            return "tie";
        }
        else if(computerSelection == "rock"){
            console.log("win");
            return "win";
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

function checkEnd () {
    if (game_number>4){
        if (score_number>0){
            alert("player wins");
        }
        else if(score_number<0){
            alert("computer wins");
        }
        else{
            alert("tie");
        }
    }
}


function game(){
    //executes a best of 5 game of rock, paper, scissors between the user
    //and the computer



    //score variables
    let playerPoints = 0
    let computerPoints = 0
    /*
    //for loop for five iterations
    for (let i=0; i<5; i++){

        //gets player and computer choices
        let computerSelection = getComputerChoice();
        let playerSelection = prompt()

        //assigns round result to a variable
        let result = playRound(playerSelection, computerSelection)

        //changes player or computer score based on round result
        if (result == "win"){
            playerPoints+=1
        }
        else if (result == "loss"){
            computerPoints +=1
        }
    
    }
    

    //determines who is the ultimate winner
    if (playerPoints > computerPoints){
        alert("You win!")
    }
    else if(playerPoints < computerPoints){
        alert("You lose!")
    }
    else{
        alert("You tie!")
    }

    */
}




let Scoreboard = document.getElementById("scoreboard");
let score = document.createTextNode(0);
//bug is because textnode, therefore cannot add numbers. Surely theres a different kind of node for numbers?
//Also remmeber you're on a diffrent git branch here
Scoreboard.appendChild(score);
let score_number = 0;
let game_number = 0;


document.getElementById("btn1").addEventListener("click", function(){
    result = playRound(prompt(), getComputerChoice())
    if (result == "win"){
        score_number += 1;
        console.log(score_number);
        score.nodeValue=score_number;
    }
    else if (result == "loss"){
        score_number -= 1;
        console.log(score_number);
        score.nodeValue = score_number;
    }
    game_number +=1;
    checkEnd();
});
document.getElementById("btn2").addEventListener("click", function(){
    result = playRound(prompt(), getComputerChoice())
    if (result == "win"){
        score_number += 1;
        console.log(score_number);
        score.nodeValue=score_number;
    }
    else if (result == "loss"){
        score_number -= 1;
        console.log(score_number);
        score.nodeValue = score_number;
    }
    game_number +=1;
    checkEnd();
});
document.getElementById("btn3").addEventListener("click", function(){
    result = playRound(prompt(), getComputerChoice())
    if (result == "win"){
        score_number += 1;
        console.log(score_number);
        score.nodeValue=score_number;
    }
    else if (result == "loss"){
        score_number -= 1;
        console.log(score_number);
        score.nodeValue = score_number;
    }
    game_number +=1;
    checkEnd();
});



game()
//calls game