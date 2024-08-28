"use strict";
function createPerson(name, age) {
    return { name, age };
}
let person1 = createPerson("Akshaya", 22);
let person2 = createPerson("Akshi", 17);
let people = [person1, person2];
let eligibleForVote = people.filter(person => person.age >= 18).map(person => person.name);
let notEligibleForVote = people.filter(person => person.age < 18).map(person => person.name);
console.log("Eligible for Vote:", eligibleForVote);
console.log("Not Eligible for Vote:", notEligibleForVote);
//optional parameters
function greets(name, greeting) {
    if (typeof greeting !== 'undefined') {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}
console.log(greets("Akshaya"));
function calculateArea(length, width, height) {
    if (typeof height !== 'undefined') {
        return `${length * width * height}`;
    }
    return length * width;
}
console.log(calculateArea(5, 10));
console.log(calculateArea(5, 10, 2));
function connect(config = { host: "localhost", port: 8080 }) {
    return `Connecting to ${config.host} on port ${config.port}`;
}
console.log(connect());
console.log(connect({ host: "example.com", port: 3000 }));
//rest parameters
function analyze(...args) {
    let total = 0;
    let charCount = 0;
    args.forEach((arg) => {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            charCount += arg.length;
        }
    });
    return [total, charCount];
}
const [summ, characterCount] = analyze(10, 'Hello', 20, 'World', 5, 'TypeScript');
console.log({ summ });
console.log({ characterCount });
function summarize(...args) {
    let total = 0;
    let combinedString = '';
    let trueCount = 0;
    args.forEach((arg) => {
        if (typeof arg === 'number') {
            total += arg;
        }
        else if (typeof arg === 'string') {
            combinedString += arg;
        }
        else if (typeof arg === 'boolean' && arg === true) {
            trueCount += 1;
        }
    });
    return [total, combinedString, trueCount];
}
const [adds, concatenatedString, trueBooleans] = summarize(5, 'Hello', true, 10, false, 'World', true, 15);
console.log({ adds });
console.log({ concatenatedString });
console.log({ trueBooleans });
function getValue(value) {
    if (typeof value === "string") {
        return `${value}`;
    }
    else if (typeof value === "number") {
        return `${value}`;
    }
}
const stringValue = getValue("Hiiii");
const numberValue = getValue(1234523);
console.log(stringValue);
console.log(numberValue);
function mul(arg1, arg2) {
    if (Array.isArray(arg1)) {
        return arg1.reduce((acc, curr) => acc * curr, 1);
    }
    else if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 * arg2;
    }
    else {
        throw new Error("Invalid arguments");
    }
}
// Usage
const arrayProduct = mul([1, 2, 3, 4, 5]); // 120
const valueProduct = mul(10, 20); // 200
console.log(arrayProduct);
console.log(valueProduct);
