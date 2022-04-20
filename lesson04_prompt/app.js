/*
Prompt:
Used to get input from the user.
We can store that input and use in our code
*/
console.clear();

var tweet = prompt('Write your tweet');
console.log(typeof(tweet));//"string"
var entered = tweet.length;//getting the entered number of charachter
const maxLength=280;
var remaining = maxLength-entered;
console.log(tweet);
// console.log('Entered ' + entered);
// console.log('Remaining ' + remaining);
console.log(`Sent : ${entered}. Remaining : ${remaining}`);


//Tweeter character limit: 280
//Get user's tweet 
//and print the number of character entered
//print the number of character that is left
//Entered : 30, Remaining 250