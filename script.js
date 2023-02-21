"use strict";

console.log( typeof {x: 1, y: 2, z: 3} ); // выведет object

console.log( typeof {} ); // выведет object

let obj = {x: 1, y: 2, z: 3};
console.log( typeof obj ); // выведет object

let obj1 = {x: 1, y: 2, z: 3};
console.log( typeof obj1['x'] ); // выведет number