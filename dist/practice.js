"use strict";
let arr = ["Hello", true];
console.log(arr);
//generics
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
class PairManager {
    constructor() {
        this.pairs = [];
        this.evenItems = [];
        this.oddItems = [];
    }
    addPair(item1, item2) {
        this.pairs.push([item1, item2]);
        this.categorizeItem(item1, item2);
    }
    categorizeItem(num, str) {
        if (typeof num === 'number' && num % 2 === 0) {
            this.evenItems.push(str);
        }
        else if (typeof num === 'number') {
            this.oddItems.push(str);
        }
    }
    getEvenItems() {
        return this.evenItems;
    }
    getOddItems() {
        return this.oddItems;
    }
}
const manager = new PairManager();
manager.addPair(1, "One");
manager.addPair(2, "Two");
manager.addPair(3, "Three");
manager.addPair(4, "Four");
console.log("Even Items:", manager.getEvenItems());
console.log("Odd Items:", manager.getOddItems());
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
function move(direction) {
    switch (direction) {
        case Direction.Up:
            console.log("Moving up");
            break;
        case Direction.Down:
            console.log("Moving down");
            break;
        case Direction.Left:
            console.log("Moving left");
            break;
        case Direction.Right:
            console.log("Moving right");
            break;
    }
}
move(Direction.Up);
move(Direction.Left);
