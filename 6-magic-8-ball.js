let userName = prompt("What is your name?");
if (userName) {
    console.log('Hello ' + userName);
} else {
    console.log('Hello!')
};

let userQuestion = prompt("Please ask a question!");
if (userQuestion){
    console.log(userName + '\'s question is ' + userQuestion);
} else {
    console.log('Ask question!');
};

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = String();
switch(randomNumber) {

    case 0:
        console.log('Better not tell you now.');
        break;

    case 1:
        console.log('Concentrate and ask again.');
        break;
    
    case 2:
        console.log('Reply hazy try again.');
        break;

    case 3:
        console.log('Can not predict now.');
        break;

    case 4:
        console.log('My reply is no.');
        break;

    case 5:
        console.log('My sources say no.');
        break;
    
    case 6:
        console.log('Outlook not so good.');
        break;

    case 7:
        console.log('Signs point to yes.');
        break;
};
