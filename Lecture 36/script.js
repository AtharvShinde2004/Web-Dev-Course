// Arrays in JavaScript.

// let x = 10;
// let y = 20;

// const x = [10, 20, 30];

const cars = ["Saab","Volvo","BMW"]

// Index of arrays
console.log(cars[1]);
// 0, 1, 2

// Length of an array
console.log(`The number of items in the array is ${cars.length}`);

// Using the JS Keyword new.
const cars1 = new Array("Saab18","Volvo","BMW")

document.getElementById("demo1").innerHTML = "This is a  list of my favorite cars: " + cars1;

// Changing elements in arrays.
cars[0] = "opel"

document.getElementById("demo").innerHTML = "This is a  list of my favorite cars: " + cars;

const fruits = ["Banana", "Orange" ,"Apple", "Mango"];

document.getElementById("fruits").innerHTML = fruits.toString();

console.log(fruits.toString());

// Array are objects.
console.log(typeof fruits)

let fruit = fruits.at(2)
console.log(fruit)

// document.getElementById("fruits").innerHTML = fruits.join(" _ ");

// document.getElementById("fruits").innerHTML = fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// fruits.unshift("Strawberry");
// delete fruits[0]
fruits.copyWithin(2,0,1)

document.getElementById("fruits").innerHTML = fruits;
console.log(fruits)

const arr1 = ["a","b","c"]
const arr2 = ["d","e","f"]
const arr3 = ["d","e","f"]
// Merge two arrays using concat() method.
const result = arr1.concat(arr2,arr3)
console.log(result)

const arr = [[1,2,3], [4,5,6], [7,8,9]];
console.log(arr)
const newarr = arr.flat();
console.log(newarr)

arr.splice(2,0,["Hello","World"])
console.log(arr);
const arr4 = arr.slice(1);
console.log(arr4);
