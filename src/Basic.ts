function mull(a:number,b:number){
    return a*b;
}
console.log(mul(2,3));

//hello world
let message:string="HELLO WORLD"
console.log(message);

let chat: string = 'Hello, World!';

let heading = document.createElement('h1');
heading.textContent = chat;

document.body.appendChild(heading);


let messages: string = 'Hello, TypeScript!';

let headings = document.createElement('h1');
heading.textContent = messages;

document.body.appendChild(headings);

let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number


interface Movie {
    title: string;
    director: string;
    year: number;
    rating: number;
  }
  
  function getMovie(title: string): Movie {
    return {
      title: title,
      director: `RajaMouli`,
      year: 2023,
      rating: 5.0
    };
  }
  
  const movie = getMovie('RRR');
  console.log(`The movie "${movie.title}" directed by ${movie.director} was released in ${movie.year} and has a rating of ${movie.rating}.`);
  