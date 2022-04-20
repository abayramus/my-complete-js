console.clear();
//1. Get one side of the square from the user 
//and print the area of the square on the console
var side=prompt('Enter one side of the square')
var area=side*side;//side**2
console.log(`Area : ${area}`);//"Area : 25"
// `Area : ${area}`. TO USE VARIABLE INSIDE `` I MUST USE ${}.

console.log(`Area : ${side*side}`);//"Area : 25"

//2. Get both sides of the rectangle from the user 
//and print the parameter of the rectangle on the console
//parameter:2*shortsize+longside
var shortSide=prompt('Enter short size');
console.log(typeof(shortSide));//string
var longSide=prompt('Enter long size')
console.log(typeof(longSide));//string
var parameter=2*shortSide+2*longSide;//2*2+2*3=10. + is addition CORRECT ANSWER
// 2 is number
// shortSide is number 
// 2*shortSide is a number
// for same reasons 2*longSide is also a number
// number + number = + is Addition
console.log(parameter);
console.log(2*(shortSide+longSide));//46. WRONG ANSWER. 2*(23). + concating 2 and 3 as 23. 2*23=46

//3. Get the radius of the circle from user and print the area of the circle on the console
const radius=prompt('Enter the radius');
//Math.pow(radius,2) => raising radius to power of 2
//Math.pow(3,5) => 3 to the power of 5
const areaOfCircle=Math.PI*Math.pow(radius,2);//pi*r^2
console.log(areaOfCircle);//when radius = 5 anwer = 78.53981633974483
//Rounding my answer to the nearins whole number
console.log(Math.round(areaOfCircle));//when radius = 5 anwer = 79

//4. Get both sides of the triangle and print the hypothenuse of the triangle. 
//Round your answer to the nearist whole number.
const side1=prompt('Triangle side 1')
const side2=prompt('Triangle side 2')
//Math.pow(side1,2) SAME AS side1**2
const hypothenus=Math.round(Math.sqrt(side1**2+side2**2));
console.log(hypothenus);//side1=5,side2=6, hypothenus=8

//5.Create a prompt : “Write your tweet” -> use prompt. 
// Type random text and calculate the number of sent character and the remaining character.
// Note  Max character for a tweet is 280.
var tweet = prompt('Enter your tweet');
var slicedTweet= tweet.slice(0,280);
var numOfUsedCharacter=slicedTweet.length;
var remainingCharacter=280-numOfUsedCharacter;

console.log(`Used character :  ${numOfUsedCharacter}. Remaining character : ${remainingCharacter}`);


