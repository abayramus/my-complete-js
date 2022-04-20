/*
var, let, const
***var: 
1. Functional scope: available anywere inside entire function or block
2. can be reassign to a new value
*/

//Example 1:
var num;//Declaring a global variable using var but not initializing. Accessable everywhere
console.log(num);//undefined. Created but not initialized.

var num1=10;//create a global variable and initializin. ACCESSIBLE EVERYWHERE. I can use this var in the entire finction
function sum(){
    console.log(num1);
    
}
sum();//10

//Example 2:
function diff(num2){//creating a num2 parameter. This is not GLOBAL. only defined in this function
    var d;//each time this function is called, d variable will be recreated and equal to undefined.
    console.log(d);//undefined
    var d =1;
    console.log(d);//1
    var d =7;
    console.log(d);//7
    d= num1-num2;//num1 and num2 is already defined
    console.log(d);  
}

diff(4);//6. 
//console.log(d);//"ReferenceError: d is not defined. cause d is defined in the function
//console.log(num2);//"ReferenceError: num2 is not defined. cause d is defined in the function

//Example 3:
if(true){
var language='javascript';//NOTE: THIS IS DEFINED OUTSIDE OF THE BLOCKS AS WELL
console.log(language);//javascript.works fine
}
console.log(language);//javascript.works fine
var language='Java';//var let us reassign the value
console.log(language);//Java

/*
***let: ket and cont are ES6 features that was instroduces in 2015
1. blocked scope: works only inside the block id assigned inside a block
2. can be reassigned
*/

//Example 1:
let num5;//Declaring a variable using var but not initializing. Accessable everywhere
console.log(num);//undefined. Created but not initialized.

//let num=10;//will get error. this is only allowed using var
//console.log(num);//will get error

num5=1;//assigning new value without using let keywork. this is allowed. in var or let
console.log(num);//print 1. printing the new value.
//IN REAL APPLICATIONS WE DON'T WANT TO CHANGE THE VALUE OF THE APPLICATIONS.BECAUSE IT CAUSES BUGS
//FOR THIS REASON WE USE CONSTANT : const
//VALUE OF A VARIABLE(means can change) CAN CHANGE AND VALUE OF CONSTANT DOESN'T CHANGE

var num6=10;//create a global variable and initializin. ACCESSIBLE EVERYWHERE. I can use this var in the entire finction
//let num6=10;//This will not be accessible inside th efunction.Cannot access 'num6' before initialization
function sum(){
    // let num6=10;//thiswill work
    console.log(num6);  
}
sum();//10

//Example 2:
function diff(num2){//creating a num2 parameter. This is not GLOBAL. only defined in this function
    let d;
    console.log(d);//undefined
//  let d =1;//"SyntaxError: Identifier 'd' has already been declared
    d=5;
    console.log(d);//5  
    d= num2-2;//4-2
    console.log(d);//2
}

diff(4);//undefined, 5, 2
// console.log(d);//"ReferenceError: d is not defined. Because of let keyword
// console.log(num2);//"Referenc

//Example 3:
if(true){
let tool='VS Code';
console.log(tool);//Works Fine. We can only use inside this if since it is declared inside block
tool = 'IntelliJ';
console.log(tool);////IntelliJ
}
//console.log(tool);//error on the console.Only defined in the block that is defined

/*
***const: 
1. blocked scope: works only inside the block id assigned inside a block
2. cannot be reassigned
*/

if(true){
const otherSkills='react';
console.log(otherSkills);//Works Fine
//otherSkills='nodejs';//ERROR will be in the console
//console.log(otherSkills);

}
//console.log(otherSkills);//well get error.Only defined in the block that is defined

/*
WHICH ONE YOU SHOULD USE
We should use const if we don’t want to change a value 
We should use let when we want to change variables within a block such as loops
We should avoid using var unless we have specific case using var
var is at the function level so scope is wider
*/


const num7=0.5;//creating a constons and assigning 0.5
console.log(num7);//prints 0.5
//num1=8;//trying to assig new value/ WE GET ERROR ON THE CONSOLE CAUSE THE VALUE OF A CONSTANT DOESNT CHANGE
console.log(num7);//trying to log
//So in summary var vs const, if don't want to reassing use const, if you need to reassign use var
//-------------------------------------------------



/*
-----HOISTING---------
We can use vaariables before declaring them.
This is called Hoisting in Javascript
*/

//console.log(city);//undefined. WILL NOT THROW ERROR if var keyword is declared
city ='Dallas';
console.log(city);//Dallas
var city;//declaring var after assinging the value
/*
Javascript has two steps executing scripts
1. Creation
2. Execution 
ACTUAL CODE:
city ='Dallas';
console.log(city);//Dallas
var city;//declaring var after assinging the value
HOISTING :
var city;//declaring var after assinging the value
city ='Dallas';
console.log(city);//Dallas
BECAUSE var city; line gets the first line by js if var keyword is declared
*/

/*
NOTE: Same logic will NOT work for let and const variables
*/
// console.log(state);//"ReferenceError: Cannot access 'state' before initialization
// state='TX'
// let state;
zip='75000';
console.log(zip);//75000
var zip;

/*
Summary:
var declarations are globally scoped or function scoped while let and const are block scoped.
var variables can be updated and re-declared within its scope;
let variables can be updated but not re-declared;
const variables can neither be updated nor re-declared.
let and const is introduced was introduce with ECMAScript 2015
*/