const accountId = 1446
let accountEmail = "ajay@google.com"
var accountPass = "19393"
accountCity = "jaypur"
let accountState;

//accountId = 2 //not allowed

accountEmail = "papa@gmail.com"
accountPass = "9494"
accountCity = "kanpur"

/*
prefer to not use var
bcz of issue in block scope and function scope

*/


console.log(accountId);
console.table([accountEmail, accountId, accountPass, accountState, accountCity])