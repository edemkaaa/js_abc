"use strict";

// 1
 let test1 = '3';
 let test2 = '3';

 if (test1 == test2) {
    console.log('+++'); // выведет эту строку
 } else {
    console.log('---');
 }

// 2
 let test3 = '3';
 let test4 = '3';

 if (test3 === test4) {
    console.log('+++'); // выведет эту строку
 } else {
    console.log('---');
 }

// 3
 let test5 = 3;
 let test6 = '3';

 if (test5 == test6) {
    console.log('+++'); // выведет эту строку
 } else {
    console.log('---');
 }

// 4
 let test7 = 3;
 let test8 = '3';

 if (test7 === test8) {
    console.log('+++');
 } else {
    console.log('---'); // выведет эту строку
 }

// 5
 let test9 = 3;
 let test10 = 3;

 if (test9 === test10) {
    console.log('+++'); // выведет эту строку
 } else {
    console.log('---');
 }
