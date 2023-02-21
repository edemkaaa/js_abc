"use strict";
// 1
const arr = ['a', 'b', 'c'];
arr[1] = '!';
console.log(arr); // a,!,c

// 2
const arr = ['a', 'b', 'c'];
arr = [1, 2, 3];
console.log(arr); // ниче

// 3
const arr = ['a', 'b', 'c'];
arr = ['a', 'b', 'c'];
console.log(arr); // капче