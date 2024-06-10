
console.log(2 < 1);
console.log(2 >=1);
console.log(3 == 3);
console.log(2 != 2);

console.log("2" >  1);
console.log("02" > 1);  // it convert string to number automatically 

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/* the reason is that an equality check == and comprasions < > >= <= work differently
comparisions convert null  to a number treating as 0
that's why (3) null >= 0 is true and (1) is false
*/


console.log(undefined > 0);
console.log(undefined >= 0);
console.log(undefined  == 0);

// undefined not change at 0 so result is false

console.log("2" === 2);   // false because datatype is different and its compare datatype