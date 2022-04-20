/*
Functions can be used before or after declaring them
*/
add(1,2);//3
function add(a,b){ 
  console.log(a+b);  
}
add(4,2);//6

//We can declare a function without a name
var diff=function(x,y){
  var d = x-y;
  console.log(d);
}

diff(3,4);//-1

//create a anonymous function with 3 parameter 
//and put in a variable named sum
//print the result using sum.
//arguments: 4,5,6 -> 15
var sum = function(x, y, z){
    var result = x+y+z
    console.log(result)
}
sum(4,5,6);

//This way is common
var sum=function(a,b,c){
  return a+b+c;
}
console.log(sum(4,5,6));