/*
Reference Types: 
1. Functions
2. Objects
3. Array
*/
console.clear();
var fName='John';
var lName='Cash';
var age=30;
console.log(`${fName} ${lName} ${age}`);

//use person object to store the information
//Declaring person object and assigning key value pairs
var person={
  fName:'John',
  lName:'Cash',
  age: 30
};
//Printng the person object
console.log(person);
/*[object Object] {
  age: 30,
  fName: "John",
  lName: "Cash"
}*/
console.log(typeof(person));//"object"

//Getting properties of person object
console.log(person.fName);//"John"
console.log(person['fName']);//"John"
console.log(typeof(person.fName));//"string"
console.log(person.lName);//"Cash"
console.log(person.age);//30
console.log(typeof(person.age));//"number"





