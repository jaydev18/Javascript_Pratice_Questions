/*
Exercise - 1
------------
Given a year, report if it is a leap year.
*/
// const checkLeepYear = (year) => year % 4 === 0;
// console.log(checkLeepYear(2000));
// console.log(checkLeepYear(2015));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Exercise - 2
------------
Write a javascript program to compare two object to determine if the
first one contains the same properties as the second one (which may also have
additional properties).
*/

// const objeA = {a: 1, b: 2, c: 1};
// const objeB = {a: 1, b: 1, c: 1};
// const objeC = {a: 1, b: 1, d: 1};

// // const objectsEqual = (a, b) => 
// //     Object.keys(a).every(key => b[key])
// // const objectsEqual = (a, b) =>
// //   Object.entries(a).toString() === Object.entries(b).toString();
// console.log(objectsEqual(objeA, objeB))
// console.log(objectsEqual(objeA, objeC));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Exercise - 3
------------
Write a Javascript program to convert a comma-separated values (CSV)
string to a 2d array. A new line indicates a new row in the array.

examples:-
----------
abc, def, ghi
jkl, mno, pqr
stu, vwx, yza
*/

// const parseCSV = (csvString) => 
//     csvString.split('\n').map(row => row.split(','))

// const str = 
// `abc,def,ghi,
// jkl,mno,pqr,
// stu,vwx,yza`
// console.log(parseCSV(str));
// ++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
 Excercise - 04
---------------
Write a javascript program to generate a random hexadecimal color
code.
*/

const getRandomHexNumber = () =>
   Math.floor( Math.random() * 16).toString(16);

   const getRandomHexColor = () => '#' + Array.from(
    {length: 6}).map(getRandomHexNumber).join('');

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());