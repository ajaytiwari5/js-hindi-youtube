// dattypes are two types primitive and non primitive according to call by value and call by reference

//primitive: 7 types- string, number, boolean, null, undefined, symbol(for making unique), BigInt

//non: array, object, function

/*JavaScript is a dynamically typed language. This means that variable types
 are determined at runtime, and you do not need to explicitly 
declare the type of a variable before using it. 
You can assign different types of values to a variable during its lifetime*/

let userMail;   //same automatic understand undefined
let userMail = undefined;   //same

const id = Symbol('123');     
const anotherId = Symbol('123');

//here these are not same because symbol make its unique. we check below
 
console.log(id === anotherId);  // false

const bigNumber = 648961649654649645n   //if we write n then it automatic consider as a BigInt

console.log(typeof bigNumber);   //for finding datatype

//the datatype of function is function object but mainally it writes function