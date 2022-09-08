let randomBodyParts = ['hands', 'legs', 'eyes', 'mouth'];

let randomAdjectives = ['smily', 'boring', 'stupid', 'lazy'];

let randomWords = ['bird', 'dear', 'lion', 'monkey', 'dog'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 4)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * 4)];

let randomWord = randomWords[Math.floor(Math.random() * 5)];

console.log('Your ' + randomBodyPart + ' are like a ' + randomAdjective + ' ' + randomWord + ' !!!')