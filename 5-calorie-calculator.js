const { count } = require("console");

let inputCaloriesByDay = function(day) {
    switch(day) {

        case 'monday':
            return 3500;
            break;

        case 'tuesday':
            return 1500;
            break;

        case 'wednesday':
            return 2500;
            break;

        case 'thursday':
            return 1200;
            break;

        case 'friday':
            return 1700;
            break;

        case 'saturday':
            return 1500;
            break;

        case 'sunday':
            return 2100;
            break;
    };
};

let getTotalCalories = function() {
    return inputCaloriesByDay('monday') +
    inputCaloriesByDay('tuesday') +
    inputCaloriesByDay('wednesday') +
    inputCaloriesByDay('thursday') +
    inputCaloriesByDay('friday') +
    inputCaloriesByDay('saturday') +
    inputCaloriesByDay('sunday');
};

let getIdealCalories = function() {
    let idealDailyCalories = 2000;
    return idealDailyCalories * 7; 
};

let calculateHealthPlan = function() {
    let actualCalories = getTotalCalories();
    let idealCalories = getIdealCalories();

    if (actualCalories == idealCalories) {
        console.log("You ate just the right amount of food!");
    } else if (actualCalories > idealCalories) {
        console.log("Time to head to the gym!");
    } else {
        console.log("Time for seconds!");
    };
}

calculateHealthPlan();

console.log(getIdealCalories());
console.log(getTotalCalories());