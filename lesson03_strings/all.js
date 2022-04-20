/*
We can use '' or  "" to create a string variable
we might need to use backslack when we use string within a string
*/

var str1='Ahmet';
var str2='My name is \'Ahmet\'';
console.log(str2);//My name is 'Ahmet'

var str3="Bayram";
var str4="My last name is \"Bayram\"";
console.log(str4);//My last name is "Bayram"

var str5="My last name is 'Bayram'";
console.log(str5);//My last name is 'Bayram'
var str6='My last name is "Bayram"';
console.log(str6);//My last name is "Bayram"

var str7='My name is '+str1;
var str8="My last name is "+str3
console.log(str7);//My name is Ahmet
console.log(str8);//My last name is Bayram


//TEMPLETE STRING
//Temmplete string is an ECMA Script ES6 feature
//${}  symbol is used inside BACKTICT for templete string
//We can use backtick to write the code: this is known as templete laterals
//1. creating string Ahmet 


var firstName='Ahmet';
var lastName='Bayram';
var age = 18;
function fullName(){
    return firstName + ' '+lastName
}
const greeting=`Hi ${firstName}`//calling variable
console.log(greeting);//"Hi Ahmet"
const sayGreeting=`Hello im ${fullName()}`
console.log(sayGreeting);//"Hello im Ahmet Bayram"
//With templete strings we don't need to use + sign to concat
console.log(`My Name Is  ${firstName} ${lastName} and i am ${age}` );//My Name Is  Ahmet Bayram and i am 18
//OR
const myInfo=`My Name Is  ${firstName} ${lastName} and i am ${age}`;//My Name Is  Ahmet Bayram and i am 18
console.log(myInfo);