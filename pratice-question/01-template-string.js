// 1. Template Strings:

// Template literals are string literals allowing embedded expressions.

// Benefits:

// String interpolation
// Embedded expressions
// Multiline strings without hacks
// String formatting
// String tagging for safe HTML escaping, localization and more
// String Substitution
let name = `jaydev sahoo`;
// console.log(`Hi, ${name}!`); // Output: 'Hi, jaydev sahoo !'

// Multiline String, If I don't give \ then it'll show in two line 
let msg = `Hello \
World`;
// console.log(`${msg}`); // Output: "Hello World"

// 2.1 copy an array

// let a = [10, 20, 39];

// let b = a;
// b[0] = 80
// console.log(a)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//2.2 concatinate the array without using any method

// let arr = ['x', 'y', 'z'];

// let arr1 = ['j', 'k', 'l']

// // how could you concatinate both of these array
// let arr2 = [...arr, ...arr1]
// console.log(arr2) // output will [ 'x', 'y', 'z', 'j', 'k', 'l' ]

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//2.3 Spreading elements together with an individual element:

// let indian_greeting = ['Namaste', 'pranam', 'adam'];

// console.log(['hello', ...indian_greeting]) // output : [ 'hello', 'Namaste', 'pranam', 'adam' ]
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.4. Spreading elements on function calls:

let fruits = ['apple', 'orange', 'banana']

// function getFruits(f1, f2, f3){
//     console.log(`f1: ${f1} f2: ${f2} f3: ${f3}`);
// }
// getFruits(...fruits)

fruits.forEach((fruit, fruit2, fruit3)=>{
    console.log(`f1: ${fruit} f2: ${fruit2} f3: ${fruit3}`);
});