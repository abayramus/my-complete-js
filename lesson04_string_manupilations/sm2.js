
   
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
var fname=prompt('Enter your name');
//capitilize the first letter
var firstLetter=fname.slice(0,1).toUpperCase();
//get the rest and convert to lower case
var restOfWord=fname.slice(1).toLowerCase();
//printing
console.log('Hello, '+firstLetter+restOfWord);
console.log(`Hello, ${firstLetter}${restOfWord}`);