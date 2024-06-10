const name = "ajay"
const repoCount =50

console.log(name + repoCount + " value");  //now these mathods are not used for concrinate

//  ` ` -string interplination- we directly inject variable and we used many method easly
//now a days these are used to concrinate 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('ajay-t-jay')  //it is other method for define string. here new is object

console.log(gameName[0]);
console.log(gameName.__proto__.);
console.log(gameName.toUpperCase());  //we use this feature directly but its not change original data
console.log(gameName.indexOf('t')));    //for finding position of character
console.log(gameName.charAt(2));   // for finding characetr at that position

const newstring = gameName.substring(0,4)  //for making substring we gave the starting and ending number
console.log(newstring);   //ajay is output here

const anotherstring = gameName.slice(-6,4)  //it is also substring method but here we also gave the negative staring and ending no.
console.log(anotherstring);

const newStringOne= "   ajay  "
console.log(newStringOne.trim());   //by using its we remove all space

//in url browser always change the space to %20

const url ="http//ajay%20tiwari.com"  //if we need to change the some things in url then we use its
console.log(url.replace('%20', '-'))   //here we write what is replace and what is writing in this place

console.log(url.includes("ajay"));  //by using its we know the ajay is in url or not means we search anything in url

console.log(gameName.split('-'));  //with the help of its we split means seprate the the string in behave of space or dais so we gave here dais















