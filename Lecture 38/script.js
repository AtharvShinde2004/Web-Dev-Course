// Array Iteration

/*
1) Array forEach
2) Array map()
3) flatmap()
4) filter()
5) reduce()
6) reduceRight()
7) every()
8) some()
9) from()
10) keys()
11) entires()
12) with()
13) Spread()
*/

// Array forEach()
const numbers = [45, 4, 9, 16, 25];

let txt = "";

numbers.forEach(myFunction);
document.getElementById("Demo").innerHTML = txt;

function myFunction(value) {
  txt += value + "<br>";
}

// Array map()
const numbersMap = numbers.map(myFunctionMap);
document.getElementById("Demo").innerHTML = numbersMap;

function myFunctionMap(item) {
  return item * 2;
}

// Array flatmap()
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = arr.flatMap((e) => e * 3);

console.log(newArr);

// Array  Filter()
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

const citrusFruit = fruits.filter(fruitFilter);
console.log(`Citrus Fruits are ${citrusFruit}`);

function fruitFilter(fruit) {
  if (fruit === "Orange" || fruit === "Lemon") {
    return true;
  } else {
    return false;
  }
}

const age = [45, 4, 9, 16, 25];
const over18 = age.filter(ageOver18);

function ageOver18(num) {
  return num >= 18 ? true : false;
}

console.log("Over 18: " + over18);

// Array Reduce()
const array1 = [0, 1, 2, 3, 4];
let sumReducer = array1.reduce(addNumbersReduce);
console.log(`The sum is ${sumReducer}`);

function addNumbersReduce(total, Value) {
  return total + Value;
}

// Array ReduceRight()
const array2 = [10, 20, 30, 40, 50];
let rightSumReducer = array2.reduceRight(addNumbersReduciveRight);
console.log(`The Right Sum is ${rightSumReducer}`);

function addNumbersReduciveRight(Value, total) {
  return total + Value;
}

// Array every()
const num = [10, 23, 4, 3, 12];

let allover18 = num.every(checkAgeEvery);

console.log(allover18);

function checkAgeEvery(value1) {
    console.log(value1);
  return value1 >= 18;
}

// Array Some()
const arr1 = [1, 2, 3, 4, 5];

let someResult = arr1.some(myFunction1);
console.log(someResult);

function myFunction1(value2){
    return value2 > 18;
}

// Array From()

const arr4 = Array.from("ABCDEFG");
document.getElementById("Demo").innerHTML = arr4

// Array keys()

const fruits2 = [ 'Banana', 'Apple', 'Orange' ];

const keys = fruits2.keys();

let text = ""
for (let x of keys){
    text += x + "<br>"
}

document.getElementById("Demo").innerHTML = text

// Entires()
const fruit4 = ["Banana", "Orange", "Apple"];

const f = fruit4.entries();

for (let x of f) {
    document.getElementById("Demo").innerHTML += x + "<br>"
}

// With()

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
const myMonths = months.with(2 , "May");

document.getElementById("Demo").innerHTML = myMonths

// Spread(...)

const q1 = ["Jan" , "Feb", "Mar"];
const q2 = ["Apr" , "May", "Jun"];
const q3 = ["Jul" , "Aug", "Sep"];
const q4 = ["Oct" , "Nov", "Dec"];

const year = [...q1, ...q2, ...q3, ...q4];
document.getElementById("Demo").innerHTML = year;
