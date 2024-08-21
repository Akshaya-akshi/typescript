"use strict";
//DataTypes
let a = 10;
let b = 20;
function add(a, b) {
    return a + b;
}
console.log(add(a, b), "add");
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
    age: 21,
};
console.log(person);
//Type Alias
let x = 8;
console.log(a);
let coordinates = {
    x: 20,
    y: 20
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
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Blue;
console.log(Color);
