const score = 400   //js auto detect its number

const balance  = new Number(100)   //here we detected we have only number datatype
console.log(balance);  

console.log(balance.toString());  //its change type of number to string
console.log(balance.toString().length);  //we also check the length
console.log(balance.toFixed(2));  //its use for fixing the value after point(100.0000) means here only two zero so output is 100.00

const otherNumber = 123.5469
console.log(otherNumber.toPrecision(3));    //its use for short the given value means here output is 124 and if value is 12.56 then output is 12.6

const hundreds = 1000000
console.log(hundreds.toLocaleString());    //its create comma in USA standard automatically 1,000,000 if we need to get indian value then we write in ('en-IN')

//-------------------------maths--------------------------

console.log(Math);  //it os object and many property here
console.log(Math.abs(-5));   //its change minus value to plus

//function always have()  but property not

console.log(Math.round(4.6));   //otput is 5 means it change decimal in int according to its value

console.log(Math.ceil(4.2));  //here output is 5 bcz its gave the highest value
console.log(Math.floor(4.2));  //here output is 4 bcz its gave lowest value

console.log(Math.min(2,5,4,6));    //find minimum value
console.log(Math.max(2,5,4,6));   //find maximum value

console.log(Math.random());   //it gives random value between 0 and 1

//if we need to random decimal value if we need between 1 to 9 then we multi with 10 and if we need 10 to 99 then multi with 100 and so on 

console.log((Math.random()*10) + 1);  //here we add 1 bcz if value is 0.05665555 then otput is 0 so here we add then we get 1 not none
console.log(Math.floor(Math.random()*10) + 1);     

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
//its a farmula for find the value between two number here we need to find the number between 10 to 20
//max - min + 1 its means 10 + 1 multi into random value and then add with min value for result between 10 to 20 and with the help of floor we avoid decimal value








