/* Begginner exercise - 02
  ------------------------
*/

/* write a javascript program to create a new string from
a given string taking the first 3 characters and the last 
3 characters of a string and adding them together. The string
length must be 3 or more, if not, the original string is returned.
*/

const makeNewString = (str) =>
str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('Hello world'));
console.log(makeNewString("ab"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Exercise-02
----------------
Write a javascript program to extract the first half of a string of even length.
*/

// get the length of the string
// devide by 2
// slice from 0 to half of the length

const string = (str) => {
    let half = str.length / 2;
    return str.slice(0, half)
}

// or 
const firstHalf = (str) => str.slice(0, str.length/2);

console.log(firstHalf("hello"));
console.log(firstHalf("hell"));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* Exercise - 03
   --------------
   Write a javascript program to concatenate two strings excepts their first character.
*/

const concatenate = (str1, str2) => str1.slice(1).concat(str2.slice(1)); //str1.slice(1) + str2.slice(2);

console.log(concatenate("hiii", "hello"));
console.log(concatenate("hello", "developers"));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Exercise - 04
--------------
Given two values, write a javascript program to find out which one is nearest to 100
*/
//two number will pass these two number must be less then 100

const closedTo100 = (a, b) => (100 - a) < (100 -b)? a : b;

console.log(closedTo100(10, 89));
console.log(closedTo100(90, 89));
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
Exercise - 05
-------------
Write a javascript program to check a given string contains 2 to 4 occurrences of
a specified character.
*/
