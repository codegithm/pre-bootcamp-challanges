function matchedLetters(word1,word2){

    let firstArr = word1.toLowerCase().split('');
    let secArr = word2.toLowerCase().split('');
    let match = [];

    for(let i = 0; i<firstArr.length; i++){
        if(secArr.indexOf(firstArr[i]) >= 0 && match.indexOf(firstArr[i]) < 0){
           match.push(firstArr[i]); 
        }
    }

    return match
}

//For testing purpose
console.log(matchedLetters('computers','house'));