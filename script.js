"use strict";


// 1
let num1 = -10;
let num2 = -10;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++');
} else {
	console.log('---'); // это
}

// 2
let num1 = 0;
let num2 = 0;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++'); // теперь это
} else {
	console.log('---');
}

// 3
let num1 = 0;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++'); // опять это
} else {
	console.log('---');
}

// 4
let num1 = 5;
let num2 = 5;

if (num1 >= 0 || num2 >= 0) {
	console.log('+++'); // и снова это
} else {
	console.log('---');
}

// 5
let num1 = -5;
let num2 = 15;

if (num1 >= 0 || num2 >= 0) { 
	console.log('+++'); // правда
} else {
	console.log('---');
}

// 6 
let num = 1;

if (num == 0 || num == 1) {
	console.log('+++'); // это
} else {
	console.log('---');
}

// 7 
let num = 2;

if (num == 0 || num == 1) {
	console.log('+++');
} else {
	console.log('---'); // ура это
}

// 8
let num = 2;

if (num == 0 || num == 1 || num == 2) {
	console.log('+++'); // правда
} else {
	console.log('---');
} 