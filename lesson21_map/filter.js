/*
Filter Function
Filter takes each number inside the array
returns that meets with specific condition
*/
var  numbers=[3,56,2,48,5];
//how do we get the numbers that is only greater than 10
const newNumbers= numbers.filter(

function(num){
  return num>10;
}

)
console.log(newNumbers);//[56, 48]

//We can make this code shorter using arrow functions
//delete function keyword and use => between the input and the body

// const newNumbersArrow=numbers.filter(
// (num)=>{
//   return num>10;
// }
// )

//I can delete return and {}
// const newNumbersArrow=numbers.filter(
// (num)=> num>10
// )

//I can delete the paranthesis around the input, becuase there is single parameter
const newNumbersArrow=numbers.filter(num => num>10);
console.log(newNumbersArrow);//[56, 48]

//HOW CAN I DO THIS USING FOR EACH. 
//THIS IS NOT PART OF FILTER. THIS IS JUST TO SEE HOW WE CAN DO WITH FOR EACH
//Step 1: Create an empty array
var newNumbersForEach=[];
numbers.forEach(
function(num){
  if(num>10){
    newNumbersForEach.push(num);
  }
}
)
console.log(newNumbersForEach);//[56, 48]

//WE CAN SOLDE WITH FOR EACH AND TERNARY AS WELL
const newN2=[];
numbers.forEach(x=>x>10?newN2.push(x):newN2.push())
console.log(newN2);//[56, 48]