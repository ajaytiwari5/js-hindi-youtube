//we can diclare object literal or constructor if we make by the constructor it is singletone
//in object we can define keys and value both object asume key as a string but in array only value 
// by object literal

const mySym = symbol("key1")  //if we use symol as a key then write[]
const jsUser = {
    "name": "ajay",   //no chance to access by 1st method
    age: 18,
    [mySym]: "myKey1",  //that is current syntax if we dont use[] then it treat as a string but now it is as a symbol
    location: "kanpur",
    mail: "at@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "tuesday"]
}

console.log(jsUser.mail);  //we access object but this method is not good
console.log(jsUser["mail"]);  //its fine method for accessing here mail is as a string 
console.log(jsUser[mySym]);

jsUser.mail = "ajay@google.com"  //we overwrite value
//Object.freeze(jsUser)  //we freeze the object means lock noone can change its

jsUser.greeting = function(){    //in js function treat as a variable
    console.log("jay hind");
}
jsUser.greetingTwo = function(){    
    console.log('jay hind, ${this.name}');  //here we refer name
}
console.log(jsUser.greeting);  //it gives function reference is not execute bcz it is method
console.log(jsUser.greeting()); 
console.log(jsUser.greetingTwo());

//object constructor

const tinderUser = new Object()
//const tinderUser = {}   its non singleton
console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "ajayti"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "at@gmail.com",
    fullName:{
        userFullName: {                //we also use object within object its called nesting object
            firstName: "ajay",
            lastName: "tiwari"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3{obj1, obj2}
console.log(obj3);  //its merge the obj1 and obj2 

//const obj3  = object.assign({}, obj1,obj2)   //its combined here {} is a target and obj1,obj2 is source 
//const obj3  = object.assignobj1, obj2)  //it is same as upper but here obj1 is target And other source it is not good
const obj3 = {...obj1, ...obj2}  //its better
console.log(obj3);  //we return a new object to memory

//when we fetch the value into database as a array ofv object

const user = [
    {
        id: 1,
        mail: "att@google.com"
    },
    {
        id: 2,
        mail: "attt@google.com"
    }
]
user[1].mail  //we get any value with this syntax

console.log(Object.keys(tinderUser));  //here we fetch the key here we get all key in a array form so its simple using loop etc.
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));  //its make array each key with own value and also all in an array

console.log(tinderUser.hasOwnProperty('mail'));  //we also use this syntax for asking these property existing

















































