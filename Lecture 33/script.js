// DATA TYPES IN JAVASCRIPT

// 1) Primitive  Data Types:
/* In JavaScript, there are six primitive data types. These include null, undefined, boolean, number, string and symbol. */

// 1) Number
// 2) String
// 3) Boolean: True or False
// 4) Null
// 5) Undefined
// 6) Symbol
// 7) Bigint: This can hold values larger than 253-10^64. It is used to represent a number that is too large for JavaScript to handle (New in ES6): A new data type introduced in ECMAScript 6

// 2) Non-Primitive Data Types:
// Object

//  Number
let num = 10;
console.log(num);

let floatNum = 10.5;
console.log(floatNum);

let bigInt = 100000000000000n;
console.log(bigInt);

let num4 = Infinity;
console.log(num4);

// String
let str = "Hello World";
console.log(str);

let multiLineStr = `This is a  
Multi Line string`;
console.log(multiLineStr);

// Boolean
let boolTrue = true;
let boolFalse = false;
console.log(boolTrue, boolFalse);

// Null & Undefined
let nullVal = null;
let undefinedVal = undefined;
console.log(nullVal, undefinedVal);

// Objects
let obj = {
  name: "John",
  age: 30,
  city: "New York",
};

console.log(obj.name + ", " + obj.age + ", " + obj.city);

// Arrays
let arr = [1, 2, 3, "a", "b"];
console.log(arr[0], arr[1], arr[2]);

function sumArrayElements(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      total += arr[i];
    }
  }
  return total;
}

console.log("Sum of array elements: " + sumArrayElements(arr));



// Operators
// Arithmetic operators (+, -, *, /)
// let x = 5;
// let y = 7;

// console.log(x + y); // addition
// console.log(x - y); // subtraction
// console.log(x * y); // multiplication
// console.log(x / y); // division

// Increment and Decrement operators (++, --)
// x++; // postfix increment
// console.log(x); // 6

// x--; // postfix decrement
// console.log(x); // 5

// ++x; // prefix increment
// console.log(x); // 6

// y--; // prefix decrement
// console.log(y); // 6

// Comparison operators (==, !=, >, <, >=, <=)

let x = 5;
let y = 6;
if (x == y) {
  console.log("x is equal to y");
} else {
  console.log("x is not equal to y");
}

if (x != y) {
  console.log("x is not equal to y");
} else {
  console.log("x is equal to y");
}

if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not greater than y");
}

if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is not less than y");
}

if (x >= y) {
  console.log("x is greater than or equal to y");
} else {
  console.log("x is strictly less than y");
}

if (x <= y) {
  console.log("x is less than or equal to y");
} else {
  console.log("x is strictly greater than y");
}

// Logical operators (&&, ||) and (!)

let a = true;
let b = false;

if (a && b) {
  console.log("Both conditions are true");
} else {
  console.log("At least one condition is false");
}

if (a || b) {
  console.log("At least one condition is true");
} else {
  console.log("Both conditions are false");
}

if (!a) {
  console.log("The negation of a is true");
} else {
  console.log("The negation of a is false");
}

// Equality operators (==, ===, !=, !==)

if (5 == 5) {
  console.log("5 is equal to 5");
} else {
  console.log("5 is not equal to 5");
}

if (5 === 5) {
  console.log("5 is strictly equal to 5");
} else {
  console.log("5 is not strictly equal to 5");
}

if (5 != 3) {
  console.log("5 is not equal to 3");
} else {
  console.log("5 is equal to 3");
}

if (5 !== 4) {
  console.log("5 is strictly not equal to 4");
} else {
  console.log("5 is strictly equal to 4");
}

// Typeof  operator
x = "Hello";
console.log(typeof x); // Output: string

x = 12;
console.log(typeof x); // Output: number

// instanceof  operator
obj = new Object();
console.log(obj instanceof Object); // Output: true

function Person() {}
let personObj = new Person();
console.log(personObj instanceof Person); // Output: true

// Bitwise  operators
a = 8;
b = 12;

console.log(a & b); // Output: 0
console.log(a | b); // Output: 16
console.log(a ^ b); // Output: 4

/* Shift Operators */
console.log(a << 1); // Output: 16
console.log(a >> 1); // Output: 4
console.log(a >>> 1); // Output: 4

// & 5&1 0101 & 0001 0001 1
// | 5 | 1 0101 | 0001 5
// ~ ~5 ~0101  1010 10
// ^ 5 ^ 1 0101 ^ 0001 0100 4