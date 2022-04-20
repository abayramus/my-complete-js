/*
Ask user to enter a name: and print “Hello, Name”
Make sure only the first initial is always capital 
and the rest always small
Eg:
var name=ahmet;   =>>>>Ahmet
var name=aHmet;   =>>>>Ahmet
var name=AHMET;   =>>>>Ahmet
*/
console.clear();
//get input from user
var name=prompt('Enter your name');
//capitilize the first letter
var firstLetter=name.slice(0,1).toUpperCase();
//get the rest and convert to lower case
var restOfWord=name.slice(1).toLowerCase();
//printing
console.log('Hello, '+firstLetter+restOfWord);
console.log(`Hello, ${firstLetter}${restOfWord}`);