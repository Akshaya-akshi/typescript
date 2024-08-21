//DataTypes
let a:number=10;
let b:number=20;
function add(a:number,b:number):number{
    return a+b
}
console.log(add(a,b),"add")


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
	age: 21,
};
console.log(person)


//Type Alias
let x:number = 8
console.log(a);
 

type Point = {
	x: number;
	y: number;
};
 
let coordinates: Point = {
	x: 20,
	y: 20
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


enum Color {
	Red,
	Green,
	Blue
}
 
let favoriteColor: Color = Color.Blue;
console.log(Color)
