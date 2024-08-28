"use strict";
const user = {
    id: 1,
    username: "Akshaya"
};
console.log(user.id);
console.log(user.username);
//using array
const integers = [1, 2, 3, 4, 5];
console.log(integers[1]);
const tuple = [1, "Hello"];
console.log(tuple[0]);
console.log(tuple[1]);
//using function
function printPerson(member) {
    console.log(`Name: ${member.name}, Age: ${member.age}`);
}
const member = { name: "Akshaya", age: 22 };
printPerson(member);
