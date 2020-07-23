// from celcius to fahrenheit
function celciusConvertor(celcius){
    let fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit
};

// Print test
console.log(celciusConvertor(45))

// from fahrenheit to celcius
function fahrenheitConvertor(fahrenheit){
    let celcius = (fahrenheit - 32) * 5/9;
    return celcius
};

// Print test
console.log(fahrenheitConvertor(75))
