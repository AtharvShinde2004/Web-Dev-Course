// Part 2 of Arrays in JavaScript.

/*
Array Search in JS.

1) Array indexof()
2) Array lastindexof()
3) Array includes()
4) Array find()
5) Array findindex()
6) Array findLast()
7) Array findLastindex()
*/

// Task 1: Using IndexOf().
let arr = [10, 20, 30, 40, 50];
console.log("The Index of the element is: " + arr.indexOf(30));

// Task 2: Using LastIndexOf().
let arr2 = [10, 20, 30, 10, 10];
console.log("The Last Index of the element is: " + arr2.lastIndexOf(10));

// Task 3: Using Includes().
let arr3 = [10, 20, 30, 40, 50];
if (arr3.includes(15)) {
  console.log("Element Found");
} else {
  console.log("Element Not Found");
}

// Task 4: Using Find().
let arr4 = ["apple", "banana", "cherry"];
let found = arr4.find((element) => {
  return element == "banana";
});
console.log(`Found Element using Find(): ${found}`);

// Task 5: Using FindIndex().
let arr5 = ["red", "green", "blue"];
let foundIndex = arr5.findIndex((element) => {
  return element == "green";
});
console.log(`Found Index using FindIndex(): ${foundIndex}`);

// Task 6: Using FindLast().
let arr6 = [10, 20, 10, 30, 10];
let foundLast = arr6.findLast((value) => value === 10);
console.log(`Found Last Value using FindLast(): ${foundLast}`);

// Task 7: Using FindLastIndex().
let arr7 = [10, 20, 10, 30, 10];
let foundLastIndex = arr7.findLastIndex((value) => value === 10);
console.log(`Found Last Index using FindLastIndex(): ${foundLastIndex}`);



/*
Array Sort in JS.

| Alpabetic Sort |

1) Array sort()
2) Array reverse()
3) Array toSorted()
4) Array toReversed()
5) Sorting Objects

| Numeric Sort |

1) Numeric sort()
2) Random sort()
3) Math.min()
4) Math.max()
5) Home Made Min()
6) Home Made Max()
*/

const fruits = [ 'lemon', 'orange', 'banana' ];

// Task 1: Alphabetic Sort.
fruits.sort();
console.log('Alphabetically sorted array of fruits: ', fruits);

// Task 2: Reverse the order of elements.
fruits.reverse();
console.log('Fruits reversed: ', fruits);

// Task 3: Convert an array into a Sorted one.
let sortedFruits = fruits.toSorted();
console.log("Converted Fruits to Sorted: ", sortedFruits);

// Task 4: Convert an array into a Reversed one.
reversedFruits = fruits.toReversed();
console.log("Converted Fruits to Reversed: ", reversedFruits);

// Task 5: Sorting objects by properties.
let people = [
    { name: 'John', age: 23 },
    { name: 'Jane', age: 32 },
    { name: 'Tom', age: 19 }
];
people.sort((a, b) => a.age - b.age); // Sort by age in ascending order.
console.log('People sorted by Age: ', people);

// Task 6: Sorting objects by multiple properties.
let people1 = people.sort(function (a, b) {
    let comparison = 0;
    if (a.name > b.name) {
        comparison = 1;
    } else if (a.name < b.name) {
        comparison = -1;
    }
    return comparison;
});
console.log('People sorted by Name then Age: ', people1);


const points = [40, 100, 1, 5, 12, 10];
points.sort(function (a, b) { return a - b });
let min = points[0]
let max = points[points.length-1]
console.log(`Points sorted in Descending Order: ${points}`);
console.log(min);
console.log(max);

function myarrMin(points){
    return Math.min.apply(null,points);
}
function myarrMax(points){
    return Math.max.apply(null,points);
}

console.log(myarrMin(points));
console.log(myarrMax(points));