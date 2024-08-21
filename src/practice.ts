let arr:[string,boolean]=["Hello",true]
console.log(arr)

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