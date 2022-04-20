console.clear();
/*
Arrays:::::
Arrays are special type of object
In objects, we use keys to access the values
In arrays, we use index to acces the values
*/
//Declaring Arrays:
var friendList=['sam','tom','tim','jacob'];
//We can use new keyword to create arrays. Less common.
var friendList1=new Array('sam','tom','tim','jacob');
console.log(friendList);//["sam", "tom", "tim", "jacob"]
console.log(typeof(friendList));//"object"
console.log(friendList1);//["sam", "tom", "tim", "jacob"]

//Getting the values from the array
console.log(friendList[0]);//"sam"
console.log(friendList[4]);//undefined. Cause there is no value in 4th index

//Editting data
//Changing 2nd index to nancy
friendList[2]='nancy';
console.log(friendList);//["sam", "tom", "nancy", "jacob"]

//Adding data
//if there is already a data in that index, it will override
//if there is no data in that index, it will be added.
friendList[4]='john';
console.log(friendList);//["sam", "tom", "nancy", "jacob"]
//if i assign a value in the array using index, and if there is a gap,
//then js will assign undefined to the gap indexes
friendList[7]='alex';
console.log(friendList);//["sam", "tom", "nancy", "jacob", "john", undefined, undefined, "alex"]