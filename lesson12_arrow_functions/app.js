//ARROW FUNCTIONS
console.clear();
//Normal Function
function sum(a){
  return a+100;
}
//to get the value from this function we use function name
console.log(sum(9));//109

var sumResult=function(a){//anonymous function
  return a+100;
}
console.log(sumResult(10));//110

//ARROW FUNCTION CASE 1- function with one argument
//1. MUST. Remove function keyword and function name; and use => between the input and body
var arrow=(a)=>{
  return a+100;
}
console.log(arrow(11));//111. Works fine,but we can make the code shorter
//2. OPTIONAL. We can delete curly braces and return keyword 
var arrow=(a)=> a+100;
console.log(arrow(12));//112. Works fine, but I can make the code shorter, IF THERE IS ONLY ONE PARAMETER
//3. OPTIONAL. We can remove the paranthesis around the input
var arrow=a=> a+100;
console.log(arrow(13));//113

//ARROW FUNCTION CASE 2- function with more than one argument
//Traditional function with 2  parameters
function sum1(a,b){
  return a+b+100;
}
console.log(sum1(2,3));//105

var sumResult1=function(a,b){//anonymous function with 2 parameter
  return a+b+100;
}
console.log(sumResult(3,4));//103

//Writing arrow function 
//1. MUST. Remove function keyword and function name; and use => between the input and body
var arrow1=(a,b)=>{
  return a+b+100;
}
console.log(arrow1(6,7));//113. Works fine but i can make it shorter

//2. OPTIONAL. We can delete curly braces and return keyword 
var arrow1=(a,b)=> a+b+100;
console.log(arrow1(7,8));//115



//ARROW FUNCTION CASE 3- function with no parameter
//Traditional function with no parameter
var x=10;y=20;
function sum2(){
  return x+y+200;
}
console.log(sum2());//10+20+200=230.

var sumResult2=function(){
  return x+y+200;
}
console.log(sumResult2());//230

//Writing as Arrow function
//1. MUST. Remove function keyword and function name; and use => between the input and body
var arrow2=()=>{
  return x+y+200;
}
console.log(arrow2());//230
//2. OPTIONAL. We can delete curly braces and return keyword 
var arrow2=()=> x+y+200;
console.log(arrow2());//230