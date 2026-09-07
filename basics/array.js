let fruits=["mango","lichi","guava","apple",23];

//.....................ForEach loop ......................

fruits.forEach((fruit,index)=>{
   // console.log("index : ",index ,"and fruit is : ",fruit)
})

let numbers = [10, 20, 30, 40];

numbers.forEach(function(number) {
    //console.log(number);
});

//................................Array Constructor......................

//let arrays=new Array(); // we cannot actually define the size of the array
// let arrays=[];// this is the most used method

const points1 = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];

//console.log(JSON.stringify(points1)) ;
//console.log(JSON.stringify(points2)); 

let str=new Array();
str.push("sojib");
str.push("raju");
str.push("mina");
str.push("raha");
str.forEach((name,index)=>{
    //console.log("the name of ",index+1,"th person is : ", name);
})

//..............................Array methods...........................

fruits.toString();// this method returns the elements of an array as a comma separated string.
fruits.length;
fruits.at(3);//to go the exact index
console.log(fruits.join("*"));
fruits.push("Kiwi");
fruits.pop();
fruits.shift();// this method removes the first array element and "shifts" all other elements to a lower index.
console.log(Array.isArray(fruits));// finds it is array or not

//fruits.splice(startIndex, deleteCount);  //to delete a specific element in an array in javascript without leaving undefined holes in the array


let index = fruits.indexOf("Mango");

if (index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits);
// to conacatenate to array we have to use the concat method
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);
console.log(JSON.stringify(myChildren));

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.toString())

const sorted = fruits.toSorted(); //The difference between toSorted() and sort() is that the first method creates a new array
// keeping the original array unchanged, while the last method alters the original array.
// fruits.toReversed();
fruits.sort();
fruits.reverse();
