function findMax(a,b,c) {
    let arrOfNums = [a,b,c];
    let maxNum = 0;
    for(let i = 0; i < arrOfNums.length; i++){
        if(arrOfNums[i]>maxNum){
            maxNum = arrOfNums[i]
        }
    }
    return maxNum
};

//For Testing Purpose
console.log(findMax(2,7,6));


//Bonus: How can you change the code so it can take in any number of numbers?
function findMax2() {
    let arrOfNums2 = Array.from(arguments);        //construct an Array from the arguments
    let maxNum2 = 0;
    for(let i = 0; i < arrOfNums2.length; i++){
        if(arrOfNums2[i]>maxNum2){
            maxNum2 = arrOfNums2[i]
        }
    }
    return maxNum2
};

//For Testing Purpose
console.log(findMax2(2,7,6,6,8,2,9,14));
