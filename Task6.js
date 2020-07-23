function findMax(a,b,c) {
    let arrOfNums = [a,b,c];
    let maxNum = 0;
    for(let i = 0; i < arrOfNums.length; i++){
        if(arrOfNums[i]>maxNum){
            maxNum = arrOfNums[i]
        }
    }
    return maxNum
}

console.log(findMax(2,7,6));