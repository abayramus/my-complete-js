console.clear();
/*
Arrays Methods:::::
*/

var friendList=['sam','tom','tim','jacob'];
console.log(typeof(friendList));
console.log(friendList);
//1. push(): add element AT THE END of the array
friendList.push('alex');
console.log(friendList);
//2. unshift: add element AT THE BEGINNIG of the array
friendList.unshift('marry');
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob", "alex"]
//3. pop(): deletes the LAST item from the array
friendList.pop();
console.log(friendList);//["marry", "sam", "tom", "tim", "jacob"]
//4. shift: deletes the FIRST item form the array
friendList.shift();
console.log(friendList);//["sam", "tom", "tim", "jacob"]

console.clear();
var ages=[10,34,21,19,10];
console.log(ages)
console.log(typeof(ages));

//5.isArray -> checks if the variable is an array or not
const isTrue=Array.isArray(ages);
console.log(isTrue);//true
console.log(Array.isArray('30'));//false


//6. indexOf(item, from) -> returns first index of the item
//   lastIndexOf(item, from) -> returns last index of the item
//   Note: returns -1 if there is no matching item in the array
console.log(ages.indexOf(10));//0
console.log(ages.indexOf(10,1));//4. start looking at 10 starting from index if 1
console.log(ages.lastIndexOf(10));//4
console.log(ages.indexOf(19));//3
console.log(ages.indexOf(1));//-1

//7. includes(item, starting index) -> returns true if item is in the array
const itemExist=ages.includes(20);
console.log(itemExist);//false

const itemExist1=ages.includes(21);
console.log(itemExist1);//true
//var ages=[10,34,21,19,10];
//index      0  1  2. 3. 4
const itemExist2=ages.includes(21,3);
console.log(itemExist2);//false because There is no 21 after 3rd index