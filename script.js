"use strict";

// 1
let obj1 = { x: 1, y: 2, z: 3 };
console.log(obj1.x);

// 2
let obj2 = { x: 1, y: 2, z: 3 };
let key2 = 'x';

console.log(obj2[key2]);

// 3
let obj3 = { x: 1, y: 2, z: 3 };
let sum = obj3['x'] + obj3['y'] + obj3['x'];

console.log(obj3);
console.log(sum);

// 4
let obj4 = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj4).length);