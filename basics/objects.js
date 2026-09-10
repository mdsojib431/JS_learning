const person={
   name:"sojib",
   age:23,
   wife:"ruhani" 
}
person.name="jihad"
//console.log(person.wife)

person.car="mersedes" // we can extra properties like this

delete person.wife;
//console.log(person.wife)

// ................Constructor function.............

function Person2(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person2("Rahim", 21);
const person2 = new Person2("Karim", 22);
//console.log(person2.name)

//.................using constructor within a Class................
class wife{
   constructor(name,age){
      this.name=name;
      this.age=age;
   }
}
const labim=new wife("sohani",20);
const rakib=new wife("ajmeri",23);

//console.log(labim["name"]) // bracket notation : we can also use it to fecth the data

// for(let x in wife){
//    console.log(wife[x])
// }
// we cannot use for loop as this . beacause it is in the class 
for(let x in labim){
   //console.log(labim[x]) // for the class we have use the object to fetch the data
 }

// ..............Methods within the objects..........
const person4 = {
    name: "Sojib",

    greet(age) {
       // console.log("Hello " + this.name,"And the age is" ,age);
    }
};

person4.greet(23);

// ................nested objects............

const company = {
    name: "ABC",

    manager: {
        name: "Rahim",

        address: {
            city: "Dhaka",

            office: {
                floor: 5
            }
        }
    }
};

//console.log(company.manager.address.city);

// ...............Object Destructuring.............
// this means -> Destructuring allows you to take values out of an object or array and put them into variables easily.

const personalInfo = {
    name: "Sojib",
    age: 22,
    city: "Kushtia"
};
const{name:Myname,age,city}=personalInfo

// console.log(Myname);
// console.log(age);
// console.log(city);

//................ spread operator................

const numbers = [10, 20, 30];
const newNumber=[...numbers];

console.log(newNumber);

const a = [1, 2, 3];
const b = [4, 5, 6];

const result = [...a, ...b];

console.log(result);


const mYself = {
    name: "Sojib",

    address: {
        city: "Kushtia"
    }
};

const copy = {
    ...mYself
};

copy.address.city = "Dhaka";
console.log(mYself.address.city); // this will print Dhaka Because both objects refer to the same nested address object.
console.log(copy.address.city);

// though we copy mYself into the copy but they are connected to the same address. that why changing in anyone will affect both

//....................Rest Operator................

function student(name, age, ...subjects) {
    console.log(name);
    console.log(age);
    console.log(subjects);
}

student(
    "Sojib",
    22,
    "JavaScript",
    "Node.js",
    "MongoDB"
);

const user = {
    name: "Sojib",
    age: 22,
    city: "Kushtia",
    country: "Bangladesh"
};
const { name, ...others } = user;


//..............operational chaining ..................

// Optional chaining prevents errors when you're trying to access something that might not exist.

const laptop={
   brand:"lenovo"
}

//console.log(laptop.processor.name)    // this cause an error bacause there are no processor section. 
// we can avoid this error by using operational chainning
console.log(laptop.processor?.name); // this is now show the undifined not the error

const user2 = {
    name: "Sojib",
    address: {
        location: {
            city: "Kushtia"
        }
    }
};

console.log(user2.address?.location?.city);

console.log(user2?.phone)

// this is very userful for checking the properties exist or not without showing the error



