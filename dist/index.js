"use strict";
let a = 10;
let b = 20;
function add(a, b) {
    return a + b;
}
console.log(add(a, b), "add");
let x = 8;
console.log(x);
let str1 = "Akshaya";
let str2 = "Akshi";
function merge(str1, str2) {
    return str1 + str2;
}
console.log(merge(str1, str2));
let Abc = ["typescript", true];
console.log(Abc);
let person = {
    name: "Akshaya",
    age: 22,
};
console.log(person);
let coordinates = {
    w: "type",
    x: "script"
};
console.log(coordinates);
//Inline Type Annotations:
let username = "Alice";
let age = 30;
function greet(person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
greet({ name: "Akshaya", age: 22 });
//Union Types
let result;
result = 42;
result = "Hello";
console.log(result);
//enums
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
//generics
function createPair(X, Y) {
    return [X, Y];
}
console.log(createPair('HELLO', 2001));
function identity(arg) {
    return arg;
}
let str = identity("Hello");
let num = identity(2001);
console.log(str);
console.log(num);
let abcd = (x, y) => x + y;
let sum = abcd(5, 3);
console.log(sum);
//class types
class Dog {
    constructor(breed) {
        this.breed = breed;
    }
}
let myDog = new Dog("Golden Retriever");
console.log(myDog.breed);
