//declare function
function calculateArea(a,b,c){
    // side length
    let s = 0.5 * (a + b + c);
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area
};

//For Testing Purpose
console.log(calculateArea(3,7,5));