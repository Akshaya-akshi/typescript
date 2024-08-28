"use strict";
//Basic Types
//Type Annotation
let A1 = "Akshaya";
let A2 = 2001;
let A3 = true;
let lists = [A1, A2, A3];
console.log(lists);
let Rollnumbers = [20, 30, 50, 60];
console.log(Rollnumbers);
let persons;
persons = {
    name: 'Akshi',
    phno: 123456789,
};
console.log(persons);
let greeting;
greeting = function (name) {
    return `Hi ${name}`;
};
console.log(greeting('Akshaya'));
//Type Inference
let msg = "Hello, TypeScript!";
console.log(typeof (msg));
let counts = 10;
console.log(counts);
let isActive = true;
console.log(isActive);
function increment(counter) {
    return ++counter;
}
let count = 5;
console.log(increment(count));
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
let fruits = ["apple", "banana", "orange"];
console.log(typeof fruits);
const number = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
    console.log(num * 2);
    console.log(typeof num);
});
//Number
let B1 = 42.56;
let B2 = 1234;
let Abcd = B1 + B2;
let product = B1 * 2;
console.log(`Decimal Number: ${B1}`);
console.log(`Sum: ${Abcd}`);
console.log(`Product: ${product}`);
let C1 = 0o52;
let C2 = 0o123;
let sumOctal = C1 + C2;
let productOctal = C1 * 2;
console.log(`Octal Number: ${C1}`);
console.log(`Sum of Octal Numbers: ${sumOctal}`);
console.log(`Product of Octal Number: ${productOctal}`);
let bigIntNumber = 9007199254740991n;
let anotherBigInt = 123456789012345678901234567890n;
let sumBigInt = bigIntNumber + anotherBigInt;
let productBigInt = bigIntNumber * 10n;
console.log(`Big Integer: ${bigIntNumber}`);
console.log(`Sum of Big Integers: ${sumBigInt}`);
//Type String
const A4 = "TypeScript";
console.log(A4);
let firstName = "Akshaya";
let lastName = "Puduru";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
let Sentence = "TypeScript is awesome!";
console.log(Sentence.toUpperCase());
console.log(Sentence.toLowerCase());
console.log(Sentence.includes("awesome"));
console.log(Sentence.replace("awesome", "great"));
let part1 = "Hello";
let part2 = "World";
let combined = part1 + ", " + part2 + "!";
console.log(combined);
let text = "TypeScript";
console.log(`${text.length}`);
let sentence = "TypeScript is a superset of JavaScript.";
let substring = sentence.substring(0, 10);
console.log(substring);
let data = "apple,banana,orange";
let fruit = data.split(",");
console.log(fruits);
//Type Boolean
//Type Object
let employee;
employee = {
    firstName: 'Akshaya',
    lastName: 'Puduru',
    jobTitle: 'Full Stack Developer'
};
console.log(employee);
//type any
function fetchData() {
    return ["apple", "banana", "orange"];
}
{
    let data = "apple,banana,orange";
    console.log("String data:", data);
}
{
    let data = fetchData();
    console.log("Fetched data:", data);
}
let value;
value = 42;
value = "Hello";
value = { key: "value" };
value = [1, 2, 3];
console.log(value);
let data1 = fetchData();
if (typeof data1 === "string") {
    console.log("Data is a string:", data1);
}
else if (typeof data1 === "number") {
    console.log("Data is a number:", data1);
}
else {
    console.log("Data is of another type:", data1);
}
//void
const logSomething = () => {
    console.log("Doing something...");
};
logSomething();
const unknownRole = (role) => {
    throw new Error(`Invalid role: ${role}`);
};
const authorize = (role) => {
    switch (role) {
        case 'admin':
            return 'You can do anything';
        case 'user':
            return 'You can do something';
        case 'guest':
            return 'You can do nothing';
        default:
            // never reach here util we add a new role
            return unknownRole(role);
    }
};
console.log(authorize('admin'));
