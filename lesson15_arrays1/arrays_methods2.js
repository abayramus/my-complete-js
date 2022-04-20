console.clear();
var fruits=['apple','orange','banana',false,10];
//index.     0.       1.       2.      3.    4
console.log(fruits);//["apple", "orange", "banana", false, 10]

//8. splice(startindex,number of item you want to delete )
fruits.splice(2,1);//start index=2,number of item to be deleted =1
console.log(fruits);
//fruits.splice(0,2);//remove the first 2 items

//INSERTING with splice method
//8. splice(startindex,number of item you want to delete,additem1,additem2,.. )
fruits.splice(1,0,'kiwi','peach');//deleting 0 item, inserting 2 items
/*
start index = 1
how many items will be deleted at index 1= 0
intert items in index of 1 = 'kiwi','peach'
*/
console.log(fruits);//["apple", "kiwi", "peach", "orange", false, 10]
fruits.splice(1,2,'strawberry','cherry','ananas');
/*
1 -> start index
2 -> delete 2 items: ["apple", "orange", false, 10]
'strawberry','cherry','ananas' -> insert these item
["apple",'strawberry','cherry','ananas', "orange", false, 10]
*/
console.log(fruits);//["apple", "strawberry", "cherry", "ananas", "orange", false, 10]

/*
We can use negative index. 
It means start from the last index
*/
fruits.splice(-1,0,8,9);//-1 represent index 1 from last
console.log(fruits);
