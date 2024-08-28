"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails() {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}
const car1 = new Car('Toyota', 'Camry', 2022);
car1.displayDetails();
class Books {
    constructor(make, director, year) {
        this.make = make;
        this.director = director;
        this.year = year;
    }
    displayDetails() {
        console.log(`${this.make} ${this.director} (${this.year})`);
    }
}
const book = new Books('Toy Story', 'John Lasseter', 2010);
book.displayDetails();
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }
    getBalance() {
        return this.balance;
    }
    generateAccountReport() {
        console.log(`Account Report for ${this.accountNumber}`);
    }
}
const myAccount = new Account('123456789', 1000);
myAccount.deposit(500);
console.log(myAccount.getBalance());
class Vehicle {
    displayWheels() {
        console.log(`This vehicle has ${this.wheels} wheels.`);
    }
}
//Abstract 
class Bike extends Vehicle {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
    start() {
        console.log('The bike starts.');
    }
}
const myBike = new Bike();
myBike.start();
myBike.displayWheels();
//inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dogs extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
const myDogs = new Dogs('Buddy');
myDogs.makeSound();
