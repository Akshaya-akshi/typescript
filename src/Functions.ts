type Personn = { name: string; age: number };

function createPerson(name: string, age: number): Personn {
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
function greets(name: string, greeting?: string): string {
    if (typeof greeting !== 'undefined') {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

console.log(greets("Akshaya"));

function calculateArea(length: number, width: number, height?: number): number | string {
    if (typeof height !== 'undefined') {
        return `${length * width * height}`;
    }
    return length * width;
}

console.log(calculateArea(5, 10));        
console.log(calculateArea(5, 10, 2)); 

//default parameters
interface Config {
    host: string;
    port?: number;
  }
  
  function connect(config: Config = { host: "localhost", port: 8080 }): string {
    return `Connecting to ${config.host} on port ${config.port}`;
  }
  
  console.log(connect());
  console.log(connect({ host: "example.com", port: 3000 }));

  //rest parameters
  function analyze(...args: (number | string)[]): [number, number] {
    let total = 0;
    let charCount = 0;
  
    args.forEach((arg) => {
      if (typeof arg === 'number') {
        total += arg;
      } else if (typeof arg === 'string') {
        charCount += arg.length;
      }
    });
  
    return [total, charCount];
  }
  
  const [summ, characterCount] = analyze(10, 'Hello', 20, 'World', 5, 'TypeScript');
  
  console.log({ summ }); 
  console.log({ characterCount });


  function summarize(...args: (number | string | boolean)[]): [number, string, number] {
    let total = 0;
    let combinedString = '';
    let trueCount = 0;
  
    args.forEach((arg) => {
      if (typeof arg === 'number') {
        total += arg;
      } else if (typeof arg === 'string') {
        combinedString += arg;
      } else if (typeof arg === 'boolean' && arg === true) {
        trueCount += 1;
      }
    });
  
    return [total, combinedString, trueCount];
  }
  
  const [adds, concatenatedString, trueBooleans] = summarize(5, 'Hello', true, 10, false, 'World', true, 15);
  
  console.log({ adds });
  console.log({ concatenatedString });
  console.log({ trueBooleans }); 
  
  //function overloading
function getValue(value: string): string;
function getValue(value: number): number;

function getValue(value: any): any {
    if (typeof value === "string") {
        return `${value}`;
    } else if (typeof value === "number") {
        return `${value}`;
    }
}

const stringValue = getValue("Hiiii"); 
const numberValue = getValue(1234523);     
console.log(stringValue);
console.log(numberValue);

function mul(numbers: number[]): number;
function mul(a: number, b: number): number;

function mul(arg1: any, arg2?: any): number {
    if (Array.isArray(arg1)) {
        return arg1.reduce((acc, curr) => acc * curr, 1);
    } else if (typeof arg1 === "number" && typeof arg2 === "number") {
        return arg1 * arg2;
    } else {
        throw new Error("Invalid arguments");
    }
}

const arrayProduct = mul([1, 2, 3, 4, 5]); 
const valueProduct = mul(10, 20);         

console.log(arrayProduct);
console.log(valueProduct);
