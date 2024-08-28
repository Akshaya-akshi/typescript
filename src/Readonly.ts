//using interface
interface User {
    readonly id: number;
    readonly username: string;
  }
  
  const user: User = {
    id: 1,
    username: "Akshaya"
  };
  
  console.log(user.id);
  console.log(user.username);

  //using array
const integers: readonly number[] = [1, 2, 3, 4, 5];

console.log(integers[1]);
  

const tuple: readonly [number, string] = [1, "Hello"];

console.log(tuple[0]);
console.log(tuple[1]); 
  
//using function
function printPerson(member: { readonly name: string; readonly age: number }) {
    console.log(`Name: ${member.name}, Age: ${member.age}`);
  }
  
  const member = { name: "Akshaya", age: 22 };
  printPerson(member); 