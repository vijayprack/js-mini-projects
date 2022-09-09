let inputCaloriesByDay = function(day) {
    switch(day) {
        case 'monday':
            return 3500;
        case 'tuesday':
            return 1500;
        case 'wednesday':
            return 2500;
        case 'thursday':
            return 1200;
        case 'friday':
            return 1700;
        case 'saturday':
            return 1500;
        case 'sunday':
            return 2100;
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