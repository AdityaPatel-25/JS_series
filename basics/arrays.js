const newArr = [1, 2, 3, 4, 5];
// console.log(newArr);
// console.log(typeof newArr);

const fruits = ["Apple", "Banana", "Mango", "Orange"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

//Slice ,splice
// console.log("A ",newArr);
// const slicedArr = newArr.slice(1, 4);

// console.log("Sliced Array ", slicedArr);
// console.log("B ",newArr);

// const splicedArr = newArr.splice(1, 4);
// console.log("C ",newArr);
// console.log("Spliced Array ", splicedArr);

//part 2

const marvelHeroes = ["Ironman", "Spiderman", "Hulk", "Thor"];
const dcHeroes = ["Superman", "Batman", "Flash", "Aquaman"];

marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);

const arr1 = [1,2,3,[4,5,6],7,8,[6,4,5]];
const realArr1 = arr1.flat(Infinity);
console.log(realArr1); // [1,2,3,4,5,6,7,8,6,4,5]

let score1 = 10;
let score2 = 20;
let score3 = 30;    

console.log(Array.of(score1, score2, score3));