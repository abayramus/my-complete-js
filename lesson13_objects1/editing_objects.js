var person={
    fName:'John',
    lName:'Cash',
    age: 30
  };

/*EDITTING THE OBJECT:
There are 2 ways to change the properties of the objects
1. dot not notation  .
2. braket notation   []
*/

//Changing the fName of person using . notation
person.fName='Juan';
console.log(person.fName);//Juan
console.log(person);
/*
[object Object] {
  age: 30,
  fName: "Juan",
  lName: "Cash"
}
*/

//Changing the lName of person using [] notation
person['lName']='Walker';
console.log(person.lName);//"Walker"
console.log(person);

// person['fName']='Nancy';
var selection='fName';
person[selection]='Nancy';
console.log(person);
/*
[object Object] {
  age: 30,
  fName: "Nancy",
  lName: "Walker"
}
*/
//. notation is more common and usefull

//Adding a new property using . notation
person.country='USA';
console.log(person);
console.log(person.country);//"USA"
//OR I can use [] notation to add new property
person['ageLimit']=16;
console.log(person);
console.log(person.ageLimit);//16