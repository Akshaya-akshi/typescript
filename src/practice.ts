let arr:[string,boolean]=["Hello",true]
console.log(arr)

//generics
function abcde<A>(arg:A):A{
    return arg
}
let strr:string=abcde("Akshaya")
let numm:number=abcde(2001)
console.log(strr,numm,"Generics")

//Another method in generics
function domesticAnimal<T,E>(A1:T,B1:E):[T,E]{
    return [A1,B1];
}
console.log("domesticAnimals",domesticAnimal<string,string>("Dog","Cat"))
let Danimals=domesticAnimal<string,string>("Dog","Cat")
let Wanimals=domesticAnimal<string,string>("Lion","Cow")
let Danimalsonly:string[]=[]
let Wanimalsonly:string[]=[]
function checkAnimal(x:string,y:string){
    if (x === "Dog" || x === "Cat" || x === "Cow") {
        Danimalsonly.push(x);
    } else if (x === "Lion") {
        Wanimalsonly.push(x);
    }

    if (y === "Dog" || y === "Cat" || y === "Cow") {
        Danimalsonly.push(y);
    } else if (y === "Lion") {
        Wanimalsonly.push(y);
    }
}

checkAnimal(Danimals[0], Danimals[1]);
checkAnimal(Wanimals[0], Wanimals[1]);

console.log("Domestic Animals Only:", Danimalsonly);
console.log("Wild Animals Only:", Wanimalsonly); 

class PairManager<T, E> {
    private pairs: [T, E][] = [];
    private evenItems: E[] = [];
    private oddItems: E[] = [];

    addPair(item1: T, item2: E): void {
        this.pairs.push([item1, item2]);
        this.categorizeItem(item1, item2);
    }

    private categorizeItem(num: T, str: E): void {
        if (typeof num === 'number' && num % 2 === 0) {
            this.evenItems.push(str);
        } else if (typeof num === 'number') {
            this.oddItems.push(str);
        }
    }

    getEvenItems(): E[] {
        return this.evenItems;
    }

    getOddItems(): E[] {
        return this.oddItems;
    }
}
const manager = new PairManager<number, string>();

manager.addPair(1, "One");
manager.addPair(2, "Two");
manager.addPair(3, "Three");
manager.addPair(4, "Four");

console.log("Even Items:", manager.getEvenItems());
console.log("Odd Items:", manager.getOddItems());


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

function move(direction: Direction): void {
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