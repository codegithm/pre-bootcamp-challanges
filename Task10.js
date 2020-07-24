function findVowels(word){
    let vowels = ['a','e','i','o','u'];
    let strWord = word.toLowerCase().split('')
    let vowelsFound = '';

    for(let i = 0;i < vowels.length; i++){
        if(strWord.indexOf(vowels[i]) >= 0){
           vowelsFound += vowels[i]
        }
    }
    return vowelsFound
}

//For Testing Purpose
console.log(findVowels('Andile'));