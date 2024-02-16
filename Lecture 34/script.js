// Loops.

// 1) For Loop in JavaScript.
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// i = 0
// i < 5
// i++ (this will add 1 number in the i)
// i = 1
// i < 5
// i++
// i = 2
// i < 5
// i ++
// i = 3
// i < 5
//  i++
// i = 4

// 0,1,2,3,4

//  2) While loop in JavaScript.
// let j = 0;
// while (j <= 6) {
//   console.log(j);
//   j++;
// }

// 3) For in Loop
// const fruits = ["apple", "banana", "cherry"];
// for (let i in fruits) {
//   console.log(`${fruits[i]}`);
// }

// 4) For of Loop
// const car = ["BMW", "Volvo", "Mini"];
// for (let brand of car) {
//   console.log(`I like ${brand}.`);
// }

// let Name = "JavaScript";

// let text = "";
// for (let y of Name) {
//   text += y;
// }


// function concatenateString(str) {
//     let text = "";
//     for (let char of str) {
//       text += char; //i++
//     }
//     return text;
//   }

//   let Name = "JavaScript";
//   console.log(concatenateString(Name)); // logs "JavaScript"

//   Name = "Python";
//   console.log(concatenateString(Name)); // logs "Python"

// Conditional Statements
// if
// else
// else if
// switch

// let age = 17

// if (age > 18){
//     console.log("You're above 18! You are an adult.")
// }
// else if (age >= 18){
//     console.log( "You're 18! You're an adult.")
// }
// else{
//     console.log( "You're below 18! You are a minor")
// }

function updateDate() {
let day;
switch (new Date().getDate()){
    case 0:
        day = "Sunday";
        console.log(day)
        break;
    case 1:
        day = "Monday";
        console.log(day)
        break;
    case 2:
        day = "Tuesday";
        console.log(day)
        break;
    case 3:
        day = "Wednesday";
        console.log(day)
        break;
    case 4:
        day = "Thursday";
        console.log(day)
        break;
    case 5:
        day = "Friday";
        console.log(day)
        break;
    case 6:
        day = "Saturday";
        console.log(day)
}
return day;
}

updateDate();
// const day = updateDate();
// console.log(day)
// document.getElementById('date').innerHTML= 'Today is ' + day;

