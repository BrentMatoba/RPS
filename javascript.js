function getComputerChoice(){
    //Randomly choose 1, 2, or 3
    let randfloat = Math.random() * 4
    let randint = Math.floor(randfloat)
    //Accounts for 0
    if (randint <= 1) {
        randint += 1
    }
    console.log(randint);

    //set variable to result
    const choices = ["rock", "paper", "scissors"]
    let computer_choice = choices[randint - 1]

    //console.log result (remove later)
    console.log(computer_choice)

    //return result
    return computer_choice;

}

getComputerChoice()