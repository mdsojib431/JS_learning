//...............For loop...............
let fruits = ["Apple", "Mango", "Banana"];

for (let i = 0; i < fruits.length; i++) {
    //console.log(fruits[i]);
}

//..................while loop..............
//Use while loop when you don't know exactly how many times the loop will run.
let i = 0;

while (i < 5) {
    //console.log(i);
    i++;
}

//...................For of loop .................
//Use for...of to loop through values of an iterable, especially arrays and strings.


for (let fruit of fruits) {
    //console.log(fruit);
}

//....................For in loop...................
//Use for...in mainly to loop through object properties.
let person = {
    name: "Sojib",
    age: 22,
    country: "Bangladesh"
};

for (let key in person) {
    console.log(key, person[key]);
}

//.................For each loop...........

fruits.forEach((fruit) => {
    console.log(fruit);
});