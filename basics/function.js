
// usecase of argument
//The arguments Object (Array-like, NOT a real Array)
//Standard functions (function() {}) automatically create a built-in local variable called arguments.
//  It contains all passed arguments, but it is an Array-like object, not a true JavaScript array.
function add(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum+=arguments[i];
    }
    console.log("the sum is : ", sum);
}
add(2,4,3,7,4,1,9,5,1,113,234)

// but if we want to use argument as an array we have to follow (...args) method
function names(a,b,...args){
    if(a=='sadik' || b=='sadik') console.log("we found sadik in a and b block");
    else{
        var f=false;
        for(let i=0;i<args.length;i++){
            if(args[i]=='sadik'){ 
                console.log("sadik in the args");
                f=true;
                break;
            } 
        }
    }
    if(!f) console.log("sadik is not found")
}

names('ali','rezwan','naim','junaid','ohain')

// here args actually works like an array. so we can do array operation over the args

//.....................FUNCTION EXPREESSION.....................

//Hoisting is JavaScript's default behavior of allocating memory for variable and function declarations during the compile phase, before executing the code
// cannot call the fanuction before decleration.
//Because function expressions are assigned to variables, they follow variable hoisting rules rather than function hoisting rules

// sayHi();      cannot access from here
var sayHi=function(){
    console.log("hello");
}
sayHi();

//.........................Arrow function....................
//can skip the function keyword, the return keyword, and the curly brackets:

let muliply=(a,b)=>a*b;
console.log(muliply(6,5))

//If a function has only one parameter, you can omit the parentheses:

let square = x =>x*x;
console.log(square(4))

//You only get the automatic (implicit) return if you omit the curly braces {}.

//When you add curly braces {} to an arrow function, you are creating a Block Body.
// As soon as you open block curly braces, JavaScript disables automatic returns and expects explicit statements, requiring you to use the return keyword manually.
const hello = val => {
    console.log("i love you")
     return "Hello " + val;
}    
console.log(hello('atiya'))






















