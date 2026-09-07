//......................Basics of Map of javascript.................

// to find out the repeated values of javascript
let age = [23, 12, 16, 32, 76, 23, 16, 23];

let countMap=new Map();
age.forEach(element => {
    if(countMap.has(element)){
        countMap.set(element,countMap.get(element)+1);
    }
    else{
        countMap.set(element,1);
    }
});
console.log(countMap);

for (let [value, count] of countMap) {
    if (count > 1) {
        console.log(value + " appears " + count + " times");
    }
}
// here map.get(key) actually find the value using the key 
// and map.has(key) mehtod find is it present in the map or not



//...................some methods..............
console.log(countMap.size);
countMap.delete(16);
//Map.prototype.forEach() has a different parameter order.
//it follows value,key pair
/*
map.forEach((value, key) => {
    // code
});
*/
countMap.forEach((repeatation,value)=>{
    console.log("the value is ",value," and repeatation is : ",repeatation);
})

// using keys(), values() methods to find key value pair of the map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let keys = "";
for (const x of fruits.keys()) {
  keys += x +" " ;
}
console.log(keys);

let values = "";
for (const x of fruits.values()) {
  values += x + " ";
}
console.log(values);