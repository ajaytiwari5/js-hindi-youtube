//function is basically package and we used only name means we used as a chapter or library

function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
 //sayMyName   //refermce of function
 sayMyName()   //its also reference but it executable syntax

function addTwoNumbers(number1, number2)  //here we pass number, parameter
//const result = addTwoNumbers(3, 5)
{ 
    
    console.log(number1 + number2);  //here output is 8 but it not return output as a return value so it give result undifened 
}
//if we make definition of function then taken values are called parameter
//when we call function then its called argument

function addTwoNumbers(number1, number2){
     let result = number1 + number2 
     return result   //if we return function then after its no work

//the other method of retur is below
    //return number1 + number2  //the return value we store in a variable
}



function loginUserMessage(username = "sam"){    //if we passed the value we dont go below directlt return

    if(!username){           //we avoid undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
//console.log(loginUserMessage(""))  //if we pass empty string then answer is just logged in
// console.log(loginUserMessage()) //if we dont pass anything then output is undefined

//... is used for rest and spread both operator

function calculateCartPrice(val1, val2, ...num1){  //...num1 get all the value with remaining value as a array
 //here val1 get 200 and val2 get 400 then output is 400,2000
 
 return num1
}

 console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "ajay",
    prices: 199
}

function handleObject(anyobject){    //anyobject means we pass any object
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

handleObject({       //we pass object directly
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){        //we also pass array
    return getArray[1]    //here we write argument
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));