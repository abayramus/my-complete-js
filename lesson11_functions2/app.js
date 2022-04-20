//Functions
function sum(){
  var num1=4;
  var num2=5;
  var total=num1+num2;
  return total;
}

console.log(sum());//9

//using result variable to get the outcome of sum() function
const result=sum();
console.log(result);

//Creating function
function square(s){
  return s*s;
}
//Printing results
console.log(square(5));//25
//Getting function and adding 1
const x=square(6)+1;
console.log(x);//37

console.log(square(5,6));//25
//          square(s)

//We can assign default values for the parameters
function addNums(num1=3,num2=4,num3=5){//creating variables, and assigning defaly values
  console.log(num1+num2);//5
  return num1+num2+num3; 
}

//defaults: 3,4,5
//new :     2,3,4 -> 2+3 , 2+3+4
console.log(addNums(2,3,4));//5, 9

//default: 3,4,5
//new :    2,3,5 ->2+3,  2+3+5
console.log(addNums(2,3));//5, 10

//default: 3,4,5 -> 3+4, 3+4+5
//There is no overriden the default values
console.log(addNums());//7, 12
