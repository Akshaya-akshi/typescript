"use strict";
function mull(a, b) {
    return a * b;
}
console.log(mul(2, 3));
//hello world
let message = "HELLO WORLD";
console.log(message);
let chat = 'Hello, World!';
let heading = document.createElement('h1');
heading.textContent = chat;
document.body.appendChild(heading);
let messages = 'Hello, TypeScript!';
let headings = document.createElement('h1');
heading.textContent = messages;
document.body.appendChild(headings);
let box;
console.log(typeof (box)); // undefined
box = "Hello";
console.log(typeof (box)); // string
box = 100;
console.log(typeof (box)); // number
function getMovie(title) {
    return {
        title: title,
        director: `RajaMouli`,
        year: 2023,
        rating: 5.0
    };
}
const movie = getMovie('RRR');
console.log(`The movie "${movie.title}" directed by ${movie.director} was released in ${movie.year} and has a rating of ${movie.rating}.`);
