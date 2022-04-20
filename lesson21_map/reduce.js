/*
Reduce:
Accumulates/adding the values inside the array
Similar to map reduce.
Difference is this reduce function iterates + accumulates array values
Reduce hold on to the current value and add to the previous SUM
Array.reduce((accumulator,item)=>{
function body
}
)
*/
var     numbers=[3,56,2,48,5];
//accumulator:   3, 3+56=59, 3+56+2=61, 3+56+2+48=109
//eachNumber :   3,56,2,48,5

const myResult=numbers.reduce(
  function(accumulator,currentNumber){
//     console.log('Accumulator : '+accumulator);
//     console.log('Each Number : '+currentNumber);
    return accumulator + currentNumber;
  }
)
console.log('My Result : '+myResult);//"My Result : 114"

//Arrow function in the reduce function
var result = numbers.reduce(
  (acc,currentItem)=>{
//     console.log(acc);
    return acc+currentItem
  }
)

console.log('RESULT : '+result);//"RESULT : 114". 
//The sum of all numbers inside the array= 3+56+2+48+5 =114



/*
Create an array [4,5,6,7,8,-3]
And return the sum of the number
*/
var myNumbers=[4,5,6,7,8,-3];

var sumOfNumbers=myNumbers.reduce((accumulator,currentNumber) => accumulator+currentNumber)
console.log(sumOfNumbers);//27
// OR BELOW CODE WORKS

// var sumOfNumbers=myNumbers.reduce(
//  (acc,currentItem)=>{
//    return acc+currentItem;
//  }
// )
// console.log(sumOfNumbers);