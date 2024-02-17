// Functions in Javascript
// Types of Function.
// 1. Normal function.
// 2. Anonymous function.
// 3. Arrow function

function add(num1, num2) {
  return num1 + num2;
}

// let result = myfunction(4,3);

// Invokes means Calling the functions.

// Calculate the product of two numbers  using a function called multiply() and display the result on the screen.

let x = multiply(4, 10);

// Lets target the result id From HTML for printing the value on screen
document.getElementById("result").innerHTML =
  "This is the product of two numbers num1 and num2: " + x;

function multiply(num1, num2) {
  return num1 * num2;
}

// Convert Fahrenheit to Celsius:
function toCelsius(Fahrenheit) {
  return (5 / 9) * (Fahrenheit - 32);
}

let value = toCelsius(78);
document.getElementById("demo").innerHTML =
  "This is the conversion of Fahrenheit to Celsius: " + value;

// toCelsius - is your Function Object.
// toCelsius() - this will call the result.

let z = toCelsius(77);
let text = "The temperature is " + z + " Degree Celsius";
console.log(text);

let text1 = "The temperature is " + toCelsius(77) + " Degree Celsius";
console.log(text1);

// Anonymous functions.
let helloworld = function () {
  console.log("Hello World");
};
console.log(helloworld());

// Arrow function.
let arrowFunc = (x, y) => x + y;
console.log(arrowFunc(6, 7));

let helloworld1 = () => {
  console.log("Hello world!");
};

console.log(helloworld1());


document.getElementById("demo").innerHTML =
  "<h1>Hello</h1> <p> I am Printed From JavaScript</p>";
