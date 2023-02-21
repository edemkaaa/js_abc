"use strict";
// 1
let test = {x: 1, y: 2, z: 3};
console.log(test); // объект
// 2
let test = {x: 1, y: 2, z: 3};
console.log(test.x); // примитив
// 3
let test = [1, 2, 3];
console.log(test); // объект
// 4
let test = [1, 2, 3];
console.log(test[1]); // примитив
// 5
let test1 = [1, 2, 3];
let test2 = 1;

console.log(test1); // объект
// 6 
let test1 = [1, 2, 3];
let test2 = 1;

console.log(test1[test2]); // примитив

// string boolean number null