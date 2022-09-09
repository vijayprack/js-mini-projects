let getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput == 'bear' || userInput == 'human' || userInput == 'gun') {
        return userInput;
    } else {
        console.log('Wrong Input');
    };
};

let getComputerChoice = function(){
    let choices = ['bear', 'human', 'gun'];
    choice = Math.floor(Math.random() * 3);
    return choices[choice];
};

let determineWinner = function(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return 'Match Tied.';
    } 
    else if (userChoice == 'bear' && computerChoice == 'human' ||
    userChoice == 'human' && computerChoice == 'gun' ||
    userChoice == 'gun' && computerChoice == 'bear') {
        return 'You Won.';
    } 
    else if (userChoice == 'bear' && computerChoice == 'gun' ||
    userChoice == 'human' && computerChoice == 'bear' ||
    userChoice == 'gun' && computerChoice == 'human') {
        return 'Computer Won.';
    };
};

let playGame = function(){
    console.log("Please choose bear, human or gun.");

    let userChoice = getUserChoice('Bear');
    let computerChoice = getComputerChoice();

    console.log('Your choice is ' + userChoice + '. And computer choice is ' + computerChoice + '.');

    let winner = determineWinner(userChoice, computerChoice);
    console.log(winner);
};

playGame()