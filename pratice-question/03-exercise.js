/*
Javascript Pratice Exercises (part-3)
=====================================
*/

/* Write a javascript program to find the number of even
digits in a an array of integers.
*/
let count = 0
let arr = (num) => {
   num.forEach(element => {
    if(element % 2 == 0)
    count = count + 1
});
console.log(count);
} 
arr([1, 2, 3, 4, 6, 8]);
// -----------------------------------
const countEvenNumber = (arr) => 
    arr.filter(num => num % 2 === 0).length;
console.log(countEvenNumber([1, 2, 3, 4, 6, 8, 10]))
console.log(countEvenNumber([2, 2, 3, 4, 9, 25, 10]))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
Exercise-2
===========
Write a javascript program to find the number of even values up to a given numbers
*/
const countEventNumber = (arr) => 
    arr.filter(num => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for(let i = 0; i <= num; i++){
        returnArray.push(i)
    }
    return returnArray;
}
console.log(countEventNumber(createArrayOfNumbers(6)));
console.log(countEventNumber(createArrayOfNumbers(20)));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Exercise-03
===========
Write  a javascript program to check whether a given array of integers
is sorted in ascending order

*/
const isAscending = (arr) => {
    for(let i = 0; i < arr.length; i+=1){
        if(arr[i +1] < arr[i]) return false;
    }
    return true;
}
console.log(isAscending([1, 2, 3, 4, 5, 6]));
console.log(isAscending([9, 3, 2, 10, 7]));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Write a javascript program to get the largest even number from an array of
integers
*/

const isEven = function findEven(arr){
    let evenArray = []
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] % 2 == 0) 
        evenArray.push(arr[i])
    }
    return Math.max(...evenArray)
}
console.log(isEven([2, 3, 4, 5, 9]));
console.log(isEven([8, 9, 45, 23, 90]));
console.log(isEven([2, 43, 233, 242]));

// Another way

const largestEvent = (arr) => 
    Math.max(...arr.filter(num => num % 2 === 0));

console.log(largestEvent([2, 3, 4, 5, 9]));
console.log(largestEvent([8, 9, 45, 23, 90]));
console.log(largestEvent([2, 43, 233, 242]));

/*
Exercise - 05
=============
Write a javascript program to replace the first digit in a 
string (should contains at least digit) with $ character.
*/

const replaceFirstDigit = (str) => 
    str.replace(/[0-9]/, '$');
    // str.replace(/[0-9]/g, '$'); //it'll replace all the digit in global.
    // str.replace(/\d/g, '$'); // \d is defined all the digit from 0 to 9;

console.log(replaceFirstDigit('Abcd1Abcde'));
console.log(replaceFirstDigit('A122Abcde'))