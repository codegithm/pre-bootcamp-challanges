function SumOfmultiples(){
    let multiplesFound = []
    let sum = 0

    for(let i = 0; i<1000; i++){

// % returns the number after the comma
        if(i % 3 == 0 || i % 5 ==0){
            multiplesFound.push(i)
        }
    }

//add every multiple
   for(let i=0; i<multiplesFound.length; i++){
       sum = sum + multiplesFound[i]
   }
    return sum
};

// print test
console.log(SumOfmultiples());