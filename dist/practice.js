"use strict";
let arr = ["Hello", true];
console.log(arr);
function abcde(arg) {
    return arg;
}
let strr = abcde("Akshaya");
let numm = abcde(2001);
console.log(strr, numm, "Generics");
//Another method in generics
function domesticAnimal(A1, B1) {
    return [A1, B1];
}
console.log("domesticAnimals", domesticAnimal("Dog", "Cat"));
let Danimals = domesticAnimal("Dog", "Cat");
let Wanimals = domesticAnimal("Lion", "Cow");
let Danimalsonly = [];
let Wanimalsonly = [];
function checkAnimal(x, y) {
    if (x === "Dog" || x === "Cat" || x === "Cow") {
        Danimalsonly.push(x);
    }
    else if (x === "Lion") {
        Wanimalsonly.push(x);
    }
    if (y === "Dog" || y === "Cat" || y === "Cow") {
        Danimalsonly.push(y);
    }
    else if (y === "Lion") {
        Wanimalsonly.push(y);
    }
}
checkAnimal(Danimals[0], Danimals[1]);
checkAnimal(Wanimals[0], Wanimals[1]);
console.log("Domestic Animals Only:", Danimalsonly);
console.log("Wild Animals Only:", Wanimalsonly);
