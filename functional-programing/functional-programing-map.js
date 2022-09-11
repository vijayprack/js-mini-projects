let greetings = ['Hello', 'Hi', 'Hey', 'Ho']

let wishToLowerCase = greetings.map(function(wish) {
    return wish.toLowerCase();
});

let wishToUpperCase = greetings.map(function(wish) {
    return wish.toUpperCase();
});

console.log(wishToLowerCase, wishToUpperCase);