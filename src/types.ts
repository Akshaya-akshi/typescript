//Basic Types
//Type Annotation
let A1:string="Akshaya";
let A2:number=2001;
let A3:boolean=true;
let lists: (string | number | boolean)[] = [A1, A2, A3];
console.log(lists);

let Rollnumbers:number[]=[20,30,50,60]
console.log(Rollnumbers);

let persons: {
    name: string;
    phno: number;
  };
  
  persons= {
    name: 'Akshi',
    phno:123456789,
  }; 
  console.log(persons)

  let greeting: (name: string) => string;

  greeting = function(name: string) {
    return `Hi ${name}`;
  };
  
  console.log(greeting('Akshaya'));

  //Type Inference
  let msg = "Hello, TypeScript!";
  console.log(typeof(msg)); 
  
  let counts = 10;
  console.log(counts); 
  
  let isActive = true;
  console.log(isActive);
  
 function increment(counter: number) : number {
    return ++counter;
}
let count = 5;
console.log(increment(count))


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

let B1: number = 42.56;
let B2: number = 1234;

let Abcd: number = B1+ B2;
let product: number = B1* 2;

console.log(`Decimal Number: ${B1}`); 
console.log(`Sum: ${Abcd}`);
console.log(`Product: ${product}`);

let C1: number = 0o52; 
let C2: number = 0o123; 

let sumOctal: number = C1 + C2;
let productOctal: number = C1 * 2;

console.log(`Octal Number: ${C1}`); 
console.log(`Sum of Octal Numbers: ${sumOctal}`); 
console.log(`Product of Octal Number: ${productOctal}`); 


let bigIntNumber: bigint = 9007199254740991n;
let anotherBigInt: bigint = 123456789012345678901234567890n;

let sumBigInt: bigint = bigIntNumber + anotherBigInt;
let productBigInt: bigint = bigIntNumber * 10n;

console.log(`Big Integer: ${bigIntNumber}`);
console.log(`Sum of Big Integers: ${sumBigInt}`); 

//Type String
const A4:string="TypeScript"
console.log(A4);

let firstName: string = "Akshaya";
let lastName: string = "Puduru";
let fullName: string = `${firstName} ${lastName}`;
console.log(fullName)

let Sentence: string = "TypeScript is awesome!";
console.log(Sentence.toUpperCase());   
console.log(Sentence.toLowerCase());  
console.log(Sentence.includes("awesome"));  
console.log(Sentence.replace("awesome", "great"));

let part1: string = "Hello";
let part2: string = "World";
let combined: string = part1 + ", " + part2 + "!";
console.log(combined);

let text: string = "TypeScript";
console.log(`${text.length}`);


let sentence: string = "TypeScript is a superset of JavaScript.";
let substring: string = sentence.substring(0, 10);
console.log(substring);

let data: string = "apple,banana,orange";
let fruit: string[] = data.split(",");
console.log(fruits);  

//Type Object
let employee: object;

employee = {
    firstName: 'Akshaya',
    lastName: 'Puduru',
    jobTitle: 'Full Stack Developer'
};

console.log(employee);

//type any
function fetchData(): any {
  return ["apple", "banana", "orange"];
}

{
  let data: string = "apple,banana,orange"; 
  console.log("String data:", data);
}

{
  let data: any = fetchData()
  console.log("Fetched data:", data);
}

let value: any;

value = 42;           
value = "Hello";     
value = { key: "value" }; 
value = [1, 2, 3];
console.log(value)

let data1: any = fetchData(); 

if (typeof data1 === "string") {
  console.log("Data is a string:", data1);
} else if (typeof data1 === "number") {
  console.log("Data is a number:", data1);
} else {
  console.log("Data is of another type:", data1);
}

//void
const logSomething = (): void => {
  console.log("Doing something...");
};
logSomething();

//never
type Role = 'admin' | 'user' | 'guest';

const unknownRole = (role: never): never => {
  throw new Error(`Invalid role: ${role}`);
};

const authorize = (role: Role): string => {
  switch (role) {
    case 'admin':
      return 'You can do anything';
    case 'user':
      return 'You can do something';
    case 'guest':
      return 'You can do nothing';
    default:
      return unknownRole(role);
  }
};

console.log(authorize('admin'));


