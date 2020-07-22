// declare a function
function taskFunction(num1,num2){
    if(num1 === 65 || num2 === 65){
        return true
    } else if(num1 + num2 === 65){
        return true
    }else{
        return false
    }
  
};   

// print test
console.log(taskFunction(63,2));