// temperature in kelvin
let kelvinTemp = 290;

// temperature in degree celsius
let celsiusTemp = kelvinTemp - 273.15;

// temperature in degree fahrenheit
let fahrenheitTemp = celsiusTemp * (9/5) + 32;

// print result on console
console.log(fahrenheitTemp);
temp = Math.floor(fahrenheitTemp);
console.log(Math.ceil(fahrenheitTemp));
console.log(Math.round(fahrenheitTemp));
console.log('The temprature is ' + temp + ' degree Fahrenheit.');