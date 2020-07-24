//declare function
function taskFunction (num1,num2){
    var sum = num1 + num2;
    
    //change sum to array
    var arrSum = sum.toString().split('');
    
    //find three in the array
    var findThree = arrSum.indexOf('3');
    
      if(num1 === 3 || num2 === 3 && findThree >= 0 ){
        return true
      }else{
        return false
      }
    };
    
   //For Testing Purpose
    console.log(taskFunction(10,3));