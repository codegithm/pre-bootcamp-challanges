function convertToTime(num){
    let div = num/60;
    // make div an array
    let arrDiv = div.toString().split('.');
    
    // turn string to int
    let hour = parseInt(arrDiv[0]);
    let minutes = isNaN(0 + parseInt(arrDiv  [1])) ? 0: parseInt(arrDiv[1]).toString().substring(0,2);
    let time = hour+" hours "+minutes+" minutes";
    return time
};

// print test
console.log(convertToTime(175))