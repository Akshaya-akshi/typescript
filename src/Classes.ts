class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayDetails(): void {
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}
const car1 = new Car('Toyota', 'Camry', 2022);
car1.displayDetails();



class Books {
    constructor(public make: string, public director: string, public year: number) {}

    displayDetails(){
        console.log(`${this.make} ${this.director} (${this.year})`);
    }
}

const book = new Books('Toy Story', 'John Lasseter', 2010);
book.displayDetails();




class Account {
    private accountNumber: string;
    protected balance: number;

    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    public deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}. New Balance: ${this.balance}`);
    }

    public getBalance(): number {
        return this.balance;
    }

    private generateAccountReport(): void {
        console.log(`Account Report for ${this.accountNumber}`);
    }
}

const myAccount = new Account('123456789', 1000);
myAccount.deposit(500); 
console.log(myAccount.getBalance());


abstract class Vehicle {
    abstract wheels: number;

    abstract start(): void;

    displayWheels(): void {
        console.log(`This vehicle has ${this.wheels} wheels.`);
    }
}


//Abstract 
class Bike extends Vehicle {
    wheels: number = 2;

    start(): void {
        console.log('The bike starts.');
    }
}

const myBike = new Bike();
myBike.start();           
myBike.displayWheels();

//inheritance

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dogs extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

const myDogs = new Dogs('Buddy');
myDogs.makeSound();