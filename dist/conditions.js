"use strict";
//if else 
const max = 100;
let counter = 0;
if (counter < max) {
    counter++;
}
console.log(counter);
let Age = 20;
if (Age >= 18) {
    console.log("You are eligible to vote");
}
else {
    console.log("You are not eligible to vote");
}
let num1 = 7;
if (num1 % 2 === 0) {
    console.log(`${num1} is even.`);
}
else {
    console.log(`${num1} is odd.`);
}
//if else if
let num2 = -10;
if (num2 > 0) {
    console.log(`${num2} is positive.`);
}
else if (num2 < 0) {
    console.log(`${num2} is negative.`);
}
else {
    console.log(`${num2} is zero.`);
}
let marks = 85;
if (marks >= 90) {
    console.log("Grade: A+");
}
else if (marks >= 80) {
    console.log("Grade: A");
}
else if (marks >= 70) {
    console.log("Grade: B");
}
else if (marks >= 60) {
    console.log("Grade: C");
}
else {
    console.log("Grade: F");
}
let D1 = 10;
let D2 = 20;
let D3 = 15;
if (D1 > D2 && D1 > D3) {
    console.log(`${D1} is the largest number.`);
}
else if (D2 > D1 && D2 > D3) {
    console.log(`${D2} is the largest number.`);
}
else {
    console.log(`${D3} is the largest number.`);
}
//switch 
function getDayOfWeek(dayNumber) {
    let dayName;
    switch (dayNumber) {
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        case 7:
            dayName = "Sunday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
console.log(getDayOfWeek(1));
console.log(getDayOfWeek(5));
console.log(getDayOfWeek(8));
function trafficLight(color) {
    let action;
    switch (color.toLowerCase()) {
        case 'red':
            action = "Stop";
            break;
        case 'yellow':
            action = "Get Ready";
            break;
        case 'green':
            action = "Go";
            break;
        default:
            action = "Invalid color";
    }
    return action;
}
console.log(trafficLight('Red'));
console.log(trafficLight('Yellow'));
console.log(trafficLight('Green'));
console.log(trafficLight('Blue'));
//for 
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
const fruitss = ["apple", "banana", "cherry"];
for (let i = 0; i < fruitss.length; i++) {
    console.log(fruitss[i]);
}
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}
//while
let coun = 1;
while (coun <= 10) {
    console.log(`Counter: ${coun}`);
    coun++;
}
let n = 29;
let isPrime = true;
let i = 2;
while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
if (isPrime && n > 1) {
    console.log(`${n} is a prime number.`);
}
else {
    console.log(`${n} is not a prime number.`);
}
