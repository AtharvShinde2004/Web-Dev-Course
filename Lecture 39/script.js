// Objects in JavaScript
// A collection of key-value pairs.

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

const person = { "Name 1": "John Doe" , Age: 30 };
console.log(person);

const x = 10;

// Accessing properties
console.log("Name : ", person.Name1);
console.log("Age : ", person.Age);

// Adding a new property
person.Country = "USA";
console.log(person);

person.Name1 = "Atharv"
console.log(person);
// Deleting a property
delete person.Country;
console.log(person);

// Check if a property exists on an object using hasOwnProperty() method
if (person.hasOwnProperty('Name')){
    console.log("Yes, 'Name' is exist.");
} else {
    console.log("No, 'Name' is not exist.");
}


// Constructors
function Person(name, age){
    this.Name = name;
    this.Age = age;
};

var john = new Person("John", 25);
console.log(john);

Person.prototype.Job = "Engineer";
console.log(john);

var paul = new Person("Paul", 30);

// Objects Methods

/*
1) obj.assign()
2) obj.create()
3) Object.defineProperty()
4) Object.defineProperties()
5) Object.entries(obj) - returns array of [key, value] pairs
6) Object.freeze() - makes the object immutable
7) Object.getOwnPropertyDescriptor()
8) Object.getOwnPropertyNames()
9) Object.getPrototypeOf()
10) Object.isExtensible() - checks whether an object can be extended or not
11) Object.isFrozen() - checks whether an object is frozen or not
12) Object.isSealed() - checks whether an object is sealed or not
13) Object.keys() - returns an array containing all the enumerable properties of an object
14) Object.preventExtensions() - prevents new properties from being added to an object
15) Object.seal() - marks all existing properties of an object as non-configurable

*/
