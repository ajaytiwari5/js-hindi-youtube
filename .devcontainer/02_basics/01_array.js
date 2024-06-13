// array contains element we declareall the type of element number,boolean,string array is resizable

const myArr = [1,2,3,5,6,true,"aditya"]
console.log(myArr[0]);    //we print the number with the help of its own indexing we not acces directly any value

//shallow copy change in original array but deep copy does not change in original array its amke copy

const myArr2 = new Array(1,2,3)

//array method

myArr.push(7)
console.log(myArr);
myArr.pop()
myArr.unshift(6)   //its add number in first position in  array
myArr.shift()  //its remove first number

//some method who ask question ex. this no. is presented here or not? etc

console.log(myArr.includes(9));   //for finding  this is existing or not
console.log(myArr.indexOf(2));   //for finding index number if no. is not present here then output is -1

const newArr = myArr.join()  //its change the array to string
console.log(newArr);


//slice splice

console.log("A", myArr);
const myn1 = myArr.slice(1,3)  //it means start with 1 index and dont include 3 index output is only index of 1 and 2
console.log(myn1);    //1,2

console.log("B", myArr);
const myn2 = myArr.splice(1, 3)  //its means start with 1 index and also include index 3
console.log("c", myArr);    //0,4,5
console.log(myn2);  //1,2,3

//slice does not change array but splice changes the array and output of original array is here rather than element of splice

const marvel_hero = ["thor", "ironman","spiderman"]
const dc_hero = ["superman", "flash", "batman"]
marvel_hero.push(dc_hero)   //its combined araay to array means array within array
console.log(marvel_hero);  //means its make second array as a element of first of array
console.log(marvel_hero[3][1]);  //if we access flash then write this code bcz second array as a third element

//push allow to use existing array but concat operator allows ne array

const allhero = marvel_hero.concat(dc_hero)  //it merge the two array
console.log(allhero);

//in the place of concat we use spread 
//we understand with spread operator it is a broken glass cup means bikhara hua
//if we spread two array then all the element of these treat as a individual and merge it

const allnewhero = [...marvel_hero, ...dc_hero]
console.log(allnewhero);

const another_array = [1,2,3,[4,5,6],7,[7,8,9,[5,6,2]]]
const realanother_array = another_array.flat(Infinity)  //flat basically merge all in depth array and make a new array in place 
//of infinity we also write whoose deppth number where we should merge here 3 depth araay in array in array

console.log(realanother_array);


console.log(Array.from("ajay"));  //it change any value to aaray

console.log(Array.from({name: "ajay"})); //it is not change in array bcz of missunderstandind so it return empty array when its not change then return empty

//of return a array from the set of element it is similar as from

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));























