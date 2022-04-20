
/*
Spread operator is ued to combine arrays.
USE ... in front of the array to use spread operator
Similar to concatanation
*/

const fruits=['Apple','Kiwi','Cherry','Banana'];
const citrus=['lime','lemon','orange'];

//We can combine these two arraya.
//Way 1
//Add citrus inside fruits
citrus.forEach(
(item)=>fruits.push(item)
)

console.log(fruits);//["Apple", "Kiwi", "Cherry", "Banana", "lime", "lemon", "orange"]

//WE CAN COMBINE THESE TWO ARRAYS USING SPREAD OPERATOR
const allCombinations=['Apple','Kiwi','Cherry','Banana',...citrus];
console.log(allCombinations);//["Apple", "Kiwi", "Cherry", "Banana", "lime", "lemon", "orange"]

//I can use spread operator in anywhere in the array
const allConbinations1=['Apple',...citrus,'Kiwi','Cherry','Banana'];
console.log(allConbinations1);//["Apple", "lime", "lemon", "orange", "Kiwi", "Cherry", "Banana"]


//conbine arrays using spread operator
const allCombinations2=[...citrus,...fruits];
console.log(allCombinations2);//["lime", "lemon", "orange", "Apple", "Kiwi", "Cherry", "Banana", "lime", "lemon", "orange"]
                             //       CIRTUS               |        FRUITS


