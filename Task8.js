function convertToTime(num){
    let div = num/60;
    let fixedDiv = div.toFixed(2);
    // make div an array
    let arrDiv = fixedDiv.toString().split('.');

    // turn string to int
    let hour = parseInt(arrDiv[0]);
    let decNum = parseFloat(arrDiv[1] / 100);
    let minutes = 60 * decNum;
    let roundedMin = Math.round(minutes);
    let time = hour+" hours "+roundedMin+" minutes";
    return time
};

//For Testing Purpose
console.log(convertToTime(133))