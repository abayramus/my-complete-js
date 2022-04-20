console.clear();
/*Strings:
' ' Single Quote
" " Double Quote
``  BackTick
*/

//Strings with ''
var myName = 'John';
var myLName= 'Cash';
//           My name is     John       Cash
var message='My name is '+myName+' '+myLName;
console.log(message);//"My name is John Cash"

//String with ""
var myName="John";
var myLName="Cash";
var message="My name is "+myName+" "+ myLName
console.log(message);//"My name is John Cash"

// String with ``
// `` is used for creating string and doing concatanation without + sign
//.              "My name is     John      Cash"
var newMessage = `My name is ${myName} ${myLName}`;
console.log(newMessage);//My name is John Cash"

//quote
console.clear();
var str2='My name is \'Ahmet\'';
console.log(str2)

str2="My name is 'Ahmet'";
console.log(str2)