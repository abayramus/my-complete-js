/*
String Manipulations
*/
console.clear();
var str='I love javascript';
//length
var len=str.length;
console.log(len);//17

//indexOf
//find index of love
var indexOfLove=str.indexOf('love');
console.log(indexOfLove);//2

//slice(start-included,end-exluded) and substring(start,end)
//NOTE: Is there is no end index, then iend index will be last index
//str.slice(3) = str.slice(3,len)
//sliced(-3); returns last 3 characters
//sliced(-1); returns last character
//str.slice(6,2); returns "" bacause start > end index

//str.substring(-3) same as str.substring(0)
//str.substring(-5) same as str.substring(0)
//str.substring(6,2) same as str.substring(2,6)


//getting love
var slicedStr=str.slice(2,6);
console.log(slicedStr);//love
console.log(str.slice(2,6));//love
console.log(str.slice(3));//ove javascript. START 3 TILL END
console.log(str.slice(3,str.length));////ove javascript.
console.log(str.slice(-3));//ipt
console.log(str.slice(6,2));//"" bacause start > end index

console.log(str.substring(-3));//"I love javascript"
console.log(str.substring(len-3));//"ipt"
console.log(str.substring(6,2));//"love"
console.log(str.substring(2,6));//"love"

//toUpperCase and toLowerCase
console.log(str)
const capitalWords=str.toUpperCase();
console.log(capitalWords);//"I LOVE JAVASCRIPT"

const loweredWords=str.toLowerCase();
console.log(loweredWords);//"i love javascript"

//concat
var fName='John';
var lName='Walten';
var age=50;
var info=fName+' '+lName+' '+age;
console.log(info)
var concatted=fName.concat(lName);
console.log(concatted);//"JohnWalten"

//trim(); remove spaces from the begining and from the end
var words=' Today is Saturday  ';
console.log(words);//" Today is Saturday  "
var trimmed=words.trim();
console.log(trimmed);//"Today is Saturday"

//charAt('index'); returns the character in that index. index starts at 0
var charAt2=words.charAt(2);
console.log(charAt2);//"o"
var trimmedCharAt2=trimmed.charAt(2);
console.log(trimmedCharAt2);//"d"


//split('character'); Returns an array that is splitted from the given character
var splitted=words.split(' ');//split words from ' '
//                       ' Today is Saturday  '
console.log(splitted);//["", "Today", "is", "Saturday", "", ""]

var splitted2=trimmed.split(' ');
console.log(splitted2);//["Today", "is", "Saturday"]

var str2='TX,CA,NY,AR,FL';
var splittedStr2=str2.split(',');
console.log(splittedStr2);//["TX", "CA", "NY", "AR", "FL"]