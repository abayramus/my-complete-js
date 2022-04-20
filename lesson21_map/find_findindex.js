/*
FIND AND FINDINDEX 
Find: Loops throught the arrya
and returns the first item that matches the condition
*/

//Find the FIRST number that is greater than 10
var numbers=[3,56,2,48,5];
const myNumber= numbers.find(

  function(eachItem){
    return eachItem>10; 
  }

)
console.log(myNumber);//56

//Solve the same question using arrow function
const myNumberArrow=numbers.find(number => number > 10)
console.log(myNumberArrow);//56

//findIndex: Loops through the array and Return the INDEX of the item that mathes with the condition
const myNumberIndex=numbers.findIndex(
function(eachItem){
    return eachItem>10; 
  }
)
console.log(myNumberIndex);//1 
//because first number greater than 10 is 56 And index of 56 is 1