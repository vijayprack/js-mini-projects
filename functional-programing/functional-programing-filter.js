// let weather = [78, 48, 52, 57, 62, 71, 83, 75, 59];

// let niceWeather = function(temp) {
//     return temp > 60;
// };

// var goOutSide = weather.filter(niceWeather);

// console.log(goOutSide);

let forecast = [
    {day: 'sunday', sun: true},
    {day: 'monday', sun: false},
    {day: 'tuesday', sun: true},
    {day: 'wednesday', sun: true},
    {day: 'thursday', sun: false},
    {day: 'friday', sun: false},
    {day: 'saturday', sun: true},
];

let sunnyWeather = forecast.filter(function(weather){
    if (weather.sun === true){
        console.log(weather.day)
    };
});