let about = function(lang1, lang2, lang3) {
    return 'My name is ' + this.name + ' and I know ' + 
    lang1 + ', ' + lang2 + ' and ' + lang3 + ' languages .'
};

let person1 = {name: 'Robin'};
let person2 = {name: "Rohit"};
let languages = ['Hindi', 'English', 'Marathi', 'Bhojpuri'];

// let knowledge = about(person1,languages[0],languages[1],languages[3]); get wrong output

let knowledge = about.call(person2,languages[0],languages[1],languages[3]);
// let knowledge = about.call(person1,languages[0],languages[1],languages[3]);
console.log(knowledge);

