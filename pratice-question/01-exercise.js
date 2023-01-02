/*Exercise-1
-------------
Write a javascript program to check two numbers and returns true if one of the 
number is 100 or if the sum of the two number is 100
*/

function CheckNumber(a, b){
    return (a === 100 || b === 100 || (a+b) === 100) ? true : false
}
console.log(CheckNumber(30, 70))
// 0R
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTo100(50, 50));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Exercise-02
// -------------
// write a javascript program to get the extension of a filename

// indexedDB.hml indexedDB.js.html

const getExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(getExtension('index.html'))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Exercise-03
/*write a javascript program to replace every character in a given string with the
character following it in the alaphabet*/

const moveCharasForword = (str) =>
str
.split('')
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
.join('');

console.log(moveCharasForword('abcd')) //bcde

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Exercise-04

// Write a javascript program to get the current date.
//Expected output : mm-dd-yyy, mm/dd/year or dd-mm-yyyy, dd/mm/yyyy

let currentDate = new Date();
console.log(
  `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*Exercise - 05
  -------------
  Write a javascript program to create a new string add "New!"
  in front of a given string. if the given string begins with "New!"
  already then return the original string.
*/

const addNew = (str) => 
str.indexOf('New!') === 0 ? str : `New ! ${str}`

console.log(addNew('New! offers'));