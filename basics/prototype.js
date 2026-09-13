// console.log(globalThis);

const book={
    name:"wave propagation",
    page:1123,
    writer:(name)=> {return `BL thereja and ${name}`}
}
//bconst newBook=new book("Microwave Integration",1400); // we cannot add new info in objects like this

// console.log(newBook.name);
let a=book.writer("SK Sinha");
//console.log(book.__proto__);

//.......................Prototype.................


//Every normal JavaScript object has an internal link to another object called its prototype.


const user = { name: "Sojib" };

// Fetch the prototype of user
const proto = Object.getPrototypeOf(user);

console.log(proto === Object.prototype); // true

const globalVar = "I am global";

function outer() {
    const outerVar = "I am in outer";

    function inner() {
        const innerVar = "I am in inner";

        // 'inner' can access its own, outer's, and global variables
        console.log(innerVar);  // "I am in inner"
        console.log(outerVar);  // "I am in outer"
        console.log(globalVar); // "I am global"
    }

    inner();
    
    // Outer cannot look inward into inner
    // console.log(innerVar); // ReferenceError: innerVar is not defined
}






