//literals- fixed value
10.20
console.log(23.78);

// clear concept about let var const

if (true) {
    var x = "I leak outside!";
    let y = "I stay inside!";
}

console.log(x); // Outputs: "I leak outside!"
console.log(y); // ReferenceError: y is not defined

var name = "Alice";
var name = "Bob"; // Valid with var (overwrites quietly)

let age = 20;
//let age = 25; //  Uncaught SyntaxError: Identifier 'age' has already been declared
// function scoped : var is a function scoped that's mean it is accessible everywhere within the function
// block scoped : let is a block scoped . that's mean it is accesible only within curly braces'{}'
function start() {
    if (true) {
        var b = 45; // Function-scoped: Limited to start()
        let c = 12; // Block-scoped: Limited to if block
    }

    console.log(b); // Works! 'var b' ignores the 'if' block and stays accessible inside start().
    console.log(c); // Error! 'let c' cannot leave the 'if' block.
}

start();

console.log(b); // Error! 'var b' cannot leave the start() function.

// learn about the function scoped and block scoped properly
