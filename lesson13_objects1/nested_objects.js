console.clear();
/* 
Object Name: personInformation
firstN = Jim --->>>String
lastN= Carrey --->>>String
age = 50 --->>>Number
address = {street = 5th Ave, city = New York City, State= New York}  --->>> OBJECT
hobbies = music, sports, hunting   --->>>ARRAY
salary = function(){return '150K yearly'}  --->>> FUCNTION
*/

const personInformation={
  firstN:'Jim',
  lastN:'Carrey',
  age:50,
  address:{
    street:'5th Ave',
    city:'New York City',
    state: 'New York'
  },
  hobbies:['music','sports','150K yearly'],
  salary:function(){
  return '150K yearly';
}  
}

console.log(personInformation);

console.log(personInformation.firstN);//"Jim"
console.log(personInformation.age);
//Getting the information from a nested object 
console.log(personInformation.address);
console.log(personInformation.address.street);//"5th Ave"
const myState=personInformation.address.state;
console.log(myState);//"New York"

console.log(personInformation.salary);
//function(){
// return '150K yearly';
// }
