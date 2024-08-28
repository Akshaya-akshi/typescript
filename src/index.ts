let a:number=10;
let b:number=20;
function add(a:number,b:number):number{
    return a+b
}
console.log(add(a,b),"add")


let x:number = 8
console.log(x);


let str1:string="Akshaya";
let str2:string="Akshi";
function merge(str1:string,str2:string):string{
    return str1+str2
}
console.log(merge(str1,str2))

let Abc:[string,boolean]=["typescript",true];
console.log(Abc)

//Interface
interface Person {
	name: string;
	age: number;
}
 
let person: Person = {
	name: "Akshaya",
	age: 22,
};
console.log(person)

 

//Type Alias
type word = {
	w: string;
	x: string;
};
 
let coordinates: word = {
	w: "type",
	x: "script"
};
console.log(coordinates);


//Inline Type Annotations:
let username: string = "Alice";
let age: number = 30;
 
function greet(person: { name: string; age: number }): void {
	console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
 
greet({ name: "Akshaya", age: 22 });

//Union Types
let result: number | string;
 
result = 42;
result = "Hello";
console.log(result);


//enums
enum StatusCodes {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	BadRequest = 400
  }
  console.log(StatusCodes.NotFound);
 
  console.log(StatusCodes.Success);

//generics
function createPair<S, T>(X: S, Y: T): [S, T] {
    return [X, Y];
}

console.log(createPair<string, number>('HELLO',2001));

  function identity<T>(arg: T): T {
    return arg;
}

let str: string = identity("Hello");
let num: number = identity(2001);

console.log(str);
console.log(num); 

//function types:
type AddFunction = (a: number, b: number) => number;

let abcd: AddFunction = (x, y) => x + y;
let sum = abcd(5, 3);
console.log(sum); 


 //class types
class Dog {
	breed: string;
 
	constructor(breed: string) {
    	this.breed = breed;
	}
}
 
let myDog: Dog = new Dog("Golden Retriever");
console.log(myDog.breed)