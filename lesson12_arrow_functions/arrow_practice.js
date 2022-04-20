// ARROW FUNCTION HOMEWORK: 
//CONVERT EACH OF THE FUNCTION TO ARROW FUNCTION
//YOUR CHALLANGE IS TO CONVERT EACH FUNCTION AND SIMPLIFY
var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers1 = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers1);

////Filter - Create a new array by keeping the items that return true.
const newNumbers2 = numbers.filter(function(num) {
  return num < 10;
});
console.log(newNumbers2);
//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers3 = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
})
console.log(newNumbers3);
//Find - find the first item that matches from an array.
const newNumbers4 = numbers.find(function (num) {
  return num > 10;
})
console.log(newNumbers4);
//FindIndex - find the index of the first item that matches.
const newNumbers5 = numbers.findIndex(function (num) {
  return num > 10;
})
console.log(newNumbers5);

/*
SOLUTIONS:
*/
//Map -Create a new array by doing something with each item in an array.
const newNumbers11 = numbers.map(x =>x * 2);
console.log(newNumbers11);
////Filter - Create a new array by keeping the items that return true.
const newNumbers22 = numbers.filter(num => num < 10);
console.log(newNumbers22);
// Reduce - Accumulate a value by doing something to each item in an array.
//BELOW HAS TWO INPUT PARAMETER AND ONE SINGLE RETURN. WE CAN'T REMOVE INPUT PARANTHESIS, BUT SHORTEN THE RETURN
var newNumbers33 = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);
console.log(newNumbers33);
//Find - find the first item that matches from an array.
const newNumbers44 = numbers.find(num => num > 10);
console.log(newNumbers44);
//FindIndex - find the index of the first item that matches.
const newNumbers55 = numbers.findIndex(num => num > 10);
console.log(newNumbers55);