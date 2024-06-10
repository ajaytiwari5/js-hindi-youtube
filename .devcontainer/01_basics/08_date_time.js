let myDate = new Date()
console.log(myDate);   //curret date but not propery readable

//the type date is object
//month started in js is 0 and end 12

console.log(myDate.toString());  //its more readable then upper method, many string here pls use and practice this make date readable in different way

let myCreateDate = new Date(20,0,2024)  //we also our own date. here we also write date with using / or -
console.log(myCreateDate.toDateString);

let myTimeStamp = Date.now()
console.log(myTimeStamp);   //here output is in milisecond

console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));  //for changing milisecond to second

//we find only date,time,hours etc. with help of using get method ex. getDay,getDate etc.

newDate.toLocalString('default',{
    weekDay: "Long",                //we define here many parameter using this syntax
})




